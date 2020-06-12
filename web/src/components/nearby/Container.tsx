import React from "react";
import { IReactStandardProps } from "./types";

const Container = ({ children }: IReactStandardProps) => (
    <div className="container box">
        <h4 className="title is-4">Nearby Search</h4>
        {children}
    </div>
);

export default Container;
