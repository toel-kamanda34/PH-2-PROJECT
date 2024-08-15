import logo from './logo.png';
import pin from './pin.png';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> My Bucket List</h1>
      </header>

      <main class="bucket__list">
        <section class="bucket__list">
          <div class="bucket__list__img">
            <img src={logo}></img>
          </div>
          <div class="bucket__list__details">
           <div class="bucket__list__location">
            <img src={pin}></img>
            <p>Location</p>
           </div>
           <h2 class="bucket__list__header">Location header</h2>
           <p class="bucket__list__date">234412</p>
           <div class="bucket__list__summary"><p>was nice</p></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
