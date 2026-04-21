import React from "react";

const Button = ({
  type = "button",
  onClick,
  value,
  disabled = false,
  variantClass = "",
  variant,
  isLoading = false,
  className = "",
  customClass = "",
}) => {
  if (variant === "mobileview") {
    variantClass =
      "inline-block text-sm rounded-full bg-yellow-400 font-poppins-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs";
  }

  if (variant === "PriceBoxButton") {
    variantClass =
      "bg-white text-black px-6 py-2 rounded-2xl hover:bg-yellow-500 disabled:cursor-not-allowed";
  }

  const baseClass =
    "bg-primary  p-2 px-4 cursor-pointer rounded-3xl flex items-center justify-center font-poppins-semibold";

  return (
    <div>
      <button
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
        className={`${baseClass} ${variantClass} ${customClass} ${className} ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            {/* Spinner */}
            <span className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            <span>Loading...</span>
          </div>
        ) : (
          value
        )}
      </button>
    </div>
  );
};

export default Button;
