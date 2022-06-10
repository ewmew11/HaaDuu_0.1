import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Form } from 'react-bootstrap';


const Switch = () => {
     return (
          <div className="position-fixed bottom-0 end-0 me-4 mb-3 text-light">
          <Form>
  <Form.Check
    type="switch"
    id="custom-switch"
    label=" 3D "
  />
</Form>
</div>
     );
}

export default Switch;