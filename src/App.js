import './App.css';
import styled from 'styled-components';

const Table = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const AVAILABLE = 0;
const CONFIRMED = 1;
const WALK_IN = 2;
const BOOKED = 3;
const NOT_AVAILABLE = 4;

const tables = [
  {
    name: 'table1',
    x_pos: 0,
    y_pos: 0,
    width: 100,
    height: 100,
    radius: 50,
    status: AVAILABLE,
  },
  {
    name: 'table_sebelah',
    x_pos: 90,
    y_pos: 0,
    width: 100,
    height: 100,
    radius: 50,
    status: WALK_IN,
  },
  {
    name: 'table2',
    x_pos: 5,
    y_pos: 11,
    width: 100,
    height: 350,
    radius: 10,
    status: NOT_AVAILABLE,
  }
]

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const statusColorMap = {
  [AVAILABLE]: 'gray',
  [CONFIRMED]: 'green',
  [WALK_IN]: 'blue',
  [BOOKED]: 'yellow',
  [NOT_AVAILABLE]: 'black'
};

function App() {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      Select a table
      {tables.map((table) => (
        <Table
          key={table.name}
          top={table.y_pos}
          left={table.x_pos}
          width={table.width}
          height={table.height}
          borderRadius={table.radius}
          onClick={function(e) {
            e.target.style.backgroundColor = getRandomColor();
          }}
          backgroundColor={statusColorMap[table.status]}
        />
      ))}
    </div>
  );
}

export default App;
