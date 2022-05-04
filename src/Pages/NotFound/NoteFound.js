import React from 'react';
import { Col,Row } from 'react-bootstrap';

const NoteFound = () => {
    return (
        <div className='container'>
            <Row>
                <Col sm={12}>
                <img className='d-block img-fluid' style={{width:'100vw', height:'85vh'}} src="images/404.jpg" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default NoteFound;