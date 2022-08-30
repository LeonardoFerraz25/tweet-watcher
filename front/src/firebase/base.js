import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnV_6gfCZ3GMHhQewqbEVWhGB1kiPSrpA",
  authDomain: "tweet-watcher-9e6a7.firebaseapp.com",
  projectId: "tweet-watcher-9e6a7",
  storageBucket: "tweet-watcher-9e6a7.appspot.com",
  messagingSenderId: "263788706609",
  appId: "1:263788706609:web:3f3739165e28f152ba8e10"
};

const app = initializeApp(firebaseConfig);
const provider = new TwitterAuthProvider();

export const singIn = async () => {
  const auth = getAuth();
  const user = await signInWithPopup(auth, provider);
  return user;
}


export default app;