export const SLIDE_IDS = {
  TITLE: 'title',
  DATASCIENCE_TRAINING: 'data-science-training',
  DATASCIENCE_CERT: 'data-science-cert',
  WEB: 'web',
  OPERATOR: 'operator',
  ISO50001: 'iso-50001',
  AUDIT: 'audit',
  ISO9001: 'iso-9001',
  ENGLISH: 'english',
  OVERVIEW: 'overview',
} as const;

export type SlideId = (typeof SLIDE_IDS)[keyof typeof SLIDE_IDS];

export const SLIDE_POSITIONS = {
  TITLE: { x: 0, y: 0, z: 0 },
  OVERVIEW: { x: 0, y: 0, z: 0, scale: 4.5 },
} as const;
