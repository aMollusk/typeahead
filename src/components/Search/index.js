import React, { useState, useEffect } from "react";
import { useDebounce } from "../../utils";

const Search = ({ endpoint, onChange }) => {
  const [searchQuery, onSearchQueryChange] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    if (debouncedSearchQuery) {
      endpoint(debouncedSearchQuery).then(onChange);
    } else {
      onChange([]);
    }
  }, [debouncedSearchQuery, onChange, endpoint]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => onSearchQueryChange(e.target.value)}
      />
    </div>
  );
};
export default Search;
