import PropTypes from "prop-types";
import generalHelpers from "../../helpers/generalHelpers";

function Pagination({
  people,
  currentPage,
  upperPageBound,
  lowerPageBound,
  pageBound,
  itemsPerPage,
  pageNumbers,
  filterType,
  searchTerm,
  setCurrentPage,
  setCurrentItems,
  setPageNumbers,
  setLowerPageBound,
  setUpperPageBound,
}) {
  const handlePageClick = (e) => {
    e.preventDefault();
    setCurrentPage(parseInt(e.target.id));
    //filter array of people and recalculate paginagion
    const filteredData = generalHelpers.filterArray(
      filterType,
      people,
      searchTerm
    );
    setCurrentItems(
      generalHelpers.calculatePaginatedItems(
        filteredData,
        e.target.id,
        itemsPerPage
      )
    );
    setPageNumbers(
      generalHelpers.setPaginationNumbers(filteredData, itemsPerPage)
    );
  };

  const renderPagination = pageNumbers.map((num) => {
    if (num === currentPage) {
      return (
        <li className="page-item active" key={num}>
          <button onClick={handlePageClick} className="page-link" id={num}>
            {num}
          </button>
        </li>
      );
    } else if (num < upperPageBound + 1 && num > lowerPageBound) {
      return (
        <li key={num} id={num} className="page-item">
          <button className="page-link" id={num} onClick={handlePageClick}>
            {num}
          </button>
        </li>
      );
    } else {
      return null;
    }
  });

  const prevButton =
    currentPage !== 1 ? (
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => {
            if (currentPage === 1) return null;
            if ((currentPage - 1) % pageBound === 0) {
              setUpperPageBound(upperPageBound + pageBound);
              setLowerPageBound(lowerPageBound + pageBound);
            }
            const filteredData = generalHelpers.filterArray(
              filterType,
              people,
              searchTerm
            );
            setCurrentItems(
              generalHelpers.calculatePaginatedItems(
                filteredData,
                currentPage - 1,
                itemsPerPage
              )
            );
            setPageNumbers(
              generalHelpers.setPaginationNumbers(filteredData, itemsPerPage)
            );
            setCurrentPage(currentPage - 1);
          }}
        >
          {"<"}
        </button>
      </li>
    ) : null;

  const nextButton =
    currentPage < pageNumbers.length ? (
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => {
            if (currentPage === pageNumbers.length) return null;
            if (currentPage + 1 >= upperPageBound) {
              setUpperPageBound(upperPageBound + pageBound);
              setLowerPageBound(lowerPageBound + pageBound);
            }
            const filteredData = generalHelpers.filterArray(
              filterType,
              people,
              searchTerm
            );
            setCurrentItems(
              generalHelpers.calculatePaginatedItems(
                filteredData,
                currentPage + 1,
                itemsPerPage
              )
            );
            setPageNumbers(
              generalHelpers.setPaginationNumbers(filteredData, itemsPerPage)
            );
            setCurrentPage(currentPage + 1);
          }}
        >
          {">"}
        </button>
      </li>
    ) : null;

  const toStartButton =
    currentPage !== 1 ? (
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => {
            const filteredData = generalHelpers.filterArray(
              filterType,
              people,
              searchTerm
            );
            setCurrentItems(
              generalHelpers.calculatePaginatedItems(
                filteredData,
                1,
                itemsPerPage
              )
            );
            setPageNumbers(
              generalHelpers.setPaginationNumbers(filteredData, itemsPerPage)
            );
            setCurrentPage(1);
          }}
        >
          {"<<"}
        </button>
      </li>
    ) : null;

  const toEndButton =
    currentPage < pageNumbers.length ? (
      <li className="page-item">
        <button
          className="page-link"
          onClick={() => {
            const filteredData = generalHelpers.filterArray(
              filterType,
              people,
              searchTerm
            );
            setCurrentItems(
              generalHelpers.calculatePaginatedItems(
                filteredData,
                currentPage + 1,
                itemsPerPage
              )
            );
            setPageNumbers(
              generalHelpers.setPaginationNumbers(filteredData, itemsPerPage)
            );
            setCurrentPage(pageNumbers.length);
          }}
        >
          {">>"}
        </button>
      </li>
    ) : null;
  return (
    <div className="Pagination row">
      <div className="col-md-12">
        <p className="pull-left">
          <strong>Page {currentPage}</strong> of {pageNumbers.length} /{" "}
          <strong>{people.length}</strong> Total Results
        </p>
        <ul className="pagination">
          {toStartButton}
          {prevButton}
          {renderPagination}
          {nextButton}
          {toEndButton}
        </ul>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  filterOptions: PropTypes.array,
  currentItems: PropTypes.array,
  people: PropTypes.array,
  currentPage: PropTypes.number,
  upperPageBound: PropTypes.number,
  lowerPageBound: PropTypes.number,
  pageBound: PropTypes.number,
  itemsPerPage: PropTypes.number,
  pageNumbers: PropTypes.array,
  filterType: PropTypes.string,
  searchTerm: PropTypes.string,
  setCurrentPage: PropTypes.func,
  setCurrentItems: PropTypes.func,
  setPageNumbers: PropTypes.func,
  setLowerPageBound: PropTypes.func,
  setUpperPageBound: PropTypes.func
};

export default Pagination;
