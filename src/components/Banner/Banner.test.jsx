import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Banner from ".";

describe("The Banner component", () => {
  it("should render content correctly", () => {
    const fakeImg = "bg.jpg";
    render(
      <Banner bg={fakeImg}>
        <h1>Lorem ipsum</h1>
      </Banner>,
    );
    const bannerRootEl = screen.getByTestId("banner");

    expect(bannerRootEl).toHaveStyle({ backgroundImage: 'url("bg.jpg")' });
    expect(screen.getByRole("heading", { name: "Lorem ipsum" })).toBeInTheDocument();
  });
});
