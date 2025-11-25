import { NavItem, TopicData, NodePosition } from './types';

// --- GITHUB PAGES CONFIGURATION ---
// Set to your specific repo name
const REPO_BASE_PATH = '/childlawguide'; 

// Helper to handle local vs deployment assets
const getAssetPath = (path: string) => {
  if (path.startsWith('http')) return path; 
  return `${REPO_BASE_PATH}${path}`;
};

// --- CONFIGURABLE IMAGES ---
// TO USE LOCAL IMAGES:
// 1. Put image in 'public/images/filename.jpg'
// 2. Change the line below to: getAssetPath("/images/filename.jpg")
export const TOPIC_IMAGES = {
  hero: getAssetPath("https://picsum.photos/seed/law/1920/1080"),
  default: getAssetPath("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2670&auto=format&fit=crop"),
  
  // Categories
  catCare: getAssetPath("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop"),
  catConflict: getAssetPath("https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2670&auto=format&fit=crop"),
  catWelfare: getAssetPath("https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2666&auto=format&fit=crop"),
  
  // Topics
  childLabour: getAssetPath("https://images.unsplash.com/photo-1596464716127-f9a0859b4afd?q=80&w=2574&auto=format&fit=crop"),
  childMarriage: getAssetPath("https://images.unsplash.com/photo-1515488042361-25f4602f0687?q=80&w=2574&auto=format&fit=crop"),
  foundOnStreets: getAssetPath("https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop"),
  stakeholders: getAssetPath("https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop"),
  
  // Stakeholders
  cwc: getAssetPath("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop"),
  police: getAssetPath("https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"),
  dcpu: getAssetPath("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"),
  socialWorker: getAssetPath("https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2669&auto=format&fit=crop"),
  childrensHome: getAssetPath("https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?q=80&w=2670&auto=format&fit=crop"),

  // Conflict with Law
  jjb: getAssetPath("https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=2670&auto=format&fit=crop"),
  parents: getAssetPath("https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2670&auto=format&fit=crop"),

  // Child Welfare
  behavior: getAssetPath("https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2646&auto=format&fit=crop"),
  psychIssues: getAssetPath("https://images.unsplash.com/photo-1620242200388-12d832454dbd?q=80&w=2670&auto=format&fit=crop"),
  rights: getAssetPath("https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=2666&auto=format&fit=crop"),
  pocso: getAssetPath("https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2670&auto=format&fit=crop"),
};

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    label: "Children in Need of Care and Protection",
    href: "cat-care",
    subItems: [
      { label: "Child Labour", href: "child-labour" },
      { label: "Child Marriage", href: "child-marriage" },
      { label: "Children Found on the Streets", href: "found-on-streets" },
      {
        label: "Stakeholders",
        href: "stakeholders",
        subItems: [
          { label: "CWC", href: "cwc" },
          { label: "Police Officers", href: "police-care" },
          { label: "DCPU", href: "dcpu" },
          { label: "Social Worker", href: "social-worker-care" },
          { label: "Children’s Home", href: "childrens-home-care" },
        ]
      }
    ]
  },
  {
    label: "Children in Conflict with Law",
    href: "cat-conflict",
    subItems: [
      { label: "JJB Members", href: "jjb" },
      { label: "Police Officers", href: "police-conflict" },
      { label: "Child Welfare Officer", href: "cwo" },
      { label: "Social Worker", href: "social-worker-conflict" },
      { label: "Children’s Home", href: "childrens-home-conflict" },
      { label: "Parents", href: "parents" },
    ]
  },
  {
    label: "Child Welfare",
    href: "cat-welfare",
    subItems: [
      { label: "Children presenting Obnoxious Behaviour", href: "behavior" },
      { label: "Children with Physio-psychological Issues", href: "issues" },
      { label: "Child Rights", href: "rights" },
      { label: "POCSO Act", href: "pocso" },
    ]
  },
  { label: "Resources", href: "cat-resources" }
];

// --- WEB MAP LAYOUT ---
// ViewBox: 0 0 160 100
// Center: 80, 50
export interface ExtendedNodePosition extends NodePosition {
  color?: 'blue' | 'red' | 'black';
}

