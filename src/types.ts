export type ViewState = 'home' | 'map' | 'content';

export interface TopicData {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  category?: string;
  
  // Visual Assets
  bgImage?: string;       
  characterImage?: string;
  
  content: string; // HTML string
}

export interface NodePosition {
  id: string;
  x: number;
  y: number;
  level: number;
  label: string;
  parentId?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: NavItem[];
}