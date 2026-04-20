interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full overflow-hidden bg-gradient-to-br from-bg-darker via-bg-dark to-bg-darker">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-neon-magenta rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,136,0.05)_25%,rgba(0,255,136,0.05)_26%,transparent_27%,transparent_74%,rgba(0,255,136,0.05)_75%,rgba(0,255,136,0.05)_76%,transparent_77%,transparent)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-xl px-4 sm:px-6">
        {/* Title with glow effect */}
        <div className="mb-4">
          <h1 className="text-5xl sm:text-7xl font-black font-heading tracking-tighter mb-2 gradient-text float-animation">
            BINGO
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-purple rounded-full"></div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-text-secondary font-heading tracking-wide mb-8 glow-magenta">
          FIND YOUR PEOPLE
        </p>

        {/* Game Rules Card */}
        <div className="mb-8 glass-glow rounded-2xl p-6 sm:p-8 border-glow-cyan backdrop-blur-xl">
          <h2 className="font-heading text-xl sm:text-2xl glow-cyan mb-4 tracking-wider">HOW TO PLAY</h2>
          <ul className="space-y-3 text-text-secondary text-sm sm:text-base font-body text-left">
            <li className="flex items-start">
              <span className="text-neon-cyan font-bold mr-3 flex-shrink-0">◆</span>
              <span>Find people who match the questions on the board</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-magenta font-bold mr-3 flex-shrink-0">◆</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className="flex items-start">
              <span className="text-neon-purple font-bold mr-3 flex-shrink-0">◆</span>
              <span>Get 5 in a row to WIN and dominate the mixer!</span>
            </li>
          </ul>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="neon-button w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-lg font-heading text-base sm:text-lg uppercase tracking-widest"
        >
          Enter Game
        </button>

        {/* Footer accent */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse animation-delay-1000"></div>
          <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
      `}</style>
    </div>
  );
}
