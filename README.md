# Arduino Project (arduinomatic)

A web app for looking at data from Arduino sensors. It's still early days, so a lot of it is just the skeleton for now.

- **Frontend:** React + Vite, Tailwind CSS, shadcn-style buttons, React Router
- **Backend:** Spring Boot (Java) with a PostgreSQL database

## What has been done so far

### Frontend (`frontend/src`)
- **Pages** (routes set up in `App.jsx`): Home (`/`), About, Documentation, Login and Dashboard. Most are just a heading and some placeholder text.
- **NavBar:** logo, About/Documentation links, Dashboard and Login buttons, and the theme toggle.
- **Theme toggle:** a theme toggle button that switches light/dark mode. It saves your choice in `localStorage`.
- **Reusable bits:** `TextLink` (a plain link), `ButtonLink` (a button link) and `button.jsx` (the shadcn button with its variants).
- **Styling:** `index.css` has the Tailwind setup plus the light and dark colour themes. `App.css` is empty.
- **Not finished:** `SideBar.jsx` is empty. `ListGroup.jsx` is just a practice list. The Login form doesn't do anything yet.

### Backend (`backend/src/main/java/com/example/demo`)
- **`ArduinoController`:** one test endpoint, `GET /api/test`, which returns "Test success".
- **Database models** (JPA entities):
  - `User`: username, email, password hash and a JSON preferences field
  - `Device`: MAC address, name and last connected time
  - `SensorReading`: timestamp, sensor type, value and unit
- **How they connect:** one User has many Devices, and one Device has many SensorReadings.

## Running it

**Backend**
1. Make sure PostgreSQL is running locally.
2. Make `backend/src/main/resources/application-local.properties` with your own database login details:
   ```
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   ```
   This file is in `.gitignore`, so the password doesn't get pushed to GitHub.
3. Start Spring Boot with the `local` profile.

**Frontend**
```
cd frontend
npm install
npm run dev
```

## Planned

An Arduino remote controller thats accessible via browser

- Account login
- Connect Ardunios via WiFi and see their sensor data live
- Arduinos controlable remotely with interactive UI/UX site elements
- Everything is saved to the users account, including devices and settings
- Premade Arduino code for common setups, to be highly accessible

## Immediate goals
1. Get login working
2. Add and save devices
3. Get one Arduino sending a sensor reading
4. Show it on the dashboard
5. Add remote control and the premade code
