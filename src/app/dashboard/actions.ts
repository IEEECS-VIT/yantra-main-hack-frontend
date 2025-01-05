import { fetchWithAuth, handleApiResponse } from "@/lib/base";

export async function getTeamDetails() {
    try {
        const res = await fetchWithAuth("/team-details", {
            method: "GET"
        });
        if(!res.ok){
            throw new Error("Failed to fetch team details");
        }
        return handleApiResponse(res);
    }
    catch (err) {
        console.error("Error fetching team details");
        return {
            data: null,
            errors: err instanceof Error ? err.message : "Unknown error occurred",
        }
    }
}