const UserMenu = ({ onClick, label }) => {
    return (
        <div
            onClick={onClick}
            className="px-1 hover:bg-newutral-100 tarnsition font-semibold"
        >
            {label}
        </div>
    )
}
export default UserMenu