import { getDocs, query, onSnapshot, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { app } from "./config";

export default async function useBeginner(collection) {
  const [data, setData] = useState([]);

  const q = query(collection);
  useEffect(() => {
    getDocs(q).then((res) => {
      let documents = [];
      res.docs.forEach((doc) => {
        documents.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setData(documents);
    });
    return data;
  }, []);
}
