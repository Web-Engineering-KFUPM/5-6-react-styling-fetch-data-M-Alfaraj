import React from "react";
import { Modal, Button } from "react-bootstrap";

function UserModal({ show, user, onHide }) {
  if (!user) return null;

  return (
      <Modal
   show={show}
   onHide={onHide}
   >
   <Modal.Header closeButton>
      <Modal.Title>
         {UserDetails}
      </Modal.Title>
   </Modal.Header>

   <Modal.Body>
      <div className="user-avatar-large">
         {user.name.chatAt(0)}
      </div>

      <p><strong>Name:</strong> { TODO }</p>
      <p><strong>Email:</strong> { TODO }</p>
      <p><strong>Phone:</strong> { TODO }</p>
      <p><strong>Website:</strong> { TODO }</p>
   </Modal.Body>

   <Modal.Footer>
      <Button
         variant="secondary"
         onClick={onHide}
      >
         Close
      </Button>
   </Modal.Footer>
   </Modal>
  );
}

export default UserModal;