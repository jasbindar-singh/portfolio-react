import * as firebase from 'firebase';


const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;