import classNames from "classnames"
import * as React from 'react';
import "./style.scss"

export default class CardFlip extends React.Component<CardFlipProps, CardFlipState> {
    static defaultProps = {
        isFlipped: false
    }

    state = {
        isFlipped: this.props.isFlipped
    }

    componentWillReceiveProps(nextProps: CardFlipProps) {
        if (nextProps.isFlipped !== this.props.isFlipped) {
            this.setState({ isFlipped: nextProps.isFlipped })
        }
    }

    cardClass(key: string, active: boolean) {
        return classNames(
            "card-wrapper",
            `card-${key}`,
            { "active": active }
        )
    }

    flipCard = () => {
        this.setState((prevState, props) => {
            return {
                isFlipped: !prevState.isFlipped
            }
        })
    }

    render() {
        const isFlipped = this.state.isFlipped

        return (
            <div
                className={
                    classNames(
                        "card-flip",
                        { "is-flipped": isFlipped }
                    )
                }
                onClick={this.flipCard}
            >
                <div className="card-flipper">
                    <div className={this.cardClass("front", !isFlipped)}>
                        {this.props.children[0]}
                    </div>

                    <div className={this.cardClass("back", isFlipped)}>
                        {this.props.children[1]}
                    </div>
                </div>
            </div>
        )
    }
}
export interface CardFlipProps {
    isFlipped: boolean
    children: React.ReactNode[]
}

export interface CardFlipState {
    isFlipped: boolean
}

export interface DefaultCardFlipProps {
    isFlipped: boolean
}

export interface CardFlipChildren extends React.ReactElement<any> {
    key: string
}