export const MAP_NODES: ExtendedNodePosition[] = [
  // --- CENTER (Root) ---
  { id: 'root', x: 80, y: 50, level: 0, label: 'The Juvenile Justice Act', color: 'black' },
  
  // ==========================================
  // CLUSTER 1: Need of Care (Left/Top-Left)
  // ==========================================
  { id: 'cat-care', x: 40, y: 40, level: 1, label: 'Need of Care', parentId: 'root', color: 'blue' },
      
      // Direct Topics
      { id: 'child-labour', x: 10, y: 30, level: 2, label: 'Child Labour', parentId: 'cat-care', color: 'red' }, 
      { id: 'child-marriage', x: 10, y: 45, level: 2, label: 'Child Marriage', parentId: 'cat-care', color: 'red' }, 
      { id: 'found-on-streets', x: 15, y: 60, level: 2, label: 'Streets', parentId: 'cat-care', color: 'red' }, 

      // Stakeholders Branch (Level 2)
      { id: 'stakeholders', x: 40, y: 20, level: 2, label: 'Stakeholders', parentId: 'cat-care', color: 'blue' }, 
          // Stakeholders Children (Level 3 - Fanning above)
          { id: 'cwc', x: 25, y: 10, level: 3, label: 'CWC', parentId: 'stakeholders', color: 'red' },
          { id: 'police-care', x: 35, y: 5, level: 3, label: 'Police', parentId: 'stakeholders', color: 'red' },
          { id: 'dcpu', x: 45, y: 5, level: 3, label: 'DCPU', parentId: 'stakeholders', color: 'red' },
          { id: 'social-worker-care', x: 55, y: 10, level: 3, label: 'Social Worker', parentId: 'stakeholders', color: 'red' },
          { id: 'childrens-home-care', x: 60, y: 20, level: 3, label: "Home", parentId: 'stakeholders', color: 'red' },

  // ==========================================
  // CLUSTER 2: Conflict with Law (Right)
  // ==========================================
  { id: 'cat-conflict', x: 120, y: 50, level: 1, label: 'Conflict w/ Law', parentId: 'root', color: 'blue' },
      
      // Topics
      { id: 'jjb', x: 110, y: 30, level: 2, label: 'JJ Board', parentId: 'cat-conflict', color: 'red' },
      { id: 'police-conflict', x: 130, y: 30, level: 2, label: 'Police', parentId: 'cat-conflict', color: 'red' },
      { id: 'cwo', x: 140, y: 40, level: 2, label: 'CWO', parentId: 'cat-conflict', color: 'red' },
      { id: 'social-worker-conflict', x: 145, y: 55, level: 2, label: 'Social Worker', parentId: 'cat-conflict', color: 'red' },
      { id: 'childrens-home-conflict', x: 135, y: 70, level: 2, label: "Home", parentId: 'cat-conflict', color: 'red' },
      { id: 'parents', x: 115, y: 65, level: 2, label: 'Parents', parentId: 'cat-conflict', color: 'red' },

  // ==========================================
  // CLUSTER 3: Child Welfare (Bottom Left)
  // ==========================================
  { id: 'cat-welfare', x: 50, y: 80, level: 1, label: 'Child Welfare', parentId: 'root', color: 'blue' },
      
      { id: 'behavior', x: 30, y: 90, level: 2, label: 'Obnoxious Behav', parentId: 'cat-welfare', color: 'red' },
      { id: 'issues', x: 45, y: 95, level: 2, label: 'Physio-Psych', parentId: 'cat-welfare', color: 'red' },
      { id: 'rights', x: 60, y: 95, level: 2, label: 'Child Rights', parentId: 'cat-welfare', color: 'red' },
      { id: 'pocso', x: 70, y: 85, level: 2, label: 'POCSO Act', parentId: 'cat-welfare', color: 'red' },

  // ==========================================
  // CLUSTER 4: Resources (Bottom Right)
  // ==========================================
  { id: 'cat-resources', x: 100, y: 80, level: 1, label: 'Resources', parentId: 'root', color: 'blue' },
];

