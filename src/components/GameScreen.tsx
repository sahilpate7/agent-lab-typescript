import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  const markedCount = board.filter(s => s.isMarked).length;

  return (
    <div className="flex flex-col min-h-full bg-gradient-to-br from-bg-darker via-bg-dark to-bg-darker relative overflow-hidden">
      {/* Background animation elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 glass-glow border-b border-neon-cyan border-opacity-30 backdrop-blur-xl">
        <div className="flex items-center justify-between p-4 sm:p-6">
          {/* Back Button */}
          <button
            onClick={onReset}
            className="group flex items-center gap-2 text-neon-cyan text-sm sm:text-base font-heading tracking-wider uppercase hover:text-neon-magenta transition-colors duration-200"
          >
            <span className="text-lg group-hover:translate-x-1 transition-transform">←</span>
            <span>EXIT</span>
          </button>

          {/* Title */}
          <h1 className="font-heading text-2xl sm:text-3xl font-black glow-cyan">
            BINGO
          </h1>

          {/* Score/Progress */}
          <div className="text-right">
            <div className="text-xs sm:text-sm text-text-secondary font-body uppercase tracking-widest">Marked</div>
            <div className="text-xl sm:text-2xl font-heading glow-magenta">{markedCount}/25</div>
          </div>
        </div>

        {/* Status Bar */}
        {hasBingo && (
          <div className="px-4 sm:px-6 py-3 bg-gradient-to-r from-neon-purple via-neon-magenta to-neon-purple border-t border-neon-purple border-opacity-50 animate-pulse">
            <p className="text-center font-heading text-lg sm:text-xl glow-purple tracking-widest uppercase">
              ✨ BINGO! LINE DETECTED! ✨
            </p>
          </div>
        )}
      </header>

      {/* Instructions */}
      <div className="relative z-10 text-center py-3 sm:py-4 px-4">
        <p className="text-text-secondary text-xs sm:text-sm font-body uppercase tracking-widest">
          ◆ Tap squares to find matches ◆
        </p>
      </div>

      {/* Board Container */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-3 sm:p-6">
        <div className="glass rounded-2xl p-4 sm:p-8 border-glow-cyan backdrop-blur-xl">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 glass-glow border-t border-neon-cyan border-opacity-30 py-3 px-4">
        <div className="flex justify-center gap-3">
          <div className="px-4 py-2 rounded-lg glass border border-neon-cyan border-opacity-50">
            <span className="text-neon-cyan text-xs font-heading tracking-widest">PROGRESS</span>
          </div>
          <div className="px-4 py-2 rounded-lg glass border border-neon-magenta border-opacity-50">
            <span className="text-neon-magenta text-xs font-heading tracking-widest">FOCUSED</span>
          </div>
        </div>
      </div>
    </div>
  );
}
