import React from 'react';
import { obj } from './func';

function Comp2() {
    let col;
    obj.color === 'Зеленый' ? col = 'green' : col = 'red';
    const styles = {
        background: col
    }
    return (
        <div className='colorBlock' style={styles}>
    Comp2
    </div>
  )
}

export default Comp2