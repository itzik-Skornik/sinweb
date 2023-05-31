import React, { useState } from 'react'
import Community_list from './Community_list';

function Manger({user}) {
  const [item, setItem] = useState(0);

  const handleClick = (number) => {
    setItem(number);
  };

  const renderComponent = () => {
    switch (item) {
      case 1:
        return <Community_list user={user} />;
      case 2:
        return ;
      case 3:
        return ;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
      {renderComponent()}
    </div>
  );
}

export default Manger