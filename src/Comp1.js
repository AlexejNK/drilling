import React, { useState } from 'react';
import { arr2 } from './Comp2';

function Comp1() {
  const [text, setText] = useState('red');

  return (
    <div
      className="btn"
      onClick={() => {
        arr2(text);
        setText(text === 'red' ? 'green' : 'red');
      }}>
      Изменить цвет на {text}
    </div>
  );
}
export default Comp1;
