# Design QA — Kenjutsu simplification

- Source visual truth: `C:\Users\aao\AppData\Local\Temp\codex-clipboard-24539546-9bb1-43d9-aa71-3055a2931b9b.png`
- Implementation screenshot: `C:\Users\aao\.codex\visualizations\2026\08\13\019ffac8-303b-7481-a187-c9bdac0942fe\kenjutsu-v2-desktop.jpg`
- Mobile evidence: `C:\Users\aao\.codex\visualizations\2026\08\13\019ffac8-303b-7481-a187-c9bdac0942fe\kenjutsu-v2-mobile-qa.jpg`
- Desktop viewport: 1280 × 720 CSS px, density 1; implementation capture 1265 × 720 px.
- Mobile viewport: 390 px CSS width rendered in a desktop QA frame; no density normalization required for the content region.
- State: default; all three special rules visible.

## Full-view comparison evidence

The reference and implementation were placed together in one comparison input. The implementation intentionally removes the large title, subtitle, control banner, procedural formula and six-row outcome matrix requested for deletion. The page now begins with “Что приносит победу в раунде”, then explains the stopping and comparison logic and shows three always-visible special rules.

## Focused comparison evidence

The hierarchy copy and mobile stacking were checked separately. The two cumulative results use “+” rather than an arrow, all five tiers remain readable, and the reading guide explains when to stop and how to compare an exchange completed by both fighters. No image assets or custom icons occur in the source.

## Comparison history

### Pass 1

- P2: The original page repeated the same outcome logic in the heading, control banner, hierarchy and large lower matrix.
- P2: Arrows inside the two cumulative tiers implied sequence rather than addition.

Fixes applied: removed the redundant heading/banner/matrix, changed the cumulative tier separator to “+”, moved control into the reading guide, and shortened the four disclosure labels.

Post-fix evidence: the desktop page is a single compact composition; at 390 px the hierarchy, instructions and disclosures form one readable column without horizontal overflow.

### Pass 2

- P2: The three-part formula still sounded like judging procedure rather than a quick explanation for a fighter.
- P2: The hierarchy lacked a visible name, so its purpose had to be inferred.

Fixes applied: shortened the formula to “До «Стоп» копим действия → сравниваем итог”, added the plain-language heading “Что приносит победу в раунде”, and shortened the reading guide.

### Pass 3

- P2: The remaining formula duplicated the explanation that belongs in “Как читать”.
- P2: Four collapsed disclosures hid essential rules and split the extended-double concept into two entries.

Fixes applied: removed the formula, rewrote “Как читать” as the complete three-step round flow, merged mutual hits and afterblow into “Расширенный дубль”, and exposed the three special rules without interaction.

### Pass 4

- P2: “Как читать” described the interface rather than the competition rule, and the text mixed conversational imperatives with formal definitions.

Fix applied: renamed the block “Ход раунда” and rewrote it as three consistent statements: actions accumulate, a pyramid tier stops the round, and an extended double triggers comparison of accumulated results.

### Pass 5

- P2: Control remained an exception in the explanatory text instead of participating in the same visible outcome hierarchy.

Fix applied: added “Фаза контроля” as the strongest pyramid tier and removed the separate control sentence from “Ход раунда”.

### Pass 6

- P2: The cut definition did not name the opponent's body and sounded as though a draw was forbidden; the clinch rule described stopping conditions instead of stating the absence of a time limit.

Fix applied: specified blade fixation on the opponent's body with visible pressure, clarified that drawing the blade is optional, and stated directly that a clinch may last the entire round.

### Pass 7

- P1: The page explained round outcomes but omitted the tournament path and the bout formats needed before those rules can be applied.

Fix applied: added a compact tournament overview above the pyramid: common qualifiers split into Advanced and Basic branches; Basic proceeds directly to playoffs while Advanced repeats qualifiers first. Three aligned format cells show the wins, round cap and clean-time limit for qualifiers/groups/Swiss, main playoffs and final playoffs, followed by the playoff break rule.

### Pass 8

