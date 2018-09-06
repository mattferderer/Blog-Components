import { shallow } from "enzyme"
import * as React from "react"

import Test from "../../Test"

it("renders the component", () => {
    const wrapper = shallow(<Test />)
    expect(wrapper.find('.test-class')).toHaveLength(1)
})