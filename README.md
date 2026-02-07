# mvkdev.com

This repository contains the source code for [mvkdev.com](https://mvkdev.com) (hosted via GitHub Pages at `mvkdev9.github.io`). It is a personal dashboard and portfolio site built with the latest web technologies.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: GitHub Pages (via `gh-pages`)

## Project Structure

The application is structured using Next.js App Router with the following main sections:

- **Apps** (`/apps`): Showcase of applications.
- **Community** (`/community`): Community engagement or links.
- **Goals** (`/goals`): Personal or project goals tracking.
- **Marathon** (`/marathon`): Marathon or fitness related tracking.
- **Revenue** (`/revenue`): Revenue metrics or dashboard.
- **Support** (`/support`): Support or contact information.
- **Travel** (`/travel`): Travel logs or plans.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mvkdev9/mvkdev9.github.io.git
    cd mvkdev9.github.io
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured to deploy to GitHub Pages.

To build and deploy the application:

```bash
npm run deploy
```

This command runs `next build` to generate the static export and then uses `gh-pages` to push the `out` directory to the `gh-pages` branch (or appropriately configured branch for GitHub Pages).