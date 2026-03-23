# Part 4: Multi-Agent Development

[← Part 3](03-quiz-master.md)

---

## Task 1: Agent Hooks — Test Gate for TDD Green

[Agent hooks](https://code.visualstudio.com/docs/copilot/customization/hooks) execute shell commands at key lifecycle points during agent sessions. We'll add a **Stop hook** to TDD Green so it can't stop until all tests pass.

**Steps:**

1. Enable agent-scoped hooks in VS Code Settings:
   - Set `chat.useCustomAgentHooks` to `true`
2. Create the hook script `.github/hooks/check-tests.sh`:

   ```bash
   #!/bin/bash
   # Read stdin JSON to check if hook already fired (prevent infinite loops)
   INPUT=$(cat)
   STOP_HOOK_ACTIVE=$(echo "$INPUT" | python3 -c "import sys,json; print(json.load(sys.stdin).get('stop_hook_active', False))" 2>/dev/null)

   if [ "$STOP_HOOK_ACTIVE" = "True" ]; then
     echo '{}'
     exit 0
   fi

   # Run tests
   npx vitest run 2>&1
   TEST_EXIT=$?

   if [ $TEST_EXIT -ne 0 ]; then
     echo '{"hookSpecificOutput":{"hookEventName":"Stop","decision":"block","reason":"Tests are still failing — keep implementing until they pass."}}'
     exit 0
   fi

   echo '{}'
   exit 0
   ```

3. Make it executable: `chmod +x .github/hooks/check-tests.sh`
4. Open `.github/agents/tdd-green.agent.md` and add the hook to the YAML frontmatter:

   ```yaml
   hooks:
     Stop:
       - type: command
         command: .github/hooks/check-tests.sh
   ```

5. Verify the hook loads: open the **GitHub Copilot Chat Hooks** output channel (Output panel → channel dropdown)

✅ **Result:** TDD Green now has a safety net — it will keep working until all tests pass before handing back control.

---

## Task 2: New Bingo Pattern (TDD-Driven)

Use the TDD Supervisor to add a "Four Corners" bingo pattern. The hook you just set up will keep TDD Green going if tests fail.

**Steps:**

1. New chat with agent: `TDD Supervisor`
2. *Add a "Four Corners" bingo win pattern — all four corner squares (top-left, top-right, bottom-left, bottom-right) must be marked*
3. Watch TDD Supervisor orchestrate:
   - **TDD Red** writes failing tests for Four Corners detection
   - Review the new tests in VS Code's test runner
   - **TDD Green** implements the minimal code to pass — hook fires on stop, keeps it going if tests fail
   - **TDD Refactor** cleans up the implementation
4. Review the summary of changes

✅ **Result:** Orchestrated TDD cycle with automatic test gating — no manual handoffs between agents.

---

## Task 3: Verify with Agent Debug Logs

Inspect what happened under the hood — did the hook fire? How did agents communicate?

**Steps:**

1. Open Agent Debug Logs: gear icon (⚙️) in Chat view → **Show Agent Debug Logs**
2. **Logs view:** filter for hook execution events during TDD Green
3. **Agent Flow Chart:** visualize the TDD Supervisor → Red → Green → Refactor orchestration
4. **Summary view:** review total tool calls and token usage

**Bonus:** Click the ✨ sparkle icon to attach debug events to a new chat, then ask: `/troubleshoot did the Stop hook fire during TDD Green?`

✅ **Result:** Full observability into multi-agent orchestration and hook execution.

---

## Task 4: Card Deck Shuffle (Design-Driven)

Break down agent workflows into specific focus areas, like design-first.

**Steps:**

1. New chat with agent: `Pixel Jam`
2. *New mode: Card Deck Shuffle. Every player opens the game → taps → gets a random card with a question.*
3. Agent iterates on the UI
4. Follow up to make it work like you want:
   - *Add left/right (fail, success)*
   - *Draw a card right when I open it*
5. Commit

---

## Task 5: UX Review Agent

Combine MCP, custom workflows, and subagent isolation in an agent for powerful workflows. Focus on different aspects, like usability, a11y, compliance.

**Steps:**

1. New chat with agent: `Pixel Jam`: *Run review*
2. Keep the app open in VS Code browser preview while the review runs
3. Follow along as it reviews
   - Aside: Open `.github/agents/pixel-jam.agent.md` to review the prompt
4. Behold a mighty in-depth review

**Bonus:**
- File findings as issues on GitHub for later
- Assign critical issues to coding agent to fix

---

## Bonus: Keep Going

- Fix UX review problems, delegated to background or cloud agent
- Add ability to have multiple question themes to pick from
- Add social sharing to win state
- Make a real iOS or full-stack app?

---

## ✅ Part 4 Complete!

You've learned how to:
- Add agent hooks to enforce quality gates (Stop hook on TDD Green)
- Use TDD Supervisor to orchestrate Red → Green → Refactor automatically
- Inspect agent behavior with Agent Debug Logs and Flow Charts
- Use design-first agents for UI-driven development
- Run UX review agents for comprehensive testing
- Combine multiple agent types for complex workflows

### Keep Going

- 📺 [VS Code on YouTube](https://www.youtube.com/code)
- 📖 [VS Code Copilot Docs](https://code.visualstudio.com/docs/copilot/overview)
- 🌟 [Awesome Copilot](https://github.com/github/awesome-copilot)
