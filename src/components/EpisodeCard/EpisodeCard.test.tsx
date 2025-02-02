import { render, screen } from "@testing-library/react";
import EpisodeCard from "@/components/EpisodeCard/EpisodeCard";

const mockEpisode = {
    id: 1,
    name: "Pilot",
    image: { medium: "/pilot.jpg" },
    airdate: "2023-06-10",
    summary: "<p>A fun episode.</p>",
    rating: { average: 8.5 },
};

describe("EpisodeCard Component", () => {
    it("renders episode title, image, and rating", () => {
        render(<EpisodeCard episode={mockEpisode} />);

        expect(screen.getByRole('heading', { name: mockEpisode.name })).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute("src", mockEpisode.image.medium);
        expect(screen.getByText('8.5 / 10')).toBeInTheDocument();
    });

    it("displays 'No rating yet' when no rating is available", () => {
        render(<EpisodeCard episode={{ ...mockEpisode, rating: {} }} />);
        expect(screen.getByText('No rating yet')).toBeInTheDocument();
    });

    it("displays 'No description' when no summary is provided", () => {
        render(<EpisodeCard episode={{ ...mockEpisode, summary: "" }} />);
        expect(screen.getByText('No description')).toBeInTheDocument();
    });
});
