export interface NavLink {
  label: string;
  href: string;
  category?: string;
}

export const navLinks: NavLink[] = [
  { label: 'Commercials', href: '/work?category=commercials', category: 'commercials' },
  { label: 'Narrative',   href: '/work?category=narrative',   category: 'narrative' },
  { label: 'Personal',    href: '/work?category=personal',    category: 'personal' },
  { label: 'Photography', href: '/work?category=photography', category: 'photography' },
  { label: 'About',       href: '/about' },
  { label: 'Contact',     href: '/contact' },
];
