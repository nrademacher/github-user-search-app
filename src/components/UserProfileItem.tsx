interface IUserProfileItem {
    icon: string
    name: string
    value: string
    isLink?: boolean
}

export const UserProfileItem: React.FC<IUserProfileItem> = ({ icon, name, value, isLink }) => {
    let itemEl
    if (isLink && value.length) {
        itemEl = (
            <a className="hover:underline" href={value}>
                {value}
            </a>
        )
    } else {
        itemEl = value
    }

    return (
        <div className="flex items-center">
            <img src={icon} alt={name} className="mr-4" />
            <span>{itemEl ? itemEl : <span className="opacity-50">Not Available</span>}</span>
        </div>
    )
}
