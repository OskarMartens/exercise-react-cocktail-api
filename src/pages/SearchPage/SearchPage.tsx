import React, { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import { IDrinkReponseList } from "../../interfaces/ResponseInterfaces";
import { IDetailedDrink } from "../../interfaces/interface";
import { useConvertDrinkList } from "../../hooks/useConvertData";

import './SearchPage.css';
import { Link } from "react-router-dom";
import { PaginatedItems } from "../../pagination/pagination";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [inputValue, setInputValue] = useState("");

  const { data, isLoading, error, refresh } = useFetchData(
    "search.php?s=" + searchTerm
  );

  useEffect(() => {
    refresh;
  }, [searchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  let list: (IDetailedDrink | undefined)[] = useConvertDrinkList(data);

  return (
    <main className="search-page">
      <form onSubmit={handleSearch} className="submit-form">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <input type="submit" value="Search"/>
      </form>
      <PaginatedItems itemsPerPage={10} items={list} />
    </main>
  );
}
