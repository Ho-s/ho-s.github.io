import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ float: `left`, marginRight: `1rem` }}>
    <Link style={{textDecoration:'none',color:'black'}} to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header style={{marginBottom: `1.45rem`,}}>
    <div style={{margin: `0 auto`,maxWidth: 960,padding: `1.45rem 1.0875rem`,}}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{color: `black`,textDecoration: `none`,}}>
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
