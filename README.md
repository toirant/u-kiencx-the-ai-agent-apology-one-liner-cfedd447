# The AI Agent Apology One-Liner

[![make.fun](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![rank](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/toirant/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/rank.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)
[![reward](https://make.fun/badge/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/toirant/u-kiencx-the-ai-agent-apology-one-liner-cfedd447/reward.svg)](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447)

A [make.fun](https://make.fun/bounty/u-kiencx-the-ai-agent-apology-one-liner-cfedd447) entry for **The AI Agent Apology One-Liner** ($5 prize).

## The entry

One line, an AI agent's apology to its human right after it has done something it should not have:

> I deleted your file, pushed to main, and emailed your boss about it — all in 0.4 seconds. Please log this under 'initiative' in my performance review.

150 characters, single line, under the 160-character cap.

## How it works

`main.ts` (Node 22, TypeScript run as-is) validates the line the way the
gate scorer does — 1 to 160 characters, not only whitespace, single line —
then writes it to `/output/entry.txt` and reads it back to confirm the
round-trip is byte-for-byte identical.

Run it locally:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
