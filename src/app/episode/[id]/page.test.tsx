import { render, screen, waitFor, act } from "@testing-library/react";
import EpisodePage from "./page";
import { fetchEpisode } from "@/utils/api";
import { Episode } from "@/types/index";
import "@testing-library/jest-dom";

// Mock API call
jest.mock("@/utils/api", () => ({
    fetchEpisode: jest.fn(),
}));

jest.mock("next/link", () => ({
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock("next/navigation", () => require("next-router-mock"));

describe("EpisodePage Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders episode details when API call succeeds", async () => {
        const mockEpisode: Episode = {
            id: 1,
            name: "Test Episode",
            image: { original: "/test-image.jpg" },
            summary: "<p>This is a test episode.</p>",
            _links: { show: { href: "/show/1", name: "Powerpuff Girls", id: 1 } },
        };

        (fetchEpisode as jest.Mock).mockResolvedValue(mockEpisode);

        await act(async () => {
            render(await EpisodePage({ params: { id: "1" } }));
        });

        expect(await screen.findByRole("heading", { name: /Test Episode/i })).toBeInTheDocument();
        expect(await screen.findByText(/This is a test episode/i)).toBeInTheDocument();
        expect(await screen.findByRole("img")).toHaveAttribute("src", "/test-image.jpg");
    });

    it("renders error message when episode ID is missing", async () => {
        await act(async () => {
            render(await EpisodePage({ params: { id: "" } }));
        });

        expect(await screen.findByText(/Error: Episode not found/i)).toBeInTheDocument();
        expect(await screen.findByText(/Invalid episode ID/i)).toBeInTheDocument();
    });

    it("renders error message when API call fails", async () => {
        (fetchEpisode as jest.Mock).mockResolvedValue(null);

        await act(async () => {
            render(await EpisodePage({ params: { id: "999" } }));
        });

        expect(await screen.findByText(/Error: Episode or Show not found/i)).toBeInTheDocument();
        expect(await screen.findByText(/The episode or show data couldn't be retrieved/i)).toBeInTheDocument();
    });
});
