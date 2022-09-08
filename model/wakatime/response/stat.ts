export default interface StatResponse {
    data: StatData;
}

export interface StatData {
    best_day: BestDay;
    categories: Category[];
    created_at: Date;
    daily_average: number;
    daily_average_including_other_language: number;
    days_including_holidays: number;
    days_minus_holidays: number;
    dependencies: Category[];
    editors: Category[];
    end: Date;
    holidays: number;
    human_readable_daily_average: string;
    human_readable_daily_average_including_other_language: string;
    human_readable_range: string;
    human_readable_total: string;
    human_readable_total_including_other_language: string;
    id: string;
    is_already_updating: boolean;
    is_coding_activity_visible: boolean;
    is_including_today: boolean;
    is_other_usage_visible: boolean;
    is_stuck: boolean;
    is_up_to_date: boolean;
    is_up_to_date_pending_future: boolean;
    languages: Category[];
    machines: Category[];
    modified_at: Date;
    operating_systems: Category[];
    percent_calculated: number;
    projects: Category[];
    range: Range;
    start: Date;
    status: string;
    timeout: number;
    timezone: string;
    total_seconds: number;
    total_seconds_including_other_language: number;
    user_id: string;
    username: string;
    writes_only: boolean;
}

export type Range =
    | "last_7_days"
    | "last_30_days"
    | "last_6_months"
    | "last_year"
    | "all_time"
    | string;

export interface BestDay {
    created_at: Date;
    date: Date;
    id: string;
    modified_at: Date;
    text: string;
    total_seconds: number;
}

export interface Category {
    decimal: string;
    digital: string;
    hours: number;
    minutes: number;
    name: string;
    percent: number;
    text: string;
    total_seconds: number;
    machine_name_id?: string;
}
