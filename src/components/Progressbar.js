import React from 'react';
import './Progressbar.css'

export const Progressbar = ({percentage}) => {

//     ${type} percentage;
// const span = {
//   @if $type == ocean {
//     backgroundColor: 'tomato'
//   } @else if $type == matador {
//     backgroundColor: 'tomato'
//   } @else if $type == monster {
//     backgroundColor: 'tomato'
//   } @else {
//     backgroundColor: 'tomato'
//   }
// }

    const progressbar = {
        display: 'flex',
        justifyContent:'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '1rem', 
        backgroundColor: 'whitesmoke',
        borderRadius: '5px'
    }

    const span = {
        width: `${percentage}%`,
        height: '1rem',
        borderRadius: '5px',
        backgroundColor: `${percentage<=33 ? 'tomato' : percentage >33 && percentage <=66 ? 'yellow' : percentage>66 ? 'green' : 'tomato' }`
    }

  return (
    <div style={progressbar}>
        <span style={span}></span>
    </div>
  );
};
