# AI assistant

The AI assistant lives in a right-side panel and supports Chat and Agent modes.

## Models

Open **Settings → Models**, add a provider and API key, save, and test connectivity. Routing takes effect immediately without a restart.

Switch between models, run batch connectivity tests, and check DeepSeek balance.

## Chat mode

For Q&A, writing, code explanation and research. Responses stream, with stop, regenerate and reply branches.

## Agent mode

For multi-step tasks: read files, run commands, call skills, maintain a plan, and show tool calls and progress.

Agent shows a command summary and asks for confirmation before running terminal commands. Unconfirmed commands do not run.

## Skills

Type `/` to select a skill, or let the model choose. The Skill Center can enable or disable skills and shows dependency conflicts.

## Sessions

- Multiple sessions with rename, archive and search
- Session history syncs with your account
- Context compression and usage indicator
- Message actions and timestamps

## Context and attachments

Images, document attachments, web search and citations. Deep-thinking content is collapsed, and answers can be followed up.

## Security

- Command execution requires confirmation
- Plugin calls are permission-checked
- API keys are not written to browser localStorage
- Model requests read encrypted configuration on the server
