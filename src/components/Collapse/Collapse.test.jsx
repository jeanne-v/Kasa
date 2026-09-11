import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Collapse from ".";
import userEvent from "@testing-library/user-event";

describe("The Collapse component", () => {
  it("should render given content correctly, with the collapse closed by default", () => {
    render(
      <Collapse>
        <Collapse.Top>Description</Collapse.Top>
        <Collapse.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Collapse.Content>
      </Collapse>,
    );
    const collapseRootEl = screen.getByTestId("collapse");

    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(
      screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit."),
    ).toBeInTheDocument();
    expect(collapseRootEl).not.toHaveClass("collapse--open");
    expect(screen.getByRole("button", { name: "ouvrir" })).toBeInTheDocument();
  });

  it("should open/close collapse on btn click", async () => {
    render(
      <Collapse>
        <Collapse.Top>Description</Collapse.Top>
        <Collapse.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Collapse.Content>
      </Collapse>,
    );
    const user = userEvent.setup();
    const collapseRootEl = screen.getByTestId("collapse");
    const collapseBtn = screen.getByRole("button");

    await user.click(collapseBtn);

    expect(collapseRootEl).toHaveClass("collapse--open");
    expect(collapseBtn).toHaveAccessibleName("fermer");

    await user.click(collapseBtn);

    expect(collapseRootEl).not.toHaveClass("collapse--open");
    expect(collapseBtn).toHaveAccessibleName("ouvrir");
  });
});
