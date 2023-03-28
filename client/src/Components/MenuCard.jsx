import React from 'react'
import pp from "../assests/img/pp.jpg"
const MenuCard = ({name, time}) => {
  return (
      <div className="menuCard">
        <img src={pp} alt="profile"/>
        <h6>{name}</h6>
        <p>{time}</p>
      </div>
  )
}

export default MenuCard