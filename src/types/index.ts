export interface MetadataConfig {
  title: string;
  description: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: "website" | "article";
    images?: string[];
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    title?: string;
    description?: string;
    images?: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
}

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  applications: string[];
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  year?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface Newsletter {
  id: string;
  issue: string;
  topic: string;
  description: string;
  pdfUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  location: string;
  bio: string;
  image?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  requirements: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  product?: string;
  spamHoney?: string;
}

export interface ProductInquiryFormData extends ContactFormData {
  product: string;
}