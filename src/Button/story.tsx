import { withInfo } from '@storybook/addon-info'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from "react"
import Button from "../Button"

storiesOf("Button", module)
    .addDecorator(withKnobs)
    .add("Default Button",
        withInfo(`Default Button`)(
            () => {
                const message = text("message", "Click")
                return (
                    <Button>
                        {message}
                    </Button>
                )
            }
        )
    )
    .add("Button Ripple Off",
        withInfo(`Button with ripple effect on click turned off`)(
            () => {
                const message = text("message", "Click")
                return (
                    <Button ripple={false}>
                        {message}
                    </Button>
                )
            }
        )
    )
    .add("Button Ripple On",
        withInfo(`Button with ripple effect on click turned on`)(
            () => {
                const message = text("message", "Click")
                return (
                    <Button ripple={true}>
                        {message}
                    </Button>
                )
            }
        )
    )
