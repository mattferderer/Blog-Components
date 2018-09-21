import { withInfo } from '@storybook/addon-info'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from "react"
import { Card, CardSection } from "../Card"
import CardFlip from "../CardFlip"

storiesOf("Card Flip", module)
    .addDecorator(withKnobs)
    .add("Card that flips over",
        withInfo(`A card with two child components that flips over to reveal the other one on clicks.`)(
            () => {
                const front = text("front", "Front of the card")
                const back = text("back", "Back of the card")
                return (
                    <div style={{ width: 500 }}>
                        <CardFlip>
                            <Card key="front">
                                <CardSection>
                                    <p>{front}</p>
                                </CardSection>
                            </Card>
                            <Card key="back">
                                <CardSection>
                                    <p>{back}</p>
                                </CardSection>
                            </Card>
                        </CardFlip>
                    </div>
                )
            }
        )
    )