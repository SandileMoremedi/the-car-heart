import { getFirestore, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../../Firebase/config";
import { useBeginner } from "../../Firebase/useFirestore";
export default function Blog({ data }) {
  const col = collection(getFirestore(app), "beginner");
  useBeginner(col);
  return (
    <div className="blog-page">
      <h1>hello</h1>
    </div>
  );
}
