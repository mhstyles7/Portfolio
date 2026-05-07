'use client'
import Loader from './components/Loader'
import Nav from './components/Nav'
import HScroll from './components/HScroll'
import Chatbot from './components/Chatbot'

export default function Home() {
  return (
    <>
      <Loader />
      <Nav />
      <HScroll />
      <Chatbot />
    </>
  )
}
