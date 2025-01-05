import { fetchWithAuth, handleApiResponse } from "@/lib/base";

<<<<<<< HEAD
export async function getTeamDetails() {
=======
export interface TeamMember {
  name: string;
  email: string;
  regNo: string;
  isLeader: boolean;
  branch: string;
}

export interface TeamDetails {
  srNo: number;
  teamName: string;
  teamCode: string;
  hackQualified: boolean;
  internalQualification: number;
  documentLink: string | null;
}

export interface TeamResponseData {
  team: TeamDetails;
  members: TeamMember[];
  memberCount: number;
  spotsRemaining: number;
  isLeader: boolean;
}

export interface TeamResponse {
  success: boolean;
  data?: TeamResponseData;
  errors?: string;
}

export async function getTeamDetails(): Promise<TeamResponse> {
>>>>>>> 46c3c04bd47b9f5843d502f3f6e38e0af3f82784
  try {
    const res = await fetchWithAuth("/team-details", {
      method: "GET",
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message);
    }
<<<<<<< HEAD
    return handleApiResponse(res);
  } catch (err) {
    console.error("Error fetching team details");
    return {
      data: null,
=======
    const data: TeamResponse = await res.json();
    return { success: true, data: data.data };
  } catch (err) {
    console.error("Error fetching team details");
    return {
      success: false,
>>>>>>> 46c3c04bd47b9f5843d502f3f6e38e0af3f82784
      errors: err instanceof Error ? err.message : "Unknown error occurred",
    };
  }
}

export async function leaveTeam() {
  try {
    const res = await fetchWithAuth("/leave-team", {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error("Failed to leave team");
    }
    return handleApiResponse(res);
  } catch (err) {
    console.error("Error leaving team");
    return {
      data: null,
      errors: err instanceof Error ? err.message : "Unknown error occurred",
    };
  }
}
