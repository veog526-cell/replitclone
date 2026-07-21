---
name: Primary CTAs point to booking URL
description: All major conversion buttons on the Within Fitness landing page route to the external booking link.
---

The main conversion buttons on the site route to the external 1-on-1 assessments page.

**Why:** This is a frontend-only landing page with no backend; the actual conversion happens on the existing Within Fitness booking flow.

**How to apply:** When adding or updating a primary CTA ("Enter Assessment Room", "Enter The Lobby", "Join The Inner Circle", "Begin Your Assessment"), use an `<a>` tag with `target="_blank"` and `rel="noopener noreferrer"` rather than a smooth-scroll action.
