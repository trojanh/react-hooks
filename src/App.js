import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    term: '',
    items: [],
  }

  handleInput = ({target: {value}}) =>{
    this.setState({
      term: value
    })
  }

  addTodo = (event) =>{
    const {items, term} =this.state
    event.preventDefault();
    this.setState({
      term: '',
      items: [...items, term]
    })
  }

  deleteTodo = (index) =>{
    console.log(index);

    this.setState({
      items: this.state.items.filter( (item, itemPosition) =>
        index !== itemPosition
      )
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1><u>Todos</u></h1>
          {
            this.state.items.map((item, index) =>
                <li key={item+index}>
                    {item}
                  <button onClick={() => this.deleteTodo(index)}>X</button>
                </li>

              )
          }
          <form action="submit" onSubmit={this.addTodo}>
            <input value={this.state.term} onChange={this.handleInput}/>
            <button>Submit</button>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
