# Ritesh Bhende | Developer Portfolio

A responsive, high-performance, and visually stunning developer portfolio website built using React, Vite, and custom CSS design tokens. 

The website showcases my technical skills, software engineering projects, education milestones, competitive programming statistics, and certification achievements.

## 🚀 Features

- **Rich Visual Aesthetics**: Crafted with custom glassmorphic cards (`.glass-card`), glowing ambient background circles, and smooth transition animations.
- **Dynamic Projects Showcase**: Visual grid displaying key projects with detailed summaries, tech stacks, GitHub source code, and live demo links. Includes custom browser mockup graphics drawn in vector SVG.
- **Journey Timeline**: Displays education milestones (MIT Academy of Engineering B.Tech, SSC, HSC) alongside stats cards for my competitive programming profiles (LeetCode & CodeChef ratings) and certifications (Java & SQL).
- **Interactive Skills Tab**: Categorized skill levels (Languages, Frontend, Backend & Database, DevOps & Tools, and Core Concepts) with animated progress bars.
- **Custom Scroll Animation**: Built with a lightweight `IntersectionObserver` script to trigger fade-in effects as you scroll through sections.
- **Dual Theme Support**: Dynamic toggling between premium Dark and Light theme presets with localStorage caching.
- **Responsive Layout**: Designed for optimal viewing across mobile, tablet, and widescreen desktop monitors.

## 🛠️ Tech Stack

- **Core Framework**: React 19 (Functional Components & Hooks)
- **Build Tool**: Vite 8 (Ultra-fast Hot Module Replacement)
- **Styling**: Pure CSS (Custom HSL color properties, media queries, flexbox, and grid layouts)
- **Icons**: Custom lightweight SVG inline paths

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Static assets (favicons, icon maps)
├── src/
│   ├── assets/             # Images and local vector assets
│   ├── components/         # Modular portfolio blocks
│   │   ├── About.jsx       # Biography & profile stats
│   │   ├── Contact.jsx     # Form with input verification
│   │   ├── Education.jsx   # Schooling milestones
│   │   ├── Experience.jsx  # Competitive programming & certificates
│   │   ├── Footer.jsx      # Social profiles & copyright
│   │   ├── Hero.jsx        # Landing profile with spinning border
│   │   ├── Navbar.jsx      # Navigation links & theme switch
│   │   ├── Projects.jsx    # Filterable project grids
│   │   └── Skills.jsx      # Proficiency progress bars
│   ├── data/               # Model data for easy customization
│   │   ├── experience.js   # Timelines & stats data
│   │   ├── portfolioData.js# Profile contact & social bio
│   │   ├── projects.js     # Showcased projects listings
│   │   └── skills.js       # Core languages & tools
│   ├── App.jsx             # Component assembler & scroll observer
│   ├── index.css           # Global HSL themes & class tokens
│   └── main.jsx            # React root entry point
├── index.html              # Core template loading Google Fonts
├── vite.config.js          # Vite build options
└── package.json            # Node scripts and dependencies
```

## ⚙️ Installation & Running Locally

Follow these steps to set up the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/riteshbhende/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

4. **Compile production build:**
   ```bash
   npm run build
   ```
   The compiled assets will be outputted to the `dist/` directory.

## 👤 Profile & Contacts

- **Name**: Ritesh Bhende
- **Location**: Pune, Maharashtra, India
- **LinkedIn**: [Ritesh Bhende](https://linkedin.com/in/ritesh-bhende-b311a6326)
- **Email**: riteshbhende57@gmail.com
- **Phone**: (+91) 7020565902
