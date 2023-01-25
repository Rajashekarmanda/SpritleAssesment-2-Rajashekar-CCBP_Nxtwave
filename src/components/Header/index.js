import {Link} from 'react-router-dom'
import {BiTrain} from 'react-icons/bi'

import './index.css'

const Header = () => (
  <div className="header-container">
    <BiTrain className="train" />
    <ul className="header-un-order-container">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/superadmin" className="nav-link">
        <li className="nav-link">SuperAdmin</li>
      </Link>
      <Link to="/agent" className="nav-link">
        <li className="nav-link">Agent</li>
      </Link>
    </ul>
    <Link to="/" className="nav-link">
      <button type="button" className="logout-button">
        Logout
      </button>
    </Link>
  </div>
)
export default Header
