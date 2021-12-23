import * as React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

class UpperInput extends React.Component {

    state = {
        upper: ""
    }

    handleChange = e => {
        this.setState({
            upper: e.currentTarget.value.toUpperCase()
        });
    }

    render() {
        const {upper} = this.state;
        return (
            <div>
                <label htmlFor="upper">Upper</label>
                <input id="upper" value={upper} onChange={this.handleChange}/>
            </div>
        )
    }
}

test("sets the value to the upper version of the value", () => {
    render(<UpperInput/>);
    const upperInput = screen.getByLabelText(/upper/i); // ignore case
    const text = 'stuff';
    userEvent.type(upperInput, text); // wywolanie handleChange
    expect(upperInput.value).toEqual(text.toUpperCase());
});

test("checkboxes (and radios) must use click", () => {
    const handleChange = jest.fn();
    const {container} = render(<input type="checkbox" onChange={handleChange}/>);
    const checkbox = container.firstChild;
    userEvent.click(checkbox);
    // assert
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox.checked).toBe(true);
});