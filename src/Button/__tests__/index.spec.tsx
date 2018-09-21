import { shallow } from "enzyme"
import * as React from "react"

import Button from "../../Button"

it("renders the component", () => {
    const wrapper = shallow(<Button>Text</Button>)
    expect(wrapper.find('button')).toHaveLength(1)
})

it("adds ripple class when ripple is true", () => {
    const wrapper = shallow(<Button ripple={true}>Text</Button>)
    expect(wrapper.find('button.ripple')).toHaveLength(1)
})

it("does not have ripple class when ripple is false", () => {
    const wrapper = shallow(<Button ripple={false}>Text</Button>)
    expect(wrapper.find('button.ripple')).toHaveLength(0)
})
