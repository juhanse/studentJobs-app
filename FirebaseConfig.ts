import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
	apiKey: "AIzaSyBhpMsdCafd0-lLm0xGfh5VRWBJrYJJvI8",
	authDomain: "students-d16e4.firebaseapp.com",
	projectId: "students-d16e4",
	storageBucket: "students-d16e4.firebasestorage.app",
	messagingSenderId: "261235910436",
	appId: "1:261235910436:web:2b6f938ac8df961fb275b1"
};

export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);
 