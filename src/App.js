import {Component} from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'

import TicketBookingContext from './context/TicketBookingContext'

import Home from './components/Home'
import SuperAdmin from './components/SuperAdmin'
import AgentLogIn from './components/AgentLogIn'
import NotFound from './components/NotFound'
import TrainTicketBooking from './components/TrainTicketBooking'

import './App.css'

class App extends Component {
  state = {
    agentDetails: {},
    agentName: '',
    agentEmail: '',
    isShowAgentProfile: false,
    passengerName: '',
    passengerAge: '',
    passengerDb: '',
    passengerGender: '',
    passengersList: [],
    agentLimit: '',
  }

  changeAgentName = name => {
    this.setState({agentName: name})
  }

  changeAgentEmail = email => {
    this.setState({agentEmail: email})
  }

  changeAgentLimit = limit => {
    this.setState({agentLimit: limit})
  }

  isShowAgentProfileIs = () => {
    this.setState({isShowAgentProfile: true})
  }

  changeAgentDetails = (details, rowsMax) => {
    this.setState(
      {agentDetails: details, agentLimit: rowsMax},
      this.isShowAgentProfileIs,
    )
  }

  changePassengerName = name => {
    this.setState({passengerName: name})
  }

  changePassengerAge = age => {
    this.setState({passengerAge: age})
  }

  changePassengerDb = db => {
    this.setState({passengerDb: db})
  }

  changePassengerGender = gender => {
    this.setState({passengerGender: gender})
  }

  addPassengerDetailsToList = passengerDetails => {
    this.setState(prevState => ({
      passengersList: [...prevState.passengersList, passengerDetails],
    }))
  }

  render() {
    const {
      agentName,
      agentEmail,
      agentDetails,
      isShowAgentProfile,
      agentLimit,
      passengerAge,
      passengerDb,
      passengerName,
      passengerGender,
      passengersList,
    } = this.state
    console.log(passengersList)
    return (
      <BrowserRouter>
        <TicketBookingContext.Provider
          value={{
            agentName,
            agentEmail,
            agentDetails,
            isShowAgentProfile,
            agentLimit,
            passengerName,
            passengerAge,
            passengerDb,
            passengerGender,
            passengersList,
            changeAgentName: this.changeAgentName,
            changeAgentEmail: this.changeAgentEmail,
            changeAgentDetails: this.changeAgentDetails,
            isShowAgentProfileIs: this.isShowAgentProfileIs,
            addPassengerDetailsToList: this.addPassengerDetailsToList,
            changePassengerName: this.changePassengerName,
            changePassengerAge: this.changePassengerAge,
            changePassengerDb: this.changePassengerDb,
            changePassengerGender: this.changePassengerGender,
            changeAgentLimit: this.changeAgentLimit,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/superadmin" component={SuperAdmin} />
            <Route exact path="/agent" component={AgentLogIn} />
            <Route
              exact
              path="/trainticketbooking"
              component={TrainTicketBooking}
            />
            <Route component={NotFound} />
          </Switch>
        </TicketBookingContext.Provider>
      </BrowserRouter>
    )
  }
}
export default App
