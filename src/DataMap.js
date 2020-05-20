const DataMap = {
    color: {
        darkBlue: '#0a71c6',
        darkBlue2: '#2273b5',
        darkBlueContrast: '#0f5b99',
        darkBlueContrast2: '#0c4778',
        lightBlue: '#41a4f5',
        lightGray: '#3f3f3f',
        lightGray2: '#646464',
        white: '#f2fbff'
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
        resume: '/',
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
            list: ['Git', 'Dev Ops', 'UX/UI Design', 'Adobe XD', 'Adobe Photoshop']
        },
    },
    project: [
        {
            name: 'Empress Music',
            category: 'Mobile App Development',
            techStack: ['Flutter', 'Android', 'SQLite3', 'Adobe XD'],
            description: "A music player made using Google's latest cross-platform framework - Flutter. Listen to all your favourite music. Plug in your headphones and enjoy!",
            image: require('./images/empress_music.jpeg')
        },
        {
            name: 'Quizzo',
            category: 'Mobile App Development',
            techStack: ['Kotlin', 'Android', 'Nodejs', 'MongoDB'],
            description: "A multiplayer quiz game on various different topics. Compete with your friends to get the highest score.",
            image: require('./images/quizzo.jpeg')
        },
        {
            name: 'News App',
            category: 'Mobile App Development',
            techStack: ['Flutter', 'Android', 'Adobe XD'],
            description: "Get all the current news in one place. Read news on various different topics. Dark mode included.",
            image: require('./images/news_app.webp')
        }
    ]
}










export default DataMap