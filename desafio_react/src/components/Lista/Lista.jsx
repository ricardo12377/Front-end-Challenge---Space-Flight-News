import React, {useState, useEffect, useContext} from 'react'
import { getByID, uri } from '../../endpoints/api'
import style from './Lista.module.css'
import Card from '../Card/Card'
import CardInvertido from '../Card/CardInvertido'
import { PaginationContext } from '../context/paginationContext'

export default function Lista(tempo) {

    const  { date, modal, setModal, atual, news, setNews} = useContext(PaginationContext)

    const [param, setParam] = useState(10)

    useEffect(() => {
        fetch(`${uri}${param}`, {
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
        .then((response) => response.json())
        .then((data) => setNews(data))
    },[param])

    function AdicionarArticles () {
        setParam(val => val + 10)
    }

    useEffect(() => {
        console.log("Changing order")
    },[date])

    if(!news) return <em>Loading...</em>

  return (
   <div className={style.lista} data-testid="apresentation-element">
       <ul>
           {news
           .sort((a, b) => date === 'Antigos' 
           ? Date.parse(a.publishedAt) - Date.parse(b.publishedAt) 
           : Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
           .map((item, index) => {
               if(index % 2 === 0) {
                   return (
                       <li key={item.index}>
                            <Card
                            id={item.id}
                            title={item.title}
                            summary={item.summary}
                            url={item.url}
                            imageUrl={item.imageUrl}
                            publishedAt={item.publishedAt}/>
                       </li>
                   )
               } else {
                   return (
                       <li key={item.index}>
                            <CardInvertido
                            id={item.id}
                            title={item.title}
                            summary={item.summary}
                            url={item.url}
                            imageUrl={item.imageUrl}
                            publishedAt={item.publishedAt}/>
                        </li>
                   )
               }
           })}
           {modal ? (
                   <div className={style.modal} data-testid="modal">

                    <div className={style.fotomodal}>
                        <img src={atual.imageUrl} alt="..."/>
                        
                        <section>
                        <a href={atual.url}><button>Ir para o site</button></a>
                        <button onClick={() => setModal(false)}>Fechar</button>
                        </section>
                    </div>

                    <section  className={style.descricao}>
                        <div>
                            <h3>{atual.title}</h3>
                            <em>{atual.publishedAt}</em>
                        </div>

                        <p>{atual.summary}</p>
                    </section>

                    </div>
           ) : null}
       </ul>
       <button onClick={() => AdicionarArticles()} className={style.button}>Carregar mais</button>
   </div>
  )
}
