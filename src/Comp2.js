import React, { useState } from 'react';

let arr2;

function Comp2() {
  const [color, setColor] = useState('green');
  React.useEffect(() => {
    const func2 = (currentColor) => { setColor(currentColor)};
    arr2 = func2;

},[])
  const styles = {
    background: color,
  };

  return (
    <div className="colorBlock" style={styles}>
      Comp2
    </div>
  );
}
export default Comp2;
export { arr2 };
