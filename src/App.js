import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import TableUsers from "./components/TableUsers";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClose = () => {
    setIsShowModal(false);
  };
  return (
    <div className="app-container">
      <Header />
      <Container>
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
        <TableUsers />
      </Container>

      <ModalAddNew show={isShowModal} handleClose={handleClose} />
    </div>
  );
}

export default App;
