import React, { useState, useCallback } from "react";
import Container from "./Container";
import SearchBar from "./SearchBar";
import { SearchHandler, SearchLocation } from "./types";
import { FoodTruck } from "../../generated/graphql";
import Results from "./Results";

interface IProps {}

const NearbySearch = (props: IProps) => {
    const [location, setLocation] = useState<SearchLocation>();
    const [foodTrucks, setFoodTrucks] = useState<FoodTruck[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const searchHandler = useCallback(
        (lat: number, lng: number) => {
            setLocation({ lat, lng });
        },
        [setLocation]
    );

    return (
        <Container>
            <SearchBar onSearch={searchHandler} />
            <Results foodTrucks={foodTrucks} loading={loading} />
        </Container>
    );
};

export default NearbySearch;
