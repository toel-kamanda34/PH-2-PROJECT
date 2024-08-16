import React from 'react';
import BucketList from './BucketList';

function Completed({ completedData }) {
  return (
    <section id="completed-section">
      <h2>Completed Adventures</h2>
      <div className="completed__lists">
      {completedData.length > 0 ? (
          completedData.map((item, index) => (
          <BucketList
            key={index}
            title={item.title}
            location={item.location}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
            completed={true}
          />
        ))
      ):(
        <p>No completed adventures yet.</p>
      )}
    </div>
    </section>
  );
}

export default Completed;
