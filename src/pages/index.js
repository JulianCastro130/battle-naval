import GuessingGame from '@/components/GuessingGame'
import { Inter } from 'next/font/google'
// import Sea from '@/components/Sea'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Naval Battle Game</h1>
      {/* <Sea /> */}
      <GuessingGame />
    </>
  )
}
