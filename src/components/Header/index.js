import React from 'react'
import Link from 'gatsby-link'

import './header.scss'

import Logo from '../../../static/assets/menu-logo.svg'

class Menu extends React.Component  {
  constructor(props){
    super(props)
    this.state= {
      width: 0
    }
  }

  updateDimensions = () => {
    this.setState({width:document.body.clientWidth})
  }

  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(){
    const linkStyle = {
      display: 'flex',
      justifyContent: 'center',
      backgroundImage: 'none',
      color: '#5799a9'
    }

    if (this.state.width > 560) {
      return (
        <ul
          style={{
            width: '100%',
            lineHeight: 'normal',
            margin: '0',
            marginLeft: 16,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            listStyleType: 'none',
            color: 'white'
          }}
        >
          <Link
            to="/about/"
            style={{color: 'white', textShadow: 'none'}}
          >
            <li>About</li>
          </Link>
          <Link
            to="/ux-design/"
            style={{color: 'white', textShadow: 'none'}}
          >
            <li>UX</li>
          </Link>
          <Link
            to="/dev-stack/"
            style={{color: 'white', textShadow: 'none'}}
          >
            <li>Dev</li>
          </Link>
          <Link
            to="/blog/"
            style={{color: 'white', textShadow: 'none'}}
          >
            <li>Blog</li>
          </Link>
          <Link
            to="/contact/"
            style={{color: 'white', textShadow: 'none'}}
          >
            <li>Contact</li>
          </Link>
        </ul>
      )
    } else {
      return (
        <div
          className="mobile-app-bar"
          style={{
            position: 'fixed',
            display: 'flex',
            justifyContent: 'center',
            height: '60px',
            bottom: 0,
            left: 0,
            width: '100%',
            background: '#eee',
            fontFamily: 'sans-serif'
          }}
        >
          <Link
            to="/about/"
            style={linkStyle}
          >
            <span>About</span>
          </Link>
          <Link
            to="/ux-design/"
            style={linkStyle}
          >
            <span>UX</span>
          </Link>
          <Link
            to="/dev-stack/"
            style={linkStyle}
          >
            <span>Dev</span>
          </Link>
          <Link
            to="/blog/"
            style={linkStyle}
          >
            <span>Blog</span>
          </Link>
          <Link
            to="/contact/"
            style={linkStyle}
          >
            <span>Contact</span>
          </Link>
        </div>
      )
    }
  }
}

const Header = () => (
  <div
    className='header'
    style={{
      background: '#5799a9',
      marginBottom: '1.45rem',
      boxShadow: '0px 2px 5px 0px rgba(186,186,186,1)'

    }}
  >
    <div
      style={{
        display: 'flex',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.10rem 1rem',
      }}
    >
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textShadow: 'none'
          }}
        >
          <svg style={{
            width: 150,
            height:50
          }}>
            <use xlinkHref={`#${Logo.id}`}/>
          </svg>
        </Link>
      </span>
      <Menu />
    </div>
  </div>
)

export default Header
