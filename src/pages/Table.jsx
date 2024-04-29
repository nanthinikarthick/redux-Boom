
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrashAlt, FaEye, FaEdit } from "react-icons/fa";
import Cancel from "../assets/image/Close.svg";
import { fetchAction, deleteAction } from "../redux/action/action";
import '../pages/list.scss';
import "../layout/Header.scss";
import Search from "../assets/image/search.svg";
import Add from "../assets/image/add(1).svg";
import Left from "../assets/image/left.svg";
import Right from "../assets/image/Right.svg";


function Table() {
  const dispatch = useDispatch();
  const { listData } = useSelector((state) => state.listData);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(4);
  // const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    dispatch(fetchAction());
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const onDelete = (id) => {
    console.log("Deleting user with ID:", id);
    setDeleteUserId(id);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setShowPopup(true);
    dispatch(deleteAction(deleteUserId))
      .then(() => {
        console.log("User deleted successfully");
        setShowPopup(false);
        dispatch(fetchAction());
      })
      .catch((error) => {
        setError("Error deleting user");
        console.error("Error deleting user: ", error);
        setShowPopup(true);
      });
  };

  const handleCancelDelete = () => {
    console.log("Canceling delete");
    setShowPopup(false);
  };

  const handleUpdate = (id) => {
    const updatedUser = listData.find((user) => user.id === id);
    navigate("/form", { state: { user: updatedUser, isUpdate: true } });
  };

  const handleView = (id) => {
    const viewUser = listData.find((user) => user.id === id);
    navigate("/form", { state: { user: viewUser, isView: true } });
  };

  const handleNavigation = () => {
    navigate("/form",  { state: { isView: false } });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listData?.slice(indexOfFirstItem, indexOfLastItem) || [];
  const adjustedItemsPerPage = currentItems.length < 10 ? 10 : itemsPerPage;
  const adjustedIndexOfLastItem = currentPage * adjustedItemsPerPage;
  const adjustedIndexOfFirstItem = adjustedIndexOfLastItem - adjustedItemsPerPage;
  const adjustedCurrentItems = listData?.slice(adjustedIndexOfFirstItem, adjustedIndexOfLastItem) || [];


  return (
    <>
      <div className="table-top">
        <div className="d-flex justify-content-end ">
          <div className="search-bar mt-4">
            <img src={Search} alt="Search icon" style={{ borderColor: "none" }} />
            <input type="text" placeholder="Search" />
          </div>
          <button type="submit" className="secondary-button mt-4" style={{ marginRight: '20px' }}>
            Export CSV
          </button>
        </div>
        <div className="table-wrapper m-3 text-center ">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>E-mail</th>
                <th>Country</th>
                <th>State</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adjustedCurrentItems.map((user, index) => (
                <tr key={index}>
                  <td>{user.CustomerName}</td>
                  <td>{user.phonenumber}</td>
                  <td>{user.CustomerEmail}</td>
                  <td>{user.country}</td>
                  <td>{user.state}</td>
                  <td>
                    <FaEye
                      onClick={() => handleView(user.id)}
                      style={{ cursor: "pointer", margin: "10px 13px" }}
                    />
                    <FaEdit
                      onClick={() => handleUpdate(user.id)}
                      style={{ cursor: "pointer", margin: "10px 13px" }}
                    />
                    <FaTrashAlt
                      onClick={() => onDelete(user.id)}
                      style={{ cursor: "pointer", margin: "10px 13px" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination">
            <button
              className="primary_btn"
              onClick={() => paginate(1)}
              disabled={currentPage === 1}
            >
              <img src={Left} alt="Backward" />
            </button>
            <button
              className="primary_btn"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
           
            </button>
           
            {Array.from({ length: Math.ceil((listData && listData?.length) / adjustedItemsPerPage) }).map((_, index) => (

              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`secondary_button ${currentPage === index + 1 ? "active" : ""}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="primary_btn"
              onClick={() => paginate(currentPage + 1)}
             
              disabled={currentPage === Math.ceil(adjustedCurrentItems?.length / adjustedItemsPerPage)}

            >
             
            </button>
            <button
              className="primary_btn"
              onClick={() => paginate(Math.ceil(listData?.length / adjustedItemsPerPage))}
              disabled={currentPage === Math.ceil(listData?.length / adjustedItemsPerPage)}

            >
              <img src={Right} alt="Forward" />
            </button>
          </div>
          <div className="add-new text-end m-4" style={{ position: 'fixed', zIndex: '1030' }}>
            <button
              className=" Add  rounded-circle "
              style={{ width: "50px", height: "50px" }}
              onClick={handleNavigation}
            >
              <img src={Add} />
            </button>
          </div>
        </div>
        {showPopup && (
          <div className="modal show" tabIndex="-1" role="dialog" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="mx-auto m-4">
                  <h5 className="modal-title">Delete Record?</h5>
                </div>
                <div className="mx-auto m-3">
                  <img src={Cancel} alt="cancel" />
                </div>
                <div className="mx-auto m-4">
                  <button
                    type="button"
                    className="primary-btn"
                    onClick={handleCancelDelete}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="secondary-btn"
                    onClick={handleConfirmDelete}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Table;

  