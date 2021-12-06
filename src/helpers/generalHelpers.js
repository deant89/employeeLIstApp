const generalHelpers = {

  filterArray: function (filterType, data, searchTerm) {
    let filterArr;
    if (filterType === 'name') {
      filterArr = data.filter(person => person[filterType].first.toLowerCase().includes(searchTerm) || person[filterType].last.toLowerCase().includes(searchTerm));
    } else if (filterType === 'location') {
      filterArr = data.filter(person => person[filterType].city.toLowerCase().includes(searchTerm));
    } else if (filterType === 'dob') {
      filterArr = data.filter(person => person[filterType].date.toLowerCase().includes(searchTerm));
    } else if (filterType === 'gender') {
      filterArr = data.filter(person => person[filterType].toLowerCase() === searchTerm);
    } else {
      filterArr = data.filter(person => person[filterType].toLowerCase().includes(searchTerm));
    };
    return filterArr;
  },

  setPaginationNumbers: function (data, itemsPerPage) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  },
  
  calculatePaginatedItems: function (data, currentPage, itemsPerPage) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItemsArray = data.slice(indexOfFirstItem, indexOfLastItem);
    return currentItemsArray;
  },
  formatDate: function(date) {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    const dob = `${da} / ${mo} / ${ye}`;
    return dob;
  }
};

export default generalHelpers;
