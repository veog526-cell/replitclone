---
name: Modal body scroll lock
description: Prevent the page behind from scrolling when a full-screen overlay/modal is open.
---

When a full-screen overlay or modal is open, lock the background scroll by setting `document.body.style.overflow = "hidden"`.

Reset it to `""` when the modal closes **and** in the cleanup function so unmounting also restores scrolling.

**Why:** Users expect the background to stay put while they interact with a modal; leaving scroll enabled creates a jarring experience, especially on mobile.

**How to apply:** Use a `useEffect` that depends on the modal's open state. Only apply the lock to the overlay container, not the modal content (which can scroll internally if it overflows).
