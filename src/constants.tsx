import { NavItem, TopicData, ExtendedNodePosition } from './types';

// --- ASSETS ---
// These point to files in your /public folder
export const ASSETS = {
  bgCommon: '/web.jpeg',
  hero: '/homepage.png',
  guide: '/guide.png',
  boy: '/boy.png',
  girl: '/girl.png',
  flame: '/flame.png',
  // External fallback for police background if specific one isn't in public
  policeBg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
};

// --- CONTENT MAP ---
export const TOPIC_CONTENT: Record<string, TopicData> = {
  
  // 1. POLICE OFFICERS (Specific Content)
  'cncp-stk-police': { 
    id: 'cncp-stk-police', 
    title: 'Police Officers', 
    subtitle: 'Children in Need of Care and Protection', 
    category: 'Stakeholder', 
    bgImage: ASSETS.policeBg, 
    characterImage: ASSETS.boy, 
    content: `
      <p>
        Police officers, particularly those in <strong>Special Juvenile Police Units (SJPUs)</strong> and <strong>Child Welfare Police Officers (CWPOs)</strong>, are essential for the protection of Children in Need of Care and Protection (CNCP) under the Juvenile Justice Act.
      </p>
      <br/>
      <p>
        Their key duties involve the immediate rescue and protection of vulnerable children, ensuring they are treated with dignity and in a child-friendly manner. They are mandated to provide immediate care and, most importantly, produce the child before the Child Welfare Committee (CWC) without delay to ensure they are swiftly connected to safety, support services, and long-term rehabilitation.
      </p>
    ` 
  },

  // 2. CHILD LABOUR
  'cncp-labour': {
    id: 'cncp-labour',
    title: 'Child Labour',
    subtitle: 'Children in Need of Care and Protection',
    category: 'CNCP',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Child labour refers to the exploitation of children through any form of work that deprives them of their childhood, interferes with their ability to attend regular school, and is mentally, physically, socially or morally harmful.</p>`
  },

  // 3. CHILD MARRIAGE
  'cncp-marriage': {
    id: 'cncp-marriage',
    title: 'Child Marriage',
    subtitle: 'Children in Need of Care and Protection',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Child marriage is a violation of human rights. The Prohibition of Child Marriage Act creates mechanisms to prevent such marriages and protect victims.</p>`
  },

  // ... Add other IDs here as needed following the pattern ...

  // FALLBACK
  'default': { 
    id: 'default', 
    title: 'Details', 
    subtitle: 'Info', 
    bgImage: ASSETS.bgCommon, 
    characterImage: ASSETS.guide,
    content: '<p>Content is currently being updated for this topic.</p>' 
  }
};

// --- NAVIGATION ITEMS ---
export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "Children in Need of Care and Protection",
    href: "cat-cncp",
    subItems: [
      { label: "Child Labour", href: "cncp-labour" },
      { label: "Child Marriage", href: "cncp-marriage" },
      { label: "Children In Street Situations", href: "cncp-streets" },
      { label: "Children Found Begging", href: "cncp-begging" },
      { label: "Missing / Runaway Children", href: "cncp-missing" },
      { label: "Orphans", href: "cncp-orphans" },
      { label: "Children Found in Prostitution", href: "cncp-prostitution" },
      {
        label: "Stakeholders",
        href: "cncp-stakeholders",
        subItems: [
          { label: "CWC", href: "cncp-stk-cwc" },
          { label: "Police Officers", href: "cncp-stk-police" },
          { label: "DCPU", href: "cncp-stk-dcpu" },
          { label: "Govt Social Workers", href: "cncp-stk-govsw" },
          { label: "NGOs", href: "cncp-stk-ngos" },
          { label: "Homes for Children", href: "cncp-stk-homes" },
          { label: "Parents", href: "cncp-stk-parents" }
        ]
      }
    ]
  },
  {
    label: "Children in Conflict with Law",
    href: "cat-ccl",
    subItems: [
      { label: "JJB Members", href: "ccl-jjb" },
      { label: "Police Officers", href: "ccl-police" },
      { label: "Child Welfare Officer", href: "ccl-cwo" },
      { label: "Govt Social Workers", href: "ccl-govsw" },
      { label: "NGOs", href: "ccl-ngos" },
      { label: "Homes for Children", href: "ccl-homes" },
      { label: "Parents", href: "ccl-parents" }
    ]
  },
  { label: "Child Rights", href: "cat-rights" },
  { label: "POCSO Act", href: "cat-pocso" }
];

