import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Backdrop = (props) => {
  return (
    <div onClick={props.onClick} className="modal-backdrop fade show"></div>
  );
};

const ModalDialog = (props) => {
  return (
    <div
      className={`modal fade" ${!props.openModal ? "hide" : "show"}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Employee</h5>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-3 Modal_Side">
                <h4>
                  {props.data.name.first} {props.data.name.last}
                </h4>
                <img
                  src={props.data.picture.large}
                  className="img-fluid rounded-circle"
                  alt={props.data.name.first}
                />
              </div>
              <div className="col-md-9">
                <form>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      readOnly
                      type="input"
                      className="form-control"
                      value={`${props.data.location.street.number}  ${props.data.location.street.name}`}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      readOnly
                      type="input"
                      className="form-control"
                      value={`${props.data.email}`}
                    />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input
                      readOnly
                      type="input"
                      className="form-control"
                      value={`${props.data.location.city}`}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date of Birth</label>
                    <input
                      readOnly
                      type="input"
                      className="form-control"
                      value={`${props.dob}`}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.onClick}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Modal(props) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleOpenModal}
      >
        View
      </button>
      {openModal
        ? ReactDOM.createPortal(
            <Backdrop onClick={handleOpenModal} />,
            document.getElementById("overlay-root")
          )
        : null}
      {openModal
        ? ReactDOM.createPortal(
            <ModalDialog
              data={props.data}
              dob={props.dob}
              onClick={handleOpenModal}
              openModal={openModal}
            />,
            document.getElementById("modal-root")
          )
        : null}
    </React.Fragment>
  );
}

export default Modal;
