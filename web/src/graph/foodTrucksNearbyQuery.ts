import gql from "graphql-tag";

export default gql`
    query($lat: Float!, $lng: Float!) {
        foodTrucksNearby(lat: $lat, lng: $lng) {
            objectId
            locationDescription
            applicant
            foodItems
            sourceDistance
        }
    }
`;
