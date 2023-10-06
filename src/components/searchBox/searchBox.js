import SearchIcon from "./searchIcon";

import "./index.css";
import { useTextSearch } from "../../contexts/TextSearchContext";

const SearchBox = () => {
  const { textSearch, setTextSearch } = useTextSearch();

  return(
  <div className="search-box">
    <SearchIcon />
    <input type="text" placeholder="Busca en este sitio web" input = {textSearch} onInput={e => setTextSearch(e.target.value)} />
  </div>
)};

export default SearchBox;
