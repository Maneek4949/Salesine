import React from 'react'
import MenuCard from './MenuCard'

const Menu = () => {
  return (
      <div className="menu">
        <div className="uppermenu">
          <h3>Contacts</h3>
        </div>
        <input type="text" placeholder="Find Contats"/>
        <MenuCard
        name={"ABC Company"}
        time={"a minute ago"}
        />
        <MenuCard
        name={"Ubisoft Co."}
        time={"1 hour ago"}
        />
        <MenuCard
        name={"Acme Co."}
        time={"* hour ago"}
        />
        <MenuCard
        name={"Tbay Inc."}
        time={"5 minute ago"}
        />
      </div>
  )
}

export default Menu