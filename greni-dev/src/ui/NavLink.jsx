export const NavLink = ({name}) => {
    return <a href={`#${name}`} className="no-underline text-base p-4">
        {name}
        </a>
}