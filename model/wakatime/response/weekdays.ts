export default interface WeekdaysResponse {
    data: WeekdaysData;
}

export interface WeekdaysData {
    created_at: Date;
    end: Date;
    human_readable_range: string;
    is_already_updating: boolean;
    is_including_today: boolean;
    is_stuck: boolean;
    is_up_to_date: boolean;
    is_up_to_date_pending_future: boolean;
    modified_at: Date;
    percent_calculated: number;
    range: string;
    start: Date;
    status: string;
    timeout: number;
    timezone: string;
    user_id: string;
    weekdays: Weekday[];
    writes_only: boolean;
}

export interface Weekday {
    average: number;
    categories: Category[];
    count: number;
    human_readable_average: string;
    human_readable_total: string;
    name: string;
    total: number;
}

export interface Category {
    average: number;
    human_readable_average: string;
    human_readable_total: string;
    name: Name;
    total: number;
}

export enum Name {
    Browsing = "Browsing",
    Coding = "Coding",
    Debugging = "Debugging",
}
