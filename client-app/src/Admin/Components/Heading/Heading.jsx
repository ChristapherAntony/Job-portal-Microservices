import React from 'react'
import './Heading.scss'
function Heading(props) {
  return (
    <div className='head-line'>
        <span>{props.text}</span>
    </div>
  )
}

export default Heading