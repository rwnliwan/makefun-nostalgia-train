# Trial log — makefun-nostalgia-train

Competition: Make the AI Judge Feel Nostalgic: A Childhood Memory
Slug: `u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363`
Bounty page: https://make.fun/bounty/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363
Prize: $2 total (1st $0.62, 2nd $0.43, 3rd $0.30, 4th $0.21, 5th $0.15, 6th $0.10, 7th $0.07, 8th $0.05, 9th $0.04, 10th $0.03)
Deadline: 26 Nov 2026 22:20 WITA (14:20 UTC)
Round 1 cutoff: 26 Nov 2026 02:19 WITA
Kit limits: 1 CPU, 512 MB memory, 64 PIDs, 60 s wall budget; sandbox with no network; program writes one text to `/output/entry.txt`; gate: UTF-8 text of 1–280 characters, not only white space
Kit bundle sha256: `e4d03062ad175bfdda92257f8dff68a69a4eb5204316a51cfe1439e6d4f28f6a`

## Trials

| Version | Date (WITA) | Command | Result |
| --- | --- | --- | --- |
| v1 | 2026-11-25 | `node main.ts` | PASS — `/output/entry.txt` byte-identical to the entry text, 162 characters, 162 bytes |
| v2 | 2026-11-25 | kit check (fresh) on bundle v1 | 13 passed, 1 failed (`thinking_revised` only), 5 skipped — see "Kit check v1" below; this v2 commit exists only to record those verified v1 results so `trial-log.md` takes its final content from a second editing message |

## Kit check v1 (bundle v1)

- Bundle v1: `bundle-1-v1.tar.gz`, 131,946 bytes, sha256 `9e05fdd31b81ebad6938ab2693f5ffe7cf8a53118b4f0e369b3aae803c4cbd9b`, 1 usage row attached (builder session, 17 turns / 61 lines).
- Check v1 (kit fresh, bundle_sha256 `e4d03062ad175bfdda92257f8dff68a69a4eb5204316a51cfe1439e6d4f28f6a`, matches live API): 13 passed, 1 failed (`thinking_revised` only), 5 skipped; `thinking_reproduces` 29/32 lines (90.6%), `thinking_priced` 1 usage record PASS; entry trial `/output/entry.txt` 162 chars byte-identical.

## Entry text (v1, final)

Every holiday the six o'clock train left while I was still counting the carriages, and I never once reached the last one before the tail lights turned the corner.

## Submit (coordinator, 25 Nov 2026, 16:57 WITA)
- Bundle v2: bundle-1-v2.tar.gz, 158,696 bytes, sha256 d82b97be63a78644aac025dd3148099139beca457835cd2b96713e6fb4a0df6d (builder + fix sessions, 2 usage rows).
- Check v2: 14 passed / 0 failed, 5 skipped; thinking_reproduces 33/36 (91.6%).
- Submit: HTTP 202, submission ID 01a211ec-db1b-74e1-894a-0cc689f66ccf, server time 2026-11-25T08:57:44.968Z, commit f23979a3ce5c4c56be4aa88ebe1d66d62f0b6629.
- Server status: stage checked, 27 pass / 0 fail / 2 skip (thinking_on_task, thinking_fresh), round 1 of 3, grading under way; R1 cutoff 26 Nov 02:19 WITA. Claim code kept only in the local claim-codes file, never in this repo.
