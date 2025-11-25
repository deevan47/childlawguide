export type ViewState = 'home' | 'map' | 'content';

export interface TopicData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Need of Care' | 'Conflict with Law' | 'Child Welfare' | 'Resources' | 'Root';
  image: string;
  content: string; // HTML-like string or markdown
  relatedNodes?: string[];
}

export interface NodePosition {
  id: string;
  x: number;
  y: number;
  level: 0 | 1 | 2 | 3;
  label: string;
  parentId?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: NavItem[];
}