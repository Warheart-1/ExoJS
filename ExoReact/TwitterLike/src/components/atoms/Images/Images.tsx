interface ImagesProps {
    src?: string;
    alt: string;
    classList : string;
    isSpoiler: boolean;
}

export default function Images({...props} : ImagesProps) {
    return (
        <div className={props.classList}>
            <img src={props.src ? props.src : ""} alt={props.alt ? props.alt : ""} className={props.isSpoiler ? "blur-0" : ""} />
        </div>
    )
}
