import { useState, useEffect } from "react";
import { fetchData } from "../../helpers/fetch";
import generalHelpers from "../../helpers/generalHelpers";

import "./EmployeeListContainer.css";

import Search from "../Search";
import List from "../List";
import Pagination from "../Pagination";

const options = ["Name", "Location", "Email", "DOB", "Gender"];

function EmployeeListContainer() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [filterType, setFilterType] = useState("name");
  const [filterOptions, setFilterOptions] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [upperPageBound, setUpperPageBound] = useState(6);
  const [lowerPageBound, setLowerPageBound] = useState(0);
  const pageBound = 0;
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const data = await fetchData("https://randomuser.me/api/?results=1000");
      setPeople(data.results);
      //setCurrentItems(data.results)
      setCurrentItems(
        generalHelpers.calculatePaginatedItems(
          data.results,
          currentPage,
          itemsPerPage
        )
      );
      setPageNumbers(
        generalHelpers.setPaginationNumbers(data.results, itemsPerPage)
      );
      setLoading(false);
    }
    getData();
    setFilterOptions(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="EmployeeListContainer">
      <h2 className="EmployeeListContainer_title text-center">Employee List</h2>

      {loading ? (
        <div className="text-center">
          <h4>Loading...</h4>
        </div>
      ) : (
        <div>
          <Search
            people={people}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            filterType={filterType}
            searchTerm={searchTerm}
            filterOptions={filterOptions}
            setCurrentPage={setCurrentPage}
            setCurrentItems={setCurrentItems}
            setPageNumbers={setPageNumbers}
            setFilterType={setFilterType}
            setSearchTerm={setSearchTerm}
          />

          <List
            filterOptions={filterOptions}
            filterType={filterType}
            currentItems={currentItems}
          />

          <Pagination
            people={people}
            currentPage={currentPage}
            upperPageBound={upperPageBound}
            lowerPageBound={lowerPageBound}
            pageBound={pageBound}
            itemsPerPage={itemsPerPage}
            pageNumbers={pageNumbers}
            filterType={filterType}
            searchTerm={searchTerm}
            setCurrentPage={setCurrentPage}
            setCurrentItems={setCurrentItems}
            setPageNumbers={setPageNumbers}
            setUpperPageBound={setUpperPageBound}
            setLowerPageBound={setLowerPageBound}
          />
        </div>
      )}
    </div>
  );
}

export default EmployeeListContainer;
