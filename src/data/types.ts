export interface Guideline {
  id: string;
  name: string;
  icdCode?: string;
  referralWhen: string[];
  workup: string[];
  requirements?: string[];
  timeframe?: string;
  urgency: 'routine' | 'urgent' | 'emergent';
}

export interface Specialty {
  id: string;
  name: string;
  iconName: string;
  guidelines: Guideline[];
}
