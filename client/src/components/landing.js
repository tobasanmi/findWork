import React, { Component } from 'react'
import Login from '../components/login'
import Header from './header'
import {Link} from 'react-router-dom'

export default class Landing extends Component {
  render() {
    return (
      <div>
        {/* <div><Header/></div> */}
        <div><Login/></div>
        <footer className="footer">
          <ul>
            <li><Link>Terms of service</Link></li>
            <li><Link>Privacy Policy</Link></li>
            <li><Link>Accessibility</Link></li>
          </ul>      
        </footer>
      </div>
    )
  }
}
