import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router";
import mockPropertiesArr from "../../tests/mocks/mockPropertiesData";
import Property from ".";

window.fetch = vi.fn();

afterEach(() => {
  window.fetch.mockReset();
});

describe("The Property Page component", () => {
  it("should fetch property info and render it", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPropertiesArr),
    });
    render(
      <MemoryRouter initialEntries={["/properties/1"]}>
        <Routes>
          <Route path="properties/:id" element={<Property />} />
        </Routes>
      </MemoryRouter>,
    );
    // property title
    await screen.findByRole("heading", { name: "Property 1" });

    // property desc
    expect(screen.getByText("Lorem ipsum dolor sit amet"));
    // property host name
    expect(screen.getByText("Jane Doe"));
    // property location
    expect(screen.getByText("Ile de France - Paris 17e"));
    // property tags
    expect(screen.getByText("Montmartre"));
    // property equipments
    expect(screen.getByText("Wi-fi"));
  });

  it("should render error msg if fetch is unsuccessful", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: false,
      status: 403,
    });
    render(
      <MemoryRouter initialEntries={["/properties/1"]}>
        <Routes>
          <Route path="properties/:id" element={<Property />} />
        </Routes>
      </MemoryRouter>,
    );
    const errorMsg = await screen.findByText("une erreur est survenue : 403");

    expect(errorMsg).toBeInTheDocument();
  });
});
