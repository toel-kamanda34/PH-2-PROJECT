
import Header from './components/Header';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <div class="bucket__lists">
        <BucketList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
