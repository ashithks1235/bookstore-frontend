import { FaInstagram, FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";

 function Footer() {
  return (
    <div className="bg-gray-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-6">ABOUT US</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Porro dolorum laudantium earum fugit fugiat eius voluptas
            aperiam numquam, quos, ratione non laborum sed facere ab 
            nesciunt enim, quo necessitatibus vero!
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-6">NEWS LETTER</h2>
          <p className="text-gray-300 mb-4">Stay updated with our latest trends</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email ID"
              className="w-full py-3 px-4 text-black rounded outline-none bg-white me-2"
            />
            <button className="bg-yellow-500 px-6 py-4 hover:bg-yellow-600 transition text-black font-bold rounded">
              <GrFormNextLink />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">FOLLOW US</h2>
          <p className="text-gray-300 mb-5">Let us be social</p>

          <div className="flex space-x-5 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-yellow-500 transition" />
            <FaXTwitter className="cursor-pointer hover:text-yellow-500 transition" />
            <FaFacebookF className="cursor-pointer hover:text-yellow-500 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-yellow-500 transition" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer
