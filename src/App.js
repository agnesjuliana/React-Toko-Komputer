import './App.css';
import React from 'react'
import Utama from './pages/MainPage'
import { Link } from 'react-router-dom'

class App extends React.Component {
  Logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("admin")
    window.location = "/login"
  }

  render() {
    return (
      <div>
        {/* START NAVBAR */}
        <div className="navbar sticky-top navbar-expand-lg navbar-light">
                <a className="navbar-brand">
                        Computer Store
                </a>
                {/* show and hide menu */}
                <button className="navbar-toggler" data-toggle="collapse"
                    data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto mx-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product" className="nav-link">
                                PRODUCT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/transaction" className="nav-link">
                                TRANSACTION
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/customer" className="nav-link">
                                CUSTOMER
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">
                                ADMIN
                            </Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <Link className="nav-link" onClick={() => this.Logout()}>
                            Logout
                        </Link>
                    </span>
                </div>
            </div>
        {/* END NAVBAR */}

        {/* START BODY */}
        <Utama/>
        {/* END BODY */}
      </div>
    );
  }
}

export default App;