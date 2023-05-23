import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ValidationFrom() {
  return <Form className="mx-auto mt-3 p-3 border border-3 rounded">
    <Form.Group className='mb-3' controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
    </Form.Group>
    <Form.Group className='mb-3' controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text>
      Enter only email addresses on gmail
      </Form.Text>
    </Form.Group>
    <Form.Group className='mb-3' controlId="formBasicPasswod">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      <Form.Text>
      Your password must contain five (5) capital letters, six (6) symbols and two hyphens (-) in any order.
      </Form.Text>
    </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>;
}

export default ValidationFrom;
