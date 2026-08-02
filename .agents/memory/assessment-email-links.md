---
name: Assessment email handoff
description: Reliable way to let users send completed assessment reports without an email integration.
---

For the no-integration assessment report flow, open a direct Gmail compose URL in a new tab with the recipient, subject, and body encoded in the query string.

**Why:** Browser `mailto:` handling depends on the user's OS/browser email-app registration and may show a handler prompt once, then do nothing on later clicks.

**How to apply:** Use `https://mail.google.com/mail/?view=cm&fs=1&to=...&su=...&body=...` with `target="_blank"` and `rel="noopener noreferrer"`. This is a manual-send flow, not automatic delivery.