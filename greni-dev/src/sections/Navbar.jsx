import { Logo } from '../ui/Logo.jsx'
import { NavLink } from '../ui/NavLink.jsx'

export const Navbar = () => {

    const links = ["Projects", "Contact"];

    return <div className="m-4 flex items-center justify-between">
        <Logo />
        {links.map(link => <NavLink name={link}/>)}
        </div>
}