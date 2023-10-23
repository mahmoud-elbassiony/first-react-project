import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { useState, useRef } from "react";
import { DevTool } from "@hookform/devtools";
// import { ErrorMessage } from "@hookform/error-message";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => console.log(data, errors);

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const optionsTwo = [
    { value: "reading", label: "Reading" },
    { value: "coding", label: "Coding" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "orchestra" },
  ];

  return (
    <div className="container my-5">
      <div className="w-75 mx-auto border p-5">
        <h2 className="text-center mb-4">Register</h2>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="d-flex flex-column gap-3"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: "Please enter your email",
              })}
            />
            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              onKeyUp={() => console.log(errors)}
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password  must have at least 4 characters",
                },
              })}
            />

            {errors.password && (
              <Form.Text className="text-danger">
                {errors.password.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            {/* <Form.Label>Confirm Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              {...register("confirmpassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password", "") || "Passwords do not match",
              })}
            />
            {errors.confirmpassword && (
              <Form.Text className="text-danger">
                {errors.confirmpassword.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Controller
              name="gender"
              control={control}
              {...register("gender", {
                required: "Please select your gender",
              })}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  placeholder="Select Gender"
                />
              )}
            />
            {errors.gender && (
              <Form.Text className="text-danger">
                {errors.gender.message}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Controller
              name="hobbies"
              control={control}
              {...register("hobbies", {
                required: "At least one option must be selected.",
                validate: (value) => {
                  if (value.length < 1) {
                    return "At least one option must be selected.";
                  }
                  return true;
                },
              })}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={optionsTwo}
                  placeholder="Select Hobbies"
                />
              )}
            />
            {errors.hobbies && (
              <Form.Text className="text-danger">
                {errors.hobbies.message}
              </Form.Text>
            )}
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Terms and Conditions"
                {...register("terms", { required: "This field is required" })}
              />
              {errors.terms && (
                <Form.Text className="text-danger">
                  {errors.terms.message}
                </Form.Text>
              )}
            </Form.Group>
            <p>
              Already have an account? <Link to={"/login"}>Login</Link>
            </p>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <DevTool control={control} />
        </Form>
      </div>
    </div>
  );
};

export default Register;
