import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav } from 'react-bootstrap';

const Info = () => {
     return (
          <nav class="navbar justify-content-start navbar-light fixed-top">
        <Nav.Item>
          <Nav.Link href="http://haaduu.com/">
            <a class="text-muted font-weight-bold font-link">Haaduu.com</a>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="/">
            <a class="text-muted font-weight-bold font-link">Info</a>
            </Nav.Link>
        </Nav.Item>
        </nav>
     );
}
export default Info;