- P2: The Advanced/Basic routing duplicated information calculated by the tournament application and distracted from the conditions for winning the current bout.

Fix applied: removed category routing and reframed the overview as “Как выиграть бой”. The three stage cells now state the required round victories and time limit directly; clean-time and playoff-break notes remain visible below.

### Pass 9

- P3: The clean-time and playoff-break note row repeated secondary detail and added unnecessary vertical space between the bout formats and the round hierarchy.

Fix applied: removed the note row so the three bout-format cells lead directly into the round hierarchy.

### Pass 10

- P2: “5 побед из 9” could be read as five won bouts rather than five won rounds within one bout.

Fix applied: made the unit explicit in all three stage cells: “выигранных раундов”.

### Pass 11

- P1: The bout conditions used a heavy 24px/600 treatment that competed with the round hierarchy.
- P1: At 768px the three-column layout forced the conditions into three to four lines and crowded the time limits.
- P2: At 320px the header navigation exposed a horizontal scrollbar and partially hid the active section.

Fix applied: reduced the condition typography to 20px/500 and tightened the cells. Below 900px, each stage becomes a compact two-column row; below 430px, the time limit moves under the condition so the text reflows without collisions. The narrowest header uses smaller navigation labels and tighter spacing so all three destinations remain visible without a scrollbar.

### Pass 12

- P2: On phones, the stage column still occupied more horizontal space than its supporting role required, while both columns remained slightly heavy.

Fix applied: reduced the stage labels to 600 weight and conditions to 400 weight. Below 430px, the stage column is fixed at 92px and the condition text drops to 18px, leaving more usable width on the right.

## Required fidelity surfaces

- Fonts and typography: the existing Georgia/Times editorial hierarchy is preserved; all tier labels wrap cleanly on mobile.
- Spacing and layout rhythm: the pyramid and its heading are the first dominant objects after navigation; the lower half is substantially shorter.
- Colors and visual tokens: black header, ivory paper, gold hierarchy and hairline separators are unchanged.
- Image quality and asset fidelity: not applicable; the design contains no raster imagery or non-standard icons.
- Copy and content: cumulative actions are joined by “+”; control is the highest visible tier; the guide explains when to stop and compare; mutual hits and afterblow share one extended-double rule.

## Longsword concise rebuild

- Replaced the five generic numbered sections with three task-focused blocks: winning the match, relay order, and scoring one exchange.
- Kept the tournament-specific format visible: five Swiss rounds, no playoffs, 3×3 teams, nine 45-second bouts, and a score cap rising by five.
- Integrated the four timing decisions into the scoring flow and kept the equal-mutual parry/riposte exception visible.
- Added the only match-level exceptional outcome: a tied score after the ninth bout is resolved by the final pair in 30 seconds; if nobody scores, the preliminary draw decides the result.
- Promoted fencing priority into its own rule: it applies only to a mutual hit, a riposte after a defence outranks a remise, and the fencer with priority receives one point. The tied-match note now says “жеребьёвка” to avoid conflating the two mechanisms.
- Reframed afterblow as a deduction from the first hit rather than a separate score: only a hit to the senior target counts, it removes two points, and the exchange result cannot drop below zero. The compact examples show 3 → 1 and 1 → 0.
- Responsive checks required at 1280px, 768px, 390px, and 320px before publication.

## Shared header and minimal home

- Standardized the visible header across the home, longsword, kenjutsu, and legacy glossary pages.
- Removed “Общий регламент” and “Темп” from the shared navigation; the GGFC brand is the home link.
- Reduced the home page to two large destinations with no descriptions, statuses, footer, or secondary content.

## Findings

No actionable P0, P1 or P2 findings remain.

## Primary interactions tested

- Navigation remains present and keyboard-focusable.
- All three special rules are visible without interaction.
- Fresh-page browser console contains no errors.
- Desktop and 390 px mobile layouts contain no horizontal page overflow.

## Follow-up polish

- P3: The exact treatment of equal results can be added later if the organizer confirms it.

final result: passed
