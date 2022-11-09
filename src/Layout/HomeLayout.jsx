import React from 'react'

const HomeLayout = ({title, children}) => {
  return (
    <div className='layout1'>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default HomeLayout