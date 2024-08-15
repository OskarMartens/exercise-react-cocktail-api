import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IDetailedDrink } from "../interfaces/interface";
import { Link } from "react-router-dom";

import "./pagination.css";

interface IPaginatedItemsProps {
  itemsPerPage: number;
  items: (IDetailedDrink | undefined)[];
}

export function PaginatedItems({ itemsPerPage, items }: IPaginatedItemsProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset: number = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="pagination-section">
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination-bar"
        />
      </div>
    </>
  );
}

interface IItemsProps {
  currentItems: (IDetailedDrink | undefined)[];
}

function Items({ currentItems }: IItemsProps) {
  let toRender =
    currentItems.length > 0 ? (
      <div className="drink-section">
        {currentItems.map((drink) => (
          <div className="drink-results" key={drink?.id}>
            <Link to={`/cocktail-info/${drink?.id}`} key={drink?.id}>
              {drink?.drinkName}
            </Link>
          </div>
        ))}
      </div>
    ) : (
      <div>Nothing found</div>
    );

  return <>{toRender}</>;
}
