import React, { useEffect, useRef } from "react";
import MyImage from "./assets/IMG_1761.jpg"; // Import your image
import image2 from "./assets/img2.jpeg"; // Import your image

const Body = () => {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8"); // Ensure smooth transition
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Adjusted for a better scroll trigger
    );

    if (textRef1.current) observer.observe(textRef1.current);
    if (textRef2.current) observer.observe(textRef2.current);

    return () => {
      if (textRef1.current) observer.unobserve(textRef1.current);
      if (textRef2.current) observer.unobserve(textRef2.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      {/* Section 1 */}
      <div
        ref={textRef1}
        className="opacity-0 translate-y-8 transition-all duration-1000 ease-out will-change-transform will-change-opacity bg-white text-center text-gray-900 m-20 rounded-md shadow-md"
      >
        <div className="border flex flex-row justify-center p-5">
          <img
            src={MyImage}
            alt="DreamRun"
            className="w-1/2 drop-shadow-2xl rounded-md p-5"
          />
          <div className="flex flex-col text-justify p-5">
            <h3 className="text-2xl font-bold mb-2">What is Dream Run?</h3>
            <p className="text-md" style={{ textAlign: "justify" }}>
              The DreamRun is a charitable marathon focused on raising funds to
              support a needy NGO or cause. It combines fitness, community
              involvement, and social responsibility. Participants come
              together to run for a purpose, with all proceeds or donations
              being directed toward making a meaningful impact.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div
        ref={textRef2}
        className="opacity-0 translate-y-8 transition-all duration-[1500ms] ease-in-out delay-200 will-change-transform will-change-opacity bg-white text-center text-gray-900 m-20 -mt-6 rounded-md shadow-md"
      >
        <div className="border flex flex-row justify-center p-5">
          <div className="flex flex-col text-justify p-5">
            <h3 className="text-2xl font-bold mb-4">Our Cause</h3>
            <p className="text-md" style={{ textAlign: "justify" }}>
            thanks to the incredible support of our participants and donors, we raised and donated ₹1.5 lakhs to an NGO in Murbad dedicated to supporting mentally challenged individuals. This contribution made a significant difference in improving their care, resources, and overall well-being. With each step we take, we aim to create a lasting impact on those in need. Join us this year to continue making dreams a reality—one run at a time! 
            </p>
          </div>
          <img
            src={image2}
            alt="DreamRun"
            className="w-1/2 drop-shadow-2xl rounded-md p-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
