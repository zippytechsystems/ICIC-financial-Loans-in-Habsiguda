-- Seed data for 15 Loan Types offered by Zippytech Systems
INSERT OR IGNORE INTO loan_types (id, name, slug, category, description, badge, subject_to_availability, is_active, sort_order) VALUES
(1, 'Home Loans', 'home-loans', 'property', 'Finance for purchase of ready apartments, independent houses and resale properties.', 'Popular', 0, 1, 1),
(2, 'Plot Loans (Hyderabad plots)', 'plot-loans', 'property', 'Loans for HMDA and DTCP approved layout plots across Hyderabad growth corridors.', 'Hyderabad Special', 0, 1, 2),
(3, 'Loan Against Property (LAP)', 'loan-against-property-lap', 'property', 'High-value mortgage funding against residential, commercial, or titled properties.', 'High Value', 0, 1, 3),
(4, 'Personal Loans', 'personal-loans', 'personal', 'Collateral-free, fast-turnaround personal financing for salaried professionals.', 'Fast 24h', 0, 1, 4),
(5, 'Business Loans', 'business-loans', 'business', 'Unsecured working capital and business expansion credit for enterprises and traders.', 'Working Capital', 0, 1, 5),
(6, 'MSME / Business Loans', 'msme-business-loans', 'business', 'Specialized financing for micro, small, and medium manufacturing and trading units.', 'MSME Udyam', 0, 1, 6),
(7, 'Vehicle Loans', 'vehicle-loans', 'personal', 'Competitive financing options for new and pre-owned four-wheelers.', 'Low EMI', 0, 1, 7),
(8, 'Credit Cards', 'credit-cards', 'personal', 'Pre-approved lifetime-free and reward-centric credit cards matched to your profile.', 'Instant Pre-Check', 0, 1, 8),
(9, 'Construction Loans', 'construction-loans', 'property', 'Stage-wise funding for self-construction of houses on titled or ancestral plots.', 'Stage Disbursal', 0, 1, 9),
(10, 'Home Renovation Loans', 'home-renovation-loans', 'property', 'Financing for interior woodwork, modular kitchens, structural upgrades, and extensions.', 'Interiors', 0, 1, 10),
(11, 'Balance Transfer', 'balance-transfer', 'property', 'Refinance existing high-interest loans with a lower rate and reduced monthly EMIs.', 'EMI Saver', 0, 1, 11),
(12, 'Top-Up Loans', 'top-up-loans', 'property', 'Fast additional liquidity on running home loans without extra collateral.', 'Quick Liquidity', 0, 1, 12),
(13, 'Agriculture Loans*', 'agriculture-loans', 'special', 'Credit facilities for agricultural needs and farm equipment (*subject to availability).', '*Conditional', 1, 1, 13),
(14, 'Education Loans*', 'education-loans', 'special', 'Higher education credit for domestic and international universities (*subject to availability).', '*Conditional', 1, 1, 14),
(15, 'Consumer Loans*', 'consumer-loans', 'special', 'Durable goods and appliance financing options (*subject to availability).', '*Conditional', 1, 1, 15);
