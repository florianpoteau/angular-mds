export type EventCategory = 'conference' | 'atelier' | 'sport';

export interface CampusEvent {
  id: number;
  type: EventCategory;
  title: string;
  date: string;
  location: string;
  description: string;
  capacity?: number;
}
