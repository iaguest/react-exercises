import React from 'react';

export function Equation(props) {
  return (
      <div className="equation">
        <p className="text">{
          `${props.eqn.x} + ${props.eqn.y} + ${props.eqn.z} = ${props.eqn.p}`}
        </p>
      </div>
    );
}
