import { shallow } from "enzyme";
import React from "react";
import Results from "../Results";
import { FoodTruck } from "../../../generated/graphql";

describe("Results", () => {
    it("should render with default props", () => {
        const foodTruck: FoodTruck = {
            locationDescription: "truck is here",
            objectId: "abc123",
            applicant: "My Truck",
            sourceDistance: 0.45,
            foodItems: "tacos sushi and pizza",
        };
        const props = {
            loading: false,
            foodTrucks: [foodTruck],
        };
        const wrapper = shallow(<Results {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
