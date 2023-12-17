import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Product',
      links: [
        { text: 'Features', href: "#features" },
        { text: 'How to use', href: "#howto" },
        { text: 'Use cases', href: "#usecases" }
      ]
    },
    {
      text: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: 'https://covalence.substack.com/' },
        { text: 'Careers', href: getPermalink('/careers') },
      ],
    },
    {
      text: 'Connect',
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Bluesky', href: 'https://bsky.app/profile/covalence.info' },
        { text: 'Twitter', href: 'https://twitter.com/CovalenceWorld' },
        { text: 'Github', href: 'https://github.com/CovalenceNetwork' },
      ],
    },
  ],
  actions: [{ text: 'Contact', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: 'https://covalence.substack.com/' },
        { text: 'Careers', href: getPermalink('/careers') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Bluesky', href: 'https://bsky.app/profile/covalence.info' },
        { text: 'Twitter', href: 'https://twitter.com/CovalenceWorld' },
        { text: 'Github', href: 'https://github.com/CovalenceNetwork' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Bluesky', icon: 'tabler:mood-smile-beam', href: 'https://bsky.app/profile/covalence.info' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/CovalenceWorld' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/CovalenceNetwork' }
  ],
  footNote: `
    All rights reserved · ${new Date().getFullYear()}
  `,
};