// --- WEB MAP NODES ---
export interface ExtendedNodePosition extends NodePosition {
  color?: 'blue' | 'red' | 'black';
  parentId?: string;
}

export const MAP_NODES: ExtendedNodePosition[] = [
  { id: 'root', x: 80, y: 50, level: 0, label: 'CHILD WELFARE SYSTEM', color: 'black' },
  { id: 'cat-rights', x: 80, y: 15, level: 1, label: 'CHILD RIGHTS', parentId: 'root', color: 'blue' },
  { id: 'cat-pocso', x: 90, y: 85, level: 1, label: 'POCSO ACT', parentId: 'root', color: 'blue' },
  { id: 'cat-cncp', x: 38, y: 40, level: 1, label: 'NEED OF CARE (CNCP)', parentId: 'root', color: 'blue' },
      { id: 'cncp-stakeholders', x: 28, y: 28, level: 2, label: 'STAKEHOLDERS', parentId: 'cat-cncp', color: 'blue' },
          { id: 'cncp-stk-cwc', x: 10, y: 20, level: 3, label: 'CWC', parentId: 'cncp-stakeholders', color: 'red' },
          { id: 'cncp-stk-police', x: 20, y: 12, level: 3, label: 'Police', parentId: 'cncp-stakeholders', color: 'red' },
          { id: 'cncp-stk-dcpu', x: 35, y: 10, level: 3, label: 'DCPU', parentId: 'cncp-stakeholders', color: 'red' },
          { id: 'cncp-stk-govsw', x: 50, y: 15, level: 3, label: 'Govt SW', parentId: 'cncp-stakeholders', color: 'red' },
          { id: 'cncp-stk-ngos', x: 55, y: 25, level: 3, label: 'NGOs', parentId: 'cncp-stakeholders', color: 'red' },
          { id: 'cncp-stk-homes', x: 5, y: 30, level: 3, label: 'Homes', parentId: 'cncp-stakeholders', color: 'red' },
          { id: 'cncp-stk-parents', x: 15, y: 40, level: 3, label: 'Parents', parentId: 'cncp-stakeholders', color: 'red' },
      { id: 'cncp-labour', x: 15, y: 55, level: 2, label: 'Child Labour', parentId: 'cat-cncp', color: 'red' },
      { id: 'cncp-marriage', x: 10, y: 65, level: 2, label: 'Child Marriage', parentId: 'cat-cncp', color: 'red' },
      { id: 'cncp-streets', x: 15, y: 75, level: 2, label: 'Street Situations', parentId: 'cat-cncp', color: 'red' },
      { id: 'cncp-begging', x: 25, y: 82, level: 2, label: 'Found Begging', parentId: 'cat-cncp', color: 'red' },
      { id: 'cncp-missing', x: 38, y: 88, level: 2, label: 'Missing/Runaway', parentId: 'cat-cncp', color: 'red' },
      { id: 'cncp-orphans', x: 50, y: 82, level: 2, label: 'Orphans', parentId: 'cat-cncp', color: 'red' },
      { id: 'cncp-prostitution', x: 58, y: 72, level: 2, label: 'In Prostitution', parentId: 'cat-cncp', color: 'red' },
  { id: 'cat-ccl', x: 120, y: 40, level: 1, label: 'CONFLICT w/ LAW (CCL)', parentId: 'root', color: 'blue' },
      { id: 'ccl-jjb', x: 120, y: 25, level: 2, label: 'JJB Members', parentId: 'cat-ccl', color: 'red' },
      { id: 'ccl-police', x: 135, y: 30, level: 2, label: 'Police Officers', parentId: 'cat-ccl', color: 'red' },
      { id: 'ccl-cwo', x: 148, y: 40, level: 2, label: 'Welfare Officer', parentId: 'cat-ccl', color: 'red' },
      { id: 'ccl-govsw', x: 155, y: 55, level: 2, label: 'Social Worker', parentId: 'cat-ccl', color: 'red' },
      { id: 'ccl-ngos', x: 150, y: 70, level: 2, label: 'NGOs', parentId: 'cat-ccl', color: 'red' },
      { id: 'ccl-homes', x: 135, y: 80, level: 2, label: 'Observation Home', parentId: 'cat-ccl', color: 'red' },
      { id: 'ccl-parents', x: 120, y: 85, level: 2, label: 'Parents', parentId: 'cat-ccl', color: 'red' },
];