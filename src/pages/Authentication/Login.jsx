import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField } from "@mui/material";

const validationSchema = {};
const initialValues = {};
const Login = () => {
  const [formValue, setFormValue] = useState();
  const handleSubmit = () => {
    console.log("handle submit");
  };
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <div>
              <Field
                as={TextField}
                name="email"
                placeholder="Email"
                type="email"
                variant="outlined"
                fullWidth
              />
              <ErrorMessage name="email" component={"div"} className="text-red-500"/>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
