/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import NavBar from "../components/navbar";

const JobApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <NavBar />
      <div className="sm-container custom-container mx-auto p-4">
        <div className=" my-5">
          <h2 className="text-2xl font-bold">Job Title</h2>
        </div>
        <form>
          <div className="flex flex-col sm:flex-row items-center justify-between mb-3 gap-4">
            <div className="md:mb-5 sm:mb-0 w-full">
              <label htmlFor="fname" className="block mb-2 text-lg font-medium text-gray-900">First Name</label>
              <input type="text" id="fname" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 " placeholder="First name" required />
            </div>
            <div className="md:mb-5 sm:mb-0 w-full">
              <label htmlFor="lname" className="block mb-2 text-lg font-medium text-gray-900">Last Name</label>
              <input type="text" id="lname" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 " placeholder="Last name" required />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className=" w-full">
              <label htmlFor="phone" className="block mb-2 text-lg font-medium text-gray-900">Phone Number</label>
              <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 " placeholder="Phone Number" required />
            </div>
            <div className=" w-full">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 " placeholder="email" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="my-6 w-full">
              <label htmlFor="cv" className="block mb-2 text-lg font-medium text-gray-900">Resume / CV</label>
              <input type="file" id="cv"
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-green-500 block w-full p-2.5 " placeholder="" required />
            </div>
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>

      </div>
    </>
  );
};

export default JobApplicationForm;
