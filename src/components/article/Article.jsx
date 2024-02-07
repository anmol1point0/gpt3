import React from 'react';
import './article.css';

const Article = ({imageUrl, date, title}) => {
  return (
    <div className='gpt3__article'>
        <div className='gpt3__article-img'>
          <img src={imageUrl} alt='article'/>
        </div>
        <div className='gpt3__article-content'>
          <p>{date}</p>
          <h3>{title}</h3>
          <div>
            <p>Read Full Article</p>
          </div>
        </div>
    </div>
  )
}

export default Article
