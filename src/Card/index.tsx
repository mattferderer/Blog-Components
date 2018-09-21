import * as React from "react"
import "./style.scss"

export const Card: React.SFC<CardProps> = ({ children }) => (
    <div className="card">
        <p>{children}</p>
    </div>
)

Card.displayName = "Card"

export const CardSection: React.SFC<CardProps> = ({ children }) => (
    <div className="card-section">
        <p>{children}</p>
    </div>
)

CardSection.displayName = "CardSection"

export const CardDivider: React.SFC<CardProps> = ({ children }) => (
    <div className="card-divider">
        <p>{children}</p>
    </div>
)

CardDivider.displayName = "CardDivider"

export default Card

interface CardProps {
    /** Children to include in component.
     * 
     */
    children?: JSX.Element
}
