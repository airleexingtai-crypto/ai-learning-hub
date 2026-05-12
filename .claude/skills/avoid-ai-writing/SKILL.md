---
name: avoid-ai-writing
description: Audits and rewrites content to remove 36 AI writing patterns with a structured 109-entry tiered word replacement table. Has two modes — Rewrite (full cleanup with second-pass audit) and Detect (flag-only with P0/P1/P2 severity grading).
---

# Avoid AI Writing — Pattern Auditor & Rewriter

Comprehensive AI-writing detection and cleanup with 36 pattern categories and a 109-entry tiered word replacement table. Supports two modes: **Rewrite** (clean + audit) and **Detect** (flag only with severity).

## Modes

### Rewrite Mode (default)
Trigger: "remove AI-isms," "clean up," "humanize," "make this sound less like AI"

1. Scan text for all 36 patterns
2. Rewrite fixing every detected pattern
3. Second-pass audit: scan rewritten text for survivors
4. Output: Issues found → Rewritten text → What changed → Second-pass results

### Detect Mode
Trigger: "detect," "flag only," "audit only," "just flag," "scan"

1. Scan text for all 36 patterns
2. Group findings by severity (P0/P1/P2)
3. Do NOT rewrite — flag and explain only

---

## Severity Levels

| Level | Criteria | Action |
|-------|----------|--------|
| **P0** | Tier-1 words, chatbot artifacts, sycophancy, em dashes, filler | Must fix |
| **P1** | Tier-2 words, vague attributions, template phrases, promo language | Should fix |
| **P2** | Tier-3 clustering, synonym cycling, uniform rhythm, title case | Consider fixing |

---

## The 36 Pattern Categories

### Content Patterns (1-7)

1. **Significance inflation** — "pivotal moment," "paradigm shift," "revolutionary"
2. **Notability name-dropping** — "cited in NYT, BBC, Wired" without specifics
3. **Superficial -ing analyses** — "symbolizing... reflecting... showcasing..."
4. **Promotional language** — "nestled within breathtaking," "world-class"
5. **Vague attributions** — "experts believe," "studies show" without naming
6. **Formulaic challenges** — "Despite challenges... continues to thrive"
7. **Novelty inflation** — "a term I hadn't heard before," "groundbreaking"

### Language Patterns (8-14)

8. **Word/phrase replacements** — See 109-entry table below
9. **Copula avoidance** — "serves as" not "is," "boasts" not "has"
10. **Synonym cycling** — rotating words unnecessarily
11. **Template phrases** — "a [adj] step towards [adj] infrastructure"
12. **Filler phrases** — "In order to," "Due to the fact that"
13. **False ranges** — "from the Big Bang to dark matter"
14. **Parenthetical hedging** — "tools (like X and Y)"

### Structure Patterns (15-23)

15. **Formatting tells** — Em dashes, bold overuse, emoji headers, bullet-heavy
16. **Sentence structure** — "It's not X, it's Y," hollow intensifiers, hedging
17. **Structural uniformity** — Same-length paragraphs, formulaic openings, too-clean grammar
18. **Transition phrases** — "Moreover," "Furthermore," "In today's [X]"
19. **Inline-header lists** — "**Speed:** Speed improved by..."
20. **Title case headings** — "Strategic Negotiations And Partnerships"
21. **Numbered list inflation** — "7 reasons" when 2-3 matter
22. **False concession** — "While X has limits, it's remarkable"
23. **Rhetorical question openers** — "What if there were a better way?"

### Communication Patterns (24-32)

24. **Chatbot artifacts** — "I hope this helps! Let me know if..."
25. **"Let's" constructions** — "Let's explore," "Let's break this down"
26. **Cutoff disclaimers** — "While details are limited in available sources..."
27. **Generic conclusions** — "The future looks bright," "Only time will tell"
28. **Emotional flatline** — "What surprised me most" (when nothing surprised)
29. **Reasoning chain artifacts** — "Let me think step by step"
30. **Sycophantic tone** — "Great question!", "You're absolutely right!"
31. **Acknowledgment loops** — "You're asking about," "To answer your question"
32. **Confidence calibration** — "It's worth noting," "Interestingly," "Surprisingly"

### Meta Patterns (33-36)

33. **Excessive structure** — 5+ headers in 200 words; "Overview," "Key Points" sections
34. **Rhythm uniformity** — All sentences 15-25 words; all paragraphs same length
35. **Over-polishing** — Every irregularity sanded away; too smooth
36. **Rewrite threshold** — 5+ vocab flags + 3+ pattern categories + uniform rhythm → full rewrite

