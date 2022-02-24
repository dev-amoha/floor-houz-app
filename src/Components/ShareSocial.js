import React from "react";
import {Modal,Button} from "react-bootstrap";
import shareicon from "../Logos/shareicon.svg"
import {FacebookIcon,
    EmailIcon,
    LinkedinIcon,
     TwitterIcon,
       WhatsappIcon,
  }from "react-share";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Share
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Open with</h4>
        <div className="Social-icon-share-btn">
        <FacebookIcon />
        <EmailIcon/>
        <LinkedinIcon/>
        <TwitterIcon/>
        <WhatsappIcon/>
        </div>
        
        <div>
        
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ShareSocial(props) {
  

  return (
    <div>
     
       <img src= {shareicon} alt="share" onClick={() => props.setModalShow(true)} />
      

      <MyVerticallyCenteredModal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
      />
    </div>
  );
}

export default ShareSocial;