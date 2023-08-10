import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const schema = yup.object().shape({
  username: yup
    .string()
    .test("is-letters", "Enter letters without spaces", function (value) {
      if (!value) return true;

      const regex = /[^a-zA-Z]/;
      return !regex.test(value);
    })
    .required(),
  email: yup
    .string()
    .test("gmail", "Email must be a valid Gmail address", function (value) {
      if (!value) return true;

      const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      return regex.test(value);
    })
    .required(),
  password: yup
    .string()
    .test(
      "valid-pass",
      "Your password must contain five (5) capital letters, six (6) symbols and two hyphens (-) in any order.",
      function (value) {
        if (!value) return true;

        const regex =
          /(?=(?:.*[A-Z]){5})(?=(?:.*[!@#$%^&*()_+={}[\]\\|:;'<>,.?/]){6})(?=(?:.*\-){2})^[A-Za-z0-9!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]+$/;
        return regex.test(value);
      }
    )
    .required(),
});

function ValidationFrom() {
  const [showPass, setShowPass] = useState(false);
  const handlePassVisibility = () => {
    setShowPass((prevState) => !prevState);
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }, 400);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        setFieldTouched,
        values,
        touched,
        isSubmitting,
        errors,
      }) => (
        <Form
          className="mx-auto mt-3 p-3 border border-3 rounded"
          noValidate
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={values.username}
              onChange={handleChange("username")}
              onFocus={() => {
                setFieldTouched("username", true);
              }}
              // onBlur={handleBlur("username")}
              isValid={touched.username && !errors.username}
              isInvalid={touched.username && !!errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={values.email}
              isValid={touched.email && !errors.email}
              isInvalid={touched.email && !!errors.email}
              onChange={handleChange("email")}
              onFocus={() => {
                setFieldTouched("email", true);
              }}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type={!showPass ? "password" : "text"}
                placeholder="Password"
                value={values.password}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
                onChange={handleChange("password")}
                onFocus={() => {
                  setFieldTouched("password", true);
                }}
              />
              <InputGroup.Text
                className="pointer"
                onClick={handlePassVisibility}
              >
                {!showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ValidationFrom;
