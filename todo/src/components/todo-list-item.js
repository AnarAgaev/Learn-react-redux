import React from 'react';

const TodoListItem = ( { label, active = false } ) => {

  const style = {
    color: active ? 'tomato' : 'black'
  };

  return <span style={ style }>{ label }</span>;
};

export default TodoListItem;