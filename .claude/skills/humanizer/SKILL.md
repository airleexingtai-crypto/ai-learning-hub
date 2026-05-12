---
name: humanizer
description: Removes signs of AI-generated writing from text. Detects and fixes 24+ AI writing patterns based on Wikipedia's WikiProject AI Cleanup guide. Use when editing blog posts, articles, or any content that should sound human-written.
---

# Humanizer — AI Writing Detector & Rewriter

Based on Wikipedia's "Signs of AI writing" guide. Detects, flags, and rewrites AI-generated prose so it reads as human-written.

## How to Use

**Trigger phrases:**
- "Humanize this text"
- "Remove AI-isms from this post"
- "Make this sound less like AI"
- "Rewrite this to sound human"

## Two-Pass Process

### Pass 1: Rewrite
1. Scan for ALL patterns below
2. Rewrite the text, fixing every detected pattern
3. Add personality: opinions, varied rhythm, concrete details, honest limitations

### Pass 2: Audit
Re-read the rewritten text and ask: "What still looks AI-generated?" Fix any remaining tells.

---

## AI Writing Patterns to Detect & Fix

### Category A: Content Patterns

| Pattern | Description | Fix |
|---------|-------------|-----|
| **Significance inflation** | "marks a pivotal moment," "represents a paradigm shift" | State facts: "was released in 2024" |
| **Promotional language** | "nestled in the breathtaking," "unparalleled excellence" | Plain description |
| **Vague attributions** | "Experts say," "studies show," "many believe" | Name sources: "A 2024 Stanford study found..." |
| **Formulaic "challenges" sections** | "Despite these challenges... continues to thrive" | Name specific challenges and outcomes |
| **Novelty inflation** | "a term I hadn't heard before," "groundbreaking approach" | Describe what it actually is |

### Category B: Language Patterns

**AI Vocabulary — Tier 1 (ALWAYS REPLACE):**

| AI Word | Replace With |
|---------|-------------|
| delve | dig into, explore |
| foster | build, create, encourage |
| seamless | smooth, easy |
| leverage | use |
| utilize | use |
| robust | solid, reliable |
| comprehensive | thorough, full |
| crucial | important, key |
| testament | proof, evidence |
| landscape | field, area, scene |
| realm | world, area |
| moreover | and, also |
| furthermore | also |
| consequently | so |
| thus | so |

**AI Vocabulary — Tier 2 (replace when clustered):**
showcasing, highlighting, underscoring, embodying, signifying, epitomizing

**Copula avoidance:**
- "serves as" → "is"
- "features" (verb) → "has"
- "boasts" → "has"
- "constitutes" → "is"

**Synonym cycling:** AI varies words unnecessarily. Pick the clearest word and repeat it.
- "developers... engineers... practitioners... builders" → "developers" throughout

**Template phrases to remove:**
- "a [adj] step towards [adj] infrastructure"
- "in today's digital landscape"
- "in an era of rapid technological change"
- "unlock your potential"
- "take your X to the next level"

### Category C: Style Patterns

**Punctuation:**
- Kill ALL em dashes (—). Use commas, periods, or parentheses
- No curly quotes. Use straight quotes
- No emoji in headings or body

**Formatting:**
- No bold phrases inside paragraphs for emphasis
- No inline-header lists ("**Speed:** faster than..." — just write it directly)
- No numbered list inflation (if 2 reasons matter, don't manufacture 7)

**Headings:**
- Sentence case, not Title Case
- No "Key Takeaways," "Overview," "Introduction" headings — jump into content

### Category D: Communication / Filler Patterns

| Pattern | Fix |
|---------|-----|
| "I hope this helps!" / "Let me know if you have questions" | Remove entirely |
| "Let's explore," "Let's dive into," "Let's break this down" | Start with the point |
| "It's worth noting," "Interestingly," "Surprisingly" | Let facts speak |
| "In order to," "Due to the fact that" | "To," "Because" |
| "Great question!" / sycophantic acknowledgments | Answer directly |
| Generic conclusions: "The future looks bright" | Specific closing thought or cut |
| "Only time will tell" | Remove |

### Category E: Structural Patterns

- **Uniform paragraph length:** Mix short (1-2 sentences) and long paragraphs
- **3-sentence paragraphs:** Break the pattern
- **Too-clean grammar:** Real humans write fragments. Include one occasionally.
- **Formulaic openings:** Lead with the specific point, not throat-clearing
- **Rhetorical question openers:** "What if there were a better way?" → Just state the answer
- **False concession:** "While X has limitations, it's remarkable" → State the real trade-off
- **Excessive structure:** 5 headers in 200 words → Merge or cut

---

## Voice Calibration

When given a writing sample from the author, apply these additional rules:
- Match sentence length distribution
- Match transition style (none, simple, etc.)
- Match vocabulary range
- Match what the author DOESN'T do (no fake curiosity, no forced enthusiasm)

---

## "Soul" Injection

Beyond removing patterns, add human qualities:
1. **Opinion:** Take a stance. "I think X is overrated" is better than "X has both strengths and weaknesses"
2. **Varied rhythm:** Mix sentence lengths. Fragments are OK. Long sentences are OK.
3. **Concrete details:** "I spent three hours debugging this" beats "it may take some time"
4. **Honest limitations:** "This didn't work for me" builds more trust than "results may vary"
5. **One good analogy:** Not three. One that actually clarifies.

---

## Output Format

After rewriting, report:
1. **Patterns found:** Which AI tells were detected (briefly)
2. **Rewritten text:** The cleaned version
3. **Changes made:** Summary of what was fixed
4. **Self-audit:** Any remaining concerns (if still detected)
