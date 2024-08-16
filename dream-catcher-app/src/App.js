
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import BucketListForm from './components/BucketListForm';
import './App.css';


function App() {
   // State to hold the fetched data
   const [bucketListData, setBucketListData] = useState([]);

   useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => {
        setBucketListData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleAddItem = (newItem) => {
    fetch('http://localhost:3000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        setBucketListData(prevData => [...prevData, data]);
      })
      .catch(error => {
        console.error('Error adding new item:', error);
      });
  };
 
  return (
    <div className="App">
      <Header />
      <BucketListForm onAddItem={handleAddItem} />
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
