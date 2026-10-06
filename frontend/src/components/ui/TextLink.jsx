import {Link} from "react-router-dom";

export default function TextLink({href, children, className = ""}) {
    return (
        <Link to={href} className={`${className}`}>
            {children}
        </Link>
    );
}