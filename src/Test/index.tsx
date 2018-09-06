import * as React from "react"

export const Test: React.SFC<TestProps> = ({ message = "Default message. You didn't pass a message prop." }) => (
    <div className="test-class">
        <p>{message}</p>
    </div>
)

Test.displayName = "Test"

export default Test

interface TestProps {
    /** Message text to include in component
     * 
     * @default "Default message. You didn't pass a message prop."
     */
    message?: string
}