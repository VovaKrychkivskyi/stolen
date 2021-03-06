import React from 'react';
import axios from 'axios';

export default class CopsList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4999/api/cops/all`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}--{person.status}</li>)}
      </ul>
    )
  }
}