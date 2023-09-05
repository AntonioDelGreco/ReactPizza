import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, doc, Timestamp, addDoc} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: import.meta.env.APIKEYFB,
  authDomain: import.meta.env.AUTHDOMAINFB,
  projectId: import.meta.env.PROJECTIDFB,
  storageBucket: import.meta.env.STORAGEFB,
  messagingSenderId: import.meta.env.MSGFB,
  appId: import.meta.env.APPIDFB
};
  
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllItems() {

  const myCollection = collection(db, 'pizzas');
  const pizzasSnap = await getDocs(myCollection);

  return pizzasSnap.docs.map(doc => {
      return{
       ...doc.data(),
       id: doc.id
      }
  });
}

export async function getItemsByTaste(tasteid){
  const miColeccion = collection (db, 'pizzas');
  const queryPizzas = query(miColeccion, where("taste", "==", tasteid));

  const pizzasSnap = await getDocs(queryPizzas);

  return pizzasSnap.docs.map(doc => {
    return{
     ...doc.data(),
     id: doc.id
    }
});
}

export async function getItem(id){
  const miColeccion = collection (db, 'pizzas');
  const pizzasRef = doc(miColeccion, id);
  const pizzaSnap = await getDoc(pizzasRef);

  
    return{
     ...pizzaSnap.data(),
     id: pizzaSnap.id
    }
}

export async function buyOrder(orderData){
  const buyerTimestamp = Timestamp.now();
  const includeDate = {...orderData, date: buyerTimestamp};

  const miColeccion = collection(db, "orders");
  const orderDoc = await addDoc(miColeccion, includeDate);

  return {
    id: orderDoc.id
  }
}
