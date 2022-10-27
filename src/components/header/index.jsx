import { Link, React, openTab,useDispatch, getItem } from "components";
import { useState } from "react";
import { utilityAction } from "reduxStore";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const dispatch = useDispatch()

  const logout = () =>{
    dispatch(utilityAction.setLoading("content"));
    setTimeout(() => {
      localStorage.clear()
      dispatch(utilityAction.stopLoading());
      window.location.reload()
    }, 500);
    
  }
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            to="#"
            role="button"
          >
            <i className="fas fa-bars"></i>
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link
            onClick={() =>
              openTab("https://github.com/samsularifin05/admin-lte-react")
            }
            to="#"
            className="nav-link"
          >
            Download Project
          </Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div className="nav-item dropdown" onMouseEnter={toggleMenu} >
            <Link
              to="#"
              
              className="nav-link dropdown-toggle user-action"
            >
              <img
                src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                className="avatar"
                alt="Avatar"
              />{" "}
              {getItem('userdata').nama_lengkap} <b className="caret"></b>
            </Link>
            <div
              className={`dropdown-menu ${menu ? "show" : ""}`}
              onMouseLeave={() => setMenu(false)}
            >
              <button type="button" className="dropdown-item">
                <i className="fa fa-user"></i> Profile
              </button>
              <button type="button" className="dropdown-item" onClick={()=>logout()}>
                <i className="nav-icon fas fa-arrow-right-from-bracket"></i> Logout
              </button>
            
            </div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="fullscreen"
            to="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
