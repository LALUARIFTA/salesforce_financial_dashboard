// data.js — Salesforce Financial Workspace seed data store.
// Replace this object with your own records; keep the shape (keys) intact.
    const MENU_DATA = {
      invoices: {
        title: 'Invoices',
        createBtn: 'Create an invoice',
        detailType: 'Invoice details',
        primaryAction: 'Pay out now',
        kpi1: { label: 'Overdue', amount: 31211.00 },
        kpi2: { label: 'Due within next month', amount: 172560.00 },
        kpi3: { label: 'Average time to get paid', value: 12, unit: 'days' },
        bars: { p1Start: 'Sep', p1End: 'Oct', b1: 88, p2Start: 'Nov', b2: 42, p3Start: 'Dec', b3: 34 },
        payout: { title: 'Available for Instant Payout', amount: 214390.00, badge: 'Expects' },
        subMenus: [
          { id: 'all', label: 'All Invoices', count: 13 },
          { id: 'draft', label: 'Draft', count: 3 },
          { id: 'unpaid', label: 'Unpaid', count: 10 }
        ],
        defaultSubMenu: 'unpaid',
        items: [
          // First 5 items strictly match the uploaded image!
          {
            id: '404-002',
            dueText: 'In 2 days',
            status: 'Unsent',
            subGroup: 'unpaid',
            amount: 80770.00,
            company: 'Vertex Global',
            customer: 'David Kim',
            role: 'VP Finance Vertex',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Enterprise Licensing', amount: 42500.00 },
              { title: 'Data Lake Migration', amount: 24270.00 },
              { title: 'Security Compliance', amount: 14000.00 }
            ]
          },
          {
            id: '426-001',
            dueText: 'In 4 days',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 27114.00,
            company: 'Aura Systems',
            customer: 'Elena Rostova',
            role: 'CTO Aura Systems',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'UI/UX Design Audit', amount: 11200.00 },
              { title: 'Frontend Architecture', amount: 15914.00 }
            ]
          },
          {
            id: '427-012',
            dueText: 'In 5 days',
            status: 'Unsent',
            subGroup: 'unpaid',
            amount: 53154.00,
            company: 'BlueRock',
            customer: 'Maria Jones',
            role: 'CEO BlueRock Pvt Ltd',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Concept Development', amount: 10630.80 },
              { title: 'CRM Development', amount: 31892.40 },
              { title: 'CRM Integration', amount: 10630.80 }
            ]
          },
          {
            id: '424-112',
            dueText: 'In 16 days',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 61223.00,
            company: 'Lumina AI',
            customer: 'Marcus Vance',
            role: 'Head of Ops Lumina',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Neural Compute Cluster', amount: 35000.00 },
              { title: 'API Gateway Setup', amount: 16223.00 },
              { title: 'SLA Retainer Q4', amount: 10000.00 }
            ]
          },
          {
            id: '417-020',
            dueText: 'In 19 days',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 7311.00,
            company: 'Kinetix Cloud',
            customer: 'Sophia Chen',
            role: 'Director Kinetix',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Webhook Automation', amount: 4311.00 },
              { title: 'Load Testing Suite', amount: 3000.00 }
            ]
          },
          // Additional scrollable items (8 more so user can smoothly scroll the list!)
          {
            id: '431-088',
            dueText: 'In 21 days',
            status: 'Unsent',
            subGroup: 'unpaid',
            amount: 44900.00,
            company: 'Hyperion Labs',
            customer: 'Lucas Wright',
            role: 'Managing Partner',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Quantum Analytics Engine', amount: 28900.00 },
              { title: 'Custom BI Widgets', amount: 9500.00 },
              { title: 'Team Onboarding', amount: 6500.00 }
            ]
          },
          {
            id: '435-104',
            dueText: 'In 24 days',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 19850.00,
            company: 'Novus Media',
            customer: "Liam O'Connor",
            role: 'Creative Director',
            avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Ad-Tech Attribution', amount: 12400.00 },
              { title: 'CDP Sync Module', amount: 7450.00 }
            ]
          },
          {
            id: '439-210',
            dueText: 'In 27 days',
            status: 'Unsent',
            subGroup: 'unpaid',
            amount: 92400.00,
            company: 'Solaris Tech',
            customer: 'Hannah Abbott',
            role: 'SVP Engineering',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Multi-Region Failover', amount: 48000.00 },
              { title: 'Zero-Trust IAM', amount: 26400.00 },
              { title: 'SOC2 Audit Prep', amount: 18000.00 }
            ]
          },
          {
            id: '442-019',
            dueText: 'In 30 days',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 15600.00,
            company: 'Zephyr Logistics',
            customer: 'Noah Brooks',
            role: 'Fleet Ops Lead',
            avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'ERP Telemetry Connector', amount: 15600.00 }
            ]
          },
          {
            id: '448-302',
            dueText: 'In 34 days',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 38750.00,
            company: 'Aether Corp',
            customer: 'Ryan Patel',
            role: 'Chief Architect',
            avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Salesforce CPQ Setup', amount: 24750.00 },
              { title: 'Billing Rules Engine', amount: 14000.00 }
            ]
          },
          // Draft items
          {
            id: '450-001',
            dueText: 'Draft saved',
            status: 'Unsent',
            subGroup: 'draft',
            amount: 29400.00,
            company: 'Pulse Health',
            customer: 'Chloe Evans',
            role: 'VP Digital Health',
            avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'HIPAA Vault Encryption', amount: 19400.00 },
              { title: 'Patient Portal SSO', amount: 10000.00 }
            ]
          },
          {
            id: '451-009',
            dueText: 'Draft saved',
            status: 'Unsent',
            subGroup: 'draft',
            amount: 64100.00,
            company: 'BlueRock',
            customer: 'Maria Jones',
            role: 'CEO BlueRock Pvt Ltd',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Phase 2 AI Workflows', amount: 44100.00 },
              { title: 'Dedicated TAM Support', amount: 20000.00 }
            ]
          },
          {
            id: '452-015',
            dueText: 'Draft saved',
            status: 'Unsent',
            subGroup: 'draft',
            amount: 18250.00,
            company: 'Vertex Global',
            customer: 'David Kim',
            role: 'VP Finance Vertex',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Annual Audit Export', amount: 18250.00 }
            ]
          }
        ]
      },

      estimates: {
        title: 'Estimates',
        createBtn: 'Create an estimate',
        detailType: 'Estimate details',
        primaryAction: 'Convert to Invoice',
        kpi1: { label: 'Pending Approval', amount: 148920.00 },
        kpi2: { label: 'Accepted this quarter', amount: 412800.00 },
        kpi3: { label: 'Win conversion rate', value: 78, unit: '%' },
        bars: { p1Start: 'Sep', p1End: 'Oct', b1: 74, p2Start: 'Nov', b2: 65, p3Start: 'Dec', b3: 52 },
        payout: { title: 'Projected Pipeline Value', amount: 561720.00, badge: 'Forecast' },
        subMenus: [
          { id: 'all', label: 'All Estimates', count: 11 },
          { id: 'draft', label: 'Under Review', count: 4 },
          { id: 'unpaid', label: 'Awaiting Sign', count: 7 }
        ],
        defaultSubMenu: 'unpaid',
        items: [
          {
            id: 'EST-901',
            dueText: 'Expires in 3d',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 124500.00,
            company: 'BlueRock',
            customer: 'Maria Jones',
            role: 'CEO BlueRock Pvt Ltd',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Global ERP Blueprint', amount: 48500.00 },
              { title: 'Data Warehouse Core', amount: 52000.00 },
              { title: 'Executive Dashboards', amount: 24000.00 }
            ]
          },
          {
            id: 'EST-904',
            dueText: 'Expires in 5d',
            status: 'Unsent',
            subGroup: 'unpaid',
            amount: 68400.00,
            company: 'Lumina AI',
            customer: 'Marcus Vance',
            role: 'Head of Ops Lumina',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Vector Search Cluster', amount: 44400.00 },
              { title: 'Latency Optimization', amount: 24000.00 }
            ]
          },
          {
            id: 'EST-908',
            dueText: 'Expires in 7d',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 45200.00,
            company: 'Vertex Global',
            customer: 'David Kim',
            role: 'VP Finance Vertex',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Treasury API Sandbox', amount: 25200.00 },
              { title: 'Automated Reconciliation', amount: 20000.00 }
            ]
          },
          {
            id: 'EST-912',
            dueText: 'Expires in 10d',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 89300.00,
            company: 'Aura Systems',
            customer: 'Elena Rostova',
            role: 'CTO Aura Systems',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Design System v4', amount: 39300.00 },
              { title: 'Micro-Frontend Shell', amount: 50000.00 }
            ]
          },
          {
            id: 'EST-915',
            dueText: 'Expires in 12d',
            status: 'Unsent',
            subGroup: 'unpaid',
            amount: 33900.00,
            company: 'Kinetix Cloud',
            customer: 'Sophia Chen',
            role: 'Director Kinetix',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Kubernetes Auto-Scaler', amount: 33900.00 }
            ]
          },
          {
            id: 'EST-919',
            dueText: 'Expires in 15d',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 76000.00,
            company: 'Solaris Tech',
            customer: 'Hannah Abbott',
            role: 'SVP Engineering',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Edge CDN Mesh', amount: 46000.00 },
              { title: 'DDoS Shielding', amount: 30000.00 }
            ]
          },
          {
            id: 'EST-922',
            dueText: 'Expires in 18d',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 51800.00,
            company: 'Hyperion Labs',
            customer: 'Lucas Wright',
            role: 'Managing Partner',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Predictive Churn Model', amount: 51800.00 }
            ]
          },
          {
            id: 'EST-926',
            dueText: 'Legal review',
            status: 'Viewed',
            subGroup: 'draft',
            amount: 42000.00,
            company: 'Novus Media',
            customer: "Liam O'Connor",
            role: 'Creative Director',
            avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Omnichannel Analytics', amount: 42000.00 }
            ]
          },
          {
            id: 'EST-930',
            dueText: 'Scope review',
            status: 'Unsent',
            subGroup: 'draft',
            amount: 94500.00,
            company: 'Aether Corp',
            customer: 'Ryan Patel',
            role: 'Chief Architect',
            avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Global Billing Consolidation', amount: 94500.00 }
            ]
          }
        ]
      },

      payments: {
        title: 'Payments',
        createBtn: 'Record a payment',
        detailType: 'Payment receipt',
        primaryAction: 'Download Receipt',
        kpi1: { label: 'Settled this week', amount: 298450.00 },
        kpi2: { label: 'In transit / Clearing', amount: 64120.00 },
        kpi3: { label: 'Instant settlement speed', value: 2, unit: 'hours' },
        bars: { p1Start: 'Sep', p1End: 'Oct', b1: 94, p2Start: 'Nov', b2: 78, p3Start: 'Dec', b3: 66 },
        payout: { title: 'Cleared Merchant Balance', amount: 389110.00, badge: 'Verified' },
        subMenus: [
          { id: 'all', label: 'All Payments', count: 10 },
          { id: 'draft', label: 'Processing', count: 3 },
          { id: 'unpaid', label: 'Settled', count: 7 }
        ],
        defaultSubMenu: 'unpaid',
        items: [
          {
            id: 'PAY-771',
            dueText: 'Settled today',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 84200.00,
            company: 'BlueRock',
            customer: 'Maria Jones',
            role: 'CEO BlueRock Pvt Ltd',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Wire Transfer #8821', amount: 54200.00 },
              { title: 'Stripe Instant Settlement', amount: 30000.00 }
            ]
          },
          {
            id: 'PAY-768',
            dueText: '2 days ago',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 53900.00,
            company: 'Vertex Global',
            customer: 'David Kim',
            role: 'VP Finance Vertex',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'ACH Direct Debit', amount: 53900.00 }
            ]
          },
          {
            id: 'PAY-764',
            dueText: '3 days ago',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 41600.00,
            company: 'Aura Systems',
            customer: 'Elena Rostova',
            role: 'CTO Aura Systems',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Corporate Visa *4443', amount: 41600.00 }
            ]
          },
          {
            id: 'PAY-759',
            dueText: '5 days ago',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 67300.00,
            company: 'Lumina AI',
            customer: 'Marcus Vance',
            role: 'Head of Ops Lumina',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Q3 Compute Settlement', amount: 67300.00 }
            ]
          },
          {
            id: 'PAY-752',
            dueText: '1 week ago',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 29800.00,
            company: 'Kinetix Cloud',
            customer: 'Sophia Chen',
            role: 'Director Kinetix',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'SEPA Instant Transfer', amount: 29800.00 }
            ]
          },
          {
            id: 'PAY-748',
            dueText: '9 days ago',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 91200.00,
            company: 'Solaris Tech',
            customer: 'Hannah Abbott',
            role: 'SVP Engineering',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Annual License Settlement', amount: 91200.00 }
            ]
          },
          {
            id: 'PAY-741',
            dueText: '12 days ago',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 36400.00,
            company: 'Hyperion Labs',
            customer: 'Lucas Wright',
            role: 'Managing Partner',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Advisory Retainer Paid', amount: 36400.00 }
            ]
          },
          {
            id: 'PAY-780',
            dueText: 'Clearing 1d',
            status: 'Scheduled',
            subGroup: 'draft',
            amount: 48500.00,
            company: 'Aether Corp',
            customer: 'Ryan Patel',
            role: 'Chief Architect',
            avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'SWIFT International Wire', amount: 48500.00 }
            ]
          }
        ]
      },

      recurring: {
        title: 'Recurring Invoices',
        createBtn: 'New recurring plan',
        detailType: 'Subscription plan',
        primaryAction: 'Run Billing Cycle',
        kpi1: { label: 'Monthly Recurring (MRR)', amount: 186400.00 },
        kpi2: { label: 'Annualized Run Rate', amount: 2236800.00 },
        kpi3: { label: 'Net Dollar Retention', value: 118, unit: '%' },
        bars: { p1Start: 'Sep', p1End: 'Oct', b1: 91, p2Start: 'Nov', b2: 84, p3Start: 'Dec', b3: 79 },
        payout: { title: 'Auto-Charge Scheduled', amount: 186400.00, badge: 'Auto-Pay' },
        subMenus: [
          { id: 'all', label: 'All Schedules', count: 9 },
          { id: 'draft', label: 'Paused', count: 2 },
          { id: 'unpaid', label: 'Active Cycles', count: 7 }
        ],
        defaultSubMenu: 'unpaid',
        items: [
          {
            id: 'REC-101',
            dueText: 'Every 1st mo',
            status: 'Scheduled',
            subGroup: 'unpaid',
            amount: 32000.00,
            company: 'BlueRock',
            customer: 'Maria Jones',
            role: 'CEO BlueRock Pvt Ltd',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Managed CRM Cloud Tier', amount: 22000.00 },
              { title: '24/7 Dedicated SRE', amount: 10000.00 }
            ]
          },
          {
            id: 'REC-104',
            dueText: 'Every 1st mo',
            status: 'Scheduled',
            subGroup: 'unpaid',
            amount: 28500.00,
            company: 'Vertex Global',
            customer: 'David Kim',
            role: 'VP Finance Vertex',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Global Ledger Sync Plan', amount: 28500.00 }
            ]
          },
          {
            id: 'REC-109',
            dueText: 'Every 15th mo',
            status: 'Scheduled',
            subGroup: 'unpaid',
            amount: 45000.00,
            company: 'Lumina AI',
            customer: 'Marcus Vance',
            role: 'Head of Ops Lumina',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Dedicated GPU Node Pool', amount: 45000.00 }
            ]
          },
          {
            id: 'REC-112',
            dueText: 'Quarterly',
            status: 'Scheduled',
            subGroup: 'unpaid',
            amount: 38900.00,
            company: 'Aura Systems',
            customer: 'Elena Rostova',
            role: 'CTO Aura Systems',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Enterprise Seat Licenses', amount: 38900.00 }
            ]
          },
          {
            id: 'REC-118',
            dueText: 'Every 1st mo',
            status: 'Scheduled',
            subGroup: 'unpaid',
            amount: 19400.00,
            company: 'Kinetix Cloud',
            customer: 'Sophia Chen',
            role: 'Director Kinetix',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Realtime Telemetry Stream', amount: 19400.00 }
            ]
          },
          {
            id: 'REC-124',
            dueText: 'Monthly',
            status: 'Scheduled',
            subGroup: 'unpaid',
            amount: 54000.00,
            company: 'Solaris Tech',
            customer: 'Hannah Abbott',
            role: 'SVP Engineering',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Global Security Operations', amount: 54000.00 }
            ]
          },
          {
            id: 'REC-129',
            dueText: 'Monthly',
            status: 'Scheduled',
            subGroup: 'unpaid',
            amount: 22600.00,
            company: 'Hyperion Labs',
            customer: 'Lucas Wright',
            role: 'Managing Partner',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Data Pipeline Maintenance', amount: 22600.00 }
            ]
          },
          {
            id: 'REC-135',
            dueText: 'Paused',
            status: 'Unsent',
            subGroup: 'draft',
            amount: 14500.00,
            company: 'Novus Media',
            customer: "Liam O'Connor",
            role: 'Creative Director',
            avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Seasonal Campaign Tier', amount: 14500.00 }
            ]
          }
        ]
      },

      checkouts: {
        title: 'Checkouts',
        createBtn: 'Create checkout link',
        detailType: 'Checkout link details',
        primaryAction: 'Share Checkout Link',
        kpi1: { label: 'Active Link Volume', amount: 94320.00 },
        kpi2: { label: 'Completed Checkouts', amount: 318750.00 },
        kpi3: { label: 'Cart completion rate', value: 84, unit: '%' },
        bars: { p1Start: 'Sep', p1End: 'Oct', b1: 82, p2Start: 'Nov', b2: 71, p3Start: 'Dec', b3: 60 },
        payout: { title: 'Instant Express Settlements', amount: 162840.00, badge: 'Live Links' },
        subMenus: [
          { id: 'all', label: 'All Links', count: 9 },
          { id: 'draft', label: 'Archived', count: 2 },
          { id: 'unpaid', label: 'Active Links', count: 7 }
        ],
        defaultSubMenu: 'unpaid',
        items: [
          {
            id: 'CHK-501',
            dueText: '142 visits',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 18500.00,
            company: 'BlueRock',
            customer: 'Maria Jones',
            role: 'CEO BlueRock Pvt Ltd',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'One-Click Onboarding Pack', amount: 12500.00 },
              { title: 'Priority Setup Add-on', amount: 6000.00 }
            ]
          },
          {
            id: 'CHK-504',
            dueText: '89 visits',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 24900.00,
            company: 'Vertex Global',
            customer: 'David Kim',
            role: 'VP Finance Vertex',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Express Treasury Portal', amount: 24900.00 }
            ]
          },
          {
            id: 'CHK-509',
            dueText: '215 visits',
            status: 'Paid',
            subGroup: 'unpaid',
            amount: 39000.00,
            company: 'Lumina AI',
            customer: 'Marcus Vance',
            role: 'Head of Ops Lumina',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'AI Token Credits Bundle', amount: 39000.00 }
            ]
          },
          {
            id: 'CHK-514',
            dueText: '64 visits',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 15200.00,
            company: 'Aura Systems',
            customer: 'Elena Rostova',
            role: 'CTO Aura Systems',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'UI Kit Enterprise License', amount: 15200.00 }
            ]
          },
          {
            id: 'CHK-519',
            dueText: '51 visits',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 28400.00,
            company: 'Kinetix Cloud',
            customer: 'Sophia Chen',
            role: 'Director Kinetix',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'DevOps Pipeline Starter', amount: 28400.00 }
            ]
          },
          {
            id: 'CHK-525',
            dueText: '118 visits',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 46000.00,
            company: 'Solaris Tech',
            customer: 'Hannah Abbott',
            role: 'SVP Engineering',
            avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Dedicated Cloud Firewall', amount: 46000.00 }
            ]
          },
          {
            id: 'CHK-531',
            dueText: '77 visits',
            status: 'Viewed',
            subGroup: 'unpaid',
            amount: 19800.00,
            company: 'Hyperion Labs',
            customer: 'Lucas Wright',
            role: 'Managing Partner',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
            lineItems: [
              { title: 'Executive Workshop Pass', amount: 19800.00 }
            ]
          }
        ]
      }
    };
