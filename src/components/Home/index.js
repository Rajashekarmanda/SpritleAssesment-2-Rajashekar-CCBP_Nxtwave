import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1 className="admin-heading">Welcome to Train TicketBooking Online </h1>
      <Link to="/superadmin" className="nav-link">
        <button type="button" className="button">
          Click to Start
        </button>
      </Link>
    </div>
  </>
)
export default Home
