import { fetchWithAuth, handleApiResponse } from "@/lib/base";

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
  track: string | null;
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
  try {
    const res = await fetchWithAuth("/team-details", {
      method: "GET",
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message);
    }
    const data: TeamResponse = await res.json();
    return { success: true, data: data.data };
  } catch (err) {
    console.error("Error fetching team details");
    return {
      success: false,
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

export async function submitFile(formData: FormData) {
  try {
    const res = await fetchWithAuth("/task-submit", {
      method: "PUT",
      body: formData,
    });
    if (!res.ok) throw new Error("Error submitting the file.");
    return handleApiResponse(res);
  } catch (err) {
    console.error("Error submitting file");
    return {
      data: null,
      errors: err instanceof Error ? err.message : "Unknown error occurred",
    };
  }
}
