/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Banner from "../components/banner";
import NavBar from "../components/navbar";

const JobApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Banner />
      <NavBar />
      <div className="container-sm custom-container">
        <div className="title my-3">
          <h2 className="title">Job Title</h2>
        </div>
        <form action="" >
          <div className="row my-4">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <label className="form-check-label" htmlFor="fname">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                id="fname"
                required
              />
            </div>
            <div className="col-sm-6">
              <label className="form-check-label" htmlFor="lname">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                id="lname"
                required
              />
            </div>
          </div>
          <div className="row my-4">
          <div className="col-sm-6 mb-3 mb-sm-0">
              <label className="form-check-label" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                aria-label="Phone Number"
                id="phone"
                required
              />
            </div>
            <div className="col-sm-6">
              <label className="form-check-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                id="email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label className="form-check-label" htmlFor="resume">
                Resume / CV
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Resume / CV"
                aria-label="Resume / CV"
                id="resume"
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                required
              />
            </div>
            
          </div>
          <div className="row">
            <div className="col">
            <input className="btn btn-primary my-4 form-control" type="submit" value="Apply" />
            </div>
          </div>
        </form>
      </div>
      {/* <Banner/> */}
    </>
  );
};

export default JobApplicationForm;
