// Create a chessboard with 8x8 squares
// Each square will be a 1x1 unit square
// The chessboard will be 8x8 units in total

const squareSize = 1;
const boardSize = 8;

function Square({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <mesh position={[x, y, 0]}>
      <boxGeometry args={[squareSize, squareSize, 0.1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Chessboard() {
  return (
    <group>
      {Array.from({ length: boardSize }, (_, i) => (
        <group key={i}>
          {Array.from({ length: boardSize }, (_, j) => (
            <Square
              key={j}
              x={boardSize / 2 - i}
              y={boardSize / 2 - j}
              color={(i + j) % 2 === 0 ? "#f2f2f2" : "#333"}
            />
          ))}
        </group>
      ))}
    </group>
  );
}
