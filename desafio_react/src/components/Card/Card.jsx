import React, { useContext } from 'react'
import { PaginationContext } from '../context/paginationContext'
import style from './Card.module.css'
import { getByID } from '../../endpoints/api'


export default function Card({title, imageUrl, summary, publishedAt, id }) {

  const { setModal, setAtual, atual } = useContext(PaginationContext)

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
    <div className={style.card} data-testid="form-element">
        <div className={style.foto}>
            <img src={imageUrl} alt="..."/>
        </div>

        <div className={style.desc}>

            <div className={style.tittle}>
                <div>{title}</div>
                <em>{publishedAt}</em>
                <div>{id}</div>
            </div>

            <p >{summary}</p>
            <button onClick={() => Modal(id)}>Ver Mais</button>
        </div>
    </div>
  )
}
