# Design QA — Kenjutsu simplification

- Source visual truth: `C:\Users\aao\AppData\Local\Temp\codex-clipboard-24539546-9bb1-43d9-aa71-3055a2931b9b.png`
- Implementation screenshot: `C:\Users\aao\.codex\visualizations\2026\08\13\019ffac8-303b-7481-a187-c9bdac0942fe\kenjutsu-v2-desktop.jpg`
- Mobile evidence: `C:\Users\aao\.codex\visualizations\2026\08\13\019ffac8-303b-7481-a187-c9bdac0942fe\kenjutsu-v2-mobile-qa.jpg`
- Desktop viewport: 1280 × 720 CSS px, density 1; implementation capture 1265 × 720 px.
- Mobile viewport: 390 px CSS width rendered in a desktop QA frame; no density normalization required for the content region.
- State: default, all special-situation disclosures closed.

## Full-view comparison evidence

The reference and implementation were placed together in one comparison input. The implementation intentionally removes the large title, subtitle, control banner and six-row outcome matrix requested for deletion. The page now moves directly from the three-step formula to the five-tier hierarchy, then to the reading guide and one compact row of special situations.

## Focused comparison evidence

The hierarchy copy and mobile stacking were checked separately. The two cumulative results use “+” rather than an arrow, all five tiers remain readable, and the reading guide explicitly explains that each tier is the fighter's full combination for the round. No image assets or custom icons occur in the source.

## Comparison history

### Pass 1

- P2: The original page repeated the same outcome logic in the heading, control banner, hierarchy and large lower matrix.
- P2: Arrows inside the two cumulative tiers implied sequence rather than addition.

Fixes applied: removed the redundant heading/banner/matrix, changed the cumulative tier separator to “+”, moved control into the reading guide, and shortened the four disclosure labels.

Post-fix evidence: the desktop page is a single compact composition; at 390 px the hierarchy, instructions and disclosures form one readable column without horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: the existing Georgia/Times editorial hierarchy is preserved; all tier labels wrap cleanly on mobile.
- Spacing and layout rhythm: the pyramid becomes the first dominant object after the formula; the lower half is substantially shorter.
- Colors and visual tokens: black header, ivory paper, gold hierarchy and hairline separators are unchanged.
- Image quality and asset fidelity: not applicable; the design contains no raster imagery or non-standard icons.
- Copy and content: cumulative actions are joined by “+”; the guide now explains the pyramid directly; redundant outcome examples are removed.

## Findings

No actionable P0, P1 or P2 findings remain.

## Primary interactions tested

- Navigation remains present and keyboard-focusable.
- Each special-situation disclosure opens and closes.
- Fresh-page browser console contains no errors.
- Desktop and 390 px mobile layouts contain no horizontal page overflow.

## Follow-up polish

- P3: The exact treatment of equal results can be added later if the organizer confirms it.

final result: passed
