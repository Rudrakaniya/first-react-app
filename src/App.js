import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "xvv1", name: "Rudra Kaniya", age: 21 },
      { id: "xvv2", name: "Rahhi Barbool", age: 24 },
      { id: "xvv3", name: "Gaurav Thakur", age: 20 },
      { id: "xvv4", name: "Anup Singh", age: 23 },
    ],
    showPersons: true,
  };

  togglePersonsHandler = () => {
    const tempShow = this.state.showPersons;
    this.setState({ showPersons: !tempShow });
  };

  usernameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({ persons: persons });

    // this.setState({ username: event.target.value });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This thing is really working!</p>

        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {this.state.showPersons ? (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <Person
                  delete={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => {
                    this.usernameChangeHandler(event, person.id);
                  }}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
