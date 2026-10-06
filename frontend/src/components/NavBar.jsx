

import ThemeToggleButton from "@/components/ui/ThemeToggleButton.jsx"
import TextLink from "@/components/ui/TextLink.jsx";
import ButtonLink from "@/components/ui/ButtonLink.jsx";


export default function NavBar({currentPage, isDashboard}) {

    return (
        <nav className="flex justify-between items-center w-full px-4 py-2 gap-8 ">

            <div className="flex items-center gap-8">
                <TextLink href="/" className="font-bold text-xl font-mono"> arduinomatic </TextLink>

                {}
                <div className ="flex gap-4">
                    <TextLink href="/About">About</TextLink>
                    <TextLink href="/Documentation">Documentation</TextLink>
                </div>
            </div>

            {}
            <div className ="flex gap-4">

                <ButtonLink href="Dashboard" className="">Dashboard</ButtonLink>
                <ButtonLink href="/Login" variant="outline">Login</ButtonLink>


                <ThemeToggleButton />
            </div>
        </nav>
    );

}












