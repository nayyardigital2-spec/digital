export interface SkillItem {
  name: string;
  category: 'Digital Marketing' | 'Website & Technical' | 'Professional';
  summary: string;
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  focus: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
  liveUrl: string;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  description: string;
}

export interface WhyWorkItem {
  index: string;
  title: string;
  description: string;
}

export interface SocialLinkItem {
  platform: 'LinkedIn' | 'Instagram' | 'GitHub';
  label: string;
  handle: string;
  href: string;
  isPlaceholder: boolean;
}

export const PORTFOLIO_PROFILE = {
  name: 'Mukul Bhatt',
  roleLine: 'Digital Marketing Student | SEO & Social Media Marketing',
  headline: 'Helping Brands Build Their Digital Presence.',
  heroIntro:
    "I'm Mukul Bhatt, a passionate Digital Marketing student interested in SEO, Social Media Marketing, Paid Advertising, Content Marketing, and Website Design. I enjoy learning new technologies and exploring creative strategies to help businesses grow online.",
  portraitPath: '/assets/aistudio/Professional_Portrait_in_Formal_Suit_01c0bb68.png',
  email: 'bhattg805@gmail.com',
  locationShort: 'Lucknow, India',
  locationFull: 'Lucknow, Uttar Pradesh, India',
  education: {
    degree: 'BBA – Digital Marketing',
    university: 'Chandigarh University',
    status: 'Currently Pursuing | Expected Graduation: 2029',
    graduationYear: '2029',
  },
  experienceLevel: 'Fresher',
  rotatingFocus: [
    'Search Engine Optimization',
    'Social Media Marketing',
    'Meta & Google Advertising',
    'Responsive Website Design',
  ],
};

export const ABOUT_PARAGRAPHS = [
  "I'm Mukul Bhatt, currently pursuing a Bachelor of Business Administration (BBA) in Digital Marketing at Chandigarh University.",
  'I am passionate about digital marketing, online business growth, search engine optimization, social media strategies, and website development.',
  'As a fresher, I am continuously improving my skills through learning, experimentation, and practical projects. My goal is to help businesses build a strong digital identity and achieve sustainable online growth.',
];

export const PROFILE_LEDGER = [
  { label: 'Name', value: 'Mukul Bhatt' },
  { label: 'Education', value: 'BBA Digital Marketing' },
  { label: 'University', value: 'Chandigarh University' },
  { label: 'Graduation Year', value: '2029' },
  { label: 'Location', value: 'Lucknow, India' },
  { label: 'Experience', value: '2 Years' },
];

/**
 * Editable Social Media Links
 * Replace the href values below with Mukul Bhatt's live profile URLs whenever ready.
 */
export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    platform: 'LinkedIn',
    label: 'LinkedIn Profile',
    handle: 'linkedin.com/in/mukul-bhatt',
    href: 'https://www.linkedin.com',
    isPlaceholder: true,
  },
  {
    platform: 'Instagram',
    label: 'Instagram Profile',
    handle: '@mukulbhatt.digital',
    href: 'https://www.instagram.com',
    isPlaceholder: true,
  },
  {
    platform: 'GitHub',
    label: 'GitHub Profile',
    handle: 'github.com/mukulbhatt',
    href: 'https://github.com',
    isPlaceholder: true,
  },
];

