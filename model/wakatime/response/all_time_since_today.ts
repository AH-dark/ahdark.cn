export default interface AllTimeSinceTodayResponse {
    data: AllTimeSinceTodayData;
}

export interface AllTimeSinceTodayData {
    decimal: string;
    digital: string;
    is_up_to_date: boolean;
    percent_calculated: number;
    range: Range;
    text: string;
    timeout: number;
    total_seconds: number;
}

export interface Range {
    end: Date;
    end_date: Date;
    end_text: string;
    start: Date;
    start_date: Date;
    start_text: string;
    timezone: string;
}
