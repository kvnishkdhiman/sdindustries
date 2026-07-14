export interface NavItem {
  name: string;
  href?: string;
  children?: Omit<NavItem, "children">[];
}

export const mainNavigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    children: [
      { name: "Who We Are", href: "/about/who-we-are" },
      { name: "Chairman's Message", href: "/about/chairman-message" },
      { name: "Our Associations", href: "/about/associations" },
    ],
  },
  {
    name: "Products",
    children: [
      { name: "TMT Bar Mill", href: "/products/tmt-bar-mill" },
      { name: "Structural Mill", href: "/products/structural-mill" },
      { name: "Wire Rod Mill", href: "/products/wire-rod-mill" },
      { name: "Mill Stands", href: "/products/mill-stands" },
      { name: "Reheating Furnace", href: "/products/reheating-furnace" },
      { name: "Rolling Mill Gearbox", href: "/products/rolling-mill-gearbox" },
    ],
  },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Infrastructure", href: "/infrastructure" },
  {
    name: "Contact Us",
    children: [
      { name: "Contact", href: "/contact" },
      { name: "Product Inquiry", href: "/contact/product-inquiry" },
      { name: "Customer Feedback", href: "/contact/customer-feedback" },
      { name: "Customer Support", href: "/contact/customer-support" },
    ],
  },
  { name: "Career", href: "/career" },
  { name: "Gallery", href: "/gallery" },
];

export const footerNavigation = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Who We Are", href: "/about/who-we-are" },
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Career", href: "/career" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
  contact: {
    // TODO: Replace with verified company address
    address: "123 Industrial Area, City, State – 000000, Country",
    // TODO: Replace with verified phone numbers
    phones: ["+1 555 000 0000", "+1 555 000 0001"],
    // TODO: Replace with verified email addresses
    emails: ["info@example.com", "support@example.com"],
  },
  social: [
    { name: "Facebook", href: "https://facebook.com/example", icon: "facebook" },
    { name: "Instagram", href: "https://instagram.com/example", icon: "instagram" },
    { name: "LinkedIn", href: "https://linkedin.com/company/example", icon: "linkedin" },
    { name: "YouTube", href: "https://youtube.com/@example", icon: "youtube" },
  ],
};

export const companyInfo = {
  name: "SD Industries",
  tagline: "Engineering Strength. Delivering Precision.",
  // TODO: Verify founding year from official records
  founded: 1998,
  // TODO: Verify certifications from official records
  certifications: ["ISO 9001:2015", "Star Export House"],
  // TODO: Replace with verified location
  location: "City, State, Country",
};