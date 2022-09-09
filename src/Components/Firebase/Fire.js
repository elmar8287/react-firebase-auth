import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyAHtCClYX7fN-yyoIYrUVeqN2CI-DBVGO8",
  authDomain: "avis-queue.firebaseapp.com",
  databaseURL: "https://avis-queue-default-rtdb.firebaseio.com",
  projectId: "avis-queue",
  storageBucket: "avis-queue.appspot.com",
  messagingSenderId: "309662597220",
  appId: "1:309662597220:web:31d63526bdbb9fe5775f71",
  measurementId: "G-BVZF40MTCE"
};
    
const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;
