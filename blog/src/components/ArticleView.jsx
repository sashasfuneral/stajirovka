import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import articleStore from '../stores/ArticleStore';
import '../index.css';

const ArticleView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articleStore.articles.find(article => article.id === parseInt(id));

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  if (!article) {
    return <div>Article not found</div>;
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setTitle(article.title);
      setContent(article.content);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    articleStore.updateArticle(article.id, { title, content });
    navigate(`/articles/${article.id}`);
    setIsEditing(false);
  };

  return (
    <div className="article-view-container">
      {isEditing ? (
        <form className="edit-form" onSubmit={handleSubmit}>
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
          <div className="button-group">
            <button type="submit">Save</button>
            <button type="button" onClick={handleEditToggle}>Cancel</button>
          </div>
        </form>
      ) : (
        <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          <button onClick={handleEditToggle}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ArticleView;