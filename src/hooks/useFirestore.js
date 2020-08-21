import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setdocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      //the orderBy is meant for sorting a querry by date and descanding order
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setdocs(documents);
      });
    //unsubscribe from the collection when we no longer need'it
    return () => unsub();
  }, [collection]);

  return { docs };
};
export default useFirestore;
