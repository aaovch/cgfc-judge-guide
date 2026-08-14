# Responsive audit: kenjutsu bout summary

Scope: the “Как выиграть бой” section, its relationship to the round hierarchy, and responsive reflow at desktop, tablet, and narrow-phone widths.

1. Desktop before — healthy structure, but the 24px/600 conditions competed with the pyramid for attention. Evidence: `11-before-desktop.png`.
2. Tablet at 768px before — unhealthy; the three-column layout forced three-to-four-line conditions and crowded the time limits. Evidence: `13-before-tablet-768.png`.
3. Phone at 390px before — usable, but visually heavy and vertically long. Evidence: `12-before-mobile.png`.
4. Desktop after — healthy; 20px/400 conditions form a secondary summary above the pyramid. Evidence: `14-after-desktop.png`.
5. Tablet at 768px after — healthy; stages reflow into compact rows without overlap or horizontal scrolling. Evidence: `15-after-tablet-768.png`.
6. Phones at 390px and 320px after — healthy; a 92px stage column leaves more room for the lighter 18px conditions, the pyramid begins within the first screen, and the header navigation fits without a scrollbar. Evidence: `16-after-mobile-390.png`, `17-after-mobile-320.png`.

Evidence limits: screenshots and DOM measurements confirm responsive reflow and visible hierarchy. They do not establish full keyboard or screen-reader compliance.
