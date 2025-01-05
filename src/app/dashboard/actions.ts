import { fetchWithAuth, handleApiResponse } from "@/lib/base";

export async function getTeamDetails() {
    try {
        const res = await fetchWithAuth("/team-details", {
            method: "GET"
        });
        if (!res.ok) {
            const data = await res.json()
            throw new Error(data.message);
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

export async function leaveTeam() {
    try {
        const res = await fetchWithAuth("/leave-team", {
            method: "DELETE"
        });
        if (!res.ok) {
            throw new Error("Failed to leave team");
        }
        return handleApiResponse(res);
    }
    catch (err) {
        console.error("Error leaving team");
        return {
            data: null,
            errors: err instanceof Error ? err.message : "Unknown error occurred",
        }
    }

}