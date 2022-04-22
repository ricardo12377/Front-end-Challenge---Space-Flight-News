import { createContext, useState, useEffect } from 'react'

export const PaginationContext = createContext({})

export const PaginationProvider = (props) => {

    const [articles, setArticles] = useState([])
    const [titleContext, setTitleContext] = useState()
    const [date, setDate] = useState('antigo')
    const [modal, setModal] = useState(false)
    const [idModal, setIdModal] = useState(0)
    const [atual, setAtual] =  useState({})
    const [news, setNews] = useState([])

    return(
        <PaginationContext.Provider
        value={{articles, setArticles, titleContext, setTitleContext, date, setDate, modal, setModal, idModal, setIdModal, atual, setAtual, news, setNews}}>
            {props.children}
        </PaginationContext.Provider>
    )
}