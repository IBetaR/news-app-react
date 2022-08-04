import './index.css'
import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const NewsItem = ({title, description, content, author, publishedAt, url,name ,urlToImage}) => {
  return (
    <div className='news-app'>
      <div className='news-item'>
      <Card sx={{ maxWidth: 600 }} >
        <CardActionArea 
                        onClick={(event) => { console.log(event)}}>
          <CardMedia
            component="img"
            height="400"
            image={urlToImage}
            alt={urlToImage}
          />
          <CardContent>
            <Typography>
              <h2><a href={url} target='_blank' rel="noopener noreferrer">{title} - {name}</a></h2>
              
              <p>Description: {description}</p>
              <p>Content: {content}</p>
              <p>Autor: {author}</p>
              <p>Publicado: {publishedAt}</p>
              <p>url: {url}</p>
              <p>url Image: {urlToImage}</p>
            
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
      </div>
    </div>
  )
}

export default NewsItem