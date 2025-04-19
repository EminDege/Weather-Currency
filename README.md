# 🌐 Multi-Widget React App

This is a simple yet versatile **React.js** project that combines multiple everyday utility widgets into a single application. It includes components like weather information (based on location or city), currency conversion, live exchange rates, real-time clock, stopwatch, and a countdown timer.

## 🚀 Features

### 📍 Weather1 - Location-Based Weather
- Automatically detects the user's geolocation and displays the current weather.
- Powered by [OpenWeatherMap API](https://openweathermap.org/).

### 🏙️ Weather2 - City-Based Weather
- Allows the user to enter a city name and fetch the current weather conditions for that city.
- Powered by [OpenWeatherMap API](https://openweathermap.org/).

### 💱 Currency - Currency Converter
- Converts between two selected currencies based on the user's input amount.
- Provides a wide range of currencies.
- Powered by [FreeCurrencyAPI](https://freecurrencyapi.com/).

### 💸 Currency2 - Live Exchange Rates
- Displays:
  - 1 USD to TRY
  - 1 EUR to TRY
  - 1 EUR to USD
- Powered by [FreeCurrencyAPI](https://freecurrencyapi.com/).

### 🕒 Clock - Live Clock
- Shows the current time (hour:minute:second).
- Updates automatically every second.

### ⏱️ Stopwatch
- A basic stopwatch with Start, Stop, and Reset functions.
- Displays time with millisecond precision.

### ⏳ Countdown Timer
- A simple timer that counts down from user-defined minutes and seconds.
- Includes Start, Stop, and Reset buttons.

---

## 🛠️ Tech Stack

- **React.js** (bootstrapped with Create React App)
- **Axios** – for API requests
- **use-position** – for geolocation handling
- **Bootstrap / CSS** – for styling
- **React Icons** – for enhanced UI

---
API Keys
The application requires API keys to function correctly:

OpenWeatherMap: for weather data.

FreeCurrencyAPI: for currency and exchange rate data.

⚠️ These keys are currently hardcoded inside the components. For production use, it's recommended to move them into a .env file and use environment variables.
---
## 🔧 Installation & Setup

1. Clone this repository to your local machine.
   
   ```bash
   git clone https://github.com/EminDege/Weather-Currency.git
   cd Weather-Currency
2.Install dependencies using npm or yarn.
  npm install
3.Run the app locally.
  npm start
