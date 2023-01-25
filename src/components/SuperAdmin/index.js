import TicketBookingContext from '../../context/TicketBookingContext'
// import AgentLogIn from '../AgentLogIn'
import Header from '../Header'

import './index.css'

const SuperAdmin = props => (
  <TicketBookingContext.Consumer>
    {value => {
      const {
        changeAgentName,
        changeAgentEmail,
        agentName,
        agentEmail,
        changeAgentDetails,
        isShowAgentProfile,
        agentLimit,
        changeAgentLimit,
      } = value
      const onChangeAgentName = event => {
        changeAgentName(event.target.value)
      }
      const onChangeAgentEmail = event => {
        changeAgentEmail(event.target.value)
      }
      const onChangeAgentLimit = event => {
        changeAgentLimit(event.target.value)
      }

      const onCreateAgent = event => {
        event.preventDefault()
        const userDetailsIs = {
          agentName,
          agentEmail,
          agentLimit,
        }
        changeAgentDetails(userDetailsIs, agentLimit)
      }

      const onSubmitGoToAgentPage = event => {
        event.preventDefault()
        /* const {params} = props */
        const {history} = props
        history.replace('/agent')
      }

      return (
        <>
          <Header />
          <div className="super-admin-container">
            <div className="super-admin-enter-container">
              <h1 className="admin-heading">SuperAdmin</h1>
              <p className="admin-para">Fill Below Details To Create Agent</p>
              <form onSubmit={onCreateAgent}>
                <label htmlFor="agentName" className="label">
                  Agent Name
                </label>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="enter agent name "
                  id="agentName"
                  onChange={onChangeAgentName}
                />
                <br />
                <label htmlFor="agentName" className="label">
                  Agent Email
                </label>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="enter agent email id "
                  id="agentEmail"
                  onChange={onChangeAgentEmail}
                />
                <br />
                <label htmlFor="agentLimit" className="label">
                  Agent Bookings Limit
                </label>
                <br />
                <input
                  type="text"
                  className="input"
                  placeholder="enter agent email id "
                  id="agentLimit"
                  onChange={onChangeAgentLimit}
                />
                <br />
                <button type="submit" className="button">
                  Create Agent
                </button>
              </form>
            </div>
            <div className="super-admin-enter-container">
              <h1 className="admin-heading">New Agents Details</h1>
              {isShowAgentProfile ? (
                <form onSubmit={onSubmitGoToAgentPage}>
                  <h1 className="admin-para">
                    agent Name: <span className="span">{agentName}</span>
                  </h1>
                  <p className="admin-para">
                    Agent Email: <span className="span">{agentEmail}</span>
                  </p>
                  <p className="admin-para">
                    Agent have limit to booking tickets{' '}
                    <span className="span">{agentLimit}</span>
                  </p>
                  <button type="submit" className="button">
                    Verify & LogIn
                  </button>
                </form>
              ) : null}
            </div>
          </div>
        </>
      )
    }}
  </TicketBookingContext.Consumer>
)
export default SuperAdmin
