import React from 'react'
import { Menu, Button } from 'antd';
import '../css/Menu.css'
import eco from '../images/eco.png'

const Navbar = () => {
  return (
    <div className='mainNavbar'>
      <div className="topimages">
        <div className="logo1">
          <span className='eco' style={{margin:'px'}}>ECO</span>
          <span style={{backgroundColor:'red', color:'white', padding:'8px'}}>NEWS</span>
        </div>
        <div className="logo2"><img src={eco} alt="" /></div>
        <Button className='font-extrabold' danger loading>LIVE</Button>
      </div>
      <Menu mode="horizontal">
        <Menu.Item>
          Home
        </Menu.Item>
        <Menu.Item>
          UK
        </Menu.Item>
        <Menu.Item>
          World
        </Menu.Item>
        <Menu.Item>
          Politics
        </Menu.Item>
        <Menu.Item>
          US
        </Menu.Item>
        <Menu.Item>
          Climate
        </Menu.Item>
        <Menu.Item>
          Science&Tech
        </Menu.Item>
        <Menu.Item>
          Business
        </Menu.Item>
        <Menu.Item>
          Ents&Arts
        </Menu.Item>
        <Menu.Item>
          Travel
        </Menu.Item>
        <Menu.Item>
          Offbeat
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar
