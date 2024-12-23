import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div>
        <h2>SideBar</h2>
        <ul>
            <li><Link to = {"/"}>Feed</Link></li>
            <li><Link to={"/account"} >Account</Link></li>
        </ul>
    </div>
  )
}
