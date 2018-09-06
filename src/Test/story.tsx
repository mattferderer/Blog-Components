import { withInfo } from '@storybook/addon-info'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from "react"
import Test from "../Test"
import "./style.scss"

storiesOf("Test", module)
    .addDecorator(withKnobs)
    .add("Simple Test Component",
        withInfo(`This is a simple test component to test that everything is working in Storybook, TypeScript and Sass.`)(
            () => {
                const message = text("message", "Hello World! Everything is working.")
                return (
                    <Test message={message} />
                )
            }
        )
    )