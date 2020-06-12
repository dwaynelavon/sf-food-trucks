import React from "react";

interface IProps {
    description: string;
    distance: string;
    location: string;
    title: string;
}

const ResultCard = ({ description, distance, location, title }: IProps) => (
    <div className="columns">
        <div className="column is-four-fifths">
            <div className="title is-size-4">{title}</div>
            <div className="subtitle is-size-5">{location}</div>
        </div>
        <div className="column">
            <div className="is-size-5">{distance} mi</div>
        </div>
    </div>
);

export default ResultCard;
