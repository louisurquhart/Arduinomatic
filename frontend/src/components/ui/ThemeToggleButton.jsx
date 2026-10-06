import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button"
import {Moon, Sun} from "lucide-react";

export default function ThemeToggleButton() {
    // Finds the theme
    const [theme, setTheme] = useState(() => {

        // Tries to pull saved theme
        const savedTheme = localStorage.getItem('theme');

        if(savedTheme) {
            return savedTheme; // Returns saved theme
        }

        // If no saved theme (nothings been returned) pulls browser default
        const systemTheme = window.matchMedia('dark').matches

        if (systemTheme === true) {
            return 'dark';
        } else {
            return 'light';
        }

    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        localStorage.setItem('theme', theme);

    }, [theme]);


    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    if(theme === 'light') {
        return (
            <Button onClick={toggleTheme} className="" variant="outline" size="icon">
                <Moon />
            </Button>
        )
    }
    else {
        return (
            <Button onClick={toggleTheme} className="" variant="outline" size="icon">
                <Sun />
            </Button>
        );
    }

}