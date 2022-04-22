import React from 'react'
import style from './Card.module.css'
import { PaginationContext } from '../context/paginationContext'
import { useContext } from 'react'
import { getByID } from '../../endpoints/api'

export default function CardInvertido({title, imageUrl, summary, publishedAt, url, id }) {

  const { setModal, setAtual} = useContext(PaginationContext)

  function Modal (id) {
    setModal(true)
   
    fetch(`${getByID}${id}`, {
      method: "GET",
      headers: {"Content-type": "application/json"}
    })
    .then((response) => response.json())
    .then((data) => setAtual(data))
    }

  return (
    <div className={style.card}>
       
        <div className={style.desc}>

            <div className={style.tittle}>
                <div>{title}</div>
                <em>{publishedAt}</em>
            </div>

            <p >{summary}</p>
            <button onClick={() => Modal(id)}>Ver Mais</button>
        </div>

        <div className={style.foto}>
            <img src={imageUrl} alt="..."/>
        </div>
    </div>
  )
}