# Brainly

Brainly is a second-brain web app for saving things you want to come back to later. It lets you store links, videos, and posts in one place, then browse and manage them from a simple dashboard.




https://github.com/user-attachments/assets/73cb0a9c-d637-4622-8e06-d19d964d0a21




<video controls autoplay muted loop playsinline width="100%">
  <source src="./src/assets/Brainly-Video.mp4" type="video/mp4" />
  Your browser does not support the video tag. You can view the file
  [here](./src/assets/Brainly-Video.mp4).
</video>

## What it does

- Sign up and sign in with a username and password
- Save content items with a title, link, and source type
- Organize items as YouTube or X / Twitter content
- Preview saved content inside the dashboard
- Delete items when you no longer need them
- Keep the dashboard protected with a token-based login flow

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS

## Project Structure

- `src/pages/MainPage.tsx` - landing page
- `src/pages/Signin.tsx` - sign in screen
- `src/pages/Signup.tsx` - sign up screen
- `src/pages/dashboard.tsx` - main saved-items dashboard
- `src/components/CreateContentModal.tsx` - form for adding new items
- `src/hooks/useContent.tsx` - fetches and deletes saved content
- `src/config.ts` - backend URL configuration

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- A running backend API for Brainly

### Install dependencies

```bash
npm install
```

### Configure the backend URL

By default, the app points to:

```bash
http://localhost:3000
```

You can override it by setting:

```bash
VITE_BACKEND_URL=http://your-backend-url
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Backend API Used

This frontend expects the backend to expose these routes:

- `POST /api/v1/signup`
- `POST /api/v1/signin`
- `GET /api/v1/content`
- `POST /api/v1/content`
- `DELETE /api/v1/content`

The app sends the saved JWT in the `Authorization` header for protected content requests.

## Notes

- The dashboard refreshes content automatically every 10 seconds.
- YouTube links are embedded using the video player.
- X / Twitter links are rendered as tweet embeds.

## License

No license has been defined yet.
