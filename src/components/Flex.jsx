import React from 'react'

const Flex = ({children, className}) => {
  return (
    <div className={`flex flex-col gap-y-5 md:flex-row items-center ${className}`}>{children}</div>
  )
}

export default Flex
