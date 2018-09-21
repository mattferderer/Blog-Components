import classNames from "classnames"
import * as React from "react"
import "./style.scss"

export const Button: React.SFC<ButtonProps> = ({ children = "Click", ripple = true }) => (
    <button className={classNames("button", { ripple })}>
        {children}
    </button>
)

Button.displayName = "Button"

export default Button

interface ButtonProps {
    children?: string,
    ripple?: boolean
}
