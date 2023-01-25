import './index.css'

const Passenger = props => {
  const {details} = props
  const {passengerName, passengerAge} = details

  const num = Math.floor(Math.random() * 30)

  return (
    <li className="passenger-container">
      <div>
        <h1 className="admin-heading h"> Passenger Details:</h1>
        <h1 className="admin-para t">
          <span className="span">Passenger Name:</span>
          {passengerName}
        </h1>
        <p className="admin-para t">
          <span className="span">Age:</span>
          {passengerAge}
        </p>
      </div>
      <div className="cont-is">
        <h1 className="admin-para t">
          No of Tickets: <span className="span">1</span>
        </h1>
        <h1 className="admin-para t">
          Seat No: <span className="span">{num}</span>
        </h1>
      </div>
    </li>
  )
}
export default Passenger
