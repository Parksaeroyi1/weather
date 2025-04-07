# 🌤️ Weather App

A responsive weather application built with **React**, powered by **Vite** and styled with custom CSS. It fetches real-time weather data using the **OpenWeatherMap API**, shows a dynamic background and weather icon based on conditions, and supports user searches by city name.

---

## 🔧 Tech Stack

- ⚛️ React (with Hooks)
- ⚡ Vite
- 🌐 OpenWeatherMap API
- 🎨 CSS (custom styling)
- 🖼️ Font Awesome (for weather icons)

---

## ✨ Features

- 🔍 Search weather by city
- 🏙️ Default city on load: Montreal
- 🌦️ Displays:
  - Temperature
  - Weather type
  - Wind speed
  - Humidity
- 🌈 Dynamic background and icon depending on weather condition
- 🔄 Loading animation
- ❌ User-friendly error handling ("Not Found 😔")

---

Weather App project:

---

# 🌦️ React Weather App Setup Guide (Vite + OpenWeatherMap)

Follow these steps to set up a simple weather app using **Vite**, **React**, and **OpenWeatherMap API**.

---

## ✅ 1. Create the React App with Vite

npm create vite@latest my-weather-app -- --template react
cd my-weather-app
npm install
npm run dev
```

> ✔️ Replace `my-weather-app` with your preferred project name.  
> ✔️ Visit `http://localhost:5173` to confirm it runs.

---

## 🧹 2. Clean Up Starter Files

Delete these files:

```
public/vite.svg
src/assets/react.svg
src/App.css
```

Clear the contents of these files (but keep them):

- `src/App.jsx`
- `src/index.css`

In `index.html`:

- Delete the image `<link>` referencing `vite.svg`
- Update the `<title>` to your project name, e.g.:

```html
<title>Weather App</title>
```

---

## 🧱 3. Setup Project Structure

### 🔧 Create Folders & Files


src/components/WeatherApp.jsx
src/components/WeatherApp.css
src/assets/images/
```

### 🖼️ Add the following image files into `src/assets/images/`:

- `sun.png`
- `cloudy1.png`
- `rainy.png`
- `loading.gif`

---

## 🧠 4. Install Recommended VS Code Extension (Optional)

Install: **ES7+ React/Redux/React-Native Snippets**
and ESL
This helps you scaffold React components faster.

---

## 🧑‍💻 5. Paste Component Code

Paste your app’s code inside `WeatherApp.jsx` and style it in `WeatherApp.css`.

In `App.jsx`, import and render the component:

```jsx
import WeatherApp from './components/WeatherApp';

function App() {
  return <WeatherApp />;
}

export default App;
```

---

## 🌐 6. Add Font Awesome Icons (CDN)

Go to [cdnjs Font Awesome](https://cdnjs.com/libraries/font-awesome)  
Copy the latest **CSS link**, then add it to `index.html` inside `<head>`:

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>
```

---

## ✍️ 7. Add Google Fonts (Optional)

1. Go to [https://fonts.google.com/](https://fonts.google.com/)
2. Select a font (e.g., **Poppins**) → copy the `@import` line
3. Paste it at the top of `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
```

---

## 🔑 8. Get and Use Your OpenWeatherMap API Key

1. Sign up at [https://openweathermap.org/api](https://openweathermap.org/api)
2. Go to **"Current Weather Data"** and copy your API key

In `WeatherApp.jsx`, replace the `api_key` variable:

```js
const api_key = 'YOUR_API_KEY_HERE';
```

---

## 🧪 9. Run Your App

Start the dev server:


npm run dev


Visit: `http://localhost:5173`

---


