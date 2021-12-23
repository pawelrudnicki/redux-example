import * as React from "react";
import {render, screen} from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";

const NumberDisplay = ({number}) => {
    return (
        <div>
            <span data-testid="number-display">{number}</span>
        </div>
    )
}

test('calling render with the same component on the same render container doesnt remount', () => {
    const {rerender} = render(<NumberDisplay number={1}/>);
    // assert
    expect(screen.getByTestId('number-display')).toHaveTextContent('1');
    rerender(<NumberDisplay number={2}/>);
    // assert 2
    expect(screen.getByTestId('number-display')).toHaveTextContent('2');
});