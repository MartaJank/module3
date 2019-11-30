import React from 'react';
import './App.css';
import Card from './Card';

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';

const ihLogo = '/images/ironhack-logo.svg';
const reactLogo = '/images/react-logo.svg';
const menuBarImage = '/images/menu-top.svg';

class AppWithCardComponent extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <nav>
            <img src="/images/ironhack-logo.svg" alt="" />
            <img src="/images/menu-top.svg " alt="" />

            {/*  OR
            <img src={ihLogo} alt="" />
            <img src={menuBarImage} alt="" />
             */}
          </nav>

          <section className="content">
            <div>
              <h1>Say hello to ReactJS</h1>
              <p>
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer.
              </p>
              <button>Awesome!</button>
            </div>

            <div className="logo-panel">
              <img src={reactLogo} alt="" />
            </div>
          </section>
        </main>

        <section className="card-panel">
          <Card image={icon1} title="Declarative" />
          {/* <Card image="/images/icon1.png" title="Declarative" /> */}

          <Card image={icon2} title="Components" />

          <Card image={icon3} title="Single-Way" />

          <Card image={icon4} title="JSX" />
        </section>
      </div>
    );
  }
}

export default AppWithCardComponent;
