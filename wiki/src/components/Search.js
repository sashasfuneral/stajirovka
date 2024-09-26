import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import wikipediaStore from "../stores/WikipediaStore";

const Search = observer(() => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            wikipediaStore.setSearchQuery(inputValue);
            wikipediaStore.fetchResults();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleSearch}
                placeholder="Search Wikipedia..."
            />
            <button onClick={handleSearch}>Search</button>
            {wikipediaStore.loading && <p>Loading...</p>}
            <ul>
                {wikipediaStore.results.map((result) => (
                    <li key={result.pageid}>
                        <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} target="_blank" rel="noopener noreferrer">
                            {result.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Search;