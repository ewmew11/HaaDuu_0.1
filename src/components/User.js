import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Nav } from 'react-bootstrap';

const User = () => {
     return (
          <nav class="navbar justify-content-end navbar-light fixed-top">
        <Nav.Item>
          <Nav.Link href="/">
            <a class="text-muted font-weight-bold font-link">Login</a>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="/">
            <a class="text-muted font-weight-bold font-link">Sgin up</a>
            </Nav.Link>
        </Nav.Item>
        </nav>
     );
}
export default User;
