# Nebula — Mobile Astrophotography

A static website about capturing the night sky using nothing but a smartphone. Built for the Web Technologies (Assignment 01) course as a fully static HTML/CSS/JS site — no backend, no frameworks.

## Pages

- **Home** (`index.html`) — intro banner and highlights on why mobile astrophotography is worth trying.
- **About** (`about.html`) — the photographer, gear used, and app workflow.
- **Gallery** (`gallery.html`) — photo gallery with a click-to-expand modal, plus a before/after slider comparing raw vs. processed shots.
- **Contact** (`contact.html`) — contact form with client-side validation.

## Features

- Dark/light theme toggle (persisted with `localStorage`)
- Responsive hamburger navigation for smaller screens
- Image modal/lightbox on the gallery page
- Interactive before/after opacity slider (raw vs. processed image)
- Client-side form validation on the contact page
- Responsive layout using Flexbox and CSS Grid

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (no libraries or frameworks)

## Project Structure

```
Nebula/
├── index.html
├── about.html
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

Built by Muhammad Ali (BCSF24A024) for BSCS Self-support F24.
