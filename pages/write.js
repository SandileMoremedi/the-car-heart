import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  addDoc,
  getFirestore,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../firebase/config";
// On this page the challenging was finding a way to display
// whether the user added the image or not.
export default function Write({ loggedIn, userDetails }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [clickedValue, setClickedValue] = useState("");
  const [submitted, setSubmitted] = useState();
  const [name, setName] = useState("");
  const [errorImage, setErrorImage] = useState();
  const [errorBody, setErrorBody] = useState();
  const [errorTitle, setErrorTitle] = useState();
  const [errorCategory, setErrorCategory] = useState();
  const [imageAdded, setImageAdded] = useState(false);
  const [file, setFile] = useState([]);
  const firestore = getFirestore(app);
  const storageRef = ref(getStorage(app), file.name);

  const submitBlog = async () => {
    const colRef = collection(firestore, "blogs");
    if (title == "") {
      setErrorTitle(true);
    }
    if (postText == "") {
      setErrorBody(true);
    }
    if (blogImage == "") {
      setErrorImage(true);
    }
    if (clickedValue == "") {
      setErrorCategory(true);
    } else {
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          addDoc(colRef, {
            author: name,
            body: postText,
            date: serverTimestamp(),
            title: title,
            category: clickedValue,
            image: downloadURL,
            blogId: userDetails.uid,
          })
            .then(setSubmitted(true))
            .catch((err) => console.log(err));
        });
      });
    }
  };
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getDataUsers = async () => {
      const firebase = getFirestore(app);
      const colRefUsers = collection(firebase, "users");
      const dataUsers = await getDocs(colRefUsers);
      setUsers(
        dataUsers.docs.map((doc) => ({
          ...doc.data(),
        }))
      );
    };
    getDataUsers();
  }, []);
  useEffect(() => {
    const getName = async () => {
      users.map((user) => {
        user.id == userDetails.uid && setName(user.name);
      });
    };
    getName();
  }, []);
  console.log(users);
  return (
    <div className="blog-write">
      <Head>
        <title>Write Your Blog</title>
      </Head>
      {loggedIn ? (
        <>
          <div className="write">
            <div className="form">
              <div className="top">
                <div className="write-image"></div>
                <div className="image-text">
                  <label htmlFor="image" className="file-label">
                    +
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="file-input"
                    onChange={(e) => {
                      setBlogImage(e.target.value);
                      setImageAdded(true);
                      setFile(e.target.files[0]);
                    }}
                  />

                  <input
                    type="text"
                    placeholder="Title"
                    className="top-input"
                    autoFocus={true}
                    required={true}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <textarea
                  name=""
                  id="blog-content"
                  placeholder="Tell us about it"
                  cols="30"
                  rows="10"
                  required={true}
                  className="blog-textarea"
                  onChange={(e) => {
                    setPostText(e.target.value);
                  }}
                ></textarea>
              </div>

              <aside className="illustration">
                {/*
                 TODO: use the images the user uploaded in a div where it is going to show the name of the image. Instead of showing it. Dummy!
                 */}
                <h3>Levels and Submission</h3>
                <div className="progressBar">
                  {imageAdded && (
                    <>
                      <h4>Image Has Been Uploaded</h4>
                    </>
                  )}
                </div>

                <div className="levels">
                  <button
                    onClick={() => setClickedValue("beginner")}
                    className={
                      clickedValue == "beginner" ? "sideBtn pushed" : "sideBtn"
                    }
                  >
                    Beginner
                  </button>
                  <button
                    onClick={() => setClickedValue("intermediate")}
                    className={
                      clickedValue == "intermediate"
                        ? "sideBtn pushed"
                        : "sideBtn"
                    }
                  >
                    Intermediate
                  </button>
                  <button
                    onClick={() => setClickedValue("expert")}
                    className={
                      clickedValue == "expert" ? "sideBtn pushed" : "sideBtn"
                    }
                  >
                    Expert
                  </button>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  onClick={(e) => {
                    submitBlog();
                    e.target.disabled = true;
                  }}
                >
                  Submit
                </button>
              </aside>
            </div>
          </div>
          {submitted && (
            <div className="submitted-wrapper">
              <div className="submitted">
                <h1>Your Post was Added.</h1>
                <Link
                  href="/blogs"
                  className="submitted-dialogue"
                  onClick={() => {
                    setSubmitted(false);
                  }}
                >
                  Go Home
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="notLoggedIn">
          <h2>You are not logged in.</h2>
          <Link href="/login">Sign In / Up</Link>
        </div>
      )}
    </div>
  );
}
