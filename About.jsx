import React from "react";
import Img from "./assets/instagram.svg"; 
import Img1 from "./assets/mail.svg"; 
import { Youtube, Instagram, Mail} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Connect with us on Social Media
        </h2>
        <div className=" text-center">
          
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news, events, and stories from the NSS community.
          </p>

         
          
        </div>

          {/* Image Section */}
          <div className="flex justify-evenly ">
            <a href="https://www.instagram.com/nss_siesgst/?hl=en">
            <div className="flex items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer hover:text-pink-500">
              <Instagram className="w-8 h-8 mr-1 " />
            </div>
            </a>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nssevent@siesgst.ac.in">
            <div className="flex  items-center p-2 rounded-lg hover:bg-gray-100 hover:text-yellow-400 cursor-pointer">
              <Mail className="w-8 h-8 " />
            </div>
            </a>

            <a href="https://www.youtube.com/@thenssunitofsiesgst">
            <div className="flex  items-center p-2 rounded-lg hover:bg-gray-100 hover:text-red-600 cursor-pointer">
              <Youtube className="w-8 h-8 " />
            </div>
            </a>
          </div>
        {/* Follow Us Section */}
      </div>

     
    </div>
  );
};

export default About;
