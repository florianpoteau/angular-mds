
export interface CampusEventBase {
  id: number;
  type: CampusEvent;
  title: string;
  date: string;
  location: string;
  description: string;
  capacity?: number;
}

export type CampusEvent = 'conference' | 'atelier' | 'sport'
