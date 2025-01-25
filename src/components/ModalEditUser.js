import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function ModalEditUser(prop) {
  const { show, handleClose, dataUserEdit } = prop;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleEdit = () => {};

  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUserEdit]);

  console.log(dataUserEdit);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <div>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Job</label>
                  <input
                    type="text"
                    className="form-control"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditUser;
