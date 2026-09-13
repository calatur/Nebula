# Nebula — Mobile Astrophotography

A static website about capturing the night sky using nothing but a smartphone. Built for the Web Technologies (Assignment 01) course as a fully static HTML/CSS/JS site — no backend, no frameworks.

## Pages

- **Home** (`index.html`) — intro banner and highlights on why mobile astrophotography is worth trying.
- **About** (`about.html`) — the photographer, gear used, and app workflow.
- **Gear & Techniques** (`gear.html`) — a settings table by shot type, the processing workflow, quick tips, and an FAQ accordion.
- **Gallery** (`gallery.html`) — photo gallery with a click-to-expand modal, plus a before/after slider comparing raw vs. processed shots.
- **Contact** (`contact.html`) — contact form with client-side validation.

## Features

- Dark/light theme toggle (persisted with `localStorage`)
- Responsive hamburger navigation for smaller screens, built as an accessible button (`aria-expanded`, `aria-controls`)
- Image modal/lightbox on the gallery page, with keyboard support (Escape to close) and focus management
- Interactive before/after opacity slider (raw vs. processed image)
- FAQ accordion on the Gear & Techniques page
- Client-side form validation on the contact page (`novalidate` used so custom validation always runs instead of the browser's native email validation)
- Responsive layout using Flexbox and CSS Grid, with separate tablet (1024px) and mobile (768px) breakpoints

## Accessibility Notes

- Hamburger menu and modal close button are real `<button>` elements, not styled `<div>`s
- Form inputs are linked to their error messages via `aria-describedby`, with `role="alert"`/`role="status"` for live feedback
- FAQ accordion panels use `hidden` + `aria-expanded` rather than just a CSS class
- Visible focus outlines on interactive elements (`:focus-visible`)

## Tech Stack

- HTML5 (semantic markup — `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`/`figcaption`, `table`, `footer`)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (no libraries or frameworks)

## Project Structure

```
Nebula/
├── index.html
├── about.html
├── gear.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── ...
```

## Running Locally

No build step needed. Clone the repo and open `index.html` in a browser.

## Author

Built by Muhammad Ali (BCSF24A024) for BSCS Self-Support F24.
Course: Web Technologies
Instructor: Dr. Noman Shafi
