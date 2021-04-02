import React from 'react';

export function ProductRemover(props) {
  return (
        <button onClick={props.onDelete} disabled={props.isActive}>
          Delete Last Item
        </button>
    );
}
