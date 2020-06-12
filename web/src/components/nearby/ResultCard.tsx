import React from "react";

interface IProps {
    description: string;
    distance: number;
    location: string;
    title: string;
}

const ResultCard = ({ description, distance, location, title }: IProps) => (
    <div>
        <div>{title}</div>
        <div>{description}</div>
        <div>{location}</div>
        <div>{distance} mi</div>
    </div>
);

export default ResultCard;
