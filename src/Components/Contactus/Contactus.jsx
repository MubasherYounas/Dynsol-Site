import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ContactUs2() {
  const navigate = useNavigate();
  
  // All countries array
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Congo", "Costa Rica",
    "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
    "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece",
    "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India",
    "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
    "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
    "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives",
    "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
    "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
    "Niger", "Nigeria", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
    "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
    "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan",
    "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo",
    "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const [inputVal, setInputVal] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    dynamicsUsage: "",
    jobTitle: "",
    country: "",
    message: "",
  });

  const [inputCheck, setInputCheck] = useState({
    implementation: false,
    upgrade: false,
    support: false,
    consultation: false,
  });

  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10,}$/.test(phone);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setInputCheck((prev) => ({
        ...prev,
        [name]: e.target.checked,
      }));
    } else {
      setInputVal((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(inputVal.email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    if (!validatePhone(inputVal.phone)) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }

    setIsSending(true);

    const selectedInterests = Object.keys(inputCheck).filter(
      (key) => inputCheck[key]
    );

    const data = {
      service_id: "service_lrbfgto",
      template_id: "template_8rl61km",
      user_id: "1H1lVLszHQKK8Rwn0",
      template_params: {
        firstName: inputVal.firstname,
        lastName: inputVal.lastname,
        userEmail: inputVal.email,
        phoneNumber: inputVal.phone,
        company: inputVal.company,
        dynamicsUsage: inputVal.dynamicsUsage,
        jobTitle: inputVal.jobTitle,
        country: inputVal.country,
        message: inputVal.message,
        interests: selectedInterests.join(", "),
      },
    };

    try {
      await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);

      setInputVal({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        company: "",
        dynamicsUsage: "",
        jobTitle: "",
        country: "",
        message: "",
      });

      setInputCheck({
        implementation: false,
        upgrade: false,
        support: false,
        consultation: false,
      });

      navigate("/thankyou");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full bg-linear-to-r from-customLightBlue to-customVeryLightBlue">
      <div className="py-10 px-4 sm:px-8 md:pt-20 xl:px-24 xl:pb-16 xl:pt-28">
        <div className="text-center font-poppins mb-10 md:mb-6 3xl:mb-20" data-aos="fade-up">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-8 justify-center uppercase font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-5 md:leading-[50px] lg:leading-[69px] tracking-[1.5%] mb-4">
            
            <img src="/hori-line.svg" className="w-[60px] sm:w-20 h-2 md:w-[120px] md:h-3" alt="" />

            <h1 className="font-bold text-xl sm:text-2xl md:text-[30px] lg:text-[40px] 2xl:text-[50px] leading-[30px] md:leading-[35px] lg:leading-[50px] 2xl:leading-[69px] tracking-[1.5%]">
              <span className="text-customBlue1">Contact </span>
              <span className="text-customDarkGray">Us</span>
            </h1>

            <img src="/hori-line2.svg" className="w-[60px] sm:w-20 h-2 md:w-[120px] md:h-3" alt="" />
          </div>

          <h2 className="mb-4 md:mb-0 3xl:mb-5 text-[15px] sm:text-[16px] lg:text-[22px] font-light leading-6 sm:leading-[26px] lg:leading-8 tracking-[2%] md:w-[70%] xl:w-1/2 2xl:w-[45%] mx-auto">
            Get in touch with our Dynamics 365 experts to discuss implementation, upgrades, and customized solutions for your business.
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* Left Side Info */}
        <div className="basis-full md:basis-1/2 bg-secondary  py-10 px-6 sm:px-10 md:px-8 lg:px-12 xl:px-16 2xl:p-24 flex flex-col gap-10 items-center justify-center text-center md:text-left" data-aos="fade-right">
          
          <div className="flex justify-center md:justify-start items-start md:items-center w-full">
            <div className="w-full max-w-[550px]">
              <div className="font-poppins font-bold text-gray-800 text-[28px] sm:text-[32px] lg:text-[45px] xl:text-[48px] leading-9 sm:leading-11 lg:leading-[63px] mb-2">
                Let's Transform Your Business
              </div>

              <p className="font-light text-black text-[16px] sm:text-[18px] lg:text-[24px] xl:text-[27px] leading-[26px] sm:leading-[30px] lg:leading-10">
                Ready to optimize your operations with Dynamics 365? We'll help you implement, upgrade, and support your business solutions.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <img src="/contactus-img.svg" className="w-[80%] sm:w-[60%] md:w-[90%] lg:w-full" alt="" />
          </div>

        </div>

        {/* Right Side Form */}
        <div className="basis-full md:basis-1/2 bg-[#ECEEF0] px-6 py-10 sm:px-8 lg:px-12 xl:px-16 xl:py-12 2xl:px-24" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-2xl sm:text-3xl md:text-4xl text-customBlue1">REQUEST A DEMO</span>
              <span className="font-semibold text-[15px] sm:text-[16px]">I'm interested in...</span>

              {/* Checkbox Options - Updated for Dynamics 365 */}
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  { key: "implementation", label: "Implementation" },
                  { key: "upgrade", label: "Upgrade" },
                  { key: "support", label: "Support" },
                  { key: "consultation", label: "Consultation" }
                ].map((item) => (
                  <label key={item.key}>
                    <input
                      type="checkbox"
                      name={item.key}
                      checked={inputCheck[item.key]}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span
                      className={`rounded-lg sm:rounded-xl text-center px-3 py-1 border border-customBlue1 text-customBlue1 cursor-pointer text-sm sm:text-base ${
                        inputCheck[item.key] ? "bg-gray-700 text-white" : ""
                      }`}
                    >
                      {item.label.toUpperCase()}
                    </span>
                  </label>
                ))}
              </div>

              {/* First Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="firstname" className="font-medium text-[15px] sm:text-[16px]">First Name *</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your first name"
                  value={inputVal.firstname}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="lastname" className="font-medium text-[15px] sm:text-[16px]">Last Name *</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your last name"
                  value={inputVal.lastname}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-medium text-[15px] sm:text-[16px]">Work Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your work email"
                  value={inputVal.email}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                />
                {emailError && <span className="text-red-500 text-sm">Please enter a valid email address</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="font-medium text-[15px] sm:text-[16px]">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={inputVal.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                />
                {phoneError && <span className="text-red-500 text-sm">Please enter a valid phone number</span>}
              </div>


                {/* Country */}
              <div className="flex flex-col gap-1">
                <label htmlFor="country" className="font-medium text-[15px] sm:text-[16px]">Country *</label>
                <select
                  id="country"
                  name="country"
                  value={inputVal.country}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                >
                  <option value="">Select your country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1">
                <label htmlFor="company" className="font-medium text-[15px] sm:text-[16px]">Company *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                  value={inputVal.company}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                />
              </div>

              {/* Dynamics Usage */}
              <div className="flex flex-col gap-1">
                <label htmlFor="dynamicsUsage" className="font-medium text-[15px] sm:text-[16px]">
                  Do you currently use Dynamics NAV or Business Central? *
                </label>
                <select
                  id="dynamicsUsage"
                  name="dynamicsUsage"
                  value={inputVal.dynamicsUsage}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="No">No</option>
                  <option value="Dynamics NAV">Dynamics NAV</option>
                  <option value="Business Central">Business Central</option>
                  <option value="Other">Other Dynamics Product</option>
                </select>
              </div>

              {/* Job Title */}
              <div className="flex flex-col gap-1">
                <label htmlFor="jobTitle" className="font-medium text-[15px] sm:text-[16px]">Job Title *</label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Enter your job title"
                  value={inputVal.jobTitle}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                  required
                />
              </div>

            

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="font-medium text-[15px] sm:text-[16px]">Comments/Questions</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your business needs or any specific requirements"
                  value={inputVal.message}
                  onChange={handleChange}
                  className="w-full px-3 py-3 border rounded-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-end mt-4">
              <button
                type="submit"
                disabled={
                  !inputVal.firstname ||
                  !inputVal.lastname ||
                  !inputVal.email ||
                  !inputVal.phone ||
                  !inputVal.company ||
                  !inputVal.dynamicsUsage ||
                  !inputVal.jobTitle ||
                  !inputVal.country ||
                  emailError ||
                  phoneError ||
                  isSending
                }
                className={`px-6 py-3 rounded-sm bg-gray-600 text-white text-[15px] sm:text-[16px] ${
                  isSending ||
                  !inputVal.firstname ||
                  !inputVal.lastname ||
                  !inputVal.email ||
                  !inputVal.phone ||
                  !inputVal.company ||
                  !inputVal.dynamicsUsage ||
                  !inputVal.jobTitle ||
                  !inputVal.country ||
                  emailError ||
                  phoneError
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-customBlue1 hover:bg-gray-700"
                }`}
              >
                {isSending ? "Sending..." : "Request Demo"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}