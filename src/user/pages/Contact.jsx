import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div>
      <Header/>
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione,
          officia delectus consequuntur, dicta libero magni omnis architecto
          voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum
          fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Optio maiores fuga, modi vel accusantium magnam
          ex, ratione aliquam eius odit consequuntur earum, itaque nulla labore
          veritatis quis aut atque!
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-4 rounded-full shadow-sm">
            <FaMapMarkerAlt className="text-xl" />
          </div>
          <p className="text-gray-800 text-sm">
            123 Main Street, Apt 4B,<br />
            Anytown, CA 91234
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-4 rounded-full shadow-sm">
            <FaPhoneAlt className="text-xl" />
          </div>
          <p className="text-gray-800 text-sm">+91 9874561230</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-4 rounded-full shadow-sm">
            <FaEnvelope className="text-xl" />
          </div>
          <p className="text-gray-800 text-sm">Bookstore@gmail.com</p>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-16 lg:px-32">
        <div className="bg-gray-200 p-8 rounded-md shadow-md h-[470px]">
          <h3 className="text-center text-sm font-semibold mb-6">Send me Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 w-full rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="p-3 w-full rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-gray-400 outline-none"
            />
            <textarea
              placeholder="message"
              rows="3"
              className="p-3 w-full rounded-md border border-gray-300 text-sm focus:ring-2 focus:ring-gray-400 outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gray-900 text-white py-3 rounded-md flex justify-center items-center gap-2 text-sm hover:bg-black transition"
            >
              Send <FaPaperPlane />
            </button>
          </form>
        </div>
        <div className="rounded-md overflow-hidden shadow-md h-[470px]">
          <iframe
            src="https://www.google.com/maps?q=Kakkanad&z=14&output=embed"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact