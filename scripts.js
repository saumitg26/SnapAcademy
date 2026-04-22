/* ============================================================
   WORLDWIDE WONDERS — style.css
   Clean rewrite matched to index.html + scripts.js class names
   Fonts: Unbounded · Source Serif 4 · IBM Plex Mono
   ============================================================ */

:root {
  --bg:        #0f0e0c;
  --surface:   #1c1a16;
  --card-bg:   #242018;
  --border:    #3a3426;
  --gold:      #d4a843;
  --gold-dim:  #7a5e1e;
  --text:      #e8dfc8;
  --text-muted:#8a7d65;
  --text-dim:  #5a5040;
  --red:       #c0482a;
  --teal:      #2a8a78;
  --blue:      #2a5a8a;
  --green:     #4a7a2a;
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Source Serif 4', Georgia, serif;
  font-size: 16px;
  line-height: 1.6;
  min-height: 100vh;
}

/* ════════════════════════════════════════
   HEADER
════════════════════════════════════════ */
header {
  background: var(--surface);
  border-bottom: 2px solid var(--border);
  padding: 3rem 2rem 2.5rem;
  text-align: center;
}

.header-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.2rem;
  opacity: 0.8;
}

header h1 {
  font-family: 'Unbounded', sans-serif;
  font-size: clamp(2.2rem, 6vw, 4.8rem);
  font-weight: 900;
  line-height: 1.05;
  color: var(--text);
  letter-spacing: -0.02em;
  margin-bottom: 0.8rem;
}

.header-sub {
  font-family: 'Source Serif 4', serif;
  font-size: 1rem;
  font-style: italic;
  color: var(--text-muted);
}

/* ════════════════════════════════════════
   CONTROLS BAR
════════════════════════════════════════ */
.controls {
  background: var(--surface);
  border-bottom: 2px solid var(--border);
  padding: 1.4rem 2rem 1.2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem 2.8rem;
  align-items: flex-end;
  position: sticky;
  top: 0;
  z-index: 50;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.control-group--wide {
  flex: 1;
  min-width: 200px;
  max-width: 280px;
}

.control-group--toggle {
  justify-content: flex-end;
}

.control-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-dim);
}

/* Search */
.search-wrap {
  position: relative;
}

.search-input {
  width: 100%;
  background: var(--card-bg);
  border: 1.5px solid var(--border);
  border-radius: 4px;
  color: var(--text);
  font-family: 'Source Serif 4', serif;
  font-size: 0.95rem;
  padding: 0.5rem 0.8rem 0.5rem 2.2rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input::placeholder { color: var(--text-dim); font-style: italic; }
.search-input:focus { border-color: var(--gold); }

.search-icon {
  position: absolute;
  left: 0.65rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1rem;
  color: var(--text-dim);
  pointer-events: none;
  line-height: 1;
}

/* Filter & Sort buttons */
.btn-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.era-btn,
.sort-btn {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  letter-spacing: 0.04em;
  padding: 0.42rem 0.85rem;
  background: transparent;
  border: 1.5px solid var(--border);
  border-radius: 3px;
  color: var(--text-muted);
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
  line-height: 1.4;
}

.era-btn small {
  display: block;
  font-size: 0.56rem;
  opacity: 0.6;
  margin-top: 0.05rem;
}

.era-btn:hover,
.sort-btn:hover {
  border-color: var(--gold-dim);
  color: var(--text);
}

.era-btn.active,
.sort-btn.active {
  background: var(--gold);
  border-color: var(--gold);
  color: #0f0e0c;
  font-weight: 500;
}

/* UNESCO toggle */
.toggle {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  user-select: none;
}

.toggle input { display: none; }

.toggle-track {
  width: 40px;
  height: 22px;
  background: var(--card-bg);
  border: 1.5px solid var(--border);
  border-radius: 11px;
  position: relative;
  flex-shrink: 0;
  transition: background 0.25s, border-color 0.25s;
}

.toggle-thumb {
  position: absolute;
  width: 15px;
  height: 15px;
  background: var(--text-dim);
  border-radius: 50%;
  top: 2.5px;
  left: 2.5px;
  transition: transform 0.25s, background 0.25s;
}

.toggle input:checked ~ .toggle-track {
  background: var(--gold);
  border-color: var(--gold);
}

.toggle input:checked ~ .toggle-track .toggle-thumb {
  transform: translateX(18px);
  background: #0f0e0c;
}

.toggle-text {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.68rem;
  color: var(--text-muted);
  letter-spacing: 0.03em;
}

/* Result count */
.result-count {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  color: var(--text-dim);
  align-self: center;
  margin-left: auto;
  white-space: nowrap;
}

/* ════════════════════════════════════════
   CARD GRID
════════════════════════════════════════ */
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1320px;
  margin: 2.5rem auto;
  padding: 0 2rem 4rem;
}

/* ════════════════════════════════════════
   CARD
════════════════════════════════════════ */
.card {
  background: var(--card-bg);
  border: 1.5px solid var(--border);
  border-radius: 6px;
  padding: 1.4rem 1.4rem 1.2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  animation: fade-up 0.35s ease both;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card:hover {
  transform: translateY(-3px);
  border-color: var(--gold-dim);
  box-shadow: 0 8px 28px rgba(0,0,0,0.5);
}

/* Left accent stripe by era */
.card.era-ancient { border-left: 4px solid var(--red); }
.card.era-medieval { border-left: 4px solid var(--gold); }
.card.era-modern  { border-left: 4px solid var(--blue); }
.card.era-natural { border-left: 4px solid var(--teal); }

/* Emoji watermark */
.card-emoji {
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  font-size: 3rem;
  opacity: 0.07;
  pointer-events: none;
  user-select: none;
  transform: rotate(10deg);
  line-height: 1;
}

/* Header row: type + UNESCO */
.card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
}

.type-tag {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 0.15rem 0.5rem;
}

.unesco-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.06em;
  color: var(--gold);
  background: rgba(212,168,67,0.12);
  border: 1px solid var(--gold-dim);
  border-radius: 2px;
  padding: 0.15rem 0.5rem;
}

/* Title */
.card-title {
  font-family: 'Unbounded', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--text);
  margin-bottom: 0.3rem;
}

/* Location */
.card-location {
  font-family: 'Source Serif 4', serif;
  font-size: 0.88rem;
  font-style: italic;
  color: var(--text-muted);
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border);
}

/* Description */
.card-desc {
  font-family: 'Source Serif 4', serif;
  font-size: 0.92rem;
  line-height: 1.65;
  color: #b8af9a;
  margin-bottom: 0.9rem;
}

/* Quick fact */
.card-quick-fact {
  background: var(--surface);
  border-left: 3px solid var(--gold);
  padding: 0.65rem 0.85rem;
  margin-bottom: 0.9rem;
  font-family: 'Source Serif 4', serif;
  font-size: 0.88rem;
  font-style: italic;
  color: var(--text-muted);
  line-height: 1.5;
}

.card-quick-fact strong {
  font-style: normal;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.58rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 0.3rem;
}

/* Stats */
.card-stats {
  display: flex;
  gap: 1.5rem;
  border-top: 1px solid var(--border);
  padding-top: 0.85rem;
}

.stat { display: flex; flex-direction: column; gap: 0.2rem; }

.stat-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.55rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.stat-value {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.9rem;
  color: var(--text);
}

/* ── No results ── */
.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 5rem 2rem;
  font-family: 'Source Serif 4', serif;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--text-dim);
}

/* ── Footer ── */
footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  text-align: center;
  padding: 2rem;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  color: var(--text-dim);
}

footer p + p { margin-top: 0.4rem; }
.footer-sub { opacity: 0.5; }

/* ── Responsive ── */
@media (max-width: 700px) {
  header { padding: 2rem 1.2rem 1.8rem; }
  .controls { padding: 1rem 1.2rem; gap: 1rem 1.5rem; position: static; }
  .control-group--wide { min-width: 100%; max-width: 100%; }
  .result-count { margin-left: 0; width: 100%; }
  main { grid-template-columns: 1fr; padding: 0 1rem 3rem; }
}
