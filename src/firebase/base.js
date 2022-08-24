import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnV_6gfCZ3GMHhQewqbEVWhGB1kiPSrpA",
  authDomain: "tweet-watcher-9e6a7.firebaseapp.com",
  projectId: "tweet-watcher-9e6a7",
  storageBucket: "tweet-watcher-9e6a7.appspot.com",
  messagingSenderId: "263788706609",
  appId: "1:263788706609:web:3f3739165e28f152ba8e10"
};

const app = initializeApp(firebaseConfig)

export default app;