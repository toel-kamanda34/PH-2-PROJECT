
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import BucketList from './components/BucketList';
import Footer from './components/Footer';
import BucketListForm from './components/BucketListForm';
import Completed from './components/Completed';
import './App.css';


function App() {
   // State to hold the fetched data
   const [bucketListData, setBucketListData] = useState([]);
   const [completedData, setCompletedData] = useState([]);
   const location = useLocation();
   useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://bucketlist-server.onrender.com/data')
      .then(response => response.json())
      .then(data => {
        setBucketListData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
 
  const handleAddItem = (newItem) => {
    fetch('https://bucketlist-server.onrender.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        setBucketListData(prevData => {
          const updatedData = [...prevData, data];
          setCompletedData(updatedData.filter(item => item.completed)); // Update completed data
          return updatedData;
        });
      })
      .catch(error => {
        console.error('Error adding new item:', error);
      });
  };
  
  const handleCompleteItem = (index) => {
    const updatedBucketList = [...bucketListData];
    updatedBucketList[index].completed = true;

    setBucketListData(updatedBucketList);
    setCompletedData(updatedBucketList.filter(item => item.completed));

    fetch(`https://bucketlist-server.onrender.com/data/${updatedBucketList[index].id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: true }),
    }).catch(error => console.error('Error updating item:', error));
  };
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className="App">
        
        <Header />  
        <BucketListForm onAddItem={handleAddItem} />
        <section id="bucket-list-section">
        <div class="bucket__lists" >
          <h2>Bucket List</h2>
            {bucketListData.map((item, index) => (
              <BucketList 
                key={index} 
                title={item.title} 
                location={item.location}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
                onComplete={() => handleCompleteItem(index)}
                completed={item.completed}
            />
          ))}
          </div>

     </section>
     <section id="completed-section">
     <Completed completedData={completedData} onCompleteItem={handleCompleteItem} />
     </section>
      
      <Footer />
    </div>
  );
}

export default App;