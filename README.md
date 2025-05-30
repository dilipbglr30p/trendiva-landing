# GroupBuy - WhatsApp Group Buying Platform

This is a landing page for a WhatsApp-based group buying platform. It allows communities, apartments, and neighborhoods to organize group purchases to save money and time.

## Features

- Modern, responsive landing page built with React and Tailwind CSS
- WhatsApp QR code integration for easy group joining
- User registration form with basic validation
- Dark mode support
- Animations and micro-interactions for better user experience

## Getting Started

### Prerequisites

- Node.js 14.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Deployment to Vercel

### Option 1: Deploy from Git Repository

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up or log in to Vercel (https://vercel.com)
3. Click "New Project" and import your repository
4. Configure your project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click "Deploy"

### Option 2: Deploy from CLI

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Login to Vercel
```bash
vercel login
```

3. Deploy from the project directory
```bash
vercel
```

4. For production deployment
```bash
vercel --prod
```

## Project Structure

- `/src` - Source files
  - `/components` - React components
  - `/context` - React context providers
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point
  - `index.css` - Global styles and Tailwind imports
- `public` - Static assets
- `index.html` - HTML template

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## License

This project is licensed under the MIT License.