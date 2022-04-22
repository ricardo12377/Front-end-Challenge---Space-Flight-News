import React from 'react'
import Lista from '../components/Lista/Lista'
import Logo from '../components/Logo/Logo'
import Navbar from '../components/Navbar/Navbar'
import style  from './Home.module.css'

export default function HomePage() {
  return (
    <div className={style.home}>
        <Navbar />
        <Logo />

        <hr />

        <Lista />
    </div>
  )
}
