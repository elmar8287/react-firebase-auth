import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyDGQOUBq5_U4yO9aMDxA65Id9KWs2oS890",
  authDomain: "tickets-a05e3.firebaseapp.com",
  databaseURL: "https://tickets-a05e3-default-rtdb.firebaseio.com",
  projectId: "tickets-a05e3",
  storageBucket: "tickets-a05e3.appspot.com",
  messagingSenderId: "269007594637",
  appId: "1:269007594637:web:248ca0d090a6830ce92ec4"
};
    
const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;

// apiKey: "AIzaSyAHtCClYX7fN-yyoIYrUVeqN2CI-DBVGO8",
// authDomain: "avis-queue.firebaseapp.com",
// databaseURL: "https://avis-queue-default-rtdb.firebaseio.com",
// projectId: "avis-queue",
// storageBucket: "avis-queue.appspot.com",
// messagingSenderId: "309662597220",
// appId: "1:309662597220:web:31d63526bdbb9fe5775f71",
// measurementId: "G-BVZF40MTCE"