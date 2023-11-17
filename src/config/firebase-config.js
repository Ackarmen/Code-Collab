import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4cig6-YqpU-zdc0gMZYuWq9Ig9ZteN7g",
  authDomain: "codecollab-427dd.firebaseapp.com",
  projectId: "codecollab-427dd",
  storageBucket: "codecollab-427dd.appspot.com",
  messagingSenderId: "460031825732",
  appId: "1:460031825732:web:9806bc824f704f4ea8a911",
  measurementId: "G-G8ZX638XF1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
