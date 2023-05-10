import "./UpdateContact.css";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewContact = ({ stor, onNewContact }) => {
  const [avatarFile, setAvatarFile] = useState(null);

  const initialValues = {
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
    gender: "",
    group: "",
    favorite: "",
  };

  const navigate = useNavigate(); //navigate

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string()
      .oneOf(["Man", "Woman"], "Invalid gender")
      .required("Gender is required"),
    group: Yup.string()
      .oneOf(["Family", "Friends", "Work", "Gym", "Archives"])
      .required("Group is required"),
    favorite: Yup.boolean(),
  });

  const handleSubmit = (values) => {
    console.log(values);
    onNewContact(values);
    navigate("/");
  };

  const handleAvatarChange = (event) => {
    setAvatarFile(event.target.files[0]);
  };

  return (
    <div className="addContact">
      <div className="addContactItem">
        <h1>Update Contact</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div>
                <label htmlFor="name">Name :</label>
                <Field className="field" type="text" name="name" />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label htmlFor="phone">Phone :</label>
                <Field className="field" type="number" name="phone" />
                <ErrorMessage name="phone" />
              </div>
              <div>
                <label htmlFor="email">Email :</label>
                <Field className="field" type="email" name="email" />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label htmlFor="avatar">Avatar :</label>
                <input
                  className="field"
                  id="avatar"
                  name="avatar"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    handleAvatarChange(event);
                    setFieldValue("avatar", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="avatar" />
              </div>
              <div className="Sel">
                <label htmlFor="gender">Gender :</label>
                <Field className="select" as="select" name="gender">
                  <option value=" ">Choose gender</option>
                  <option value="Man">Man</option>
                  <option value="Woman">Woman</option>
                </Field>
                <ErrorMessage name="gender" />
              </div>
              <div className="Sel">
                <label htmlFor="group">Group :</label>
                <Field className="select" as="select" name="group">
                  <option value=" ">Choose group</option>
                  <option value="Famely">Famely</option>
                  <option value="Friends">Friends</option>
                  <option value="Work">Work</option>
                  <option value="Gym">Gym</option>
                </Field>
                <ErrorMessage name="group" />
              </div>
              <div className="fav">
                <label htmlFor="favorite">Favorite :</label>
                <Field className="favorite" type="checkbox" name="favorite" />
              </div>
              <button type="submit" id="btnAddContact" disabled={isSubmitting}>
                Update
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default NewContact;
