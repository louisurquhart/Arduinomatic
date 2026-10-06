import {buttonVariants} from "@/components/ui/button.jsx";
import {cn} from "@/lib/utils.js";
import {Link} from "react-router-dom";

export default function ButtonLink({href, children, className = "", variant = "default", size = "default"}) {

    return (
        <Link to={href} className={cn(buttonVariants({variant, size}), " " + className)}>
            {children}
        </Link>
    )
}