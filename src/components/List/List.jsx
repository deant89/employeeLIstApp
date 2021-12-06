import React from "react";
import Modal from "../Modal";
import PropTypes from "prop-types";
import generalHelpers from "../../helpers/generalHelpers";
function List({ filterOptions, currentItems }) {
  const tableColumns = filterOptions.map((name, i) => {
    return (
      <th key={i} scope="col">
        {name}
      </th>
    );
  });

  const filterPeopleList = currentItems.map((person, i) => {
    const dob = generalHelpers.formatDate(person.dob.date);
    return (
      <tr key={i}>
        <th>{`${person.name.first} ${person.name.last}`} </th>
        <td>{person.location.city}</td>
        <td>{person.email}</td>
        <td>{dob}</td>
        <td>{person.gender}</td>
        <td>
          <Modal data={person} dob={dob} />
        </td>
      </tr>
    );
  });

  return (
    <div className="List table-responsive">
      {filterPeopleList.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              {tableColumns}
              <th></th>
            </tr>
          </thead>
          <tbody>{filterPeopleList}</tbody>
        </table>
      ) : (
        <div className="alert alert-info">No results to display!</div>
      )}
    </div>
  );
}

List.propTypes = {
  filterOptions: PropTypes.array,
  currentItems: PropTypes.array
};

export default List;
