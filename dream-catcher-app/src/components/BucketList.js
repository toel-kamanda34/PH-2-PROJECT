import React from 'react'

import pin from '../pin.png';

function BucketList(props) {
  return (
    <div>
      <main class="bucket__lists">
        <section class="bucket__list">
          <div class="bucket__list__img">
            <img src={props.imageUrl} alt="pin"></img>
          </div>
          <div class="bucket__list__details">
           <div class="bucket__list__location">
            <img src={pin } alt="logo"></img>
            <p class="bucket__list__location__country">{props.location}</p>
           </div>
           <h2 class="bucket__list__header">{props.title}</h2>
           <p class="bucket__list__date">{props.startDate} - {props.endDate}</p>
           <div class="bucket__list__summary"><p>{props.description}</p></div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BucketList
