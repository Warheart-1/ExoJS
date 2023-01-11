interface IconsProps {
    icon: string;
    classList : string;
}

export default function Icons({...props} : IconsProps) {
    return (
        <div className={props.classList}>
            <i className={props.icon}></i>
        </div>
    )
}