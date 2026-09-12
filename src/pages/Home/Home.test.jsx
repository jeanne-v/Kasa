import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import mockPropertiesArr from "../../tests/mocks/mockPropertiesData";
import Home from ".";

window.fetch = vi.fn();

afterEach(() => {
  window.fetch.mockReset();
});

describe("The Home Page component", () => {
  it("should fetch properties data and render it", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPropertiesArr),
    });
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const propertyCard1 = await screen.findByRole("link", { name: "Property 1" });
    const propertyCard2 = await screen.findByRole("link", { name: "Property 2" });

    expect(propertyCard1.href).toMatch(/\/properties\/1/);
    expect(propertyCard2.href).toMatch(/\/properties\/2/);
  });

  it("should show error msg if fetch is unsuccessful", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
    });
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const errorMsg = await screen.findByText("une erreur est survenue : 403");

    expect(errorMsg).toBeInTheDocument();
  });
});
