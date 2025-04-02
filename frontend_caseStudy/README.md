# Profile Viewer

Profile Viewer is a React-based application that displays user profiles with images and descriptions. Users can search for profiles, view their locations on a map, and toggle between dark and light modes.

## Features
- Display a list of user profiles with images and descriptions.
- Search functionality to filter profiles.
- Clickable button to show user location on an interactive map.
- Dark mode toggle for better UI experience.
- Responsive grid-based layout with hover effects.

## Technologies Used
- React
- Leaflet (for interactive maps)
- Bootstrap (for styling)
- CSS (custom styling for dark/light modes and responsiveness)

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd profile-viewer
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## Dependencies
Ensure you have the following installed:
```sh
npm install react-leaflet leaflet bootstrap
```

## Folder Structure
```
profile-viewer/
│-- public/
│-- src/
│   │-- components/
│   │-- styles.css
│   │-- App.js
│   │-- index.js
│-- package.json
│-- README.md
```

## Deployment
To deploy the application:
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using GitHub Pages, Vercel, Netlify, or another hosting service.

## Contributing
Feel free to submit issues or pull requests to improve the application!

## License
This project is open-source and available under the [MIT License](LICENSE).

