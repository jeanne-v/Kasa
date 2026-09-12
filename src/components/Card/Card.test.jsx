import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import mockPropertiesArr from "../../tests/mocks/mockPropertiesData";
import Card from ".";

describe("The Card component", () => {
  it("should show given property content", () => {
    render(
      <MemoryRouter>
        <Card
          title={mockPropertiesArr[0].title}
          cover={mockPropertiesArr[0].cover}
          id={mockPropertiesArr[0].id}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("Property 1")).toBeInTheDocument();
    expect(screen.getByTestId("card")).toHaveStyle({
      backgroundImage: 'url("img1.png")',
    });
    expect(screen.getByTestId("card").href).toMatch(/\properties\/1/);
  });
});
