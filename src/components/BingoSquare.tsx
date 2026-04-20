import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border-2 rounded-lg transition-all duration-200 select-none min-h-20 text-xs leading-tight font-body font-semibold cursor-pointer';

  let stateClasses = '';
  
  if (square.isFreeSpace) {
    stateClasses = 'bg-gradient-to-br from-neon-cyan to-neon-magenta bg-opacity-10 border-neon-cyan text-neon-cyan glow-cyan cursor-default';
  } else if (square.isMarked) {
    if (isWinning) {
      stateClasses = 'bg-gradient-to-br from-neon-purple via-neon-magenta to-neon-purple border-neon-purple text-bg-dark glow-purple shadow-lg';
    } else {
      stateClasses = 'bg-gradient-to-br from-neon-magenta to-neon-pink border-neon-cyan text-bg-dark border-glow-magenta';
    }
  } else {
    stateClasses = 'bg-gradient-to-br from-bg-dark to-bg-darker border-neon-cyan text-text-primary hover:border-neon-magenta hover:shadow-md transition-all hover:from-bg-dark hover:to-bg-dark';
  }

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="break-words hyphens-auto leading-tight">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute -top-1 -right-1 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center text-bg-dark text-xs font-bold glow-cyan shadow-lg">
          ✓
        </span>
      )}
    </button>
  );
}
