import React from 'react';
import Person from './components/Person'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: props.persons,
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    const olio = this.state.persons.find(p =>
      p.name === this.state.newName)

    if (olio === undefined) {

      const personObject = {
        name: this.state.newName
      }

      const persons = this.state.persons.concat(personObject)

      this.setState({
        persons: persons,
        newName: ''
      })

    } else {
      const persons = this.state.persons

      this.setState({
        persons: persons,
        newName: ''
      })
    }
  }

  handlePersonChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    const persons = this.state.persons

    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form onSubmit={this.addPerson}>
          nimi: <input
            value={this.state.newName}
            onChange={this.handlePersonChange}
          />
          <button type="submit">lisää</button>
        </form>

        <h2>Numerot</h2>
        <div>
          <ul>
            {persons.map(person =>
              <Person key={person.name} person={person} />)}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
