import React from 'react';
import axios from 'axios';

export default class BikeList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4999/users/all`)
      .then(res => {
        const persons = res.data;
        this.setState({persons});
      })
  }

  render() {
    return (
      <ul>
        {this.state.persons.map(person => <li>{person.bike_name}--{person.status}</li>)}
      </ul>
    )
  }
}