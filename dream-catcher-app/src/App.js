
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import './App.css';


function App() {
   // State to hold the fetched data
   const [bucketListData, setBucketListData] = useState([]);

   useEffect(() => {
         fetch('http://localhost:3000/data') 
       .then(response => response.json())
       .then(data => {
         setBucketListData(data); // Save the data to state
         console.log(data);
       })
       .catch(error => {
         console.error('Error fetching data:', error);
       });
   }, []); // Empty to ensure this runs onca
 
  return (
    <div className="App">
      <Header />
      <div class="bucket__lists">
        {bucketListData.map((item, index) => (
          <BucketList 
            key={index} 
            title={item.title} 
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
