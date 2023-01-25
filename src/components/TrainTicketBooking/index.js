import {v4 as uuidv4} from 'uuid'

import Header from '../Header'
import Passenger from '../Passenger'
import TicketBookingContext from '../../context/TicketBookingContext'

import './index.css'

const TrainTicketBooking = () => (
  <TicketBookingContext.Consumer>
    {value => {
      const {
        passengersList,
        changePassengerName,
        changePassengerAge,
        changePassengerDb,
        changePassengerGender,
        passengerName,
        passengerAge,
        passengerDb,
        passengerGender,
        addPassengerDetailsToList,
      } = value

      const onChangePassengerName = event => {
        changePassengerName(event.target.value)
      }

      const onChangePassengerAge = event => {
        changePassengerAge(event.target.value)
      }

      const onChangePassengerDb = event => {
        changePassengerDb(event.target.value)
      }

      const onChangePassengerGender = event => {
        changePassengerGender(event.target.value)
      }

      const onSubmitAddPassenger = event => {
        event.preventDefault()
        const passengerDetails = {
          id: uuidv4(),
          passengerName,
          passengerAge,
          passengerDb,
          passengerGender,
        }
        addPassengerDetailsToList(passengerDetails)
      }

      return (
        <>
          <Header />
          <div className="ticket-booking-container">
            <form
              className="passengers-details-fill-form"
              onSubmit={onSubmitAddPassenger}
            >
              <label htmlFor="passengerName" className="label">
                Passenger Name
              </label>
              <input
                type="text"
                id="passengerAge"
                className="input"
                onChange={onChangePassengerName}
              />
              <label htmlFor="passengerName" className="label">
                Age
              </label>
              <input
                type="text"
                className="input"
                id="passengerAge"
                onChange={onChangePassengerAge}
              />
              <label htmlFor="passengerDb" className="label">
                Date of birth
              </label>
              <input
                type="date"
                className="input"
                id="passengerDb"
                onChange={onChangePassengerDb}
              />
              <label htmlFor="maleOrFemale" className="label">
                Male/Female
              </label>
              <input
                type="text"
                className="input"
                id="maleOrFemale"
                onChange={onChangePassengerGender}
              />
              <label htmlFor="notickets" className="label">
                No Of Tickets
              </label>
              <input type="text" className="input" id="notickets" />
              <label htmlFor="contact" className="label">
                Contact Details
              </label>
              <input type="text" className="input" id="contact" />
              <button type="submit" className="button">
                Submit
              </button>
            </form>
            <ul className="passengers-list-container">
              <h1 className="admin-heading">passengers List:</h1>
              {passengersList.length > 0
                ? passengersList.map(passenger => (
                    <Passenger details={passenger} key={passenger.id} />
                  ))
                : null}
            </ul>
          </div>
        </>
      )
    }}
  </TicketBookingContext.Consumer>
)
export default TrainTicketBooking
