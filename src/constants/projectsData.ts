import datascienceCertPreview from '../assets/datascience.png';
import datascienceTrainingPreview from '../assets/datascience-training.png';
import iso50001Preview from '../assets/iso50001.png';
import iso19011Preview from '../assets/iso19011.png';
import iso9001Preview from '../assets/iso9001.png';
import webProgrammingPreview from '../assets/webprogramming.png';
import computerOperatorPreview from '../assets/computeroperator.png';
import englishDiscoveriesPreview from '../assets/english-discoveries.png';
import { Project } from '../types/project';
import { SLIDE_IDS } from './slideIds';

export const projectsData: Project[] = [
  {
    id: SLIDE_IDS.DATASCIENCE_CERT,
    name: 'Certified Data Scientist',
    title: 'Certified Data Scientist – BNSP',
    preview: datascienceCertPreview,
    position: { x: 1500, y: 0, z: 0, rotateY: 0 },
    description:
      'Official certification as a Data Scientist issued by BNSP (Badan Nasional Sertifikasi Profesi). (2023)',
    tech: ['Certification', 'Data Science', 'BNSP'],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.ISO50001,
    name: 'ISO 50001 & 50006',
    title: 'ISO 50001 Awareness Training & ISO 50006 Workshop',
    preview: iso50001Preview,
    position: { x: -1060, y: 1060, z: 600, rotateY: 135 },
    description:
      'Understanding of Energy Management Systems (ISO 50001) and techniques for developing and implementing Energy KPIs based on ISO 50006 guidelines. (2024)',
    tech: ['ISO 50001', 'ISO 50006', 'Energy Management'],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.AUDIT,
    name: 'ISO 19011',
    title: 'Understanding Internal Audit Concepts & Techniques',
    preview: iso19011Preview,
    position: { x: -1500, y: 0, z: 800, rotateY: 180 },
    description:
      'Covers principles of internal auditing of management systems based on ISO 19011 guidelines, including audit techniques, planning, execution, and reporting. (2025)',
    tech: ['ISO 19011', 'Internal Audit', 'Management Systems'],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.ISO9001,
    name: 'ISO 9001 & 22301',
    title: 'ISO 9001 & ISO 22301 Awareness Training',
    preview: iso9001Preview,
    position: { x: -1060, y: -1060, z: 1000, rotateY: 225 },
    description:
      'Basic understanding of Quality Management Systems (ISO 9001) and Business Continuity Management Systems (ISO 22301). (2025)',
    tech: [
      'ISO 9001',
      'ISO 22301',
      'Quality Management',
      'Business Continuity',
    ],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.DATASCIENCE_TRAINING,
    name: 'Associate Data Science',
    title: 'Associate Data Science Training (Creative Media)',
    preview: datascienceTrainingPreview,
    position: { x: 1200, y: 800, z: 200, rotateY: 30 },
    description:
      'Training on data processing, data exploration, statistical analysis, and the application of basic machine learning to support data-driven decision making. (2023)',
    tech: ['Training', 'Data Science', 'Machine Learning'],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.WEB,
    name: 'Fundamental Web Programmer',
    title: 'Fundamental Web Programming Training (Hacktiv8)',
    preview: webProgrammingPreview,
    position: { x: 0, y: 1500, z: 400, rotateY: 90 },
    description:
      'Web development training using HTML, CSS, JavaScript, and modern frontend-backend framework concepts as a foundation for developing web-based applications. (2024)',
    tech: ['HTML', 'CSS', 'JavaScript', 'Frontend', 'Backend'],
    layout: 'reverse',
  },
  {
    id: SLIDE_IDS.OPERATOR,
    name: 'Junior Computer Operator',
    title: 'Junior Computer Operator & Scientific Writing',
    preview: computerOperatorPreview,
    position: { x: 0, y: -1500, z: 1200, rotateY: 270 },
    description:
      'Certified Junior Computer Operator & Scientific Writing - PUSTIPD UINSA. (2023)',
    tech: ['Computer Operation', 'Scientific Writing'],
    layout: 'standard',
  },
  {
    id: SLIDE_IDS.ENGLISH,
    name: 'English Discoveries',
    title: 'English Discoveries – Edusoft',
    preview: englishDiscoveriesPreview,
    position: { x: 1060, y: -1060, z: 1400, rotateY: 315 },
    description:
      'Edusoft Ltd. certifies that M. Khotibul Umam (Student ID: 09020620031) has successfully completed Basic 3 & Intermediate 1 (aligned with CEFR B1) of English Discoveries. Awarded in June 2021 as part of the Intensive English Program at UINSA Language Center.',
    tech: ['Certification', 'English', 'CEFR B1'],
    layout: 'standard',
  },
];

export const mapData = [
  { id: SLIDE_IDS.TITLE, name: 'Introduction', icon: 'fas fa-home' },
  {
    id: SLIDE_IDS.DATASCIENCE_CERT,
    name: 'Certified Data Scientist (BNSP)',
    icon: 'fas fa-certificate',
  },
  { id: SLIDE_IDS.ISO50001, name: 'ISO 50001 & 50006', icon: 'fas fa-bolt' },
  { id: SLIDE_IDS.AUDIT, name: 'ISO 19011 Audit', icon: 'fas fa-search' },
  { id: SLIDE_IDS.ISO9001, name: 'ISO 9001 & 22301', icon: 'fas fa-industry' },
  {
    id: SLIDE_IDS.DATASCIENCE_TRAINING,
    name: 'Associate Data Science',
    icon: 'fas fa-database',
  },
  {
    id: SLIDE_IDS.WEB,
    name: 'Fundamental Web Programming',
    icon: 'fas fa-code',
  },
  { id: SLIDE_IDS.OPERATOR, name: 'Computer Operator', icon: 'fas fa-desktop' },
  {
    id: SLIDE_IDS.ENGLISH,
    name: 'English Discoveries',
    icon: 'fas fa-language',
  },
  { id: SLIDE_IDS.OVERVIEW, name: 'Overview', icon: 'fas fa-th-large' },
];
