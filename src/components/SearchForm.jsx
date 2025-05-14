import { useGlobalContext } from "../context/context";
import { FaSearch } from "react-icons/fa";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const searchValue = e.target.elements.search.value;
  //   // if (!searchValue) return setSearchTerm(searchValue);
  // };

  return (
    <div className="search-container">
      <h1 className="title">pixabay images</h1>
      <div className="input-wrapper">
        <input
          type="search"
          className="input"
          placeholder="search for images"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};

export default SearchForm;
