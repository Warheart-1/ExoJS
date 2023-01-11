interface TextTweetProps {
    text: string;
    classList : string;
}

export default function TextTweet({...props} : TextTweetProps) {
    return (
        <p className={props.classList}>
            {props.text}
        </p>
    )
}
