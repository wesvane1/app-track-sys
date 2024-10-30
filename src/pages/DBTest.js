// ! ENSURE THAT IT DOES NOT TAKE EMPTY PARAMS

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import React, { useRef } from 'react';
import { firestore } from '../firebase.js';
import { addDoc, collection } from 'firebase/firestore';
import CryptoJS from 'crypto-js';

export default function DBTest() {
  const unRef = useRef();
  const pwRef = useRef();
  const ref = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    const un = unRef.current.value;
    const pw = pwRef.current.value;
    console.log("USERNAME: ", un);
    console.log("PASSWORD: ", pw);

    // Hash the message
    const hashedPW = CryptoJS.SHA256(pw).toString(CryptoJS.enc.Hex);
    console.log("HASHED PW: ", hashedPW);

    let data = {
      userName: un,
      password: hashedPW
    };

    try {
      await addDoc(ref, data);  // Await the addDoc call
      console.log("Document successfully written!");
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };

  return (
    <>
      <Header />
      <div>
      <form onSubmit={handleSave}>
          <label>Enter Username</label>
          <input type="text" ref={unRef} />
          <br />
          <label>Enter Password</label>
          <input type="text" ref={pwRef} />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