export const SKILLS: SkillItem[] = [
  // Digital Marketing
  {
    name: 'Search Engine Optimization (SEO)',
    category: 'Digital Marketing',
    summary: 'On-page structure, technical hygiene, and search visibility fundamentals.',
  },
  {
    name: 'Social Media Marketing (SMM)',
    category: 'Digital Marketing',
    summary: 'Audience-first content calendars, channel positioning, and community engagement.',
  },
  {
    name: 'Meta Ads',
    category: 'Digital Marketing',
    summary: 'Campaign objectives, audience targeting, and creative testing across Meta.',
  },
  {
    name: 'Google Ads',
    category: 'Digital Marketing',
    summary: 'Search intent alignment, ad copy structure, and keyword bidding basics.',
  },
  {
    name: 'Content Marketing',
    category: 'Digital Marketing',
    summary: 'Value-driven storytelling crafted to educate audiences and build brand trust.',
  },
  {
    name: 'Keyword Research',
    category: 'Digital Marketing',
    summary: 'Mapping search intent, topic clusters, and high-relevance discovery terms.',
  },

  // Website & Technical Skills
  {
    name: 'WordPress',
    category: 'Website & Technical',
    summary: 'Building clean, manageable business sites and SEO-ready publishing setups.',
  },
  {
    name: 'Website Design',
    category: 'Website & Technical',
    summary: 'Modern, responsive layouts focused on clarity, hierarchy, and conversion flow.',
  },
  {
    name: 'Basic Coding',
    category: 'Website & Technical',
    summary: 'Practical scripting and front-end logic for interactive web projects.',
  },
  {
    name: 'Google Search Console',
    category: 'Website & Technical',
    summary: 'Monitoring indexing, search queries, impressions, and technical health.',
  },
  {
    name: 'Prompt Engineering / Prompt Analysis',
    category: 'Website & Technical',
    summary: 'Designing structured prompts and evaluating AI outputs for marketing workflows.',
  },

  // Professional Skills
  {
    name: 'Communication',
    category: 'Professional',
    summary: 'Clear, structured written and verbal articulation of ideas and strategies.',
  },
  {
    name: 'Leadership',
    category: 'Professional',
    summary: 'Taking initiative in collaborative tasks and guiding peers toward shared goals.',
  },
  {
    name: 'Client Handling',
    category: 'Professional',
    summary: 'Active listening, clear expectations, and empathetic problem-solving.',
  },
  {
    name: 'Business Development',
    category: 'Professional',
    summary: 'Identifying digital growth opportunities aligned with core business objectives.',
  },
  {
    name: 'Sales',
    category: 'Professional',
    summary: 'Understanding buyer objections, value framing, and persuasive outreach.',
  },
  {
    name: 'Business Management',
    category: 'Professional',
    summary: 'Balancing marketing priorities with commercial viability and execution discipline.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    index: '01.',
    title: 'SEO',
    description: 'Helping websites improve their search engine visibility.',
    focus: 'On-Page Optimization · Keyword Mapping · Search Console',
  },
  {
    index: '02.',
    title: 'Social Media Marketing',
    description: 'Building brand awareness and social media presence.',
    focus: 'Content Strategy · Channel Consistency · Audience Growth',
  },
  {
    index: '03.',
    title: 'Meta Ads',
    description: 'Understanding and creating paid advertising strategies.',
    focus: 'Campaign Setup · Audience Segmentation · Ad Creative Direction',
  },
  {
    index: '04.',
    title: 'Google Ads',
    description: 'Search advertising and campaign optimization.',
    focus: 'Search Intent · Ad Copy · Keyword Targeting',
  },
  {
    index: '05.',
    title: 'Website Design',
    description: 'Creating modern, responsive websites.',
    focus: 'HTML & CSS · WordPress · Mobile-First Layouts',
  },
  {
    index: '06.',
    title: 'Content Marketing',
    description: 'Creating engaging digital content and marketing strategies.',
    focus: 'Brand Voice · Editorial Planning · Prompt-Assisted Workflows',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'youthsmm',
    name: 'YouthSMM',
    subtitle: 'SMM Panel & Digital Marketing Platform',
    shortDescription:
      'A structured social media marketing and digital growth platform built to explore service presentation, campaign workflows, and conversion-focused web design.',
    fullDescription:
      'YouthSMM is a practical digital marketing platform project centered around social media growth workflows. The project focuses on presenting digital services clearly, organizing user journeys from discovery to inquiry, and applying responsive web design alongside SEO-friendly page structure.',
    technologies: ['HTML & CSS', 'Responsive Web Design', 'SEO Structure', 'Social Media Strategy', 'UI Design'],
    highlights: [
      'Designed an intuitive service navigation flow tailored for social media marketing services.',
      'Applied semantic HTML headings and clean metadata for search engine readability.',
      'Structured clear calls-to-action to simplify user onboarding and service exploration.',
    ],
    image: '/assets/aistudio/image_a69b9a0b.png',
    imageAlt: 'YouthSMM SMM Panel and social media marketing platform interface',
    liveUrl: 'https://youthsmm.com/',
  },
  {
    id: 'nayyar-digital',
    name: 'Nayyar Digital',
    subtitle: 'AI-Powered Digital Marketing & Training Website',
    shortDescription:
      'A conversion-focused web platform for Nayyar Digital showcasing AI-powered digital marketing training, Meta Ads, Google Ads, SEO, and industry project mentorship.',
    fullDescription:
      'Nayyar Digital is a modern digital marketing and EdTech website designed to present AI-powered marketing education clearly. Built around structured lead generation and enrollment flows, it highlights live interactive sessions, industry projects, AI tools and automation, Meta Ads, Google Ads, SEO, and community access.',
    technologies: ['Website Design', 'SEO', 'Meta Ads & Google Ads', 'AI Tools & Automation', 'Responsive UI'],
    highlights: [
      'Designed a clear hero proposition focused on AI-powered digital marketing and career readiness.',
      'Structured key curriculum pillars including Meta Ads, Google Ads, SEO, AI automation, and live industry projects.',
      'Built streamlined navigation across About, Services, Curriculum, Testimonials, FAQs, and Enroll Now CTAs.',
    ],
    image: '/assets/aistudio/image_7afd969b.png',
    imageAlt: 'Nayyar Digital AI-Powered Digital Marketing website interface',
    liveUrl: 'https://www.nayyar.digital/',
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    step: '01',
    title: 'Interest in Digital Marketing',
    description:
      'Discovered how brands connect with audiences online and decided to pursue a specialized BBA in Digital Marketing at Chandigarh University.',
  },
  {
    step: '02',
    title: 'Learning SEO and Social Media Marketing',
    description:
      'Built strong fundamentals in keyword research, on-page SEO, Google Search Console, and organic social media growth strategies.',
  },
  {
    step: '03',
    title: 'Exploring Meta Ads and Google Ads',
    description:
      'Studied paid acquisition funnels, search advertising structure, audience targeting, and campaign optimization principles.',
  },
  {
    step: '04',
    title: 'Learning Website Design and Development',
    description:
      'Practiced HTML, CSS, WordPress, and responsive design principles so marketing strategies are backed by high-clarity landing experiences.',
  },
  {
    step: '05',
    title: 'Building Practical Digital Projects',
    description:
      'Applied marketing, UI design, and AI workflow knowledge directly into hands-on projects including YouthSMM and Nayyar Digital.',
  },
  {
    step: '06',
    title: 'Continuous Learning and Professional Growth',
    description:
      'Actively experimenting with emerging AI workflows, business development concepts, and real-world marketing case studies toward graduation in 2029.',
  },
];

export const WHY_WORK_WITH_ME: WhyWorkItem[] = [
  {
    index: '01.',
    title: 'Passion for Digital Marketing',
    description:
      'Genuinely excited by how search, social platforms, and content come together to shape modern brand visibility.',
  },
  {
    index: '02.',
    title: 'Creative Thinking',
    description:
      'Approaching campaigns and web layouts with fresh ideas that prioritize clarity, storytelling, and audience attention.',
  },
  {
    index: '03.',
    title: 'Continuous Learning',
    description:
      'Committed to staying current with evolving search algorithms, ad platforms, and AI prompt workflows every single week.',
  },
  {
    index: '04.',
    title: 'Business-Oriented Mindset',
    description:
      'Grounded in BBA fundamentals—connecting marketing activities back to sales, customer trust, and sustainable business growth.',
  },
  {
    index: '05.',
    title: 'Adaptability',
    description:
      'Quick to pick up new tools, adjust strategies based on feedback, and collaborate smoothly across design and marketing tasks.',
  },
  {
    index: '06.',
    title: 'Focus on Digital Growth',
    description:
      'Dedicated to building consistent, long-term online foundations rather than chasing short-lived shortcuts.',
  },
];
