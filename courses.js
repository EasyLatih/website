const coursesData = [
  {
    "Course Title":"Accounting Skills with E-Invoicing for Accounts Assistants & Clerk",
    "Description":"Accounts assistants & clerks needing electronic invoicing skills",
    "Related Law \/ Act":"Income Tax Act 1967 (Section 82C)",
    "Level":"Entry-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"Bookkeeping & Basic Accounting for SMEs",
    "Description":"Basics of bookkeeping and accounting for small businesses",
    "Related Law \/ Act":"Companies Act 2016",
    "Level":"Entry-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"Income Tax Submission & Compliance for SMEs",
    "Description":"Guidelines on preparing and filing corporate tax returns",
    "Related Law \/ Act":"Income Tax Act 1967",
    "Level":"Mid-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"GST\/SST Implementation & Compliance",
    "Description":"Understanding GST\/SST rules and implementation",
    "Related Law \/ Act":"Sales & Service Tax Act 2018",
    "Level":"Mid-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"Payroll Administration & PCB Calculation",
    "Description":"Processing payroll and calculating PCB deductions",
    "Related Law \/ Act":"Income Tax Act 1967 & Employment Act 1955",
    "Level":"Entry-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"Financial Analysis & Budgeting for Non-Finance Managers",
    "Description":"Simple financial analysis and budgeting for managers",
    "Related Law \/ Act":"Companies Act 2016",
    "Level":"Mid-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"Financial Reporting Standards (MFRS\/IFRS) Update",
    "Description":"Updates on latest financial reporting standards",
    "Related Law \/ Act":"Malaysian Financial Reporting Standards",
    "Level":"Senior",
    "Category":"Finance"
  },
  {
    "Course Title":"Managing Cash Flow & Working Capital",
    "Description":"Strategies to manage cash flow and working capital",
    "Related Law \/ Act":"Companies Act 2016",
    "Level":"Mid-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"Internal Audit & Risk Management for SMEs",
    "Description":"Setting up internal audit and risk management systems",
    "Related Law \/ Act":"Companies Act 2016 & Listing Requirements",
    "Level":"Senior",
    "Category":"Finance"
  },
  {
    "Course Title":"Handling Accounts Receivable & Payable",
    "Description":"Efficient management of AR & AP processes",
    "Related Law \/ Act":"Companies Act 2016",
    "Level":"Entry-Level",
    "Category":"Finance"
  },
  {
    "Course Title":"Interpretation & Practical Application of the Employment Act 1955",
    "Description":"Understand and apply the Employment Act provisions",
    "Related Law \/ Act":"Employment Act 1955 (Amendments)",
    "Level":"Mid-Level",
    "Category":"HR"
  },
  {
    "Course Title":"Managing Discipline & Misconduct",
    "Description":"Handling absenteeism, poor performance & misconduct",
    "Related Law \/ Act":"Industrial Relations Act 1967",
    "Level":"Mid-Level",
    "Category":"HR"
  },
  {
    "Course Title":"Sexual Harassment & Workplace Misconduct Awareness",
    "Description":"Preventing sexual harassment & promoting safe workplaces",
    "Related Law \/ Act":"Anti-Sexual Harassment Act 2022 & Code of Practice",
    "Level":"All Levels",
    "Category":"HR"
  },
  {
    "Course Title":"Personal Data Protection Act (PDPA) Compliance",
    "Description":"Implement PDPA and protect personal data",
    "Related Law \/ Act":"Personal Data Protection Act 2010",
    "Level":"Mid-Level",
    "Category":"HR & IT"
  },
  {
    "Course Title":"HR Documentation & Record Keeping",
    "Description":"Maintain compliant HR records & documentation",
    "Related Law \/ Act":"Employment Act 1955 & Labour Regulations",
    "Level":"Entry-Level",
    "Category":"HR"
  },
  {
    "Course Title":"Talent Acquisition & Recruitment Best Practices",
    "Description":"Effective recruitment processes & interview techniques",
    "Related Law \/ Act":"Employment Act 1955 & Discrimination Guidelines",
    "Level":"Entry-Level",
    "Category":"HR"
  },
  {
    "Course Title":"Compensation & Benefits Structure & Compliance",
    "Description":"Design salary, benefits & ensure compliance",
    "Related Law \/ Act":"Minimum Wages Order & Employment Act",
    "Level":"Mid-Level",
    "Category":"HR"
  },
  {
    "Course Title":"Payroll & Statutory Contributions: EPF, SOCSO & EIS",
    "Description":"Understand payroll contributions & statutory payments",
    "Related Law \/ Act":"EPF Act 1991, SOCSO Act 1969, EIS Act 2017",
    "Level":"Entry-Level",
    "Category":"HR & Finance"
  },
  {
    "Course Title":"HR Business Partnering for SMEs",
    "Description":"Align HR strategy with business objectives",
    "Related Law \/ Act":"Employment Act 1955",
    "Level":"Senior",
    "Category":"HR"
  },
  {
    "Course Title":"Grievance Handling & Industrial Relations",
    "Description":"Resolve employee grievances & IR disputes",
    "Related Law \/ Act":"Industrial Relations Act 1967",
    "Level":"Mid-Level",
    "Category":"HR"
  },
  {
    "Course Title":"OSH Coordinator Course",
    "Description":"Training to fulfil Section 29A OSH Act requirement",
    "Related Law \/ Act":"Occupational Safety & Health Act 1994 (Amendment)",
    "Level":"Entry-Level",
    "Category":"Safety"
  },
  {
    "Course Title":"Safety & Health Committee Training",
    "Description":"Roles & responsibilities of safety committee",
    "Related Law \/ Act":"OSH (Safety Committee) Regulations 1996",
    "Level":"Mid-Level",
    "Category":"Safety"
  },
  {
    "Course Title":"Risk Assessment & Hazard Identification (HIRARC)",
    "Description":"Conduct hazard identification, risk assessment & control",
    "Related Law \/ Act":"OSH Act 1994",
    "Level":"Mid-Level",
    "Category":"Safety"
  },
  {
    "Course Title":"Fire Safety & Emergency Response",
    "Description":"Prepare for fire emergencies & evacuation procedures",
    "Related Law \/ Act":"Fire Services Act 1988",
    "Level":"All Levels",
    "Category":"Safety"
  },
  {
    "Course Title":"Chemical Safety & Hazard Communication",
    "Description":"Safe handling of chemicals & compliance with USECHH",
    "Related Law \/ Act":"USECHH Regulations 2000",
    "Level":"Entry-Level",
    "Category":"Safety & Manufacturing"
  },
  {
    "Course Title":"Ergonomics & Workplace Wellness",
    "Description":"Prevent musculoskeletal disorders & improve ergonomics",
    "Related Law \/ Act":"OSH Act 1994",
    "Level":"All Levels",
    "Category":"Safety & Office"
  },
  {
    "Course Title":"Safety & Health Induction for New Employees",
    "Description":"Introduce safety policies & procedures to new hires",
    "Related Law \/ Act":"OSH Act 1994",
    "Level":"Entry-Level",
    "Category":"Safety"
  },
  {
    "Course Title":"Forklift & Industrial Vehicle Safety",
    "Description":"Safe operation of forklifts & industrial vehicles",
    "Related Law \/ Act":"Factories & Machinery Act 1967",
    "Level":"Entry-Level",
    "Category":"Safety & Logistics"
  },
  {
    "Course Title":"Incident Investigation & Reporting",
    "Description":"Investigate accidents & prepare reports",
    "Related Law \/ Act":"OSH Act 1994 & Factories & Machinery Act",
    "Level":"Mid-Level",
    "Category":"Safety"
  },
  {
    "Course Title":"First Aid & CPR Certification",
    "Description":"Basic first aid and CPR techniques",
    "Related Law \/ Act":"OSH Act 1994 & First Aid Regulations",
    "Level":"All Levels",
    "Category":"Safety"
  },
  {
    "Course Title":"Lean Manufacturing & Continuous Improvement",
    "Description":"Implement lean tools and continuous improvement",
    "Related Law \/ Act":"Best Practice (ISO 9001)",
    "Level":"Mid-Level",
    "Category":"Manufacturing"
  },
  {
    "Course Title":"5S Workplace Organisation",
    "Description":"Implement 5S to organise the workplace",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"Manufacturing & Office"
  },
  {
    "Course Title":"Quality Management (ISO 9001)",
    "Description":"Understand QMS requirements and implementation",
    "Related Law \/ Act":"ISO 9001 Standard",
    "Level":"Mid-Level",
    "Category":"Manufacturing & Services"
  },
  {
    "Course Title":"Inventory Control & Warehouse Management",
    "Description":"Manage inventory and warehouse operations effectively",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"Operations & Logistics"
  },
  {
    "Course Title":"Procurement & Vendor Management",
    "Description":"Select, evaluate and manage suppliers",
    "Related Law \/ Act":"Best Practice & Procurement Policies",
    "Level":"Mid-Level",
    "Category":"Operations & Procurement"
  },
  {
    "Course Title":"Production Planning & Scheduling",
    "Description":"Plan and schedule production effectively",
    "Related Law \/ Act":"Factories & Machinery Act 1967",
    "Level":"Mid-Level",
    "Category":"Manufacturing"
  },
  {
    "Course Title":"Supply Chain Risk & Resilience",
    "Description":"Identify risks and build resilient supply chains",
    "Related Law \/ Act":"Best Practice",
    "Level":"Senior",
    "Category":"Operations & Logistics"
  },
  {
    "Course Title":"Maintenance Management (TPM)",
    "Description":"Implement Total Productive Maintenance systems",
    "Related Law \/ Act":"Factories & Machinery Act 1967",
    "Level":"Mid-Level",
    "Category":"Manufacturing"
  },
  {
    "Course Title":"Environmental Management & Sustainability",
    "Description":"Ensure compliance with environmental regulations",
    "Related Law \/ Act":"Environmental Quality Act 1974",
    "Level":"Mid-Level",
    "Category":"Manufacturing & Services"
  },
  {
    "Course Title":"Food Safety & Hygiene",
    "Description":"Implement food safety and hygiene practices",
    "Related Law \/ Act":"Food Act 1983 & Food Regulations 1985",
    "Level":"Entry-Level",
    "Category":"F&B"
  },
  {
    "Course Title":"Digital Marketing Fundamentals for SMEs",
    "Description":"Essentials of digital marketing channels",
    "Related Law \/ Act":"Communications and Multimedia Act 1998",
    "Level":"Entry-Level",
    "Category":"Marketing"
  },
  {
    "Course Title":"Social Media Marketing & Content Creation",
    "Description":"Create and manage social media content",
    "Related Law \/ Act":"Communications and Multimedia Act 1998",
    "Level":"Entry-Level",
    "Category":"Marketing"
  },
  {
    "Course Title":"Customer Relationship Management (CRM) Implementation",
    "Description":"Implement CRM tools and manage customer data",
    "Related Law \/ Act":"Personal Data Protection Act 2010",
    "Level":"Mid-Level",
    "Category":"Marketing & Sales"
  },
  {
    "Course Title":"Sales Strategies & Negotiation Skills",
    "Description":"Develop persuasive sales techniques & negotiation",
    "Related Law \/ Act":"Consumer Protection Act 1999",
    "Level":"Mid-Level",
    "Category":"Sales"
  },
  {
    "Course Title":"Branding & Corporate Identity",
    "Description":"Build and manage brand identity for SMEs",
    "Related Law \/ Act":"Trademarks Act 2019",
    "Level":"Entry-Level",
    "Category":"Marketing"
  },
  {
    "Course Title":"E-commerce & Online Business Models",
    "Description":"Start and manage online stores and platforms",
    "Related Law \/ Act":"Consumer Protection (Electronic Trade Transactions) Regulations 2012",
    "Level":"Entry-Level",
    "Category":"Marketing & Retail"
  },
  {
    "Course Title":"Market Research & Consumer Insights",
    "Description":"Conduct market research and interpret insights",
    "Related Law \/ Act":"Data Protection & Competition Act",
    "Level":"Mid-Level",
    "Category":"Marketing"
  },
  {
    "Course Title":"Effective Sales Presentation & Pitching",
    "Description":"Craft and deliver compelling sales presentations",
    "Related Law \/ Act":"Consumer Protection Act 1999",
    "Level":"Mid-Level",
    "Category":"Sales"
  },
  {
    "Course Title":"Marketing Analytics & Metrics",
    "Description":"Measure marketing performance using analytics",
    "Related Law \/ Act":"Personal Data Protection Act 2010",
    "Level":"Mid-Level",
    "Category":"Marketing"
  },
  {
    "Course Title":"Customer Service Excellence & Complaint Management",
    "Description":"Deliver excellent service & handle complaints",
    "Related Law \/ Act":"Consumer Protection Act 1999",
    "Level":"Entry-Level",
    "Category":"Sales & Service"
  },
  {
    "Course Title":"Supervisory Skills for New Managers",
    "Description":"Equip new managers with supervisory skills",
    "Related Law \/ Act":"Employment Act 1955",
    "Level":"Entry-Level",
    "Category":"Management"
  },
  {
    "Course Title":"Leadership & Team Building",
    "Description":"Develop leadership and build cohesive teams",
    "Related Law \/ Act":"Best Practice",
    "Level":"Mid-Level",
    "Category":"Management"
  },
  {
    "Course Title":"Strategic Planning & Execution",
    "Description":"Create and execute strategic plans",
    "Related Law \/ Act":"Best Practice",
    "Level":"Senior",
    "Category":"Management"
  },
  {
    "Course Title":"Change Management & Organisational Transformation",
    "Description":"Manage change and transform organisations",
    "Related Law \/ Act":"Best Practice",
    "Level":"Senior",
    "Category":"Management"
  },
  {
    "Course Title":"Time Management & Productivity",
    "Description":"Improve time management and productivity",
    "Related Law \/ Act":"Best Practice",
    "Level":"All Levels",
    "Category":"Management"
  },
  {
    "Course Title":"Conflict Resolution & Negotiation",
    "Description":"Resolve conflicts and negotiate effectively",
    "Related Law \/ Act":"Industrial Relations Act 1967",
    "Level":"Mid-Level",
    "Category":"Management"
  },
  {
    "Course Title":"Emotional Intelligence & Employee Engagement",
    "Description":"Enhance emotional intelligence & engagement",
    "Related Law \/ Act":"Best Practice",
    "Level":"All Levels",
    "Category":"Management"
  },
  {
    "Course Title":"Business Ethics & Corporate Governance",
    "Description":"Promote ethics and good governance",
    "Related Law \/ Act":"MACC Act 2009 & Companies Act 2016",
    "Level":"Senior",
    "Category":"Management"
  },
  {
    "Course Title":"Project Management Fundamentals (PMBOK)",
    "Description":"Understand PMBOK principles & project lifecycle",
    "Related Law \/ Act":"Best Practice",
    "Level":"Mid-Level",
    "Category":"Management & IT"
  },
  {
    "Course Title":"Finance for Non-Finance Managers",
    "Description":"Teach financial basics to non-finance managers",
    "Related Law \/ Act":"Companies Act 2016",
    "Level":"Mid-Level",
    "Category":"Management & Finance"
  },
  {
    "Course Title":"Basic Computer & Microsoft Office Skills",
    "Description":"Fundamental computer and MS Office skills",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"IT"
  },
  {
    "Course Title":"Cybersecurity Awareness & Best Practices",
    "Description":"Identify cyber threats & protect company data",
    "Related Law \/ Act":"Computer Crimes Act 1997 & PDPA",
    "Level":"All Levels",
    "Category":"IT & All"
  },
  {
    "Course Title":"Data Analytics & Visualization for SMEs",
    "Description":"Use data tools to analyze and visualise data",
    "Related Law \/ Act":"Best Practice",
    "Level":"Mid-Level",
    "Category":"IT & Business"
  },
  {
    "Course Title":"Digital Transformation & Cloud Computing",
    "Description":"Adopt digital technologies & cloud solutions",
    "Related Law \/ Act":"Personal Data Protection Act 2010",
    "Level":"Senior",
    "Category":"IT & Business"
  },
  {
    "Course Title":"Systems & Network Administration Basics",
    "Description":"Administer networks & systems effectively",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"IT"
  },
  {
    "Course Title":"Website Development & Management",
    "Description":"Build and manage websites for SMEs",
    "Related Law \/ Act":"Electronic Commerce Act 2006",
    "Level":"Entry-Level",
    "Category":"IT & Marketing"
  },
  {
    "Course Title":"E-Invoicing & Electronic Payment Systems",
    "Description":"Implement e-invoicing and digital payments",
    "Related Law \/ Act":"Income Tax Act 1967 (Section 82C) & Fintech Guidelines",
    "Level":"Mid-Level",
    "Category":"IT & Finance"
  },
  {
    "Course Title":"AI & Automation Tools for SMEs",
    "Description":"Leverage AI and automation to improve efficiency",
    "Related Law \/ Act":"Best Practice & Data Privacy",
    "Level":"Mid-Level",
    "Category":"IT & Business"
  },
  {
    "Course Title":"Software Project Management (Agile & Scrum)",
    "Description":"Manage software projects using Agile methodologies",
    "Related Law \/ Act":"Best Practice",
    "Level":"Mid-Level",
    "Category":"IT"
  },
  {
    "Course Title":"Data Privacy & GDPR\/PDPA Compliance",
    "Description":"Comply with data protection regulations",
    "Related Law \/ Act":"PDPA 2010 & GDPR",
    "Level":"Mid-Level",
    "Category":"IT & HR"
  },
  {
    "Course Title":"Customer Service & Communication Skills",
    "Description":"Develop customer service and communication skills",
    "Related Law \/ Act":"Consumer Protection Act 1999",
    "Level":"Entry-Level",
    "Category":"Service & Sales"
  },
  {
    "Course Title":"Effective Business Writing & Email Etiquette",
    "Description":"Craft professional emails and business documents",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"Admin & All"
  },
  {
    "Course Title":"Personal Branding & Professional Image",
    "Description":"Build personal brand and professional image",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"Sales & Marketing"
  },
  {
    "Course Title":"Presentation Skills & Public Speaking",
    "Description":"Enhance presentation and public speaking skills",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"All"
  },
  {
    "Course Title":"Negotiation & Persuasion Techniques",
    "Description":"Develop negotiation and persuasion strategies",
    "Related Law \/ Act":"Best Practice",
    "Level":"Mid-Level",
    "Category":"Sales & Management"
  },
  {
    "Course Title":"Problem Solving & Decision Making",
    "Description":"Structured problem-solving and decision-making",
    "Related Law \/ Act":"Best Practice",
    "Level":"All Levels",
    "Category":"All"
  },
  {
    "Course Title":"Stress Management & Work-Life Balance",
    "Description":"Manage stress and achieve work-life balance",
    "Related Law \/ Act":"Best Practice",
    "Level":"All Levels",
    "Category":"All"
  },
  {
    "Course Title":"Diversity, Equity & Inclusion Awareness",
    "Description":"Promote diversity, equity and inclusion in workplaces",
    "Related Law \/ Act":"Anti-Discrimination Policies & Guidelines",
    "Level":"All Levels",
    "Category":"All"
  },
  {
    "Course Title":"Mindfulness & Mental Health at Work",
    "Description":"Improve mental health awareness and mindfulness",
    "Related Law \/ Act":"OSH Act 1994 (Mental Health Guidelines)",
    "Level":"All Levels",
    "Category":"All"
  },
  {
    "Course Title":"Cultural Sensitivity & Global Etiquette",
    "Description":"Respect cultural differences in business",
    "Related Law \/ Act":"Best Practice",
    "Level":"Entry-Level",
    "Category":"All & International Business"
  },
  {
    "Course Title":"Purchasing Procedures & Ethics",
    "Description":"Follow ethical purchasing procedures & policies",
    "Related Law \/ Act":"MACC Act 2009 & Procurement Guidelines",
    "Level":"Entry-Level",
    "Category":"Procurement"
  },
  {
    "Course Title":"Logistics & Transportation Management",
    "Description":"Manage logistics operations and transport",
    "Related Law \/ Act":"Road Transport Act 1987",
    "Level":"Mid-Level",
    "Category":"Logistics"
  },
  {
    "Course Title":"Inventory Forecasting & Planning",
    "Description":"Forecast demand and plan inventory levels",
    "Related Law \/ Act":"Best Practice",
    "Level":"Mid-Level",
    "Category":"Procurement & Retail"
  },
  {
    "Course Title":"International Trade Compliance & Incoterms",
    "Description":"Understand incoterms & trade compliance",
    "Related Law \/ Act":"Customs Act 1967 & Incoterms 2020",
    "Level":"Mid-Level",
    "Category":"Logistics & Trade"
  },
  {
    "Course Title":"Warehouse Safety & Management",
    "Description":"Implement safe warehouse practices",
    "Related Law \/ Act":"Factories & Machinery Act 1967",
    "Level":"Entry-Level",
    "Category":"Logistics & Manufacturing"
  },
  {
    "Course Title":"Lean Supply Chain & Waste Reduction",
    "Description":"Streamline supply chain and reduce waste",
    "Related Law \/ Act":"Best Practice",
    "Level":"Mid-Level",
    "Category":"Logistics & Manufacturing"
  },
  {
    "Course Title":"Distribution & Delivery Management",
    "Description":"Efficient distribution and delivery operations",
    "Related Law \/ Act":"Road Transport Act 1987",
    "Level":"Entry-Level",
    "Category":"Logistics & Retail"
  },
  {
    "Course Title":"Packaging & Palletizing Standards",
    "Description":"Standardise packaging and palletising for shipping",
    "Related Law \/ Act":"Best Practice & Hazardous Materials Regulations",
    "Level":"Entry-Level",
    "Category":"Logistics & Manufacturing"
  },
  {
    "Course Title":"Import & Export Documentation",
    "Description":"Prepare documentation for import & export",
    "Related Law \/ Act":"Customs Act 1967",
    "Level":"Mid-Level",
    "Category":"Logistics & Trade"
  },
  {
    "Course Title":"Vendor Evaluation & Contract Management",
    "Description":"Assess vendors and manage contracts effectively",
    "Related Law \/ Act":"Contracts Act 1950",
    "Level":"Mid-Level",
    "Category":"Procurement"
  },
  {
    "Course Title":"Company Law & Compliance (Companies Act 2016)",
    "Description":"Overview of Companies Act 2016 compliance",
    "Related Law \/ Act":"Companies Act 2016",
    "Level":"Senior",
    "Category":"Corporate"
  },
  {
    "Course Title":"Anti-Money Laundering & Counter Financing of Terrorism (AML\/CFT)",
    "Description":"Prevent money laundering & terrorism financing",
    "Related Law \/ Act":"Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001",
    "Level":"Mid-Level",
    "Category":"Finance & Banking"
  },
  {
    "Course Title":"Anti-Bribery & Corruption Compliance",
    "Description":"Comply with MACC Act and prevent corruption",
    "Related Law \/ Act":"MACC Act 2009 & Section 17A",
    "Level":"All Levels",
    "Category":"Corporate"
  },
  {
    "Course Title":"Contract Law & Drafting Basics",
    "Description":"Fundamentals of contract law and drafting",
    "Related Law \/ Act":"Contracts Act 1950",
    "Level":"Mid-Level",
    "Category":"Corporate"
  },
  {
    "Course Title":"Intellectual Property Rights & Protection",
    "Description":"Protect trademarks, patents and copyrights",
    "Related Law \/ Act":"Trademarks Act 2019 & Patents Act 1983",
    "Level":"Mid-Level",
    "Category":"Corporate & Creative"
  },
  {
    "Course Title":"Consumer Protection & Product Liability",
    "Description":"Understand consumer rights & liability issues",
    "Related Law \/ Act":"Consumer Protection Act 1999",
    "Level":"Mid-Level",
    "Category":"Retail & Manufacturing"
  },
  {
    "Course Title":"Whistleblower Protection & Ethics",
    "Description":"Encourage whistleblowing and protect whistleblowers",
    "Related Law \/ Act":"Whistleblower Protection Act 2010",
    "Level":"All Levels",
    "Category":"Corporate"
  },
  {
    "Course Title":"Carbon Reporting & ESG Compliance",
    "Description":"Report carbon footprint & comply with ESG standards",
    "Related Law \/ Act":"Environmental Quality Act 1974 & Bursa Malaysia ESG Reporting",
    "Level":"Senior",
    "Category":"Corporate & Manufacturing"
  },
  {
    "Course Title":"Labour Law & Industrial Relations",
    "Description":"Deep dive into labour law & dispute resolution",
    "Related Law \/ Act":"Employment Act 1955 & Industrial Relations Act 1967",
    "Level":"Senior",
    "Category":"HR & Corporate"
  },
  {
    "Course Title":"Employment of Foreign Workers & Immigration Law",
    "Description":"Hire and manage foreign workers compliantly",
    "Related Law \/ Act":"Immigration Act 1959\/63 & Employment Act 1955",
    "Level":"Mid-Level",
    "Category":"Construction & Manufacturing"
  }
];