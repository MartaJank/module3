import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Container from './components/Container';
import Message from './components/Message';

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Navbar />
        <Signup />

        {/* Bonus Iteration */}

        <Container>
          <Message isInfo title="Hello World">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <strong>Pellentesque risus mi</strong>.
          </Message>
        </Container>
      </div>
    );
  }
}

export default App;
