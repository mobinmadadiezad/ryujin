# RYŪJIN

A minimal and modern automotive landing page inspired by Japanese car culture, performance, and aesthetics.

## Overview

RYŪJIN is a single-page automotive website built with vanilla HTML, CSS, and JavaScript.

The project focuses on Japanese automotive culture with a minimal, dark, and luxury-oriented visual identity.

## Features

- Responsive layout
- Modern Japanese-inspired UI
- Hero section with automotive visual
- Builds showcase section
- Responsive builds grid
- Custom CSS design system
- Typography, spacing, color, radius, shadow, and motion tokens
- Modular component structure
- CSS-based animations and interactions

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

```text
RYŪJIN/
│
├── assets/
│   ├── bg-hero-desctop.png
│   ├── buildsCard-1.png
│   ├── buildsCard-2.png
│   ├── buildsCard-3.png
│   └── hero-car.png
│
├── index.html
├── README.md
│
└── src/
    │
    ├── components/
    │   ├── Builds/
    │   │   ├── Builds.css
    │   │   ├── Builds.html
    │   │   └── index.js
    │   │
    │   ├── Header/
    │   │   ├── Header.css
    │   │   ├── Header.html
    │   │   └── index.js
    │   │
    │   └── Hero/
    │       ├── Hero.css
    │       ├── Hero.html
    │       └── index.js
    │
    ├── js/
    │   └── main.js
    │
    └── styles/
        ├── bases/
        │   ├── base.css
        │   └── reset.css
        │
        ├── layout/
        │   ├── container.css
        │   └── section.css
        │
        ├── main.css
        │
        └── tokens/
            ├── color.css
            ├── motion.css
            ├── radius.css
            ├── shadow.css
            ├── spacing.css
            └── typography.css
```

## Design System

RYŪJIN uses a custom CSS design system based on reusable design tokens.

### Tokens

- **Colors** — `color.css`
- **Typography** — `typography.css`
- **Spacing** — `spacing.css`
- **Radius** — `radius.css`
- **Shadows** — `shadow.css`
- **Motion** — `motion.css`

### Layout

- `container.css` — responsive content container
- `section.css` — reusable section layout utilities

## Components

Each major UI section is organized as an independent component:

- Header
- Hero
- Builds

Each component contains its own HTML, CSS, and JavaScript when needed.

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Open the project and run `index.html` with a local development server such as VS Code Live Server.

## Status

🚧 Work in progress.

More sections, interactions, and responsive improvements will be added as the project evolves.
