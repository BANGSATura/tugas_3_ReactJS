import React from 'react';

function TopEvents() {
  const handleTopEvents = (value,e) => {
    e.preventDefault();
    alert(value);
  }
  return (
    <a href="/" onClick={(e) => handleTopEvents("Back To Home",e)}>Back to Home</a>
  );
}
export default TopEvents;
