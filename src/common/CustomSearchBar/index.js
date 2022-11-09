import React from "react";
import SearchField from "react-search-field";
import './style.scss';

const CustomSearchBar = ({ className, placeholder, onChange, searchText, onSubmit }) => {
  const isDisabled = (searchText.trim().length === 0 || !searchText)
  return (
    <div className="custom-search-bar">
      <SearchField
        placeholder={placeholder}
        onChange={onChange}
        searchText={searchText}
        classNames={className}
      />
      <button
        disabled={isDisabled}
        className={isDisabled ? "search-btn disabled" : "search-btn"}
        onClick={onSubmit}>Search</button>
    </div>
  )
}

export default CustomSearchBar