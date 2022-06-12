import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar'
import Home from '../containers/Home/Home'
export default function index() {
  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}
