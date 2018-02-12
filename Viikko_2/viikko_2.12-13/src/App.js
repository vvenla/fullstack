import React from 'react';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('will mount')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        this.setState({ countries: response.data })
      })
  }



handleChange = (event) => {
  console.log(event.target.value)
}

  render() {
    return (
      <div className="App">
        <p>
          <input
            name="filter"
            value={state.filter}
            onChange={changeFunc}
          />
        </p>

      </div>
    );
  }
}

export default App;
