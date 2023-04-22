import GuessingGame from '@/components/GuessingGame'
import { Inter } from 'next/font/google'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBybaGmuldFhzstL-SpMB0_63Fjr-XCKGU",
  authDomain: "battle-naval.firebaseapp.com",
  projectId: "battle-naval",
  storageBucket: "battle-naval.appspot.com",
  messagingSenderId: "581446784949",
  appId: "1:581446784949:web:d0bc92fd26595d84fc2bfc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(()=>{
    const shipsCollectionRef = collection(db, 'ships');
    getDocs(shipsCollectionRef).then(res => console.log(res))
  },[])

  return (
    <>
      <h1>Naval Battle Game</h1>
      <GuessingGame />
    </>
  )
}
