export default interface Scraper { 
    name: string;
    url: string;
    status: 1 | 2 | 3; // 1 => active || 2 => Stopped => 3 Completed
    lastRun: string
    recordCount: number;
}