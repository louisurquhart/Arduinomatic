import NavBar from "../components/NavBar.jsx";

const User = (props) => {
    const {name, age} = props;

    return (
        <div> {name} ({age}) </div>
    )
}


export default function HomePage() {

    console.log();
    const userName = 'Joe';

    return (
        <div className="p-4">
            <h1>Home</h1>
            <p>Welcome, {userName}!</p>
        </div>
    )

}

