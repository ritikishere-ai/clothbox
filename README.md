# Cloth Box Foundation website

The Cloth Box Foundation homepage, built with React and Vite from the Figma frame "Homeapge".

## Run it on your computer
You need [Node.js](https://nodejs.org) 18 or newer.

    npm install      # first time only, downloads the libraries
    npm run dev      # opens a live preview at http://localhost:5173

## Make the finished site
    npm run build    # writes the ready-to-host site into the dist/ folder
    npm run preview  # check the built site at http://localhost:4173

The `dist/` folder can be uploaded to any static host.

## Where things live
- `src/App.jsx`: the page, section by section
- `src/components/`: one file per section (Hero, Ways, Impact, Footer, ...)
- `src/hooks/useMotion.js`: scroll effects (fade-ins, count-up numbers, parallax, drag-to-scroll rows)
- `src/hooks/useLenis.js`: smooth scrolling
- `src/styles.css`: all styles; colours and fonts are set at the top
- `src/fonts.css`, `public/fonts/`: Season Sans and Season Serif
- `public/assets/`: images exported from Figma

## Still to add
Three photos are page backgrounds in Figma with text on top, so they could not be exported cleanly.
Export them and save them in `public/assets/` with these names; the page picks them up automatically:
- `hero.jpg`: hero photo (frame "Frame 1")
- `hands.jpg`: sewing-machine photo (frame "Frame 14")
- `circularity.jpg`: left half of the Circularity+ band (frame "Frame 2147224513")

## Fonts
Season Sans and Season Serif are trial versions. Buy the web licence before the site goes public,
then replace the files in `public/fonts/` with the licensed ones (same file names).
