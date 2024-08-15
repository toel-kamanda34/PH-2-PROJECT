import React from 'react'
import logo from '../logo.png';
import pin from '../pin.png';

function BucketList() {
  return (
    <div>
      <main class="bucket__lists">
        <section class="bucket__list">
          <div class="bucket__list__img">
            <img src={logo} alt="pin"></img>
          </div>
          <div class="bucket__list__details">
           <div class="bucket__list__location">
            <img src={pin } alt="logo"></img>
            <p class="bucket__list__location__country">Location</p>
           </div>
           <h2 class="bucket__list__header">Location header</h2>
           <p class="bucket__list__date">234412</p>
           <div class="bucket__list__summary"><p>was nice</p></div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BucketList
