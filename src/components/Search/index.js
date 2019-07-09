import React, { useState, useEffect } from "react";
import { useDebounce } from "../../utils";

const Search = ({ endpoint, children }) => {
  const [searchQuery, onSearchQueryChange] = useState("");
  const [airports, setAirports] = useState([]);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      endpoint(debouncedSearchQuery).then(setAirports);
    } else {
      setAirports([]);
    }
  }, [debouncedSearchQuery, endpoint]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => onSearchQueryChange(e.target.value)}
      />
      {children(airports)}
    </div>
  );
};
export default Search;
