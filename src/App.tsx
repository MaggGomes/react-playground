import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import logo from './logo.svg';
import './App.css';

interface BaseProps {}
interface State {
  response: any
  endpoint: string
}

class App extends Component<BaseProps> {
  state: State

  constructor(props: BaseProps){
    super(props);
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", (data: any) => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;

    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{ textAlign: "center" }}>
          {response
              ? <p>
                The temperature in Florence is: {response} °F
              </p>
              : <p>Loading...</p>}
        </div>
    </div>
    )};
}

export default App;
