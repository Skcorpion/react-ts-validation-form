import { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ValidationFrom() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const username = event.target.value;
    setValidated(true);
    if (!Array.isArray(username.match(/[^a-zA-Z]/g))) {
      setUsername(username);
      setValidated(false)
    }
  };
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setEmail(email);
  };
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPassword(password);
  };
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log("click");
    setValidated(true);
  };
  return (
    <Form
      className="mx-auto mt-3 p-3 border border-3 rounded"
      noValidate
      validated={validated}
      onSubmit={handleFormSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
        <Form.Control.Feedback type="invalid">
          Enter letters without spaces
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
        />
        <Form.Control.Feedback type="invalid">
          Enter only email addresses on gmail
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswod">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Form.Control.Feedback type="invalid">
          Your password must contain five (5) capital letters, six (6) symbols
          and two hyphens (-) in any order.
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ValidationFrom;
