import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  // links: [
  //   {
  //     text: 'Homes',
  //     links: [
  //       {
  //         text: 'SaaS',
  //         href: getPermalink('/homes/saas'),
  //       },
  //       {
  //         text: 'Startup',
  //         href: getPermalink('/homes/startup'),
  //       },
  //       {
  //         text: 'Mobile App',
  //         href: getPermalink('/homes/mobile-app'),
  //       },
  //       {
  //         text: 'Personal',
  //         href: getPermalink('/homes/personal'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Pages',
  //     links: [
  //       {
  //         text: 'Features (Anchor Link)',
  //         href: getPermalink('/#features'),
  //       },
  //       {
  //         text: 'Services',
  //         href: getPermalink('/services'),
  //       },
  //       {
  //         text: 'Pricing',
  //         href: getPermalink('/pricing'),
  //       },
  //       {
  //         text: 'About us',
  //         href: getPermalink('/about'),
  //       },
  //       {
  //         text: 'Contact',
  //         href: getPermalink('/contact'),
  //       },
  //       {
  //         text: 'Terms',
  //         href: getPermalink('/terms'),
  //       },
  //       {
  //         text: 'Privacy policy',
  //         href: getPermalink('/privacy'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Landing',
  //     links: [
  //       {
  //         text: 'Lead Generation',
  //         href: getPermalink('/landing/lead-generation'),
  //       },
  //       {
  //         text: 'Long-form Sales',
  //         href: getPermalink('/landing/sales'),
  //       },
  //       {
  //         text: 'Click-Through',
  //         href: getPermalink('/landing/click-through'),
  //       },
  //       {
  //         text: 'Product Details (or Services)',
  //         href: getPermalink('/landing/product'),
  //       },
  //       {
  //         text: 'Coming Soon or Pre-Launch',
  //         href: getPermalink('/landing/pre-launch'),
  //       },
  //       {
  //         text: 'Subscription',
  //         href: getPermalink('/landing/subscription'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Blog',
  //     links: [
  //       {
  //         text: 'Blog List',
  //         href: getBlogPermalink(),
  //       },
  //       {
  //         text: 'Article',
  //         href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
  //       },
  //       {
  //         text: 'Article (with MDX)',
  //         href: getPermalink('markdown-elements-demo-post', 'post'),
  //       },
  //       {
  //         text: 'Category Page',
  //         href: getPermalink('tutorials', 'category'),
  //       },
  //       {
  //         text: 'Tag Page',
  //         href: getPermalink('astro', 'tag'),
  //       },
  //     ],
  //   },
  //   {
  //     text: 'Widgets',
  //     href: '#',
  //   },
  // ],
  actions: [{ text: 'Contact', href: '/contact', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: 'https://covalence.substack.com/' },
        { text: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'Contact', href: '/contact' },
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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' }
  ],
  footNote: `
    All rights reserved · ${new Date().getFullYear()}
  `,
};
