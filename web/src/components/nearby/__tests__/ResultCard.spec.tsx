import { shallow } from "enzyme";
import React from "react";
import ResultCard from "../ResultCard";

describe("Result Card", () => {
    it("should render with default props", () => {
        const props = {
            description: "description",
            distance: "distance",
            location: "location",
            title: "title",
        };
        const wrapper = shallow(<ResultCard {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
