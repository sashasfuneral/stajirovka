import { makeAutoObservable } from "mobx";
import axios from "axios";

class WikipediaStore {
    searchQuery = "";
    results = [];
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    setSearchQuery(query) {
        this.searchQuery = query;
    }

    async fetchResults() {
        this.loading = true;
        try {
            const response = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    format: 'json',
                    list: 'search',
                    srsearch: this.searchQuery,
                    origin: '*'
                }
            });
            this.results = response.data.query.search;
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            this.loading = false;
        }
    }
}

const wikipediaStore = new WikipediaStore();
export default wikipediaStore;