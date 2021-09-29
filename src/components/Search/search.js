const SearchBar = () => (
    <form className={"SearchBar"} action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Pokemon</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Pokemon name"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;