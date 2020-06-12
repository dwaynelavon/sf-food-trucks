import { shallow } from "enzyme";
import React from "react";
import Container from "../Container";

describe("Container", () => {
    it("should render with default props", () => {
        const wrapper = shallow(<Container />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should render with children", () => {
        const wrapper = shallow(
            <Container>
                <div>Hello World</div>
            </Container>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
