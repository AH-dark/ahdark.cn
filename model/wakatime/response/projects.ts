export default interface ProjectsResponse {
    data: Project[];
    next_page: number;
    page: number;
    prev_page: number;
    total: number;
    total_pages: number;
}

export interface Project {
    badge: null;
    color: null;
    created_at: Date;
    has_public_url: boolean;
    human_readable_last_heartbeat_at: string;
    id: string;
    last_heartbeat_at: Date;
    name: string;
    repository: null;
    url: string;
    urlencoded_name: string;
}
