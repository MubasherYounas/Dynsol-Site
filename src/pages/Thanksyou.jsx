import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-[60vh] flex justify-center items-center px-4">
      <div className="max-w-[800px] w-full shadow-lg py-14 my-6 lg:my-24">
        <h3 className="font-bold text-lg mb-3 text-center">
          Thank You For Contacting Us
        </h3>
        <p className="px-4 md:px-8 text-center md:text-left">
          We have received your message. Someone from our team will contact you
          shortly. For more information, please visit our LinkedIn page:{" "}
          <a
            href="https://www.linkedin.com/company/dynamics365solution/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0052aa] wrap-break-word cursor-pointer hover:text-[#0099ff]"
          >
            https://www.linkedin.com/company/dynamics365solution/
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
