import React from 'react';
import Icons from '../../atoms/Icons';
import TextTweet from '../../atoms/TextTweet';

interface TweetProps {
    children: React.ReactNode;
    classList : string;
    SendAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function Tweet({...props} : TweetProps) {
    return(
        <div>
            <div className={"tweet" + props.classList}>
                <div className="tweet__header">
                    <div className="tweet__header__avatar">
                        <Icons classList="avatar" icon={''} />
                        <TextTweet classList="tweet__header__avatar__name" text="John Doe" />
                    </div>
                </div>
            </div>
        </div>
    )
}