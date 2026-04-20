interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {/* Modal Card */}
      <div className="relative z-10 bg-gradient-to-br from-bg-dark to-bg-darker rounded-2xl p-8 sm:p-12 max-w-md w-full text-center border-glow-purple glass-glow shadow-2xl animate-bounce">
        {/* Crown Icon */}
        <div className="text-7xl mb-4 animate-bounce" style={{ animationDelay: '100ms' }}>
          👑
        </div>

        {/* BINGO Text */}
        <h2 className="text-5xl sm:text-7xl font-black font-heading mb-2 glow-purple tracking-widest">
          BINGO
        </h2>

        {/* Accent Line */}
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple rounded-full mb-6"></div>

        {/* Message */}
        <p className="text-text-secondary text-base sm:text-lg font-body mb-8 uppercase tracking-wider">
          You mastered the line and dominated the mixer!
        </p>

        {/* Stats */}
        <div className="mb-8 space-y-2">
          <div className="glass rounded-lg px-4 py-2 border border-neon-cyan border-opacity-50">
            <p className="text-neon-cyan font-heading text-sm uppercase tracking-widest">STATUS: VICTORIOUS</p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onDismiss}
          className="neon-button w-full px-8 py-4 rounded-lg font-heading text-lg uppercase tracking-widest"
        >
          Continue Playing
        </button>

        {/* Decorative elements */}
        <div className="mt-6 flex justify-center gap-3">
          <div className="w-1 h-1 bg-neon-cyan rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-neon-magenta rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
          <div className="w-1 h-1 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: scale(1) translateY(0);
          }
          50% {
            transform: scale(1.05) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
