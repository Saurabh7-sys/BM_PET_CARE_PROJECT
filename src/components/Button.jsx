import React from 'react'

const Button = ({children, className = "", onClick, type = "button", bgColor = "bg-charcoalGray", hoverColor = "hover:bg-[#6d6d6d]"}) => {
  return (
    <div>
      <button
        className={`${bgColor} ${hoverColor} hover:shadow-lg hover:scale-95 transition-all duration-300 px-5 py-2 rounded-full text-white ${className}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
  