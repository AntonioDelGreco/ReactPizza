import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCVDjx3Ybe1BtLmH_Ga7kPU1TBgYzyhp0A",
  authDomain: "reactpizza-97a1f.firebaseapp.com",
  projectId: "reactpizza-97a1f",
  storageBucket: "reactpizza-97a1f.appspot.com",
  messagingSenderId: "216497673509",
  appId: "1:216497673509:web:5900a4acd03bd7c9af76cc"
};


const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems() {

    const myCollection = collection(firestoreDB, 'pizzas');
    const pizzasSnap = await getDocs(myCollection);

    return pizzasSnap.docs.map(doc => {
        return{
         ...doc.data(),
         id: doc.id
        }
    });
}

