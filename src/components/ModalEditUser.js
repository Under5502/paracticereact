import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { putUpdateUser } from "../services/UserServices";
import { toast } from "react-toastify";
function ModalEditUser(prop) {
  const { show, handleClose, dataUserEdit, handleEditUserFromModal } = prop;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleEdit = async () => {
    let res = await putUpdateUser(name, job);
    if (res && res.updatedAt) {
      handleEditUserFromModal({
        first_name: name,
        id: dataUserEdit.id,
      });
      handleClose();
      toast.success("Update user success!!!");
    }
  };

  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUserEdit]);

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
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditUser;
