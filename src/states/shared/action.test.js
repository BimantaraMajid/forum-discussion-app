import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveTagsActionCreator } from '../isFilterTag/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { asyncPopulateUsersAndThreads } from './action';

const fakeThreadsResponse = [
  {
    id: 'thread-nbpD-tYkJdk7YzEl',
    title: 'Coba lagi',
    body: 'tes',
    category: 'hobby',
    createdAt: '2023-01-03T13:08:17.116Z',
    ownerId: 'user-c40p4vGIXVwCXwyM',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
  {
    id: 'thread-M_b5uGvk9Au0LoYI',
    title: 'Tess',
    body: 'Etetete',
    category: 'coding',
    createdAt: '2023-01-03T13:07:40.956Z',
    ownerId: 'user-c40p4vGIXVwCXwyM',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
  {
    id: 'thread-VBbfktGloePlMi5i',
    title: 'Tess',
    body: 'Etetete',
    category: 'coding',
    createdAt: '2023-01-03T13:07:21.006Z',
    ownerId: 'user-c40p4vGIXVwCXwyM',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
  {
    id: 'thread-2AEy8ZfMms9yxsGv',
    title: 'tes',
    body: 'tes',
    category: 'general',
    createdAt: '2023-01-03T13:00:34.237Z',
    ownerId: 'user-c40p4vGIXVwCXwyM',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
  {
    id: 'thread-08_nUU2fhu1P5nre',
    title: 'Pengalaman Belajar React di Dicoding',
    body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
    category: 'react',
    createdAt: '2022-11-13T09:59:31.019Z',
    ownerId: 'user-5PqX6Ldhnk_ifroq',
    totalComments: 1,
    upVotesBy: [
      'user-6oWew2w2Wx5xLUTU',
      'user-5PqX6Ldhnk_ifroq',
    ],
    downVotesBy: [],
  },
  {
    id: 'thread-B3N9KGa87vfMHyBQ',
    title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
    body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
    category: 'introduction',
    createdAt: '2022-11-13T09:55:55.353Z',
    ownerId: 'user-6oWew2w2Wx5xLUTU',
    totalComments: 1,
    upVotesBy: [
      'user-5PqX6Ldhnk_ifroq',
      'user-6oWew2w2Wx5xLUTU',
    ],
    downVotesBy: [],
  },
];

let fakeTags = fakeThreadsResponse.map((val) => val.category);
fakeTags = [...new Set(fakeTags)];
fakeTags = fakeTags.map((tag) => ({ name: tag, isActive: false }));

const fakeUsersResponse = [
  {
    id: 'user-6oWew2w2Wx5xLUTU',
    name: 'Dicoding',
    email: 'admin@dicoding.com',
    avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
  },
  {
    id: 'user-5PqX6Ldhnk_ifroq',
    name: 'Dimas Saputra',
    email: 'dimas@dicoding.com',
    avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
  },
  {
    id: 'user-I-JzqXQ4e3Lrcjb8',
    name: 'Wilan',
    email: 'wilan@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=Wilan&background=random',
  },
  {
    id: 'user-8fJH4RYAiE_u5sjl',
    name: 'Eko',
    email: 'ekosusilo140604@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=Eko&background=random',
  },
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    // backup original implementation
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    // restore original implementation
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;

    // delete backup
    delete api._getAllUsers;
    delete api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // mock dispatch
    const dispatch = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveTagsActionCreator(fakeTags));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = jest.fn();
    // mock alert
    window.alert = jest.fn();

    // action
    await asyncPopulateUsersAndThreads()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
