import {
  Zap,
  Globe,
  Building2,
  Calculator,
  Banknote,
  HelpCircle,
  TrendingUp,
  Code2,
  Settings,
  BarChart3,
  Users,
  Award,
} from 'lucide-react';

// Extended Service model matching CMS requirements
export interface ServiceOffer {
  icon: string; // lucide icon name
  title: string;
  short_desc: string;
}

export interface ServiceDeliverable {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  step_title: string;
  step_desc: string;
  step_icon: string;
}

export interface CaseStudy {
  client_name: string;
  industry: string;
  problem: string;
  solution: string;
  result_metrics: string[]; // e.g. ["150% ROI", "3x leads"]
  image: string;
}

export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  // Basic metadata
  id?: string; // backward compat, same as slug
  slug: string;
  title: string;
  tagline: string;
  
  // Hero section
  hero_image: string;
  hero_badge?: string;
  short_intro: string;
  hero_cta_text: string;
  hero_secondary_cta_text: string;
  
  // Content sections
  top_problems: string[];
  what_we_offer: ServiceOffer[];
  deliverables: ServiceDeliverable[];
  process_steps: ProcessStep[];
  case_studies: CaseStudy[];
  metrics: ServiceMetric[];
  testimonial_ids?: string[]; // references to Testimonial model
  
  // FAQs
  faqs: ServiceFAQ[];
  
  // Filters & features
  industry_filters: string[];
  calculators: boolean;
  calculator_type?: 'ads-budget-estimator' | 'loan-emi' | 'gst-penalty-estimator';
  
  // Theming
  color_accent: string; // hex color
  hero_graphic_type: 'photo' | 'illustration' | 'code-screenshot' | 'financial-dashboard';
  
  // SEO
  seo_meta_title: string;
  seo_meta_description: string;
  
  // Legacy fields for backward compatibility
  icon?: React.ComponentType<any>;
  description?: string;
  features?: string[];
  whatsappText?: string;
  imageUrl?: string;
  subcategories?: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    tagline: '3–5x qualified leads with targeted Google & Meta campaigns',
    hero_image: 'https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?w=800&h=600&fit=crop',
    hero_badge: 'PERFORMANCE DRIVEN',
    short_intro: 'Performance-driven marketing — SEO, Social & Paid tactics focused on measurable growth.',
    hero_cta_text: 'Get a Free Proposal',
    hero_secondary_cta_text: 'Talk to an Expert',
    top_problems: [
      'Low quality leads',
      'High customer acquisition cost (CAC)',
      'No measurable ROI tracking',
      'Poor ad targeting',
    ],
    what_we_offer: [
      {
        icon: 'TrendingUp',
        title: 'Social Media Management',
        short_desc: 'Strategy, content creation & organic growth across Facebook, Instagram, LinkedIn.',
      },
      {
        icon: 'Code2',
        title: 'SEO Optimization',
        short_desc: 'On-page & off-page SEO to improve organic rankings and drive qualified traffic.',
      },
      {
        icon: 'BarChart3',
        title: 'Paid Campaigns',
        short_desc: 'Google & Meta campaigns optimized for CPL and conversion rate.',
      },
      {
        icon: 'Award',
        title: 'Content Strategy',
        short_desc: 'Blog posts, whitepapers, case studies aligned with your buyer journey.',
      },
      {
        icon: 'Settings',
        title: 'Lead Nurturing',
        short_desc: 'Email automation & retargeting to convert prospects into customers.',
      },
    ],
    deliverables: [
      {
        title: 'Campaign Strategy & Setup',
        description: 'Audience research, competitor analysis, creative assets, tracking setup, and budget allocation across channels.',
        icon: 'Code2',
      },
      {
        title: 'Ad Creative Development',
        description: 'Design and copywriting for banner ads, video ads, carousel ads optimized for your target audience.',
        icon: 'TrendingUp',
      },
      {
        title: 'Tracking & Analytics',
        description: 'Google Analytics 4, pixel implementation, conversion tracking, and attribution reporting.',
        icon: 'BarChart3',
      },
      {
        title: 'Landing Page Optimization',
        description: 'CRO testing, A/B tests, frictionless UX improvements to boost conversion rates.',
        icon: 'Award',
      },
      {
        title: 'Monthly Optimization & Reports',
        description: 'Weekly campaign monitoring, bid adjustments, audience refinement, and monthly performance reviews.',
        icon: 'Settings',
      },
    ],
    process_steps: [
      {
        step_title: 'Discovery & Consultation',
        step_desc: 'Align business goals, target audience, KPIs, and budget.',
        step_icon: 'Users',
      },
      {
        step_title: 'Strategy & Planning',
        step_desc: 'Channel selection, audience segmentation, and monthly budget allocation.',
        step_icon: 'Award',
      },
      {
        step_title: 'Campaign Execution',
        step_desc: 'Launch campaigns, setup tracking, configure retargeting audiences.',
        step_icon: 'Code2',
      },
      {
        step_title: 'Optimization & Scaling',
        step_desc: 'Weekly optimizations, pause underperforming ads, scale winners.',
        step_icon: 'TrendingUp',
      },
    ],
    case_studies: [
      {
        client_name: 'TechStart India',
        industry: 'SaaS',
        problem: 'Struggling to generate qualified B2B leads, CAC was 3x their target.',
        solution: 'Implemented LinkedIn & Google Ads strategy with audience targeting based on job title and company size.',
        result_metrics: ['150% ROI', '2.5x leads', 'CAC reduced by 60%'],
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=600&h=400&fit=crop',
      },
      {
        client_name: 'Urban Retail Co',
        industry: 'E-commerce',
        problem: 'High ad spend with low conversion rates on social media.',
        solution: 'Revamped creatives, implemented dynamic product ads, optimized landing pages with CRO.',
        result_metrics: ['ROAS 4x', 'CPC reduced by 40%', '55% conversion lift'],
        image: 'https://images.pexels.com/photos/3178829/pexels-photo-3178829.jpeg?w=600&h=400&fit=crop',
      },
      {
        client_name: 'FinHealth Services',
        industry: 'Financial Services',
        problem: 'Poor organic visibility, relying entirely on paid channels.',
        solution: 'Built SEO roadmap, created 50+ high-intent blog posts, implemented backlink strategy.',
        result_metrics: ['Organic traffic 8x', '250+ keywords ranking', 'SEO leads now 35% of pipeline'],
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&h=400&fit=crop',
      },
    ],
    metrics: [
      { label: 'Campaigns Managed', value: '150+' },
      { label: 'Avg ROAS', value: '4x' },
      { label: 'Avg CAC Reduction', value: '50%' },
      { label: 'Campaigns with +100% ROI', value: '87%' },
    ],
    faqs: [
      {
        q: 'How long to see results?',
        a: 'SEO typically shows improvements in 3–6 months. Paid campaigns can generate qualified leads within 7–14 days if properly configured.',
      },
      {
        q: 'What budget should I allocate?',
        a: 'Budgets vary. Most clients see strong results with ₹30K–₹2L/month depending on service scope. We help optimize spend for maximum ROI.',
      },
      {
        q: 'How do you measure success?',
        a: 'We track cost per lead (CPL), conversion rate, ROAS, and other KPIs. Monthly reports show performance against your goals.',
      },
      {
        q: 'Do you provide ongoing support?',
        a: 'Yes. Campaigns are actively managed and optimized weekly. We provide monthly strategy calls and quarterly reviews.',
      },
    ],
    industry_filters: ['SaaS', 'E-commerce', 'Services', 'B2B', 'B2C'],
    calculators: true,
    calculator_type: 'ads-budget-estimator',
    color_accent: '#0f62fe',
    hero_graphic_type: 'illustration',
    seo_meta_title: 'Digital Marketing Services - Grow Your Business | OperateForYou',
    seo_meta_description: 'Get measurable leads and revenue growth with performance marketing. SEO, Paid Ads, Social Media campaigns.',
    
    // Legacy fields
    icon: Zap,
    description: 'Grow your online presence with strategic digital marketing solutions tailored for your business.',
    features: ['SEO Optimization', 'Paid Advertising', 'Social Media Management', 'Content Strategy', 'Lead Nurturing', 'Analytics & Reporting'],
    whatsappText: 'I\'m interested in Digital Marketing services. Can you help me grow my online presence?',
    imageUrl: 'https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development Services',
    tagline: 'Custom websites and web apps that convert visitors into customers',
    hero_image: 'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?w=800&h=600&fit=crop',
    hero_badge: 'RESPONSIVE & FAST',
    short_intro: 'Modern, scalable web solutions — responsive websites, e-commerce platforms, and web applications.',
    hero_cta_text: 'Start Your Project',
    hero_secondary_cta_text: 'Book 15-min Call',
    top_problems: [
      'Outdated website hurts credibility',
      'Slow load times reduce conversions',
      'Not mobile responsive',
      'Limited e-commerce functionality',
    ],
    what_we_offer: [
      {
        icon: 'Globe',
        title: 'Responsive Websites',
        short_desc: 'Beautiful, fast, mobile-first websites optimized for conversions.',
      },
      {
        icon: 'Code2',
        title: 'E-commerce Solutions',
        short_desc: 'Shopify, WooCommerce, or custom platforms with payment integration.',
      },
      {
        icon: 'BarChart3',
        title: 'Web Applications',
        short_desc: 'React, Node.js, full-stack apps tailored to your business logic.',
      },
      {
        icon: 'Award',
        title: 'API Development',
        short_desc: 'Custom REST/GraphQL APIs for integrating third-party services.',
      },
      {
        icon: 'Settings',
        title: 'Maintenance & Support',
        short_desc: 'Hosting, updates, security patches, and ongoing optimization.',
      },
    ],
    deliverables: [
      {
        title: 'Figma Design & Prototype',
        description: 'Pixel-perfect UI/UX design, interactive prototype, design system documentation.',
        icon: 'Code2',
      },
      {
        title: 'Development Sprints',
        description: 'Frontend & backend development in 2-week sprints with weekly demos and feedback.',
        icon: 'Globe',
      },
      {
        title: 'Quality Assurance',
        description: 'Functional testing, cross-browser testing, performance audits, security checks.',
        icon: 'Award',
      },
      {
        title: 'Deployment & DevOps',
        description: 'CI/CD setup, server configuration, SSL certificates, CDN integration, monitoring.',
        icon: 'Settings',
      },
      {
        title: '90 Days of Support',
        description: 'Bug fixes, minor tweaks, performance optimization, and staff training included.',
        icon: 'Users',
      },
    ],
    process_steps: [
      {
        step_title: 'Requirements & Scoping',
        step_desc: 'Understand your vision, user flows, and technical requirements.',
        step_icon: 'Users',
      },
      {
        step_title: 'Design & Prototyping',
        step_desc: 'Create wireframes, design, and interactive prototype in Figma.',
        step_icon: 'Award',
      },
      {
        step_title: 'Development',
        step_desc: 'Build frontend and backend in parallel sprints with regular updates.',
        step_icon: 'Code2',
      },
      {
        step_title: 'Testing & Deployment',
        step_desc: 'QA testing, bug fixes, deploy to production, and launch.',
        step_icon: 'TrendingUp',
      },
    ],
    case_studies: [
      {
        client_name: 'EduLearn Platform',
        industry: 'EdTech',
        problem: 'Outdated platform, poor UX, losing users to competitors.',
        solution: 'Complete redesign with modern React frontend, improved performance (Lighthouse 95), new features.',
        result_metrics: ['User retention +60%', 'Mobile conversions +150%', 'Load time reduced to 1.2s'],
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=600&h=400&fit=crop',
      },
      {
        client_name: 'FreshGrocery E-commerce',
        industry: 'Food & Groceries',
        problem: 'Manual order system, wanted to scale to 10+ cities.',
        solution: 'Built custom e-commerce platform with real-time inventory, payment gateway, delivery integration.',
        result_metrics: ['10x order volume', 'Checkout success rate 87%', '2M revenue in first 3 months'],
        image: 'https://images.pexels.com/photos/3178829/pexels-photo-3178829.jpeg?w=600&h=400&fit=crop',
      },
    ],
    metrics: [
      { label: 'Projects Delivered', value: '85+' },
      { label: 'Avg Lighthouse Score', value: '94' },
      { label: 'Client Satisfaction', value: '4.8/5' },
      { label: 'Avg Page Load Time', value: '1.3s' },
    ],
    faqs: [
      {
        q: 'How long does a project take?',
        a: 'Website projects typically take 8–12 weeks (design + dev). Complex web apps may take 3–6 months. We provide a detailed timeline after scoping.',
      },
      {
        q: 'What technologies do you use?',
        a: 'React, Next.js, Node.js, TypeScript, PostgreSQL. We choose the best tech for your specific needs.',
      },
      {
        q: 'Do you provide post-launch support?',
        a: 'Yes, 90 days of support is included. After that, we offer ongoing maintenance packages starting at ₹15K/month.',
      },
      {
        q: 'Can you migrate our existing site?',
        a: 'Yes. We handle data migration, redirects, SEO preservation, and testing to ensure zero downtime.',
      },
    ],
    industry_filters: ['Startups', 'E-commerce', 'SaaS', 'Enterprise'],
    calculators: false,
    color_accent: '#00b4d8',
    hero_graphic_type: 'code-screenshot',
    seo_meta_title: 'Web Development Services | Custom Websites & Apps | OperateForYou',
    seo_meta_description: 'Professional web development for responsive websites, e-commerce platforms, and web applications.',
    
    // Legacy fields
    icon: Globe,
    description: 'Custom web applications built with cutting-edge technology to drive your business forward.',
    features: ['Responsive Design', 'Fast Performance', 'Mobile Optimized', 'E-commerce Ready', 'API Integration', 'Ongoing Support'],
    whatsappText: 'I\'m interested in Web Development services. Can you help me build a website?',
    imageUrl: 'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'business-registration',
    slug: 'business-registration',
    title: 'Business Registration & Compliance',
    tagline: 'Complete business setup in 2–4 weeks with zero compliance worries',
    hero_image: 'https://images.pexels.com/photos/9064715/pexels-photo-9064715.jpeg?w=800&h=600&fit=crop',
    hero_badge: 'LEGAL & COMPLIANT',
    short_intro: 'Expert guidance for company registration, GST, MSME, and legal compliance.',
    hero_cta_text: 'Start Registration',
    hero_secondary_cta_text: 'Schedule Consultation',
    top_problems: [
      'Confused about company structure',
      'GST compliance is complex',
      'Missing government deadlines',
      'Unsure about MSME benefits',
    ],
    what_we_offer: [
      {
        icon: 'Building2',
        title: 'Company Registration',
        short_desc: 'Private Limited, LLP, Partnership setup with all government approvals.',
      },
      {
        icon: 'Award',
        title: 'GST Registration',
        short_desc: 'GST application, compliance, monthly filings, and input credit optimization.',
      },
      {
        icon: 'TrendingUp',
        title: 'MSME Registration',
        short_desc: 'Udyam portal registration, government benefits, and loan eligibility.',
      },
      {
        icon: 'Settings',
        title: 'Compliance Calendar',
        short_desc: 'Track deadlines for filings, renewals, and statutory compliances.',
      },
    ],
    deliverables: [
      {
        title: 'Document Checklist & Collection',
        description: 'Prepare required documents (identity proofs, address proofs, MOA, AOA).',
        icon: 'Award',
      },
      {
        title: 'Registration Filing & Processing',
        description: 'File with government bodies (Registrar of Companies, GST, MSME), follow up on approvals.',
        icon: 'Building2',
      },
      {
        title: 'Compliance Calendar & Guidance',
        description: 'Monthly reminder calendar for filings, annual returns, and compliance deadlines.',
        icon: 'Settings',
      },
      {
        title: 'Government Liaison & Follow-up',
        description: 'Respond to government queries, resubmit documents if needed, ensure timely approvals.',
        icon: 'Users',
      },
    ],
    process_steps: [
      {
        step_title: 'Consultation & Structuring',
        step_desc: 'Advise on Pvt Ltd, LLP, or Partnership based on your business model.',
        step_icon: 'Users',
      },
      {
        step_title: 'Document Preparation',
        step_desc: 'Draft MOA, AOA, prepare identity & address proofs.',
        step_icon: 'Award',
      },
      {
        step_title: 'Filing with Government',
        step_desc: 'Submit applications to ROC, GSTIN, and MSME portals.',
        step_icon: 'Building2',
      },
      {
        step_title: 'Approval & Compliance Setup',
        step_desc: 'Get certificates, open bank account, setup books of accounts.',
        step_icon: 'TrendingUp',
      },
    ],
    case_studies: [
      {
        client_name: 'HealthTech Innovations',
        industry: 'Healthcare Tech',
        problem: 'Founders wanted to raise funding but company was not registered.',
        solution: 'Registered as Pvt Ltd in 3 weeks, filed DPIIT recognition for tax benefits.',
        result_metrics: ['Registered in 21 days', '₹2Cr seed round raised', '80L tax exemption per year'],
        image: 'https://images.pexels.com/photos/8439748/pexels-photo-8439748.jpeg?w=600&h=400&fit=crop',
      },
      {
        client_name: 'AgroConnect',
        industry: 'Agriculture',
        problem: 'Operating without GST, risking penalties; wanted MSME benefits.',
        solution: 'Registered for GST, obtained Udyam registration, filed for subsidy schemes.',
        result_metrics: ['Udyam benefits accessed', 'GST compliant from day 1', 'Avoided ₹5L in penalties'],
        image: 'https://images.pexels.com/photos/7414208/pexels-photo-7414208.jpeg?w=600&h=400&fit=crop',
      },
    ],
    metrics: [
      { label: 'Registrations Completed', value: '500+' },
      { label: 'Avg Registration Time', value: '21 days' },
      { label: 'Compliance Accuracy', value: '99.8%' },
      { label: 'Client Satisfaction', value: '4.9/5' },
    ],
    faqs: [
      {
        q: 'What\'s the cost of registration?',
        a: 'Pvt Ltd: ₹15K–₹25K. GST: ₹5K–₹8K. MSME: ₹2K. Prices vary based on complexity.',
      },
      {
        q: 'How long does registration take?',
        a: 'Company registration: 2–4 weeks. GST: 1–2 weeks. MSME: 3–5 days (Udyam portal is instant).',
      },
      {
        q: 'Do I need a physical office?',
        a: 'Yes, you need a registered office address. We can help with office rental documentation.',
      },
      {
        q: 'What are MSME benefits?',
        a: 'Tax exemption up to ₹1Cr turnover, subsidized credit, government procurement opportunities.',
      },
    ],
    industry_filters: ['Startups', 'SME', 'Tech', 'Manufacturing', 'Services'],
    calculators: true,
    calculator_type: 'gst-penalty-estimator',
    color_accent: '#06a77d',
    hero_graphic_type: 'illustration',
    seo_meta_title: 'Business Registration & GST Compliance | OperateForYou',
    seo_meta_description: 'Expert guidance for company registration, GST, MSME, and legal compliance. Complete business setup in 2-4 weeks.',
    
    // Legacy fields
    icon: Building2,
    description: 'Streamline your business registration process with expert guidance and support.',
    features: ['Company Registration', 'GST Compliance', 'MSME Benefits', 'Legal Documentation', 'Government Filing', 'Compliance Calendar'],
    whatsappText: 'I\'m interested in Business Registration services. Can you help me register my business?',
    imageUrl: 'https://images.pexels.com/photos/9064715/pexels-photo-9064715.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'accounting-taxation',
    slug: 'accounting-taxation',
    title: 'Accounting & Taxation Services',
    tagline: 'Tax-optimized books of accounts and zero compliance stress',
    hero_image: 'https://images.pexels.com/photos/8439748/pexels-photo-8439748.jpeg?w=800&h=600&fit=crop',
    hero_badge: 'TAX OPTIMIZED',
    short_intro: 'Expert accounting, tax filing, and financial reporting to keep your finances compliant and optimized.',
    hero_cta_text: 'Get Free Tax Review',
    hero_secondary_cta_text: 'Schedule Consultation',
    top_problems: [
      'Disorganized bookkeeping',
      'Missed tax filing deadlines',
      'Overpaying taxes',
      'No financial visibility',
    ],
    what_we_offer: [
      {
        icon: 'BarChart3',
        title: 'Bookkeeping & Accounts',
        short_desc: 'Monthly P&L, balance sheets, cash flow tracking with cloud-based software.',
      },
      {
        icon: 'Award',
        title: 'Tax Filing',
        short_desc: 'Income tax, corporate tax, GST filing with maximum deductions and benefits.',
      },
      {
        icon: 'Calculator',
        title: 'Financial Reporting',
        short_desc: 'Quarterly reports, annual audits, financial statements for stakeholders.',
      },
      {
        icon: 'TrendingUp',
        title: 'GST Compliance',
        short_desc: 'Monthly GST returns (GSTR-1, GSTR-3B), audit trails, penalty management.',
      },
    ],
    deliverables: [
      {
        title: 'Monthly Books of Accounts',
        description: 'Reconciled bank statements, invoice-to-ledger matching, monthly P&L.',
        icon: 'BarChart3',
      },
      {
        title: 'Tax Return Filing',
        description: 'Income tax filing, corporate tax filing, advance tax planning, tax optimization.',
        icon: 'Award',
      },
      {
        title: 'GST Compliance & Returns',
        description: 'GSTR-1, GSTR-3B, GSTR-9 filings, ITC reconciliation, penalty management.',
        icon: 'Settings',
      },
      {
        title: 'Financial Advisory',
        description: 'Quarterly business reviews, tax planning for next year, entity structuring advice.',
        icon: 'Users',
      },
    ],
    process_steps: [
      {
        step_title: 'Financial Setup',
        step_desc: 'Configure accounting software, chart of accounts, tax settings.',
        step_icon: 'Settings',
      },
      {
        step_title: 'Monthly Data Collection',
        step_desc: 'Receive invoices, receipts, bank statements from your business.',
        step_icon: 'Award',
      },
      {
        step_title: 'Accounting & Analysis',
        step_desc: 'Record transactions, reconcile accounts, prepare monthly reports.',
        step_icon: 'BarChart3',
      },
      {
        step_title: 'Filing & Advisory',
        step_desc: 'File tax returns, GST returns, provide quarterly financial reviews.',
        step_icon: 'TrendingUp',
      },
    ],
    case_studies: [
      {
        client_name: 'CloudSoft Services',
        industry: 'IT Services',
        problem: 'Chaotic bookkeeping, overpaying taxes, multiple vendors for different tasks.',
        solution: 'Centralized accounting, implemented business expense optimization, filed ITR with max deductions.',
        result_metrics: ['₹25L tax saved yearly', 'Books reconciled within 1 month', 'All compliance on-time'],
        image: 'https://images.pexels.com/photos/8292854/pexels-photo-8292854.jpeg?w=600&h=400&fit=crop',
      },
      {
        client_name: 'RetailPro Chain',
        industry: 'Retail',
        problem: 'Multi-location accounting nightmare, GST returns filed late multiple times.',
        solution: 'Cloud accounting setup, consolidated P&L across 5 locations, automated GST filing.',
        result_metrics: ['Zero compliance penalties', 'Financial visibility within 2 days of month-end', 'Books audit-ready'],
        image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?w=600&h=400&fit=crop',
      },
    ],
    metrics: [
      { label: 'Accounts Managed', value: '300+' },
      { label: 'Avg Tax Savings', value: '₹20L/year' },
      { label: 'On-Time Filings', value: '99.5%' },
      { label: 'Client Retention', value: '95%' },
    ],
    faqs: [
      {
        q: 'How much does accounting service cost?',
        a: 'Depends on transaction volume. Small business: ₹8K–₹15K/month. Mid-size: ₹20K–₹40K/month.',
      },
      {
        q: 'What software do you use?',
        a: 'Tally Prime, Zoho Books, or QuickBooks. We choose based on your needs and industry.',
      },
      {
        q: 'Can you help with tax planning?',
        a: 'Yes. We advise on entity structure, bonus deductions, depreciation strategies, and advance tax planning.',
      },
      {
        q: 'Do you handle GST audits?',
        a: 'Yes. We prepare GST audit reports and represent you before GST authorities if needed.',
      },
    ],
    industry_filters: ['Startups', 'SME', 'E-commerce', 'Services', 'Manufacturing'],
    calculators: false,
    color_accent: '#d62839',
    hero_graphic_type: 'financial-dashboard',
    seo_meta_title: 'Accounting & Taxation Services | Tax-Optimized Bookkeeping | OperateForYou',
    seo_meta_description: 'Expert accounting, tax filing, GST compliance, and financial reporting for your business.',
    
    // Legacy fields
    icon: Calculator,
    description: 'Expert accounting and tax services to keep your finances in order and compliant.',
    features: ['Bookkeeping', 'Tax Filing', 'GST Compliance', 'Financial Reporting', 'Audit Support', 'Tax Optimization'],
    whatsappText: 'I\'m interested in Accounting & Taxation services. Can you help with my finances?',
    imageUrl: 'https://images.pexels.com/photos/8439748/pexels-photo-8439748.jpeg?w=600&h=400&fit=crop',
  },
  {
    id: 'finance-loan',
    slug: 'finance-loan',
    title: 'Finance & Loan Services',
    tagline: 'Get funded fast with expert loan structuring and lender negotiation',
    hero_image: 'https://images.pexels.com/photos/7414208/pexels-photo-7414208.jpeg?w=800&h=600&fit=crop',
    hero_badge: 'QUICK APPROVALS',
    short_intro: 'Business loans, personal loans, and credit solutions backed by expert structuring and lender relationships.',
    hero_cta_text: 'Check Eligibility Free',
    hero_secondary_cta_text: 'Talk to Loan Expert',
    top_problems: [
      'Rejected by multiple banks',
      'High interest rates',
      'Unsure about loan products',
      'Complex application process',
    ],
    what_we_offer: [
      {
        icon: 'Banknote',
        title: 'Business Loans',
        short_desc: 'Term loans, working capital, equipment financing at competitive rates.',
      },
      {
        icon: 'TrendingUp',
        title: 'Personal Loans',
        short_desc: 'Quick approval loans for expansion, emergency needs, personal goals.',
      },
      {
        icon: 'Award',
        title: 'Credit Solutions',
        short_desc: 'Credit card assistance, credit score improvement, debt consolidation.',
      },
      {
        icon: 'Users',
        title: 'Loan Advisory',
        short_desc: 'Loan comparison, product recommendation, EMI calculation, affordability analysis.',
      },
    ],
    deliverables: [
      {
        title: 'Eligibility Check & Assessment',
        description: 'Evaluate your loan eligibility across 20+ lenders, no-cost assessment.',
        icon: 'Award',
      },
      {
        title: 'Loan Structuring & Documentation',
        description: 'Prepare optimized loan structure, financial statements, business plan.',
        icon: 'BarChart3',
      },
      {
        title: 'Application & Processing',
        description: 'Submit to lenders, track status, respond to lender queries.',
        icon: 'Users',
      },
      {
        title: 'Lender Negotiation',
        description: 'Negotiate interest rate, tenure, repayment terms with lender.',
        icon: 'TrendingUp',
      },
      {
        title: 'Disbursement & Compliance',
        description: 'Track disbursement timeline, assist with post-sanction compliance.',
        icon: 'Settings',
      },
    ],
    process_steps: [
      {
        step_title: 'Free Eligibility Check',
        step_desc: 'Assess loan eligibility, required documents, best-fit products.',
        step_icon: 'Users',
      },
      {
        step_title: 'Loan Structuring',
        step_desc: 'Prepare financial statements, business plan, collateral details.',
        step_icon: 'Award',
      },
      {
        step_title: 'Multi-Lender Application',
        step_desc: 'Apply to 3–5 lenders simultaneously for better terms.',
        step_icon: 'BarChart3',
      },
      {
        step_title: 'Approval & Closure',
        step_desc: 'Finalize terms, get final approval, track disbursement.',
        step_icon: 'TrendingUp',
      },
    ],
    case_studies: [
      {
        client_name: 'ManufactureCo Ltd',
        industry: 'Manufacturing',
        problem: 'Expansion needed but rejected by 2 banks, didnot know how to apply.',
        solution: 'Restructured financials, applied with SIDBI and private lender, negotiated better terms.',
        result_metrics: ['₹50L loan approved', '9.5% interest rate', 'Quick 15-day disbursement'],
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&h=400&fit=crop',
      },
      {
        client_name: 'ServiceHub',
        industry: 'Services',
        problem: 'Working capital crunch, couldn\'t hire or take orders.',
        solution: 'Got approved for working capital line of credit within 10 days.',
        result_metrics: ['₹20L working capital', '8% interest', 'Flexible repayment'],
        image: 'https://images.pexels.com/photos/3178829/pexels-photo-3178829.jpeg?w=600&h=400&fit=crop',
      },
    ],
    metrics: [
      { label: 'Loans Facilitated', value: '200+' },
      { label: 'Total Amount Funded', value: '₹50Cr+' },
      { label: 'Avg Approval Time', value: '10 days' },
      { label: 'Approval Success Rate', value: '87%' },
    ],
    faqs: [
      {
        q: 'What is the minimum loan amount?',
        a: 'Business loans start from ₹5L. Personal loans from ₹25K. We help find lenders for your amount.',
      },
      {
        q: 'What documents are needed?',
        a: 'ID proof, address proof, 6-month bank statements, business registration proof, financial statements.',
      },
      {
        q: 'How long is the approval process?',
        a: 'Typically 7–14 days from application. We expedite on your behalf with lenders.',
      },
      {
        q: 'Can I get a loan if I have poor credit?',
        a: 'Possibly. We explore collateral-backed loans, SIDBI schemes, and alternative lenders.',
      },
    ],
    industry_filters: ['Startups', 'SME', 'Manufacturing', 'Retail', 'Services'],
    calculators: true,
    calculator_type: 'loan-emi',
    color_accent: '#f72585',
    hero_graphic_type: 'financial-dashboard',
    seo_meta_title: 'Business & Personal Loans | Expert Loan Services | OperateForYou',
    seo_meta_description: 'Get approved for business loans, personal loans, and credit solutions with expert structuring and fast approvals.',
    
    // Legacy fields
    icon: Banknote,
    description: 'Access financial solutions and loan assistance tailored to your business needs.',
    features: ['Business Loans', 'Personal Loans', 'Credit Solutions', 'Loan Structuring', 'Fast Approvals', 'Competitive Rates'],
    whatsappText: 'I\'m interested in Finance & Loan services. Can you help me with financing options?',
    imageUrl: 'https://images.pexels.com/photos/7414208/pexels-photo-7414208.jpeg?w=600&h=400&fit=crop',
  },
];

export const SERVICE_MAP = new Map<string, Service>();

// Populate SERVICE_MAP with both slug and id as keys
SERVICES.forEach(service => {
  SERVICE_MAP.set(service.slug, service);
  if (service.id) {
    SERVICE_MAP.set(service.id, service);
  }
});

export function getService(idOrSlug: string): Service | undefined {
  return SERVICE_MAP.get(idOrSlug);
}
