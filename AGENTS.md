# Bingo Mixer - Agent Instructions

Welcome to the **Bingo Mixer** codebase! This is a social bingo game built with React, TypeScript, Vite, and Tailwind CSS v4. The project serves as a hands-on workshop for learning VS Code GitHub Copilot Agent Mode.

## 🚀 Quick Start
- **Dev server**: `npm run dev` (runs on http://localhost:5173)
- **Build**: `npm run build`
- **Test**: `npm run test` (Vitest with 41 tests)
- **Lint**: `npm run lint`

## 🏗️ Architecture Overview

### Tech Stack
- **Frontend**: React 19 + TypeScript
- **Build**: Vite 8
- **Styling**: Tailwind CSS v4 (CSS-first configuration)
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint with TypeScript rules

### Key Directories
- `src/components/` - React components (StartScreen, GameScreen, BingoBoard, etc.)
- `src/hooks/` - Custom React hooks (useBingoGame)
- `src/utils/` - Game logic (bingoLogic.ts with comprehensive tests)
- `src/types/` - TypeScript type definitions
- `src/data/` - Static data (questions pool)

### Game Flow
1. **Start Screen** → User clicks "Start Game"
2. **Game Screen** → 5x5 bingo board with social questions
3. **Interactions** → Click squares to mark when finding matching people
4. **Win Detection** → Automatic bingo detection (rows, columns, diagonals)
5. **Celebration** → Bingo modal with confetti

## 🤖 Specialized Agents

This workspace includes several specialized agents for different development tasks:

### Core Development Agents
- **[TDD Supervisor](.github/agents/tdd.agent.md)** - Orchestrates full TDD cycles
- **[TDD Red](.github/agents/tdd-red.agent.md)** - Writes failing tests
- **[TDD Green](.github/agents/tdd-green.agent.md)** - Implements minimal code to pass tests
- **[TDD Refactor](.github/agents/tdd-refactor.agent.md)** - Improves code quality

### Design & UI Agents
- **[UI Review](.github/agents/ui-review.agent.md)** - Reviews UI/UX implementations
- **[Pixel Jam](.github/agents/pixel-jam.agent.md)** - Rapid UI prototyping

### Domain-Specific Agents
- **[Quiz Master](.github/agents/quiz-master.agent.md)** - Manages quiz/question functionality

## 📋 Development Guidelines

### Code Quality
- **TypeScript strict mode** enabled
- **ESLint** with React hooks and refresh plugins
- **Comprehensive test coverage** (41 tests covering all bingo logic)
- **Prettier** not configured (use ESLint formatting)

### Testing Strategy
- **Unit tests** for all utility functions (bingoLogic.ts)
- **Integration tests** for React components
- **Test-driven development** encouraged via TDD agents

### Styling Conventions
- **Tailwind CSS v4** with CSS-first configuration
- **Custom design system** - avoid generic AI aesthetics
- See [Frontend Design Instructions](.github/instructions/frontend-design.instructions.md)
- See [Tailwind CSS v4 Guide](.github/instructions/tailwind-4.instructions.md)

### Component Patterns
- **Functional components** with hooks
- **Custom hooks** for complex state logic
- **TypeScript interfaces** for all data structures
- **Separation of concerns**: UI components vs. game logic

## 🔧 Common Tasks

### Adding New Features
1. Use TDD Supervisor agent for test-driven development
2. Follow existing patterns in `src/components/` and `src/hooks/`
3. Add types to `src/types/index.ts`
4. Update tests in `src/utils/bingoLogic.test.ts`

### Modifying Game Logic
- Core logic in `src/utils/bingoLogic.ts`
- Questions pool in `src/data/questions.ts`
- Always update corresponding tests

### UI/UX Changes
- Use UI Review agent for feedback
- Follow Tailwind CSS v4 patterns
- Test responsive design across devices

## 📚 Workshop Context

This codebase is part of a **VS Code GitHub Copilot Agent Lab**. The workshop teaches:
- Context engineering for AI productivity
- Agentic development workflows
- Multi-agent collaboration patterns

See [Workshop Guide](workshop/GUIDE.md) for detailed learning paths.

## 🚨 Important Notes

- **Node.js 22+** required
- **Dev container** support available (`.devcontainer/`)
- **GitHub Pages** deployment configured
- **Free space** always marked in center of bingo board
- **Immutable updates** for React state management

---

*For detailed workshop instructions, see [workshop/](workshop/) directory.*</content>
<parameter name="filePath">/Users/sahilpate/WebstormProjects/agent-lab-typescript/AGENTS.md