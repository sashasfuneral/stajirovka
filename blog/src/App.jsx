import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; 
import ArticleList from './components/ArticleList'; 
import ArticleForm from './components/ArticleForm'; 
import ArticleView from './components/ArticleView'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/new" element={<ArticleForm />} />
        <Route path="/articles/:id" element={<ArticleView />} />
      </Routes>
    </Router>
  );
};

export default App;