import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { postCreateUser } from "../services/UserServices";

function ModelAddNew(prop) {
  const { show, handleClose, handleUpdate } = prop;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSave = async () => {
    let res = await postCreateUser(name, job);
    if (res && res.id) {
      handleClose("");
      setName("");
      setJob("");
      toast.success("Success Gut!!!!");
      handleUpdate({ first_name: name, id: res.id });
    } else {
      toast.error("Error...");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
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
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModelAddNew;
