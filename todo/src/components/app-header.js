import React from 'react';

const AppHeader = () => {
  const titleText = 'My Todo List';
  const headerStyle = {
    fontSize: '43px',
  };
  return <h1 style={ headerStyle } >{ titleText }</h1>;
};

export default AppHeader;