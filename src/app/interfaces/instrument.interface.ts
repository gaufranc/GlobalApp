export interface Instrument {
    instrument: string,
    endDateTime: Date,
    startDateTime: Date,
    data: [{
        close: number,
        end: Date,
        high: number,
        instrument: string,
        low: number,
        open: number,
        start: Date,
        volume: number
    }]
}