import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllProduct from '../../components/AllProduct/AllProduct';

const Inventory = () => {
    return (
        <Container fluid>
            <Button>
                <Link  className='text-light' to='/add'>Add New Item</Link>
            </Button>
            
            <AllProduct></AllProduct>
        </Container>
    );
};

export default Inventory;