import generalHelpers from "../../helpers/generalHelpers";
import "./Search.css";

function Search({
  people,
  currentPage,
  itemsPerPage,
  filterType,
  searchTerm,
  setCurrentPage,
  setCurrentItems,
  setPageNumbers,
  setSearchTerm,
  setFilterType,
  filterOptions,
}) {
  const handleSearch = (e) => {
    let searchTerm = e.target.value.toLowerCase().trim();
    setSearchTerm(searchTerm);
    //filter array of people and recalculate paginagion
    const filteredData = generalHelpers.filterArray(
      filterType,
      people,
      searchTerm
    );
    setCurrentItems(
      generalHelpers.calculatePaginatedItems(
        filteredData,
        currentPage,
        itemsPerPage
      )
    );
    setPageNumbers(
      generalHelpers.setPaginationNumbers(filteredData, itemsPerPage)
    );
    //reset current page to 1 on search of a new term
    setCurrentPage(1);
  };

  const handleFilerType = (e) => {
    let filterType = e.target.value.toLowerCase();
    setFilterType(filterType);
    const filteredData = generalHelpers.filterArray(
      filterType,
      people,
      searchTerm
    );
    setCurrentItems(
      generalHelpers.calculatePaginatedItems(
        filteredData,
        currentPage,
        itemsPerPage
      )
    );
    setPageNumbers(
      generalHelpers.setPaginationNumbers(filteredData, itemsPerPage)
    );
    //reset current page to 1 on search of a new term
    setCurrentPage(1);
  };

  const filterOptionsList = filterOptions.map((option, i) => {
    return (
      <option value={option} key={i}>
        {option}
      </option>
    );
  });

  return (
    <div className="Search">
      <div className="row">
        <div className="col-md-9">
          <label>Search</label>
          <input
            onChange={handleSearch}
            className="form-control"
            placeholder="Search People..."
          />
        </div>

        <div className="col-md-3">
          <label>Filter by</label>
          <select className="form-control" onChange={handleFilerType}>
            {filterOptionsList}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;
