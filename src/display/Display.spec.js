import {render} from "react-testing-library";
import React from "react"; 
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display/>", () => {

  it("should display red-led while locked", () => {
    const component = render(<Display closed={true} locked={true} />);
    const display = component.getByText("Locked");

     expect(display).toHaveClass("red-led");
});

it("shoul display 'Closed' display", () => {
  const component = render(<Display closed={true} locked={false} />);
  const display = component.getByText("Unlocked");

   expect(display).toHaveClass("green-led");
});

it("should display 'Locked' while locked", () => {
  const component = render(<Display closed={true} locked={true} />);
  component.getByText("Locked");
});

  it("should display red-light while closed", () => {
    const component = render(<Display closed={true} locked={false} />);
    const display = component.getByText("Closed");

     expect(display).toHaveClass("red-led");
});
it("should display green-light while closed", () => {
  const component = render(<Display closed={false} locked={false} />);
  const display = component.getByText("Open");

   expect(display).toHaveClass("green-led");
});


});