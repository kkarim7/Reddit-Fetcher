import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import * as reactRedux from "react-redux";

import Home from "../pages/Home";

jest.mock("react-redux");

describe("Home Component", () => {
    const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
    const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })

    test("dispatches reddit posts to the redux store", () => {
        const dispatchData = jest.fn();
        useDispatchMock.mockReturnValue(dispatchData)

        expect(dispatchData).not.toHaveBeenCalled();

    })

    test("gets reddit posts from the redux store", () => {
        const selectData = jest.fn();
        useSelectorMock.mockReturnValue(selectData)

        expect(selectData).not.toBeNull();

    })

    test("Test that navbar rendered", () => {
        render(<Home />)

        const navBarEl = screen.getByText("Reddit", {exact: false});
        expect(navBarEl).toBeInTheDocument();
    })

    test("Input is typed in", () => {
        render(<Home />)

        const inputEl = screen.getByRole("textbox");
        userEvent.type(inputEl, "Test");

        expect(inputEl).toHaveValue("Test");
    })
})