import React from 'react';
import {obj} from './func'

function Comp1() {
    let colorBtn;
    obj.color === 'Зеленый' ? (colorBtn = 'Красный') : (colorBtn = 'Зеленый');
    return (
      <div className='btn' onClick={()=>obj.func()}>
          Изменить цвет на {colorBtn}
      </div>
  )
}

export default Comp1