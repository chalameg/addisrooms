import React, { useState } from "react";
import { Button, Modal, Carousel } from "react-bootstrap";

function Room({ room }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="row shadow p-3 bg-white rounded mb-3">
        <div className="col-md-4">
          <img src={room.imageurls[0]} alt="" className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h3>{room.name}</h3>
          <span>Max Count: {room.maxcount}</span>
          <p>Phone Number: {room.phonenumber}</p>
          <p>Type: {room.type}</p>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <button className="btn btn-primary">book now</button>
            </div>
            <div className="col-md-3">
              <button className="btn btn-primary" onClick={handleShow}>view details</button>
            </div>
          </div>
        </div>

        <>

          <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header>
              <Modal.Title>{room.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel prevLabel=''>
                {room.imageurls.map(url=>{
                  return <Carousel.Item>
                    <img
                      className="d-block w-100 img-fluid"
                      src={url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                })}
              </Carousel>
              <p>{room.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default Room;
