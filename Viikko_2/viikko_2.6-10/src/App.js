import React from 'react'
import Person from './components/Person'
import AddForm from './components/AddForm'
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response.data })
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const olio = this.state.persons.find(p =>
      p.name === this.state.newName)

    if (olio === undefined) {

      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber
      }


      personService
        .create(personObject)
        .then(response => {
          console.log(response)
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: '',
            newNumber: ''
          })
        })



    } else {
      const persons = this.state.persons

      this.setState({
        persons: persons,
        newName: '',
        newNumber: ''
      })
    }
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }


  deleteFunc = (person) => {
    if (window.confirm('Haluatko varmasti poistaa?')) {
      console.log(person)
      personService
        .del(person)
        .then(response => {
          if(response.status===200){
            const arr = this.state.persons.slice(0).filter(p => p.id !== person)
            this.setState({ persons: arr })
          }
          
        })
    }
  }

  render() {
    console.log('render')
    const persons = this.state.persons

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <AddForm submitFunc={this.addPerson}
          state={this.state}
          changeNameFunc={this.handleNameChange}
          changeNumberFunc={this.handleNumberChange} />
        <h2>Numerot</h2>
        {persons.map(person =>
          <Person key={person.name}
            person={person}
            delFunc={this.deleteFunc.bind(this.person)} />)}
      </div>
    )
  }
}

export default App
