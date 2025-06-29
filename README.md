# ⛅ Weather App 🌍

A responsive web app that shows real-time weather updates for any city using either **manual search** or **your current location** via the "📍 Use My Location" button. Powered by OpenWeatherMap API.

---

## 🔥 Features

- 🔎 **Search by City Name**  
- 📍 **Get Weather Using Your Current Location**  
- 🌡️ **Live Weather Info**: Temperature, Feels Like, Humidity, Wind, and more  
- 🖥️ **Responsive UI** for desktop and mobile  
- 🌙 Optional dark mode toggle (if applicable)

---

## 📸 Demo

> _Add a screenshot or live demo GIF here_

Or visit: **[Live Demo](https://your-live-demo-link.com)**

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **API**: [OpenWeatherMap API](https://openweathermap.org/api)  
- **Geolocation**: Browser's native Geolocation API

---

## 🚀 How It Works

1. **Manual Search**  
   - Type the city name and hit search  
   - Fetches weather data for that city

2. **Use My Location**  
   - Click the 📍 button  
   - Uses device GPS to fetch local weather

3. Displays:
   - ✅ City & Country  
   - 🌡️ Temperature  
   - 💧 Humidity  
   - 🌬️ Wind Speed  
   - ☁️ Weather Condition (e.g., Clear, Rainy)

---

## 💻 Installation (for local development)

```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
open index.html
```

> Or just open `index.html` directly in any browser.

---

## 🧪 Example Usage

```
🔎 Search: "New York"
Result:
City: New York, US
Temperature: 22°C
Humidity: 68%
Condition: Clear Sky
```

---

## 📁 Project Structure

```
weather-app/
├── index.html
├── style.css
├── script.js
├── assets/
└── README.md
```

---

## 🔐 Setup (API Key)

1. Sign up at [OpenWeatherMap](https://openweathermap.org/)  
2. Get your free API key  
3. Replace `YOUR_API_KEY` in `script.js` with your actual key:

```javascript
const apiKey = "YOUR_API_KEY";
```

---

## 📱 Mobile Support

This app is fully responsive and works great on all screen sizes.

---

## 🧭 Location Permission

Make sure your browser allows location access if you want to use the "📍 Use My Location" feature.

---

## 🙌 Credits

- [OpenWeatherMap API](https://openweathermap.org/api)  
- Icons by [Font Awesome](https://fontawesome.com/) or your source  
- Built with ❤️ by [Your Name](https://github.com/yourusername)

---

## 📄 License

This project is licensed under the MIT License.
