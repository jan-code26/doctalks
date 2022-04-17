import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOHGtdz1v3QyCpYluXEI1vZfJ4XOsoIHc",
  authDomain: "doctalks-80632.firebaseapp.com",
  projectId: "doctalks-80632",
  storageBucket: "doctalks-80632.appspot.com",
  messagingSenderId: "275250205223",
  appId: "1:275250205223:web:16ba4cc33029c9f9e4f402",
  measurementId: "G-QGR1Z9BVQZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);