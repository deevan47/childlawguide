import { NavItem, TopicData, ExtendedNodePosition } from './types';

export const ASSETS = {
  bgCommon: '/web.jpeg',
  hero: '/homepage.png',
  guide: '/guide.png',
  boy: '/boy.png',
  girl: '/girl.png',
  flame: '/flame.png',
  policeBg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop',
};

export const TOPIC_CONTENT: Record<string, TopicData> = {
  
  // 1. STAKEHOLDERS
  'cncp-stk-police': { 
    id: 'cncp-stk-police', 
    title: 'POLICE OFFICERS', 
    subtitle: 'SJPU & CWPO Roles', 
    category: 'Stakeholder', 
    bgImage: ASSETS.policeBg, 
    characterImage: ASSETS.boy, 
    content: `<p>Police officers, particularly those in Special Juvenile Police Units (SJPUs) and Child Welfare Police Officers (CWPOs), are.</p>` 
  },

  // 2. ISSUES
  'cncp-labour': {
    id: 'cncp-labour',
    title: 'CHILD LABOUR',
    subtitle: 'Children in Need of Care & Protection',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Child labour deprives children of their childhood and is harmful to their physical and mental development.</p>`
  },

  'cncp-marriage': {
    id: 'cncp-marriage',
    title: 'CHILD MARRIAGE',
    subtitle: 'Children in Need of Care & Protection',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Child marriage is a violation of human rights. It compromises the development of girls and often results in early pregnancy and social isolation.</p>`
  },
  
  'cncp-streets': {
    id: 'cncp-streets',
    title: 'STREET SITUATIONS',
    subtitle: 'Children Living on Streets',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Children living alone on the streets, or with parents who are unable to take care of them, require immediate care, protection, and rehabilitation by the state.</p>`
  },

  'cncp-begging': {
    id: 'cncp-begging',
    title: 'FOUND BEGGING',
    subtitle: 'Exploitation & Rehabilitation',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Forcing a child to beg is a crime. These children need to be rescued and presented before the CWC for rehabilitation, not punishment.</p>`
  },

  'cncp-missing': {
    id: 'cncp-missing',
    title: 'MISSING CHILDREN',
    subtitle: 'Runaway & Trafficking Risks',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Children who have run away or are missing are highly vulnerable to trafficking and abuse. Police must register an FIR immediately upon reporting.</p>`
  },

  'cncp-orphans': {
    id: 'cncp-orphans',
    title: 'ORPHANS',
    subtitle: 'Institutional Care & Adoption',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Children without parents or guardians are the primary responsibility of the state to ensure they are placed in adoption or institutional care.</p>`
  },

  'cncp-prostitution': {
    id: 'cncp-prostitution',
    title: 'IN PROSTITUTION',
    subtitle: 'Victims of Trafficking',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Children found in these situations are victims of sexual exploitation. They require sensitive rescue operations and long-term psychological support.</p>`
  },

  'cncp-stk-cwc': {
    id: 'cncp-stk-cwc',
    title: 'CWC',
    subtitle: 'Child Welfare Committee',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>The CWC is the primary authority for disposing of cases for the care, protection, treatment, development, and rehabilitation of children in need of care and protection.</p>`
  },

  'cncp-stk-dcpu': {
    id: 'cncp-stk-dcpu',
    title: 'DCPU',
    subtitle: 'District Child Protection Unit',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>The DCPU coordinates and implements all child rights and protection activities at the district level.</p>`
  },

  'cncp-stk-govsw': {
    id: 'cncp-stk-govsw',
    title: 'SOCIAL WORKERS',
    subtitle: 'Government Officials',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Social workers conduct inquiry reports, home studies, and follow-ups to assist the CWC in making informed decisions.</p>`
  },

  'cncp-stk-ngos': {
    id: 'cncp-stk-ngos',
    title: 'NGOs',
    subtitle: 'Non-Governmental Orgs',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>NGOs play a vital role in identifying vulnerable children, running shelter homes, and providing counseling services.</p>`
  },

  'cncp-stk-homes': {
    id: 'cncp-stk-homes',
    title: 'CHILD HOMES',
    subtitle: 'Child Care Institutions',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Includes Children's Homes, Shelter Homes, and Specialized Adoption Agencies designated to house children safely.</p>`
  },

  'cncp-stk-parents': {
    id: 'cncp-stk-parents',
    title: 'PARENTS',
    subtitle: 'Role & Responsibility',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>The role of parents is evaluated by the CWC. If parents are unfit or abusive, the child may be removed from their custody for safety.</p>`
  },

  'ccl-jjb': {
    id: 'ccl-jjb',
    title: 'JJB MEMBERS',
    subtitle: 'Juvenile Justice Board',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>The JJB consists of a Magistrate and social workers. They adjudicate cases involving children alleged to be in conflict with the law.</p>`
  },

  'ccl-police': {
    id: 'ccl-police',
    title: 'POLICE (SJPU)',
    subtitle: 'Handling CCL Cases',
    bgImage: ASSETS.policeBg,
    characterImage: ASSETS.boy,
    content: `<p>Police must not treat CCLs like adult criminals. They must not be handcuffed or kept in regular jails. They must be handled by the SJPU.</p>`
  },

  'ccl-cwo': {
    id: 'ccl-cwo',
    title: 'WELFARE OFFICER',
    subtitle: 'Probation Support',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>They prepare the Social Investigation Report (SIR) to help the JJB understand the background and circumstances of the alleged offense.</p>`
  },

  'ccl-govsw': {
    id: 'ccl-govsw',
    title: 'SOCIAL WORKER',
    subtitle: 'Legal Aid & Support',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Social workers provide counseling and ensure the child's rights are protected during the legal process.</p>`
  },

  'ccl-ngos': {
    id: 'ccl-ngos',
    title: 'NGOs',
    subtitle: 'Rehabilitation Support',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>NGOs provide legal aid, vocational training, and reformative services to help reintegrate the child into society.</p>`
  },

  'ccl-homes': {
    id: 'ccl-homes',
    title: 'OBSERVATION HOMES',
    subtitle: 'Institutions for CCL',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Observation Homes are for the temporary stay of children during inquiry. Special Homes are for children found to have committed an offense.</p>`
  },

  'ccl-parents': {
    id: 'ccl-parents',
    title: 'PARENTS',
    subtitle: 'Supervision Role',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Parents are involved in the counseling process and are responsible for the child's supervision if bail is granted.</p>`
  },

  'cat-rights': {
    id: 'cat-rights',
    title: 'CHILD RIGHTS',
    subtitle: 'Fundamental Rights',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>Every child has the right to survival, protection, development, and participation.</p>`
  },

  'cat-pocso': {
    id: 'cat-pocso',
    title: 'POCSO ACT',
    subtitle: 'Sexual Offenses',
    bgImage: ASSETS.bgCommon,
    characterImage: ASSETS.guide,
    content: `<p>The Protection of Children from Sexual Offences (POCSO) Act provides a legal framework to protect children from sexual assault.</p>`
  },

  // FALLBACK
  'default': { 
    id: 'default', 
    title: 'SELECT A TOPIC', 
    subtitle: 'Guide', 
    bgImage: ASSETS.bgCommon, 
    characterImage: ASSETS.guide,
    content: '<p>Please select a topic from the menu to learn more.</p>' 
  }
};

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