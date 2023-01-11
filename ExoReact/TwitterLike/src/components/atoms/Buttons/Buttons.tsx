import React from "react";

interface ButtonsProps {
    children: React.ReactNode;
    visible: boolean;
    classList : string;
    SendAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Buttons({...props} : ButtonsProps) {

    return (
        <button
            className={props.visible ? "buttons" : "buttons hidden" + props.classList}
            onClick={(e : React.MouseEvent<HTMLButtonElement>) => props.SendAction(e)}>
            {props.children}
        </button>
    )
}