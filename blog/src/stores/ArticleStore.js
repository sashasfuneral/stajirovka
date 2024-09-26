import { makeAutoObservable } from 'mobx';

class ArticleStore {
  articles = [];

  constructor() {
    makeAutoObservable(this);
  }

  addArticle(article) {
    this.articles.push({ ...article, id: Date.now() });
  }

  updateArticle(id, updatedFields) {
    const index = this.articles.findIndex(article => article.id === id);
    if (index !== -1) {
      this.articles[index] = { ...this.articles[index], ...updatedFields };
    }
  }
}

const articleStore = new ArticleStore();
export default articleStore;