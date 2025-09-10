import { ContactLink } from '../types/userConfig';

export const USER_CONFIG = {
  AVATAR_URL: 'https://avatars.githubusercontent.com/u/86782580?v=4',
  NAME: 'M. Khotibul Umam',
  JOB_TITLE: 'Mamskie',
  BIO: [
    'Information Systems | IT & Risk Enthusiast.',
    'This section highlights my certifications & trainings 📜',
  ],
  WECHAT_ID: 'SimonAKing',

  CONTACT_LINKS: [
    {
      type: 'github',
      url: 'https://github.com/mamskie',
      icon: 'fab fa-github',
      text: 'GitHub',
    },
    {
      type: 'email',
      url: 'mailto:khotib.bul@gmail.com',
      icon: 'fas fa-envelope',
      text: 'Email',
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/mamskie/',
      icon: 'fab fa-linkedin',
      text: 'LinkedIn',
    },
    {
      type: 'website',
      url: 'https://mamskie.me',
      icon: 'fas fa-globe',
      text: 'Personal Page',
    },
    {
      type: 'twitter',
      url: 'https://x.com/mam06_',
      icon: 'fab fa-twitter',
      text: 'X',
    },
    {
      type: 'Instagram',
      icon: 'fab fa-instagram',
      text: 'Instagram',
      url: 'https://instagram.com/khtblmam__',
    },
  ] as ContactLink[],
} as const;
