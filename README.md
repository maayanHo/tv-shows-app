# TV Show Explorer

A **Next.js** web application that allows users to browse and explore TV shows and episodes using the **TV Maze API**.  
The app is built with **TypeScript**, supports **Server-Side Rendering (SSR)**, and is fully **responsive**.

## 🚀 Features
- 📺 **Show Page**: Displays show details, cover image, and a list of episodes.
- 🎬 **Episode Page**: Displays episode details, cover image, and description.
- 🔄 **Server-Side Rendering (SSR)**: Faster load times & SEO-friendly.
- 🎨 **Responsive Design**: Works on desktop and mobile with breakpoints.
- 🔗 **Dynamic Routing**: Show & episode details have separate routes.

---

## 🛠 Installation & Setup
This project requires **Node.js 18+**.  
To check your Node.js version, run:
```
node -v
nvm install 18
nvm use 18
```

### 1️⃣ Clone the Repository
```
git clone https://github.com/YOUR_GITHUB_USERNAME/tv-shows-app.git
cd tv-shows-app
```

### 2️⃣ Install Dependencies
```
npm install
```
```
yarn install
```

### 3️⃣ Start the Development Server
```
npm run dev
```
```
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### 4️⃣ Build & Run for Production
```
npm run build
npm start
```

## 🔬 Running Tests
```
npm test
```

## 📂 Project Structure
```
/tv-shows-app
│── /components        # Reusable UI components
│── /pages             # Next.js pages (Show & Episode)
│── /styles            # SCSS for styling
│── /utils             # API functions
│── next.config.js     # Next.js configuration
│── tsconfig.json      # TypeScript configuration
│── README.md          # Project documentation
│── package.json       # Dependencies & scripts
```

## 📡 API Integration
This project fetches TV show data from the **[TV Maze API](https://www.tvmaze.com/api)**.

- **Show Details:** [GET https://api.tvmaze.com/shows/:id](https://api.tvmaze.com/shows/6771)
- **Episodes List:** [GET https://api.tvmaze.com/shows/:id/episodes](https://api.tvmaze.com/shows/6771/episodes)
- **Episode Details:** [GET https://api.tvmaze.com/episodes/:id](https://api.tvmaze.com/episodes/:id)

📜 License
This project is open-source and available under the MIT License.