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
    }
}










export default DataMap