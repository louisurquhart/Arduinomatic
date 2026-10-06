import './App.css';
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/Dashboard/DashboardPage.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import DocumentationPage from "./pages/DocumentationPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";




function App() {
    const projectName = "Arduino Project";

    return (
        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/About" element={<AboutPage />} />
                <Route path="/Documentation" element={<DocumentationPage />} />
                <Route path="/Login" element={<LoginPage/>} />
                <Route path="/Dashboard" element={<DashboardPage />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;