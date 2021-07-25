import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PostPage from "../pages/PostPage";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
      pathname: "localhost:3000/post/:postId",
      state: {
        title: "TEST",
        author: "TEST AUTHOR",
        img: "TESTING URL",
        categories: "Photography"
    }
    })
  }));

describe("PostPage Component", () => {
    test("Author should be populated, data has populated correctly", () => {
        render(<PostPage />);

        const authorEl = screen.getByText("TEST AUTHOR", {exact: false});
        expect(authorEl).toBeInTheDocument();
    })

    test("Image src should be populated, data has populated correctly", () => {
        render(<PostPage />);

        const imgEl = screen.getByAltText("TEST");
        expect(imgEl).toBeInTheDocument();
    })

    test("Categories should be populated, data has populated correctly", () => {
        render(<PostPage />);

        const categoryEl = screen.getByText("Photography", {exact: false});
        expect(categoryEl).toBeInTheDocument();
    })
})