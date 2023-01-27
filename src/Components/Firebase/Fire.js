import firebase from 'firebase';
  
const firebaseConfig = {
  apiKey: "AIzaSyBKvdM5laqAWqoGEhZ-BMyPAxgoc1E4Aa4",
  authDomain: "ticket-system-aa5a5.firebaseapp.com",
  projectId: "ticket-system-aa5a5",
  storageBucket: "ticket-system-aa5a5.appspot.com",
  messagingSenderId: "189332080597",
  appId: "1:189332080597:web:64953421ea6a274ef8df5c",
  measurementId: "G-GTM8ZS2RN8"
};
    
const fire = firebase.initializeApp(firebaseConfig);
  
export default fire;
