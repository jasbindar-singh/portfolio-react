const DataMap = {
    color: {
        darkBlue: '#0a71c6',
        darkBlue2: '#2273b5',
        darkBlueContrast: '#0f5b99',
        darkBlueContrast2: '#0c4778',
        lightBlue: '#41a4f5',
        lightBlueContrast: '#2e77b3',
        lightGray: '#3f3f3f',
        lightGray2: '#646464',
        lightGray3: '#999999',
        blueGray: '#465263',
        blueGrayLight: '#e4e7ed',
        white: '#f2fbff',
        green: '#28a745',
        orange: '#ef8236'
    },
    routes: [
        {
            name: 'ABOUT',
            route: '/'
        },
        {
            name: 'PROJECTS',
            route: '/projects'
        },
        {
            name: 'PUBLICATIONS',
            route: '/publications'
        },
        {
            name: 'CONTACT',
            route: '/contact'
        },
    ],
    socialMedia: {
        twitter: 'https://twitter.com/ibtesam070',
        linkedin: 'https://www.linkedin.com/in/ibtesamansari/',
        github: 'https://github.com/ibtesam123',
        facebook: 'https://www.facebook.com/ibtesam.ansari070',
        instagram: 'https://www.instagram.com/ibtesam070',
        medium: 'https://medium.com/@ibtesamansari070',
        stackoverflow: 'https://stackoverflow.com/users/9681181/ibtesam-ansari',
    },
    about: {
        resume: 'https://firebasestorage.googleapis.com/v0/b/personal-b6d5b.appspot.com/o/Portfolio%2FIbtesamResume.pdf?alt=media&token=93b112bd-c10f-4da1-aac3-174a03960856',
        image: require('./images/profile.jpg')
    },
    skill: {
        frontend: {
            icon: require('./images/frontend.svg'),
            list: ['Flutter', 'Kotlin/Java', 'React', 'Javascript', 'HTML/CSS']
        },
        backend: {
            icon: require('./images/backend.svg'),
            list: ['Firebase', 'Node.js', 'MongoDB', 'Flask/Python', 'SQLite']
        },
        others: {
            icon: require('./images/others.svg'),
            list: ['Git', 'UX/UI Design', 'Adobe XD','Figma']
        },
    },
    project: {
        techStack: ['All', 'Flutter', 'Kotlin', 'Firebase', 'Node.js', 'MongoDB'],
        projectList: [
            {
                name: 'Quotify',
                category: 'Mobile App Development',
                techStack: ['Flutter', 'Android', 'Node.js', 'MongoDB'],
                description: "Keep yourself motivated everyday with beautiful and inspiring quotes.",
                image: require('./images/quotify.jpg'),
                themeColor: '#c203fc',
                code: 'https://github.com/ibtesam123/Quotify-App',
                googlePlay: 'https://play.google.com/store/apps/details?id=quotify.app',
            },
            {
                name: 'Quizzo',
                category: 'Mobile App Development',
                techStack: ['Kotlin', 'Android', 'Node.js', 'Firebase', 'MongoDB'],
                description: "A multiplayer quiz game on various different topics. Compete with your friends to get the highest score.",
                image: require('./images/quizzo.jpeg'),
                themeColor: '#0a71c6',
                code: 'https://github.com/ibtesam123/Quizzo',
                // googlePlay: 'https://github.com/ibtesam123/Quizzo',
            },
            {
                name: 'News Bucket',
                category: 'Mobile App Development',
                techStack: ['Flutter', 'Android', 'Adobe XD'],
                description: "Get all the current news in one place. Read news on various different topics. Dark mode included.",
                image: require('./images/news_app.webp'),
                themeColor: '#e03538',
                code: 'https://github.com/ibtesam123/NewsBucket',
                googlePlay: 'https://play.google.com/store/apps/details?id=news.bucket',
            },
            {
                name: 'Empress Music',
                category: 'Mobile App Development',
                techStack: ['Flutter', 'Android', 'SQLite3', 'Adobe XD'],
                description: "A music player made using Google's latest cross-platform framework - Flutter. Listen to all your favourite music. Plug in your headphones and enjoy!",
                image: require('./images/empress_music.jpeg'),
                themeColor: '#ff7531',
                code: 'https://github.com/ibtesam123/EmpressMusic',
                // googlePlay: 'https://github.com/ibtesam123/EmpressMusic',
            },
        ]
    },
    post: [
        {
            title: 'Realtime Chat App - One-to-One using Flutter, Socket.io & Node.js ',
            date: 'May 11, 2020',
            description: 'Introduction to rooms in socketio and using them to create individual chatrooms. This can be used to implement single user chat.',
            image: require('./images/realtime_chat2.png'),
            link: 'https://medium.com/flutter-community/realtime-chat-app-one-to-one-using-flutter-socket-io-node-js-acd4152c6a00'
        },
        {
            title: 'Realtime Chat App — Flutter, Node.js & Socket.io',
            date: 'December 20, 2019',
            description: 'In this blog we will see how to make a realtime chat app using Node.js as the backend and Flutter as the frontend. We will use sockets to communicate between devices.',
            image: require('./images/realtime_chat1.png'),
            link: 'https://medium.com/flutter-community/realtime-chat-app-flutter-node-js-socket-io-e298cd27fb06'
        }
    ]
}










export default DataMap