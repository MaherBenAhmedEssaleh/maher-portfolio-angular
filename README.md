# Maher Portfolio

Personal portfolio website for Maher Ben Ahmed Essaleh, built with Angular 17.
The site presents professional experience, skills, projects, articles, contact
details, and a responsive visual interface for desktop and mobile screens.

## Features

- Responsive portfolio layout
- Hero section with profile information and call-to-action links
- Skills, experience, projects, and article sections
- Contact form interface ready to connect to an API or Formspree
- Local image assets for the profile and project previews
- Production build configuration through the Angular CLI

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Getting started

Clone the repository and install its dependencies:

```bash
git clone https://github.com/MaherBenAhmedEssaleh/maher-portfolio-angular.git
cd maher-portfolio-angular
npm install
```

Start the development server:

```bash
npm start
```

Open `http://localhost:4200` in your browser. The application reloads
automatically when source files change.

## Available commands

| Command | Description |
| --- | --- |
| `npm start` | Starts the local development server |
| `npm run build` | Creates a production build in `dist/` |
| `npm run watch` | Builds continuously in development mode |

## Project structure

```text
src/
	app/                  Main Angular component and portfolio content
	assets/images/        Profile images and image documentation
	assets/projects/      Project images and project documentation
	index.html            Application entry HTML
	main.ts               Angular bootstrap file
	styles.css            Global styles
```

## Customization

- Replace `src/assets/images/portrait-placeholder.jpg` with the profile photo.
- Add project images to `src/assets/projects/` and update the `projects` data in
	`src/app/app.component.ts`.
- Add the CV under `src/assets/` and update its link in the application.
- Update the `posts` data in `src/app/app.component.ts` to edit the articles.
- Connect the contact form to a backend service or Formspree before using it in
	production.

## Production build

Run the following command to generate the deployable files:

```bash
npm run build
```

The compiled application is generated in the `dist/` directory.
