import { render, screen } from "@testing-library/react";
import ShowHeader from "@/components/ShowHeader/ShowHeader";

const mockShow = {
    name: "Powerpuff Girls",
    image: { original: "/image.jpg" },
    summary: "A great show!"
};

describe("ShowHeader Component", () => {
    it("renders show title and summary", () => {
        render(<ShowHeader {...mockShow} />);

        expect(screen.getByRole("heading", { name: mockShow.name })).toBeInTheDocument();
        expect(screen.getByText(mockShow.summary)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute("src", mockShow.image.original);
    });
});
