import React from 'react'

const CartContext = React.createContext({
  agentDetails: {},
  agentName: '',
  agentEmail: '',
  agentLimit: 0,
  isShowAgentProfile: false,
  passengersList: [],
  passengerName: '',
  passengerAge: '',
  passengerDb: '',
  passengerGender: '',
  changePassengerName: () => {},
  changePassengerAge: () => {},
  changePassengerDb: () => {},
  changePassengerGender: () => {},
  changeAgentName: () => {},
  changeAgentEmail: () => {},
  changeAgentDetails: () => {},
  isShowAgentProfileIs: () => {},
  addPassengerDetailsToList: () => {},
  changeAgentLimit: () => {},
})

export default CartContext
