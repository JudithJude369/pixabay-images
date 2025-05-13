import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return console.log(searchValue);
  };

  return (
    <div className="search-container">
      <h1 className="title">pixabay images</h1>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="search for free images"
          name="search"
        />
        <FaSearch className="search-icon" />
      </form>
    </div>
  );
};

export default SearchForm;
