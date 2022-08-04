import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import NewsItem from '../NewsItem/NewsItem';


const NewsList = () => {
    const [articles, setArticles] = useState([]);

    const URL = 'https://newsapi.org/v2/everything?q=argentina&from=2022-07-25&sortBy=publishedAt&apiKey=f1328fbb7a1b45dd87c12f155e52adb6&page=1&pageSize=10&language=es'
    useEffect(() => {
        const getArticles = async () => {
            //const response = await fetch(URL)
            const response = await axios.get(URL)
            console.log(response)
            //const datos = await response.json()
            setArticles(response.data.articles)
            //setArticles(datos)
        }
        getArticles()
    }, [])

  return (
    <div className='newslist'>
    {articles.map(article => {
        return (

            <NewsItem
                id={article.id}
                title={article.title}
                urlToImage={article.urlToImage}
                url={article.url}
                name={article.name}
                description={article.description}
                content={article.content}
                author={article.author}
                publishedAt={article.publishedAt}
            />
        )
    })
    };
    
</div>
  )
}

export default NewsList