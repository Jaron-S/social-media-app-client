const posts = [
    {
      _id: '63cae259ccea636a4d97d0bc',
      userId: '63cae259ccea636a4d97d0b5',
      firstName: 'Steve',
      lastName: 'Ralph',
      location: 'New York, CA',
      description: 'Some random description',
      picturePath: 'post1.jpeg',
      userPicturePath: 'p3.jpeg',
      likes: {
        '63cae259ccea636a4d97d0b4': true,
        '63cae259ccea636a4d97d0b6': true,
        '63cae259ccea636a4d97d0b7': true,
        '63cae259ccea636a4d97d0b8': true
      },
      comments: [
        'random comment',
        'another random comment',
        'yet another random comment'
      ],
      __v: 0,
      createdAt: '2023-01-20T18:50:04.394Z',
      updatedAt: '2023-01-30T22:23:15.739Z'
    },
    {
      _id: '63cae259ccea636a4d97d0bf',
      userId: '63cae259ccea636a4d97d0b9',
      firstName: 'Harvey',
      lastName: 'Dunn',
      location: 'Los Angeles, CA',
      description: 'This is the last really long random description. This one is longer than the previous one. I\'m going to keep typing until I run out of things to say.',
      picturePath: 'post8.jpeg',
      userPicturePath: 'p7.jpeg',
      likes: {
        '63cae259ccea636a4d97d0b5': true,
        '63cae259ccea636a4d97d0ba': true,
        '63cae259ccea636a4d97d0b7': true
      },
      comments: [
        'I lied again, one more random comment',
        'Why am I doing this?',
        'I\'m bored',
        'I\'m still bored',
        'All I want to do is play video games',
        'I\'m going to play video games'
      ],
      __v: 0,
      createdAt: '2023-01-20T18:50:04.395Z',
      updatedAt: '2023-01-30T21:54:04.254Z'
    },
    {
      _id: '63cae259ccea636a4d97d0c0',
      userId: '63cae259ccea636a4d97d0ba',
      firstName: 'Carly',
      lastName: 'Vowel',
      location: 'Chicago, IL',
      description: 'Just a short description. I\'m tired of typing. I\'m going to play video games now.',
      picturePath: 'post5.jpeg',
      userPicturePath: 'p8.jpeg',
      likes: {
        '63cae259ccea636a4d97d0b5': true,
        '63cae259ccea636a4d97d0b7': true,
        '63cae259ccea636a4d97d0b9': true,
        '63cae259ccea636a4d97d0bb': true
      },
      comments: [
        'I lied again, one more random comment',
        'Why am I doing this?',
        'Man I\'m bored',
        'What should I do?',
        'I\'m going to play video games'
      ],
      __v: 0,
      createdAt: '2023-01-20T18:50:04.395Z',
      updatedAt: '2023-01-30T21:54:06.016Z'
    },
    {
      _id: '63cae259ccea636a4d97d0bd',
      userId: '63cae259ccea636a4d97d0b7',
      firstName: 'Whatcha',
      lastName: 'Doing',
      location: 'Korea, CA',
      description: 'Another really long random description. This one is longer than the previous one.',
      picturePath: 'post2.jpeg',
      userPicturePath: 'p6.jpeg',
      likes: {
        '63cae259ccea636a4d97d0bb': true,
        '63cae259ccea636a4d97d0b8': true,
        '63cae259ccea636a4d97d0b5': true,
        '63cae259ccea636a4d97d0b6': true
      },
      comments: [
        'one more random comment',
        'and another random comment',
        'no more random comments',
        'I lied, one more random comment'
      ],
      __v: 0,
      createdAt: '2023-01-20T18:50:04.394Z',
      updatedAt: '2023-01-30T21:54:09.596Z'
    },
    {
      _id: '63cae259ccea636a4d97d0be',
      userId: '63cae259ccea636a4d97d0b8',
      firstName: 'Jane',
      lastName: 'Doe',
      location: 'Utah, CA',
      description: 'This is the last really long random description. This one is the longest one but only by a small margin.',
      picturePath: 'post3.jpeg',
      userPicturePath: 'p5.jpeg',
      likes: {
        '63cae259ccea636a4d97d0b5': true,
        '63cae259ccea636a4d97d0ba': true,
        '63cae259ccea636a4d97d0b7': true,
        '63cae259ccea636a4d97d0b9': true
      },
      comments: [
        'one more random comment',
        'I lied, one more random comment',
        'I lied again, one more random comment',
        'Why am I doing this?',
        'I\'m bored'
      ],
      __v: 0,
      createdAt: '2023-01-20T18:50:04.395Z',
      updatedAt: '2023-01-30T21:54:08.809Z'
    },
    {
      _id: '63cae259ccea636a4d97d0c1',
      userId: '63cae259ccea636a4d97d0bb',
      firstName: 'Jessica',
      lastName: 'Dunn',
      location: 'Washington, DC',
      description: 'I\'m starting to run out of things to say.',
      picturePath: 'post6.jpeg',
      userPicturePath: 'p9.jpeg',
      likes: {
        '63cae259ccea636a4d97d0b5': true,
        '63cae259ccea636a4d97d0b6': true
      },
      comments: [
        'Can I play video games now?',
        'No let\'s actually study',
        'Never mind, I\'m going to play video games',
        'Stop it.',
        'Michael, stop it.'
      ],
      __v: 0,
      createdAt: '2023-01-20T18:50:04.395Z',
      updatedAt: '2023-01-30T21:54:10.536Z'
    },
    {
      _id: '63dbeaf6af00a49d7f574348',
      userId: '63d3245310249c43ca38804a',
      firstName: 'John',
      lastName: 'Smith',
      location: 'fakelocation',
      description: 'this is a test',
      userPicturePath: 'p4.jpeg',
      likes: {},
      comments: [],
      createdAt: '2023-02-02T16:55:18.887Z',
      updatedAt: '2023-02-02T16:55:18.887Z',
      __v: 0
    },
    {
      _id: '63eaf799db89d2a2694b9052',
      userId: '63d3245310249c43ca38804a',
      firstName: 'John',
      lastName: 'Smith',
      location: 'fakelocation',
      description: 'dgds',
      userPicturePath: 'p4.jpeg',
      likes: {},
      comments: [],
      createdAt: '2023-02-14T02:53:13.139Z',
      updatedAt: '2023-02-14T02:53:13.139Z',
      __v: 0
    }
  ];

export default posts;