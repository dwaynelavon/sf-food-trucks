import { shallow } from "enzyme";
import React from "react";
import ResultCard from "../ResultCard";
import SearchBar from "../SearchBar";

describe("Search Bar", () => {
    it("should render with default props", () => {
        const props = {
            onSearch: jest.fn(),
        };
        const wrapper = shallow(<SearchBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
