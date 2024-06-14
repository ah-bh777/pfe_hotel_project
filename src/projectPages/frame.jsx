import React from 'react';

const Frame = ({ roomId, name }) => {

  return (
    <>
      <div>Name: {name}</div>
      <div>Room ID: {roomId}</div>
    </>
  );
};

export default Frame;
