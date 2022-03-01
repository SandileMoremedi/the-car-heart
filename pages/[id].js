import { getDoc, getFirestore, doc } from "firebase/firestore";
import { app } from "../firebase/config";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CurrentBlog() {
  const [data, setData] = useState();
  const { query } = useRouter();

  useEffect(() => {
    const firestore = getFirestore(app);
    const col = doc(firestore, "blogs", `${query.id}`);
    const getData = async () => {
      const d = await getDoc(col);
      setData({
        ...d.data(),
      });
    };
    getData();
  }, []);
  return (
    <div className="parentBlog">
      {data && (
        <div className="singleBlog">
          <h1>{data.title}</h1>

          <Image
            className="image"
            src={data.image}
            width={700}
            height={400}
            alt="Blog Image"
          />
          <div className="sub">
            <span className="author">{`By: ${data.author}`}</span>
          </div>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}
