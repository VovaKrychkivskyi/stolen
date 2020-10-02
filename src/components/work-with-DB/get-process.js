import React from 'react';
import axios from 'axios';

export default class ProcessList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4999/api/cops/process`)
      .then(res => {
        const persons = res.data;
        this.setState({persons});
      })
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => <li>
          bike id : {person.bike_id}<br/>
          bike status : {person.status}<br/>
          officer id : {person.officer_id}<br/>
          officer name : {person.officer_name}<br/>
        </li>)}
      </ul>
    )
  }
}