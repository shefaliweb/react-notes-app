# React Notes App

A simple and clean note-taking application built with React. It allows you to create, delete, and search for your notes. It also features a dark mode for a better user experience.

## Features

- Create new notes
- Delete notes
- Search for notes
- Dark mode
- Notes are saved to local storage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arunk-s/react-2025.git
   ```
2. Navigate to the project directory:
    ```bash
    cd react-2025
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
## Usage
1. Run the application:
    ```bash
    npm run dev
    ```
2. Open your browser and go to `http://localhost:5173/` to see the application in action.

## Technologies Used
- React 19
- Vite
- Tailwind CSS
- Framer Motion
- nanoid
- react-icons

## Deploy on Vercel

1. Push your code to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. Vercel will detect Vite and use `dist` as the output directory.
4. Click **Deploy**. No environment variables are required for basic usage.

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure
```
src/
├── components/     # UI components (Navbar, NoteCard, Modal, Button, etc.)
├── context/       # React context (Toast)
├── hooks/         # Custom hooks (useLocalStorage)
├── layouts/       # Layouts (MainLayout with animated background)
├── pages/         # (optional)
└── utils/         # Helpers
```

Thank you for checking out our project!