import React from 'react';

const DonateFeed = ({ donations }) => {
  return (
    <div>
      <h2>Look What Just Came In!</h2>
      <ul>
        {donations.map((donation, index) => (
          <li key={index}>
            Someone just donated an item to {donation.category} in a size {donation.size}!
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonateFeed;
