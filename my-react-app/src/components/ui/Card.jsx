import React from 'react'

const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  ...props 
}) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden
        ${hover ? 'hover:shadow-md transition-shadow duration-200' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card