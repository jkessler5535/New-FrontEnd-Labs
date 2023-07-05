import React, {Component} from 'react'

export default class Appointments extends Component{
constructor(props){
  super(props)
  this.customerArray = props.customers
  
 
}

 render(){
  return(
    <div>
      <table>
        <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <tr>Appointment Time</tr>
        </tr>
        </thead>
        <tbody>
          {this.customersArray.map((customer, index) => (
             <tr key={index}>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.appointmentTime}</td>
             </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
 }
}