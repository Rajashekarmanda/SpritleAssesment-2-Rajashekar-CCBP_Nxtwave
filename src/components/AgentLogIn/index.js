import TicketBookingContext from '../../context/TicketBookingContext'
import Header from '../Header'

import './index.css'

const AgentLogIn = props => (
  <TicketBookingContext.Consumer>
    {value => {
      const {agentName, agentEmail, agentLimit} = value

      const onSubmitVerifyAgentDetails = () => {
        const {history} = props
        history.replace('/trainticketbooking')
      }

      return (
        <>
          <Header />
          <div className="agent-container">
            <div className="agent-details-container">
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
            </div>
            <form
              onSubmit={onSubmitVerifyAgentDetails}
              className="super-admin-enter-container cont"
            >
              <p className="agent-heading">
                Please fille below details to Validate your Authentication
              </p>
              <label htmlFor="mail" className="label">
                Confirm your mail-Id
              </label>
              <input
                type="text"
                placeholder="enter mail"
                id="mail"
                className="input"
              />
              <label htmlFor="password" className="label">
                Confirm your password
              </label>
              <input
                type="password"
                placeholder="confirm password"
                id="password"
                className="input"
              />
              <label htmlFor="dateofbirth" className="label">
                Date of birth
              </label>
              <input
                type="date"
                placeholder=""
                id="dateofbirth"
                className="input"
              />
              <label htmlFor="address" className="label">
                Address
              </label>
              <input
                type="text"
                placeholder=""
                id="address"
                className="input"
              />
              <label htmlFor="number" className="label">
                Phone Number
              </label>
              <input type="text" placeholder="" id="number" className="input" />
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        </>
      )
    }}
  </TicketBookingContext.Consumer>
)
export default AgentLogIn
