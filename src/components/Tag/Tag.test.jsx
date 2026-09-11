import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Tag from ".";

describe("The Tag component", () => {
  it("should render correctly with given text", () => {
    render(<Tag text="Example text" />);

    expect(screen.getByText("Example text")).toBeInTheDocument();
  });
});
