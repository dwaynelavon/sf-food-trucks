import React from "react";
import { FoodTruck } from "../../generated/graphql";
import ResultCard from "./ResultCard";

interface IProps {
    foodTrucks: FoodTruck[];
    loading: boolean;
}

const renderFoodTruckResults = (res: FoodTruck[]) =>
    res.map(({ applicant, locationDescription, foodItems, sourceDistance }) => (
        <ResultCard
            title={applicant!}
            description={foodItems!}
            distance={sourceDistance!}
            location={locationDescription!}
        />
    ));

const Results = ({ foodTrucks, loading }: IProps) => {
    return (
        <div className="results">
            {loading ? (
                <progress className="progress is-small is-primary" max="100">
                    15%
                </progress>
            ) : (
                renderFoodTruckResults(foodTrucks)
            )}
        </div>
    );
};

export default Results;
