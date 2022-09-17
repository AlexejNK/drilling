import App from './App';
import root from '.';
const styleBlocks = ['Зеленый', 'Красный'];

const obj = {
  func: function () {
    this.color === styleBlocks[0] ? (this.color = styleBlocks[1]) : (this.color = styleBlocks[0]);
    root.render(<App />);
  },
  color: styleBlocks[0],
};
export { obj };
