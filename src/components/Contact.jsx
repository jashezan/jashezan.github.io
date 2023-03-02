import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import FormFillupNotification from "./FormFillupNotification"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    isEmailValid: false,
    message: "",
  });
  const validEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section
      name="contact"
      className="w-full min-h-screen grid place-items-center backdrop-blur-lg"
    >
      <div className="w-full px-5 md:w-[80%] md:px-10 lg:px-20 lg:w-[70%] xl:w-[60%] xl:px-30">
        <h2 className="text-white text-4xl mb-10 text-center">Contact Me</h2>
        <form
          action="https://getform.io/f/222f0895-0a47-49d0-b64b-29651f177ece"
          method="post"
        >
          <div>
            <label htmlFor="name" className="block text-lg text-white">
              Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoMdPerson
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="text"
                name="name"
                id="name"
                required
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
                className="bg-slate-700 h-14 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-900 rounded-md"
                placeholder="John Doe"
              />
            </div>
          </div>
          <br />
          <div>
            <label htmlFor="email" className="block text-lg text-white">
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                    isEmailValid: validEmail(e.target.value),
                  });
                }}
                className="bg-slate-700 h-14 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <br />
          <div>
            <label htmlFor="message" className="block text-lg text-white">
              Message
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex pt-5 pointer-events-none">
                <BiMessageRounded
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <textarea
                name="message"
                id="message"
                required
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  });
                }}
                className="bg-slate-700 h-32 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-5 text-white"
                placeholder="Type Your Message Here"
              ></textarea>
            </div>
          </div>
          <br />
          <div className="min-w-full grid place-items-center">
            <button
              type="submit"
              disabled={!(formData.isEmailValid)}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onMouseOver={()=>{
                console.log("Hello")
                if(!formData.isEmailValid){
                  return <FormFillupNotification/>
                }
              }}
            >
              Let's Talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
