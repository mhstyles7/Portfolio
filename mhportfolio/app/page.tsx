'use client'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import HScroll from './components/HScroll'
import Chatbot from './components/Chatbot'

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Nav />
      <HScroll />
      <Chatbot />
    </>
  )
}
