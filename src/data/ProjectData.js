const ProjectData = [
  {
    id: 1,
    title: 'Trail Blazers',
    tech: 'React',
    img: 'blazers.png',
    lgImg: '',
    secImg: 'blazersFull.png',
    basicTitle: 'Live stats page using NBA API ',
    basicDetails:
      'This project was part of a Portland Trail Blazers redesign through Theorem Inc. I was provided a design document created in sketch to which I faithfully recreated the responsive design with React and Sass for styling.',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails: `This project’s hurdles revolved around the API provided by the NBA. Each component in the page required at least one call to a unique endpoint, some required 4 unique calls. The API returned a JSON with 2 and 3 letter keys which required a good amount of research as to what the values were referring to. Also some of the endpoints returned the older format JSONP which is not supported by the built in JavaScript Fetch command. I overcame these hurdles by spending hours in the API documentation and some solid googling. `,
    techList: [
      'React',
      'JavaScript',
      'RESTful API',
      'Node.js',
      'Sass',
      'Front-End',
    ],
    activeLink: '',
    gitHubLink: '',
  },
  {
    id: 2,
    title: 'victory exchange',
    tech: 'React',
    img: 've.png',
    lgImg: '',
    secImg: 'veFull.png',
    basicTitle: 'Social App For Gardeners',
    basicDetails:
      'This was a capstone project for my React course I took at Epicodus Coding Boot Camp. The iidea for this site was a social network where users who garden can sign up for an account, search for a pod or group to join based on their neighborhood, and then review and post offers of extra produce they would like to trade.',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      'This site was built with React, Redux, React-Router, Redux-firebase and Sass. One of the early hurdles for this site revolved around managing login state provided by Firebase. As the page would flash and behave erratically until a login state was officially returned from Firebase. To combat this I researched the redux-firebase library and discovered a hook that waits to render the page until the login credentials were received.',
    techList: [
      'React',
      'JavaScript',
      'RESTful API',
      'Node.js',
      'Firebase',
      'Full-Stack',
      'Bootstrap',
      'NoSql',
      'Sass',
    ],
    activeLink: 'https://victory-exchange.firebaseapp.com/',
    gitHubLink: 'https://github.com/dustatron/victory-exchange',
  },
  {
    id: 3,
    title: "Portland's Funniest",
    tech: 'Rails',
    img: 'pfv.png',
    lgImg: '',
    secImg: 'pfvFull.png',
    basicTitle: 'Film Submission and Review',
    basicDetails:
      "This site has two functions. The first is to allow a filmmaker to sign up for an account and submit and link to their film. The Second was to allow the hosts of the event to review submissions and approve a film for a specific month. The hosts could also click on a month to see all approved movies and approximate combined run time for that month's movies. ",
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      'This project was the first website I had built for other people with actual users. While there were some minor technical issues the biggest hurdles were making a project that had the finishing touches of a production ready site.  Getting feedback from filmmakers who were confused by the submission process and hosts that wanted different ways to sort submissions was a valuable humbling experience.',
    techList: [
      'Rails',
      'Ruby on Rails',
      'full-stack',
      'Sass',
      'MVC',
      'Bootstrap',
      'Postgres',
    ],
    activeLink: 'http://www.portlandsfunniestvideo.com/',
    gitHubLink: 'https://github.com/dustatron/pdx-comedy-filmfest',
  },

  {
    id: 4,
    title: 'Karaoke Party',
    tech: 'JavaScript',
    img: 'karaoke.png',
    lgImg: '',
    secImg: 'karaokeFull.png',
    basicTitle: 'Realtime playlist collaboration',
    basicDetails:
      'This app allows a group of friends to collaborate in real time on a karaoke playlist using youtube as the source for the karaoke videos. The app also allows the users to open the site up on another device and play the playlist.',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails: `This site was written in Vanilla JavaScript using Node and Webpack. The largest Hurdle was juggling the state of a selected playlist between searching for songs to add to the playlist, playing the playlist movies, and switching between playlists. 
                     The trick we used at the time was passing parameters into the url and forcing a page reload so that the site could grab the parameters on load and change what it showed the user. `,
    techList: ['Bootstrap', 'JavaScript', 'RESTful API', 'Node.js', 'NoSql'],
    activeLink: 'https://karaoke-team.web.app/',
    gitHubLink: 'https://github.com/dustatron/karaoke-team',
  },
  {
    id: 5,
    title: 'Treasure Sweep',
    tech: 'C# ASP.NET',
    img: 'ts.png',
    lgImg: '',
    secImg: 'tsFull.png',
    basicTitle: 'Turn based multiplayer game',
    basicDetails:
      'This was a team project built over the course of three days during my C# ASP.NET Course at Epicodus. We mixed battleship and minesweeper together to create this game.',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      'This project we decided as a team we wanted to deploy via docker on Heroku because of their generous free tier. Our largest hurted turned out to be wiring up a database service as we had started with MySql but Heroku only offered Postgres.',
    techList: [
      'C#',
      'ASP.NET',
      'Identity',
      'Docker',
      'PostgreSQL',
      'MVC',
      'Full-Stack',
      'Postgres',
    ],
    activeLink: 'http://treasuresweepgame.herokuapp.com/',
    gitHubLink: 'http://treasuresweepgame.herokuapp.com/',
  },
  {
    id: 6,
    title: 'Dev Connect',
    tech: 'MERN',
    img: 'dev-connect.png',
    lgImg: '',
    secImg: 'dvFull.png',
    basicTitle: 'Social Network for Developers',
    basicDetails:
      'This was built while following along with a udemy course on building a site with a MERN stack. It uses JWT for user auth, express to build a mongoDB API backend, and deployed to Heroku.',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails: 'As this was based on a course the hurdles were limited',
    techList: [
      'React',
      'Express.js',
      'mongoDB',
      'JWT Auth',
      'Docker',
      'Full-Stack',
      'NoSql',
    ],
    activeLink: '',
    gitHubLink: '',
  },
  {
    id: 7,
    title: 'Video Commenting',
    tech: 'JavaScript',
    img: 'videoCommandSmall.png',
    lgImg: '',
    secImg: 'videoCommandFull.png',
    basicTitle: 'Time based Video Comments',
    basicDetails:
      'This project was inspired by spending a lot of time in video review tools and I wanted to challenge myself to make a similar tool. I used Vanilla JavaScript and google Firebase as the backend.',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      'This was one of my earliest projects in my coding journey. When I started it I wasn’t sure I could even achieve the goal. The hurdles I faced at the time were based around learning how to structure my logic and make CRUD requests and dynamically display the returned data on the page. This project taught me a lot and gave me a lot of confidence in my ability to learn to code. ',
    techList: ['JavaScript', 'Firebase', 'NoSql', 'Web Sockets', 'Node.js'],
    activeLink:
      'https://video-commander.firebaseapp.com/?https://firebasestorage.googleapis.com/v0/b/video-commander.appspot.com/o/Mercurial%20Fast%20Forward_R17_AppleTV_Large.m4v?alt=media&token=54df1a66-e2c1-4e55-a916-faead37d5985',
    gitHubLink: 'https://github.com/dustatron/VideoCommander',
  },
  {
    id: 8,
    title: 'Master Mind Clone',
    tech: 'React',
    img: 'MasterMindSmall.png',
    lgImg: '',
    secImg: 'MasterMindLarge.png',
    basicTitle: 'A simple logic game',
    basicDetails:
      'This was created as a class project during my React Course at Epicodus. The assignment was to create an app that allowed a user to put in personal details, display them, then allow the user to edit those details. I completed the requirements early so I decided to also add on a logic board game from my childhood.',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      'The biggest hurdles for this project was working out the logic  for the computer generated hint after every turn and working with Material UI. As I had never used the UI library before.',
    techList: ['React', 'JavaScript', 'Node.js', 'Material UI'],
    activeLink: 'https://gallant-dijkstra-379443.netlify.app/',
    gitHubLink: 'https://github.com/dustatron/react-master-mind',
  },
  {
    id: 9,
    title: 'Trivia Game',
    tech: 'React',
    img: 'TriviaSmall.png',
    lgImg: '',
    secImg: 'triviaFull.png',
    basicTitle: 'A Simple Trivia Game',
    basicDetails:
      'TThis project was apart of my JavaScript Course in Epicodus.  The assignment was to work to build an API that uses an API. So my partner and I built a trivia app using an open trivia API. ',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      "This project's hurtles revolved around taking in the returned quiz and restructuring the data to allow the app to check if the answer was correct.",
    techList: ['JavaScript', 'Node.js', 'Bootstrap', 'RESTful API'],
    activeLink: 'https://loving-mestorf-a53980.netlify.app/',
    gitHubLink: 'https://github.com/dustatron/epicodus-quality-trivia',
  },
  {
    id: 10,
    title: 'Movie Night',
    tech: 'React',
    img: 'movieSmall.png',
    lgImg: '',
    secImg: 'movieFull.png',
    basicTitle: 'Movie Night Voting App',
    basicDetails:
      'I created this app to allow my friends to vote on a movie to walk four our monthly movie night we  hosted in my backyard. It used Ruby on Rails and The Movie Database API for all the movie details. ',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      'This project taught me a good deal about dealing with a third party data source in an MVC app. ',
    techList: [
      'Ruby on Rails',
      'Rails',
      'Bootstrap',
      'RESTful API',
      'Postgres',
    ],
    activeLink: 'https://pdx-mccord.herokuapp.com/movies',
    gitHubLink: 'https://github.com/dustatron/McMovie',
  },
  {
    id: 11,
    title: 'Tab Room',
    tech: 'React',
    img: 'tabroomSmall.png',
    lgImg: '',
    secImg: 'tabroomFull.png',
    basicTitle: 'A simple React App With Redux',
    basicDetails:
      'This was a solo project made through my React course at Epicodus. It involved creating a taproom list with CRUD functionality using Redux for all of the apps state. ',
    hurdlesTitle: 'Hurdles',
    hurdlesDetails:
      'The hurdles for this app involved the time limit I had to make the app and the verbose nature of setting up actions and reducers for Redux.',
    techList: ['React', 'Bootstrap', 'Redux', 'RESTful API'],
    activeLink: 'https://mccords-taproom-react.netlify.app/',
    gitHubLink: 'https://github.com/dustatron/tap-room-react',
  },
];

export default ProjectData;
