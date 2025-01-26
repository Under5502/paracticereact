import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/UserServices";
import ReactPaginate from "react-paginate";
import ModalAddNew from "./ModalAddNew";
import ModalEditUser from "./ModalEditUser";
import _ from "lodash";

function TableUsers(prop) {
  const [listUser, setListUser] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const [dataUserEdit, setDataUserEdit] = useState({});

  const handleEditUser = (user) => {
    setDataUserEdit(user);
    setIsShowModalEdit(true);
  };

  const handleUpdate = (user) => {
    setListUser([user, ...listUser]);
  };

  const handleEditUserFromModal = (user) => {
    let cloneListUser = _.cloneDeep(listUser);
    let index = listUser.findIndex((item) => item.id === user.id);
    cloneListUser[index].first_name = user.first_name;
    setListUser(cloneListUser);
  };

  const handleClose = () => {
    setIsShowModal(false);
    setIsShowModalEdit(false);
  };

  useEffect(() => {
    //call api
    getUser(2);
  }, []);

  const getUser = async (page) => {
    let res = await fetchAllUser(page);
    if (res && res.data) {
      console.log(res);

      setListUser(res.data);
      setTotalUser(res.total);
      setTotalPages(res.total_pages);
    }
  };

  const handlePageClick = (even) => {
    getUser(even.selected + 1);
  };

  return (
    <>
      <div className="my-3 add-new">
        <span>
          <b>List User</b>
        </span>
        <button
          className="btn btn-success"
          onClick={() => {
            setIsShowModal(true);
          }}
        >
          Add New User
        </button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, id) => {
              return (
                <tr key={`id: ${id}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => {
                        handleEditUser(item);
                      }}
                    >
                      Edit
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={totalUser}
        pageCount={totalPages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />

      <ModalAddNew
        show={isShowModal}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
      />
      <ModalEditUser
        show={isShowModalEdit}
        dataUserEdit={dataUserEdit}
        handleClose={handleClose}
        handleEditUserFromModal={handleEditUserFromModal}
      />
    </>
  );
}

export default TableUsers;
