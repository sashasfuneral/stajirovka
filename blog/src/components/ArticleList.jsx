import React from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import articleStore from '../stores/ArticleStore';
import '../index.css';

const ArticleList = observer(() => {
  const navigate = useNavigate();

  return (
    <div className="article-list-container">
      {articleStore.articles.length > 0 ? (
        articleStore.articles.map(article => (
          <div 
            key={article.id} 
            className="article-item"
            onClick={() => navigate(`/articles/${article.id}`)}
          >
            <h2>{article.title}</h2>
          </div>
        ))
      ) : (
        <p>No articles available.</p>
      )}
      <button className="new-article-button" onClick={() => navigate('/articles/new')}>
        New Article
      </button>
    </div>
  );
});

export default ArticleList;