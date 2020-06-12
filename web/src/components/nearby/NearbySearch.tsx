import { useQuery } from "@apollo/react-hooks";
import React, { useCallback, useState } from "react";
import { FoodTruck, QueryFoodTrucksNearbyArgs } from "../../generated/graphql";
import Container from "./Container";
import Results from "./Results";
import SearchBar from "./SearchBar";
import { SearchLocation } from "./types";
import foodTrucksNearbyQuery from "../../graph/foodTrucksNearbyQuery";

interface IProps {}

type QueryResult = {
    foodTrucksNearby: FoodTruck[];
};

const NearbySearch = (props: IProps) => {
    const [location, setLocation] = useState<SearchLocation>({});

    // Get results from the Server
    // This hook is the reason there are no tests for this component
    // It's possible to test but it takes some extra work to mock out the ApolloProvider's response
    const { loading, error, data } = useQuery<
        QueryResult,
        QueryFoodTrucksNearbyArgs
    >(foodTrucksNearbyQuery, {
        skip: !location?.lng || !location.lat,
        variables: {
            lat: location?.lat!,
            lng: location?.lng!,
        },
    });

    const searchHandler = useCallback(
        (lat: number, lng: number) => {
            setLocation({ lat, lng });
        },
        [setLocation]
    );

    return (
        <Container>
            <SearchBar onSearch={searchHandler} />
            <Results
                foodTrucks={data?.foodTrucksNearby || []}
                loading={loading}
            />
        </Container>
    );
};

export default NearbySearch;