---

## 109-Entry Tiered Replacement Table

### Tier 1: ALWAYS replace (P0)

| Word/Phrase | Replace With |
|-------------|-------------|
| leverage | use |
| utilize / utilisation | use |
| robust | solid, reliable |
| seamless | smooth |
| comprehensive | thorough, full |
| crucial | important, key |
| paramount | essential, vital |
| delve (into) | dig into, explore |
| foster | build, create |
| testament | proof, shows |
| landscape | field, area |
| realm | area, world |
| moreover | and, also |
| furthermore | also |
| consequently | so |
| thus | so |
| necessitate | require |
| facilitate | help, make easier |
| commence | start, begin |
| endeavor | try |
| ascertain | find out, confirm |
| demonstrate | show |
| initiate | start |
| terminate | end, stop |
| optimize | improve |
| innovative | new |
| cutting-edge | new, latest |
| state-of-the-art | latest, best |
| groundbreaking | new, important |
| revolutionize | change |
| disrupt | change |
| ecosystem | system, market |
| holistic | complete, full |
| synergistic | combined |
| align | match, fit |
| resonate | connect, appeal |

### Tier 2: Replace when clustered (P1)

| Word/Phrase | Replace With |
|-------------|-------------|
| empower | enable, help |
| empower | enable, help |
| highlight | point out, show |
| underscore | stress |
| signify | mean, signal |
| epitomize | represent |
| navigate | handle, manage |
| embrace | accept, use |
| drive (verb) | push, cause |
| propel | push, move |
| amplify | boost, increase |
| elevate | raise, improve |
| unlock | open, access |
| unleash | release |
| harness | use |
| embark | start, begin |
| curate | select, choose |
| streamline | simplify |
| revitalize | renew |
| reimagine | rethink |
| in today's digital landscape | (cut entirely) |
| in an era of rapid change | (cut entirely) |
| a game changer | important, useful |

### Tier 3: Replace only at high density (P2)

| Word/Phrase | Replace With |
|-------------|-------------|
| nuanced | subtle, detailed |
| compelling | convincing, strong |
| compelling | convincing, strong |
| multifaceted | complex |
| diverse | varied, different |
| vibrant | lively |
| rich (experience/history) | deep, specific detail |
| tapestry | mix, blend |
| beautifully | (cut — show, don't tell) |
| thoughtfully | (cut — show, don't tell) |
| seamlessly | (cut — describe the actual experience) |
| effortlessly | easily (or describe reality) |
| fundamentally | basically, at root |
| inherently | by nature |
| decidedly | clearly |
| remarkably | notably |
| exceptionally | very, extremely |
| profoundly | deeply |
| truly | (cut — intensifier adds nothing) |
| absolutely | (cut — intensifier adds nothing) |
| incredibly | very |
| indeed | (cut — filler) |
| ultimately | in the end |
| essentially | basically |
| inevitably | unavoidably (or just say what happened) |

---

## Additional Rules

### Em dashes
Replace ALL em dashes (—) with commas, periods, or no punctuation. Real human writers rarely use them in casual blog posts.

### Quotation marks
Use straight quotes ("), not curly quotes (" "). Blog CMS often strips curly quotes.

### Bold emphasis
Never use bold inside paragraphs for emphasis. If a sentence needs bold to land, rewrite the sentence.

### First person
Use "I" not "we" or "one." Take responsibility for opinions. "I think this is wrong" beats "it could be argued that this is suboptimal."

### Fragments
Include at least one sentence fragment per ~500 words. Real humans don't write in complete sentences.

---

## Output Format

### Rewrite mode output:
```
## Issues Found
- [Pattern name]: "[quoted text]" → fixed

## Rewritten Text
[Clean text]

## What Changed
- [Summary of key edits]

## Second-Pass Audit
- [Any remaining concerns, or "Clean"]
```

### Detect mode output:
```
## P0 (Must Fix)
- [Pattern]: "[quoted text]" — [why it reads as AI]

## P1 (Should Fix)
- [Pattern]: "[quoted text]" — [why it reads as AI]

## P2 (Consider Fixing)
- [Pattern]: "[quoted text]" — [why it reads as AI]

## Assessment
[Overall AI-likelihood: High/Medium/Low]
```
