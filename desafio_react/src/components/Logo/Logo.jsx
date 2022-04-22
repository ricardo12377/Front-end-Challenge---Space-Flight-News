import React from 'react'
import style from './Logo.module.css'
import { FaSpaceShuttle } from 'react-icons/fa'

export default function Logo() {

  return (
    <div className={style.logo}>

        <main>
            <FaSpaceShuttle size={60} className={style.icon} />
            <h5>Space Flight News</h5>
        </main>

    </div>
  )
}
