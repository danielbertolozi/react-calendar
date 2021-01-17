import { Event } from "./Event";

export class EventStorage {
    private events: Event[];
    private eventIdCounter = 0;
    constructor() {
        this.events = [];
    }
    public addEvent(date: Date, title: string) {
        const event = new Event(this.eventIdCounter, date, title);
        this.eventIdCounter++;
        this.events.push(event);
    }
}