# React Signup Form

A simple React application for user signup with form validation.

## Features
- Email validation (valid format)
- Password validation (at least 8 characters)
- Real-time error messages
- Visual feedback (email border color)
- Form submission with alerts

## Getting Started
1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`
3. Open http://localhost:5173 in your browser.

## Project Structure
- `src/components/SignupForm.tsx`: The main form component.
- `src/App.tsx`: Renders the form.
- Other files: Standard Vite/React setup.

## Technologies Used
- React 18
- TypeScript
- Vite
- Vercel (for deployment)

## Deployment
The project is deployed on Vercel. Access it here: [Live Demo](https://your-project-name.vercel.app)

To deploy your own version:
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel`
4. For production: `vercel --prod`