export const TOPIC_CONTENT: Record<string, TopicData> = {
  'root': {
    id: 'root', title: 'The Juvenile Justice Act', subtitle: 'THE ACT', description: 'Central Legislation for Children.', category: 'Root', image: TOPIC_IMAGES.hero, content: '<p class="text-xl">Select a category to begin.</p>'
  },
  
  // --- LEVEL 1 CATEGORIES ---
  'cat-care': {
    id: 'cat-care', title: 'Children in Need of Care and Protection', subtitle: 'CNCP', description: 'Children who are vulnerable and need state support.', category: 'Need of Care', image: TOPIC_IMAGES.catCare, content: '<p class="text-xl">Includes abandoned, surrendered, and abused children.</p>'
  },
  'cat-conflict': {
    id: 'cat-conflict', title: 'Children in Conflict with Law', subtitle: 'CCL', description: 'Children alleged to have committed an offence.', category: 'Conflict with Law', image: TOPIC_IMAGES.catConflict, content: '<p class="text-xl">Focus is on rehabilitation, not punishment.</p>'
  },
  'cat-welfare': {
    id: 'cat-welfare', title: 'Child Welfare', subtitle: 'WELLBEING', description: 'General welfare and rights of children.', category: 'Child Welfare', image: TOPIC_IMAGES.catWelfare, content: '<p class="text-xl">Ensuring holistic development.</p>'
  },
  'cat-resources': {
    id: 'cat-resources', title: 'Resources', subtitle: 'HELP', description: 'Important contacts and documents.', category: 'Resources', image: TOPIC_IMAGES.default, content: '<p class="text-xl">Helpline 1098. Download SOPs and Forms.</p>'
  },

  // --- 1. CARE TOPICS ---
  'child-labour': {
    id: 'child-labour', title: 'Child Labour', subtitle: 'EXPLOITATION', description: 'Employment of children in any work that deprives them of their childhood.', category: 'Need of Care', image: TOPIC_IMAGES.childLabour, content: '<p class="text-xl">Prohibited under Child Labour (Prohibition and Regulation) Act.</p>'
  },
  'child-marriage': {
    id: 'child-marriage', title: 'Child Marriage', subtitle: 'PREVENTION', description: 'Prohibition of Child Marriage Act.', category: 'Need of Care', image: TOPIC_IMAGES.childMarriage, content: '<p class="text-xl">Protecting children from early marriage.</p>'
  },
  'found-on-streets': {
    id: 'found-on-streets', title: 'Children Found on the Streets', subtitle: 'VULNERABLE', description: 'Street connected children requiring immediate care.', category: 'Need of Care', image: TOPIC_IMAGES.foundOnStreets, content: '<p class="text-xl">Rehabilitation and shelter processes.</p>'
  },
  
  // 1.4 STAKEHOLDERS & SUB TOPICS
  'stakeholders': {
    id: 'stakeholders', title: 'Stakeholders', subtitle: 'AUTHORITIES', description: 'Key people involved in the process for CNCP.', category: 'Need of Care', image: TOPIC_IMAGES.stakeholders, content: '<p class="text-xl">Who to approach for help.</p>'
  },
    'cwc': {
      id: 'cwc', title: 'Child Welfare Committee', subtitle: 'AUTHORITY', description: 'Primary authority for CNCP cases.', category: 'Need of Care', image: TOPIC_IMAGES.cwc, content: '<p class="text-xl">CWC has powers of a Magistrate. It is the final authority for disposal of cases for care, protection, treatment, development and rehabilitation of children in need of care and protection.</p>'
    },
    'police-care': {
      id: 'police-care', title: 'Police Officers', subtitle: 'PROTECTION', description: 'Police role in rescuing children.', category: 'Need of Care', image: TOPIC_IMAGES.police, content: '<p class="text-xl">First responders in many cases. The Special Juvenile Police Unit (SJPU) handles these cases with sensitivity.</p>'
    },
    'dcpu': {
      id: 'dcpu', title: 'DCPU', subtitle: 'DISTRICT UNIT', description: 'District Child Protection Unit.', category: 'Need of Care', image: TOPIC_IMAGES.dcpu, content: '<p class="text-xl">Implementation of the JJ Act at district level. They coordinate all child rights and protection activities.</p>'
    },
    'social-worker-care': {
      id: 'social-worker-care', title: 'Social Worker', subtitle: 'SUPPORT', description: 'Role of social workers in care cases.', category: 'Need of Care', image: TOPIC_IMAGES.socialWorker, content: '<p class="text-xl">They prepare Social Investigation Reports (SIR) and Individual Care Plans (ICP).</p>'
    },
    'childrens-home-care': {
      id: 'childrens-home-care', title: "Children's Home", subtitle: 'INSTITUTION', description: 'Safe shelter for children in need of care.', category: 'Need of Care', image: TOPIC_IMAGES.childrensHome, content: '<p class="text-xl">Residential care and protection for children who have no family support.</p>'
    },

  // --- 2. CONFLICT TOPICS ---
  'jjb': {
    id: 'jjb', title: 'Juvenile Justice Board', subtitle: 'ADJUDICATION', description: 'Deciding cases for children in conflict with law.', category: 'Conflict with Law', image: TOPIC_IMAGES.jjb, content: '<p class="text-xl">The Board consists of a Principal Magistrate and two social workers.</p>'
  },
  'police-conflict': {
    id: 'police-conflict', title: 'Police Officers', subtitle: 'SJPU', description: 'Role of police in Juvenile Justice.', category: 'Conflict with Law', image: TOPIC_IMAGES.police, content: '<p class="text-xl">Police must not wear uniform when dealing with children. A designated Child Welfare Police Officer (CWPO) is present in every station.</p>'
  },
  'cwo': {
    id: 'cwo', title: 'Child Welfare Police Officer', subtitle: 'CWPO', description: 'Designated police officer in every station.', category: 'Conflict with Law', image: TOPIC_IMAGES.police, content: '<p class="text-xl">A CWPO is the first point of contact for a child in conflict with law.</p>'
  },
  'social-worker-conflict': {
    id: 'social-worker-conflict', title: 'Social Worker', subtitle: 'REHABILITATION', description: 'Social workers assisting in legal conflict cases.', category: 'Conflict with Law', image: TOPIC_IMAGES.socialWorker, content: '<p class="text-xl">Assisting the JJB and families in understanding the legal process and ensuring the child\'s rights are protected.</p>'
  },
  'childrens-home-conflict': {
    id: 'childrens-home-conflict', title: "Observation Home", subtitle: 'OBSERVATION', description: 'Homes for children in conflict with law.', category: 'Conflict with Law', image: TOPIC_IMAGES.childrensHome, content: '<p class="text-xl">Children are kept here during the pendency of inquiry. It is not a jail, but a place for reform.</p>'
  },
  'parents': {
    id: 'parents', title: 'Parents', subtitle: 'GUARDIANS', description: 'Role of parents and guardians.', category: 'Conflict with Law', image: TOPIC_IMAGES.parents, content: '<p class="text-xl">Parents must be informed immediately upon apprehension. They play a crucial role in rehabilitation.</p>'
  },

  // --- 3. CHILD WELFARE TOPICS ---
  'behavior': {
    id: 'behavior', title: 'Children presenting Obnoxious Behaviour', subtitle: 'GUIDANCE', description: 'Managing difficult behavior in children.', category: 'Child Welfare', image: TOPIC_IMAGES.behavior, content: '<p class="text-xl">Counseling and reformative approaches rather than punitive measures.</p>'
  },
  'issues': {
    id: 'issues', title: 'Children with Physio-psychological Issues', subtitle: 'HEALTH', description: 'Addressing mental and physical health.', category: 'Child Welfare', image: TOPIC_IMAGES.psychIssues, content: '<p class="text-xl">Support systems for special needs and psychological counselling.</p>'
  },
  'rights': {
    id: 'rights', title: 'Child Rights', subtitle: 'UNCRC', description: 'Survival, Protection, Development, Participation.', category: 'Child Welfare', image: TOPIC_IMAGES.rights, content: '<p class="text-xl">Fundamental rights guaranteed to every child under the Constitution and UNCRC.</p>'
  },
  'pocso': {
    id: 'pocso', title: 'POCSO Act', subtitle: 'SAFETY', description: 'Protection of Children from Sexual Offences.', category: 'Child Welfare', image: TOPIC_IMAGES.pocso, content: '<p class="text-xl">Stringent legal provisions for sexual abuse against children.</p>'
  },

  'default': {
    id: 'default', title: 'Topic Details', subtitle: 'INFO', description: 'Information pending.', category: 'Resources', image: TOPIC_IMAGES.default, content: '<p class="text-xl">Content coming soon.</p>'
  }
};