import * as React from 'react';

// Delete me
export const Thing = () => {
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log('Sent');
        }}
      >
        <input placeholder="Type your name" type="text" />
        <button type="submit">PRESS ME, PLEEEEAAAASE!</button>
      </form>
    </div>
  );
};
