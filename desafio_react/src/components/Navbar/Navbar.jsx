import React, {useContext, useEffect} from 'react'
import { uriSearch } from '../../endpoints/api'
import { PaginationContext } from '../context/paginationContext'
import style from './Navbar.module.css'

export default function Navbar() {

  const {articles, setArticles, titleContext, setTitleContext, date, setDate, news, setNews} = useContext(PaginationContext)

  useEffect(() => {
    fetch(`${uriSearch}${titleContext}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
    .then((response) => response.json())
    .then((data) => setArticles(data))

    news.pop()
    setNews(articles)
    
  },[titleContext])
  
  return (
    <div className={style.navbar}>

     <section>

     <form>
        <input placeholder='Procure pelo título' onChange={(e) => setTitleContext(e.target.value)}/>
        <button>Procurar</button>
      </form>

      <select onChange={(e) => setDate(e.target.value)}>
          <option value='Novos'>Novos</option>
          <option value='Antigos'>Antigos</option>
      </select>
      
     </section>
    </div>
  )
}
