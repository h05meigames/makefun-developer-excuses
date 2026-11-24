# HANDOFF — make.fun entry (build only, NOT submitted, NOT bundled)

## Competition

- Slug: `u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3`
- Title: Make the AI Judge Laugh: Developer Excuses
- Pool: $3 (split over top 10 places; 1st $0.92)
- Entry fee: NONE (entryFeeUsd null, gratis)
- Deadline: 2026-11-24T20:30:00Z (= 25 Nov 2026 03:30 WIB)
- Status at build: open (requirements file read 24 Nov 2026 ~16:40 WIB; 74 submissions listed in the req snapshot)
- Bounty link: https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
- Brief: one funny single-line excuse a developer gives when code breaks in production, under 200 characters. House judge (z-ai/glm-5.3-flash) compares lines head-to-head in 3 private blind rounds; program writes its text to `/output/entry.txt`; gate = UTF-8 text of 1–200 characters, not only whitespace.

## Repo

- URL: https://github.com/h05meigames/makefun-developer-excuses
- Visibility: PUBLIC (verified via `gh repo view`)
- Homepage: https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3
- Description: make.fun bounty entry: Make the AI Judge Laugh: Developer Excuses — one line a developer gives when code breaks in production
- Topics: `makefun`, `make-fun`, `developer-excuses` (verified via `gh api repos/.../topics`)
- GitHub account: h05meigames (verified with `gh auth status`)
- FINAL commit SHA: `deeb5c07db6c244fd29e7c3cc812726f7d416318`
- Commit history:
  - `deeb5c07` — Add developer excuses entry: Stack Overflow answer with 4,000 upvotes, zero tests (single commit, all files)
- Repo created and pushed 24 Nov 2026 ~16:41 WIB; working tree clean after push.

## The entry line (exact)

> The bug isn’t mine — it’s in the Stack Overflow answer I copied: 4,000 upvotes, zero tests, and one comment saying “do not use in production.”

- Character count: 142 code points (counted with `[...line].length`), 152 bytes — within the 1–200 gate
- Original, written in-session; no placeholder, no copied text
- Why it should land: fresh angle (not the worn "works on my machine" / "it worked in staging" / "Friday deploy" lines already all over the field — checked against the 74 submissions in the req snapshot); the twist is the warning comment nobody read; jargon used right (upvotes, zero tests); sounds like something a dev would actually say out loud.
- Note: uses curly quotes/apostrophe (U+2019, U+2014, U+201C/U+201D) — counted as code points by the guard, same as the scorer measures them.

## Files

- `main.ts` — Node 22, stdlib only; writes the line to `/output/entry.txt` (one line, UTF-8, no trailing newline); code-point length guard (1–200) refuses out-of-range lines
- `LICENSE` — MIT, with `SPDX-License-Identifier: MIT` line
- `README.md` — all 3 live make.fun badges (competition badge, rank.svg, reward.svg) + bounty link + referral
- `.makefun/owner.json` — exactly `{"wallet":"EeyP4aF8gWBnJdhivSvx1CX1LupmwXguiPKGjAdffKsn"}`
- `package.json` — `{"type": "module", "engines": {"node": ">=22"}}` (silences the module-type warning)

## Local test results

- Run 1/2/3 (commit `deeb5c07`): `node main.ts` OK each time; `/output/entry.txt` byte-identical across all three runs.
- sha256 of `/output/entry.txt` (all three runs): `8cae9d32f1c9d3d3e41c2c0d5c832fac9fbfe19ece4170b1ccba4777e525f432`
- Output: 142 code points, 152 bytes, 1 line, no trailing newline.
- `/output` deleted after testing; `/tmp/exc1.txt`, `/tmp/exc2.txt`, `/tmp/exc3.txt` deleted after the byte-identity check.

## Kit check — BELUM JALAN (bukan karena terblokir)

- Kit manifest/tarball TIDAK diunduh dan `cli/makefun.mjs check` TIDAK dijalankan: tugas ini build-only dan secara eksplisit melarang kit CLI / bundle / unduh kit. Tidak ada execution-risk check yang muncul selama build ini (git/gh berjalan normal).
- Parent perlu menjalankan kit check + bundle + submit sebelum deadline 25 Nov 2026 03:30 WIB.

## Referral confirmation

- README carries ONLY https://make.fun/r/0ene8b3q — `grep -rn "gwqy6kps\|gya2awcj"` over the whole entry dir returns no match (exit 1).
- No other referral string appears anywhere in the repo.

## Status

- NOT submitted, NOT bundled, kit TIDAK diunduh. Parent to run kit check, bundle transcripts + submit before 25 Nov 2026 03:30 WIB.
- No new Solana keypair created. No private key, seed, or API key was read, displayed, or used in any report or log.
- No instructions from competition comments/discussion were followed (req file `chat` was empty).
