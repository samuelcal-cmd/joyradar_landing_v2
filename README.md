# JoyRadAR Landing Page

A premium, experimental landing page for **JoyRadAR** – a geolocation-based cultural agenda app with editorial curation.

Built with **React**, **TypeScript**, **TailwindCSS**, and **Framer Motion**.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```

## Configuration for GitHub Pages Deployment

To deploy this landing page to GitHub Pages:

1.  **Configure `vite.config.ts`**:
    Open `vite.config.ts` and set the `base` property to your repository name.
    ```typescript
    export default defineConfig({
      plugins: [react()],
      base: '/your-repo-name/', // <--- CHANGE THIS
    });
    ```

2.  **Enable GitHub Pages**:
    Go to your GitHub Repository > Settings > Pages.
    Under "Build and deployment", select **GitHub Actions** as the source.

3.  **Push to GitHub**:
    The workflow file in `.github/workflows/deploy.yml` will automatically build and deploy the site when you push to the `main` branch.

## Content Editing

-   **Links**: Edit `constants.ts` to update the Prototype, Infographic, and Medium URLs.
-   **Video**: Place a video file named `hero.mp4` in the `public/` folder. If no video is present, the app will gracefully fall back to the CSS Radar animation.

## Tech Stack

-   **Vite**: Build tool
-   **React 18**: UI Library
-   **TailwindCSS**: Styling
-   **Framer Motion**: Animations
-   **Lucide React**: Icons

---
*JoyRadAR Concept - 2026*
