import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SlideShow from ".";
import userEvent from "@testing-library/user-event";

const fakeImgsArr = ["image1.png", "image2.png", "image3.png"];

describe("The SlideShow component", () => {
  it("should show first image by default with correct images count", () => {
    render(<SlideShow pictures={fakeImgsArr} />);
    const slidesContainerEl = screen.getByTestId("slides");

    expect(screen.getByText("1 / 3")).toBeInTheDocument();
    // shows the first img
    expect(slidesContainerEl).toHaveStyle({
      transform: "translateX(-0%)",
    });
  });

  it("should navigate to next/previous slide on next/previous btn click and update images count accordingly", async () => {
    const user = userEvent.setup();
    render(<SlideShow pictures={fakeImgsArr} />);
    const slidesContainerEl = screen.getByTestId("slides");
    const nextSlideBtn = screen.getByRole("button", { name: "suivant" });
    const previousSlideBtn = screen.getByRole("button", { name: "précédent" });

    await user.click(nextSlideBtn);

    expect(screen.getByText("2 / 3")).toBeInTheDocument();
    expect(slidesContainerEl).toHaveStyle({
      transform: "translateX(-100%)",
    });

    await user.click(previousSlideBtn);

    expect(screen.getByText("1 / 3")).toBeInTheDocument();
    expect(slidesContainerEl).toHaveStyle({
      transform: "translateX(-0%)",
    });
  });

  it("should go back to first image if the user clicks on next image btn when already on last image", async () => {
    const user = userEvent.setup();
    render(<SlideShow pictures={fakeImgsArr} />);
    const slidesContainerEl = screen.getByTestId("slides");
    const nextSlideBtn = screen.getByRole("button", { name: "suivant" });

    await user.click(nextSlideBtn);
    await user.click(nextSlideBtn);
    await user.click(nextSlideBtn);

    expect(screen.getByText("1 / 3")).toBeInTheDocument();
    expect(slidesContainerEl).toHaveStyle({
      transform: "translateX(-0%)",
    });
  });

  it("should go to last image if the user clicks on previous image btn when already on first image", async () => {
    const user = userEvent.setup();
    render(<SlideShow pictures={fakeImgsArr} />);
    const slidesContainerEl = screen.getByTestId("slides");
    const previousSlideBtn = screen.getByRole("button", { name: "précédent" });

    await user.click(previousSlideBtn);

    expect(screen.getByText("3 / 3")).toBeInTheDocument();
    expect(slidesContainerEl).toHaveStyle({
      transform: "translateX(-200%)",
    });
  });

  it("should not render navigation btns and images count if there is only one image", () => {
    const fakeSingleImgArr = ["image1.png"];
    render(<SlideShow pictures={fakeSingleImgArr} />);

    expect(screen.queryByRole("button", { name: "précédent" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "suivant" })).not.toBeInTheDocument();
    expect(screen.queryByTestId("count")).not.toBeInTheDocument();
  });
});
