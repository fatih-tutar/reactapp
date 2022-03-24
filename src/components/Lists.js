import React, { Component } from 'react'

export default class Lists extends Component {
  render() {
    // Destructing
    const {name,department,salary} = this.props;
    return (
      <div>
          <ul>
            <li>İsim : {name}</li>
            <li>Departman : {department}</li>
            <li>Maaş : {salary}</li>
          </ul>
      </div>
    )
  }
}
