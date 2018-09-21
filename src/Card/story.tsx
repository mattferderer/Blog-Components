import { withInfo } from '@storybook/addon-info'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from "react"
import { Card, CardSection } from "../Card"

storiesOf("Card", module)
    .addDecorator(withKnobs)
    .add("Simple Card Component",
        withInfo(`This is a simple Card component to Card that everything is working in Storybook, TypeScript and Sass.`)(
            () => {
                const message = text("message", "Hello World! Everything is working.")
                return (
                    <Card>
                        <CardSection>
                            <p>{message}</p>
                        </CardSection>
                    </Card>
                )
            }
        )
    )