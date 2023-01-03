import {
  addThreadActionCreator, downVoteThreadActionCreator,
  receiveThreadsActionCreator, upVoteThreadActionCreator,
} from './action';
import threadsReducer from './reducer';

describe('threadReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should return threads when given by RECEIVE_THREADS action', () => {
    const initialState = [];
    const threads = [
      {
        id: 'thread-08_nUU2fhu1P5nre',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 4,
        upVotesBy: [
          'user-6oWew2w2Wx5xLUTU',
          'user-5PqX6Ldhnk_ifroq',
          'user-w-AxkhbfAtSKN40a',
        ],
        downVotesBy: [
          'user-Ox2GuWGQ5lKwUxpN',
        ],
      },
      {
        id: 'thread-B3N9KGa87vfMHyBQ',
        title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
        body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
        category: 'introduction',
        createdAt: '2022-11-13T09:55:55.353Z',
        ownerId: 'user-6oWew2w2Wx5xLUTU',
        totalComments: 3,
        upVotesBy: [
          'user-5PqX6Ldhnk_ifroq',
          'user-6oWew2w2Wx5xLUTU',
        ],
        downVotesBy: [
          'user-w-AxkhbfAtSKN40a',
        ],
      },
    ];
    const action = receiveThreadsActionCreator(threads);

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-08_nUU2fhu1P5nre',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 4,
        upVotesBy: [
          'user-6oWew2w2Wx5xLUTU',
          'user-5PqX6Ldhnk_ifroq',
          'user-w-AxkhbfAtSKN40a',
        ],
        downVotesBy: [
          'user-Ox2GuWGQ5lKwUxpN',
        ],
      },
    ];
    const action = addThreadActionCreator(
      {
        id: 'thread-B3N9KGa87vfMHyBQ',
        title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu!',
        body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>1. Siapa kamu dan dari mana kamu berasal?</div><div>2. Apa pekerjaan atau pendidikan kamu saat ini?</div><div>3. Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
        category: 'introduction',
        createdAt: '2022-11-13T09:55:55.353Z',
        ownerId: 'user-6oWew2w2Wx5xLUTU',
        totalComments: 3,
        upVotesBy: [
          'user-5PqX6Ldhnk_ifroq',
          'user-6oWew2w2Wx5xLUTU',
        ],
        downVotesBy: [
          'user-w-AxkhbfAtSKN40a',
        ],
      },
    );

    const nextState = threadsReducer(initialState, action);

    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the thread with toggle up vote when given by TOGGLE_UP_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-08_nUU2fhu1P5nre',
        title: 'Pengalaman Belajar React di Dicoding',
        body: 'Menurut teman-teman, bagaimana pengalaman belajar kelas React di Dicoding? Apakah mudah ataukah sulit? Yuk, ceritakan di sini.',
        category: 'react',
        createdAt: '2022-11-13T09:59:31.019Z',
        ownerId: 'user-5PqX6Ldhnk_ifroq',
        totalComments: 4,
        upVotesBy: [
          'user-6oWew2w2Wx5xLUTU',
          'user-5PqX6Ldhnk_ifroq',
          'user-w-AxkhbfAtSKN40a',
        ],
        downVotesBy: [
          'user-Ox2GuWGQ5lKwUxpN',
        ],
      },
    ];

    const action = upVoteThreadActionCreator({
      threadId: 'thread-08_nUU2fhu1P5nre',
      userId: 'user-bimantara',
    });

    const nextState = threadsReducer(initialState, action);

    expect(nextState[0].upVotesBy).toEqual([...initialState[0].upVotesBy, action.payload.userId]);

    const action2 = downVoteThreadActionCreator({
      threadId: 'thread-08_nUU2fhu1P5nre',
      userId: 'user-bimantara',
    });

    const nextState2 = threadsReducer(nextState, action2);

    expect(nextState2[0].downVotesBy).toEqual([...nextState[0].downVotesBy, action.payload.userId]);
  });
});
