import { collection, getDocs, getFirestore } from "firebase/firestore"
import { use, useEffect } from "react"

function TraerCollection() {

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection).then(snapshot => snapshot.docs.map(item => {
      console.log(item.data());
      console.log(item.id);
    }))
  }, []);



  return (
    <>
    </>
  )
}

export default TraerCollection