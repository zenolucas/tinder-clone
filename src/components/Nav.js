const Nav = ({minimal, authToken}) => {

    return (
      <nav>
          <div className="logo-container">
              <img className="logo" src={minimal ? colorLogo : whiteLogo}
          </div>

          {!authToken && <button className="nav-button"}>Log In</button>}
      </nav>
    )
}

export default Nav