import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import articleStore from '../stores/ArticleStore';
import '../index.css'; 

const ArticleForm = observer(({ article }) => {
  const [title, setTitle] = useState(article ? article.title : '');
  const [content, setContent] = useState(article ? article.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (article) {
      articleStore.updateArticle(article.id, { title, content });
    } else {
      articleStore.addArticle({ title, content });
    }
  };

  return (
    <div className="form-container">
      <form className="article-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
          placeholder="Title" 
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
          placeholder="Content"
        />
        <button type="submit">Save Article</button>
      </form>
    </div>
  );
});

export default ArticleForm;