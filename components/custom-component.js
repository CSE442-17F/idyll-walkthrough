const React = require('react');
const d3 = require('d3');

const size = 600;
const squareSize = 30;

class CustomComponent extends React.Component {
  render() {
    const { hasError, updateProps, ...props } = this.props;

    const columns = this.props.columns;
    const totalElements = this.props.totalElements;

    return (

      <svg viewBox={`0 0 ${size} ${size}`}>
        {
          d3.range(totalElements).map((i) => {
            return <rect
              x={squareSize * (i % columns)}
              y={squareSize * Math.floor(i / columns)}
              width={squareSize}
              height={squareSize}
              fill={(i + (columns % 2 === 0 ? (Math.floor(i / columns) % 2) : 0)) % 2 === 0 ? 'black' : 'white'} />
          })
        }
      </svg>


    );
  }
}

module.exports = CustomComponent;
