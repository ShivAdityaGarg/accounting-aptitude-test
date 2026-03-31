// 200 Accounting & Taxation questions
// correctAnswerIndex: 0=A, 1=B, 2=C, 3=D
// These are NEVER exposed to the user — only used for internal scoring

export interface Question {
  questionText: string;
  options: string[];
  imageUrl?: string;
  correctAnswerIndex: number;
}

export const ACCOUNTING_QUESTION_BANK: Question[] = [
  // --- ACCOUNTING BASICS ---
  {
    questionText: "What is the basic accounting equation?",
    options: [
      "Assets = Liabilities + Owner's Equity",
      "Assets + Liabilities = Owner's Equity",
      "Revenue - Expenses = Net Income",
      "Debits = Credits",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Which of the following is NOT a financial statement?",
    options: [
      "Balance sheet",
      "Income statement",
      "Trial balance",
      "Cash flow statement",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Under which accounting method are revenues recorded when earned, not when cash is received?",
    options: ["Cash basis", "Accrual basis", "Hybrid basis", "Tax basis"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "What are prepaid expenses classified as on the balance sheet?",
    options: ["Liabilities", "Owner's equity", "Assets", "Revenue"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Which principle requires that financial information be free from material misstatements?",
    options: [
      "Consistency principle",
      "Materiality principle",
      "Reliability principle",
      "Full disclosure principle",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "What is the purpose of the going concern assumption?",
    options: [
      "To record assets at market value",
      "To assume the business will continue operating indefinitely",
      "To match revenues with expenses",
      "To disclose all financial information",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A company's operating cycle refers to:",
    options: [
      "The fiscal year",
      "The time to convert cash into inventory and back to cash",
      "The time between financial statement preparation",
      "The period to depreciate fixed assets",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which accounts are closed at the end of a fiscal year?",
    options: [
      "Asset and liability accounts",
      "Revenue, expense, and drawing accounts",
      "Only asset accounts",
      "Balance sheet accounts",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "The cost principle states that assets should be recorded at:",
    options: [
      "Their current market value",
      "Their replacement cost",
      "Their original cost",
      "Their net realizable value",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What is deferred revenue?",
    options: [
      "Revenue earned but not yet received",
      "Cash received before services are performed",
      "Revenue recorded when billed",
      "Expenses paid in advance",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which concept states that a business entity is separate from its owner?",
    options: [
      "Going concern",
      "Monetary unit",
      "Business entity",
      "Periodicity",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "A nominal account is:",
    options: [
      "A permanent balance sheet account",
      "A temporary income statement account",
      "An account with a credit balance",
      "The bank account",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "The revenue recognition principle states that revenues should be recognized:",
    options: [
      "When cash is collected",
      "When the performance obligation is satisfied",
      "When invoiced",
      "At year-end",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which financial statement covers a period of time (not a single date)?",
    options: [
      "Balance sheet",
      "Statement of financial position",
      "Income statement",
      "Both A and B",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Double-entry bookkeeping requires:",
    options: [
      "Two accounts always increase",
      "Every transaction affects exactly two accounts",
      "Every debit has an equal credit",
      "Both B and C",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Which document records all financial transactions in chronological order?",
    options: [
      "General ledger",
      "Trial balance",
      "General journal",
      "Chart of accounts",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "A chart of accounts is:",
    options: [
      "A list of all customers",
      "A numbered list of all accounts used by a business",
      "A financial statement",
      "The company's budget",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Petty cash is used for:",
    options: [
      "Large capital expenditures",
      "Small miscellaneous payments",
      "Payroll disbursements",
      "Customer refunds only",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which principle dictates using the same accounting methods from period to period?",
    options: ["Materiality", "Conservatism", "Consistency", "Full disclosure"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Materiality in accounting means:",
    options: [
      "All amounts must be reported exactly",
      "Immaterial items may be handled expediently without distorting financial statements",
      "Every transaction must be detailed",
      "Rounding is never allowed",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Conservatism (prudence) in accounting means:",
    options: [
      "Always reporting the highest possible income",
      "Recognizing gains early and losses late",
      "Recognizing losses when probable, but gains only when realized",
      "Using the lowest possible cost for assets",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "GAAP stands for:",
    options: [
      "General Accounting and Auditing Principles",
      "Generally Accepted Accounting Principles",
      "Government Authorized Accounting Procedures",
      "Global Accounting and Auditing Practices",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The monetary unit assumption states:",
    options: [
      "Accounting is done in stable units of money",
      "Only significant transactions are recorded",
      "The business is separate from its owner",
      "Financial statements are prepared periodically",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "ERP stands for:",
    options: [
      "Earnings Retention Policy",
      "Enterprise Resource Planning",
      "Expense Reporting Protocol",
      "Equity Revaluation Provision",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Separation of duties is a key internal control because:",
    options: [
      "It reduces the number of employees needed",
      "No single employee controls all aspects of a transaction, reducing fraud risk",
      "It simplifies accounting procedures",
      "It is required by GAAP",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Internal controls are primarily designed to:",
    options: [
      "Maximize profit",
      "Safeguard assets, ensure accurate records, and promote operational efficiency",
      "Prepare tax returns",
      "Generate financial ratios",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The full disclosure principle requires:",
    options: [
      "Reporting only major financial items",
      "Disclosing all information that could affect users' decisions",
      "Keeping financial data confidential",
      "Publishing quarterly reports only",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "An accrued expense is:",
    options: [
      "An expense paid in advance",
      "An expense incurred but not yet paid or recorded",
      "A prepaid expense",
      "A deferred charge",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which of the following best describes 'liquidity'?",
    options: [
      "Long-term profitability",
      "The ability to pay short-term obligations",
      "Total asset value",
      "Return on investment",
    ],
    correctAnswerIndex: 1,
  },
  // --- DEBITS & CREDITS ---
  {
    questionText: "Which of the following increases with a DEBIT entry?",
    options: ["Revenue", "Liabilities", "Assets", "Owner's equity"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "A credit entry will INCREASE which account?",
    options: ["Cash", "Accounts receivable", "Accounts payable", "Inventory"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "What is the normal balance of an expense account?",
    options: ["Credit", "Debit", "Either debit or credit", "Zero"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "When a company pays rent, which entry is correct?",
    options: [
      "Debit Rent Expense, Credit Cash",
      "Debit Cash, Credit Rent Expense",
      "Debit Rent Payable, Credit Revenue",
      "Debit Expense, Credit Liability",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "What does it mean when a company's books are 'in balance'?",
    options: [
      "Total revenues equal total expenses",
      "Total debits equal total credits",
      "Total assets equal total liabilities",
      "Cash inflows equal cash outflows",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The abbreviation 'Dr.' stands for:",
    options: ["Draft", "Draw", "Debit", "Decrease"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Which of the following is a contra asset account?",
    options: [
      "Accounts payable",
      "Accumulated depreciation",
      "Common stock",
      "Retained earnings",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "When a sale is made on credit, the entry is:",
    options: [
      "Debit Cash, Credit Revenue",
      "Debit Accounts Receivable, Credit Revenue",
      "Debit Revenue, Credit Accounts Receivable",
      "Debit Cash, Credit Accounts Receivable",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A debit memo on a bank statement typically indicates:",
    options: [
      "An increase in your bank account",
      "A decrease in your bank account",
      "A bank error",
      "An interest credit",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which account has a normal CREDIT balance?",
    options: [
      "Prepaid insurance",
      "Equipment",
      "Common stock",
      "Cost of goods sold",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "What is the double-entry effect of receiving cash for services performed?",
    options: [
      "Debit Cash, Credit Service Revenue",
      "Debit Service Revenue, Credit Cash",
      "Debit Accounts Receivable, Credit Cash",
      "Debit Revenue, Credit Assets",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText:
      "An owner withdrawing cash for personal use should be recorded as:",
    options: [
      "Debit Owner's Capital, Credit Cash",
      "Debit Cash, Credit Owner's Drawings",
      "Debit Owner's Drawings, Credit Cash",
      "Debit Expenses, Credit Cash",
    ],
    correctAnswerIndex: 2,
  },
  // --- BALANCE SHEET ---
  {
    questionText:
      "Which section of the balance sheet shows what a company owns?",
    options: ["Liabilities", "Stockholders' equity", "Assets", "Revenue"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Current assets are listed on the balance sheet in order of:",
    options: [
      "Alphabetical order",
      "Decreasing liquidity",
      "Increasing value",
      "Liquidity (most liquid first)",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Which of the following would be classified as a current liability?",
    options: [
      "Mortgage payable (10-year)",
      "Accounts payable",
      "Common stock",
      "Buildings",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Working capital is calculated as:",
    options: [
      "Total assets minus total liabilities",
      "Current assets minus current liabilities",
      "Current liabilities minus long-term debt",
      "Net income minus dividends",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Goodwill appears on the balance sheet under:",
    options: [
      "Current assets",
      "Intangible assets",
      "Current liabilities",
      "Stockholders' equity",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Retained earnings represent:",
    options: [
      "Cash held by the company",
      "Cumulative profits not distributed as dividends",
      "Paid-in capital from stock issuance",
      "The market value of the company",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The statement of financial position is another name for:",
    options: [
      "Income statement",
      "Cash flow statement",
      "Balance sheet",
      "Trial balance",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Which of the following is a noncurrent asset?",
    options: [
      "Accounts receivable",
      "Inventory",
      "Patent",
      "Prepaid rent (6 months)",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Book value of a company is determined from:",
    options: [
      "The stock market price",
      "The balance sheet (assets minus liabilities)",
      "The income statement",
      "The cash flow statement",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Property, plant and equipment appears on the balance sheet:",
    options: [
      "At market value",
      "At net book value (cost minus accumulated depreciation)",
      "At replacement cost",
      "At salvage value",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The debt ratio is calculated as:",
    options: [
      "Total debt ÷ Total equity",
      "Total liabilities ÷ Total assets",
      "Long-term debt ÷ Equity",
      "Interest expense ÷ Revenue",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Intangible assets with indefinite useful lives are:",
    options: [
      "Amortized over 40 years",
      "Not amortized but tested annually for impairment",
      "Expensed immediately",
      "Depreciated straight-line",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which of the following would reduce stockholders' equity?",
    options: [
      "Issuing bonds",
      "Declaring a cash dividend",
      "Receiving payment on accounts receivable",
      "Purchasing inventory on credit",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A contingent liability should be recorded when:",
    options: [
      "It is possible but unlikely",
      "It is probable and the amount can be reasonably estimated",
      "The lawsuit is filed",
      "Cash is paid",
    ],
    correctAnswerIndex: 1,
  },
  // --- INCOME STATEMENT ---
  {
    questionText: "Gross profit is calculated as:",
    options: [
      "Net sales minus operating expenses",
      "Net sales minus cost of goods sold",
      "Net income plus taxes",
      "Revenue minus all expenses",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which of the following would NOT appear on the income statement?",
    options: [
      "Depreciation expense",
      "Retained earnings",
      "Sales revenue",
      "Interest expense",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Net income is calculated as:",
    options: [
      "Revenue minus COGS",
      "Gross profit minus operating expenses",
      "Total revenues minus total expenses",
      "Operating income minus interest",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Operating expenses include:",
    options: [
      "Cost of goods sold",
      "Selling, general & administrative expenses",
      "Interest expense",
      "Income tax expense",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "EBITDA stands for:",
    options: [
      "Earnings Before Income Tax Deduction Adjustment",
      "Earnings Before Interest, Taxes, Depreciation, and Amortization",
      "Estimated Budget Including Tax and Depreciation Amounts",
      "Earnings Based on Income Tax Deficit Analysis",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Sales returns and allowances are:",
    options: [
      "Added to gross sales to get net sales",
      "Deducted from gross sales to get net sales",
      "Recorded as an expense",
      "A credit balance account",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The matching principle requires that:",
    options: [
      "All cash received is recorded as revenue",
      "Expenses are recorded when paid",
      "Expenses are matched to the revenues they helped generate",
      "Revenue equals expenses each period",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "A company had gross sales of $500,000 and sales returns of $20,000. Net sales equals:",
    options: ["$520,000", "$480,000", "$500,000", "$20,000"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Carriage outwards (freight out) is classified as:",
    options: [
      "Cost of goods sold",
      "A selling expense",
      "A deduction from revenue",
      "A manufacturing overhead",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Period costs are:",
    options: [
      "Costs included in inventory",
      "Costs expensed in the period incurred",
      "Costs capitalized as assets",
      "Manufacturing overhead costs",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which of the following is an example of a non-operating income item?",
    options: [
      "Sales revenue",
      "Rent revenue from a retail store",
      "Interest income on investments",
      "COGS",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "What is the difference between gross profit and operating income?",
    options: [
      "Operating income includes interest expense",
      "Gross profit does not deduct operating expenses; operating income does",
      "They are the same thing",
      "Gross profit is after tax; operating income is before tax",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Comprehensive income includes:",
    options: [
      "Only revenues and expenses",
      "Net income plus other comprehensive income items",
      "Only operating revenues",
      "All cash transactions",
    ],
    correctAnswerIndex: 1,
  },
  // --- CASH FLOW ---
  {
    questionText:
      "The cash flow statement has three sections. Which is NOT one of them?",
    options: [
      "Operating activities",
      "Investing activities",
      "Financing activities",
      "Budgeting activities",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Depreciation is added back in the operating section of the indirect cash flow statement because:",
    options: [
      "It is a cash expense",
      "It is a non-cash expense that reduced net income",
      "It represents a tax deduction",
      "It increases working capital",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Purchase of equipment appears under which section of the cash flow statement?",
    options: [
      "Operating activities",
      "Investing activities",
      "Financing activities",
      "Supplemental disclosures",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Issuing common stock for cash is classified as:",
    options: [
      "Operating activity",
      "Investing activity",
      "Financing activity",
      "Non-cash activity",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Under the indirect method, an increase in accounts receivable is:",
    options: [
      "Added to net income",
      "Subtracted from net income",
      "Not adjusted",
      "Classified as investing activity",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Free cash flow is generally calculated as:",
    options: [
      "Net income plus depreciation",
      "Operating cash flow minus capital expenditures",
      "Total revenues minus total expenses",
      "Cash from financing minus cash from investing",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "An increase in accounts payable in the indirect method is:",
    options: [
      "Subtracted from net income",
      "Added to net income",
      "Ignored",
      "Classified as a financing activity",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which method of presenting operating cash flows is used by most companies in practice?",
    options: [
      "Direct method",
      "Indirect method",
      "Hybrid method",
      "Net method",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Paying cash dividends to shareholders appears in:",
    options: [
      "Operating activities",
      "Investing activities",
      "Financing activities",
      "Supplemental schedule",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "A company can have a net income but negative cash flow from operations if:",
    options: [
      "Revenue exceeds expenses",
      "Receivables are increasing faster than revenue",
      "Payables are increasing",
      "Depreciation is high",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Capital expenditures (CapEx) are:",
    options: [
      "Operating expenses",
      "Investments in long-term assets shown in investing activities",
      "Financing costs",
      "Period costs",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Changes in working capital accounts affect which section of the cash flow statement?",
    options: [
      "Investing activities",
      "Financing activities",
      "Operating activities",
      "Supplemental disclosures",
    ],
    correctAnswerIndex: 2,
  },
  // --- INVENTORY & COGS ---
  {
    questionText:
      "Which inventory costing method assumes the oldest inventory is sold first?",
    options: ["LIFO", "FIFO", "Weighted average", "Specific identification"],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "During periods of rising prices, which method gives the highest net income?",
    options: ["LIFO", "FIFO", "Weighted average", "Specific identification"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The cost of goods sold equation is:",
    options: [
      "Beginning inventory + Purchases − Ending inventory",
      "Ending inventory + Purchases − Beginning inventory",
      "Sales − Gross profit",
      "Net income + Operating expenses",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "If ending inventory is understated, net income will be:",
    options: [
      "Overstated",
      "Understated",
      "Unaffected",
      "Corrected automatically",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "The lower of cost or net realizable value (LCNRV) principle requires:",
    options: [
      "Inventory to always be recorded at cost",
      "Inventory to be written down when NRV falls below cost",
      "Inventory to be written up to market value",
      "Inventory to be reported at selling price",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Perpetual inventory systems:",
    options: [
      "Update inventory records only at year-end",
      "Update inventory records continuously with each purchase and sale",
      "Use physical counts only",
      "Are required for all businesses",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which inventory method is NOT permitted under IFRS?",
    options: ["FIFO", "Weighted average", "Specific identification", "LIFO"],
    correctAnswerIndex: 3,
  },
  {
    questionText: "Goods in transit shipped FOB shipping point belong to:",
    options: [
      "The seller",
      "The buyer",
      "Neither party",
      "Both parties equally",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "An inventory write-down is recorded as:",
    options: [
      "A debit to inventory",
      "A debit to cost of goods sold or loss account",
      "A credit to cost of goods sold",
      "A debit to revenue",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Consignment inventory should be included in the inventory of:",
    options: [
      "The consignee",
      "The consignor",
      "Both parties",
      "Neither party",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Under FIFO during inflation, ending inventory on the balance sheet reflects:",
    options: [
      "Older, lower costs",
      "Newer, higher costs",
      "Average costs",
      "Current market prices",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The weighted average cost method computes:",
    options: [
      "Cost of oldest units first",
      "A new average cost after each purchase",
      "Total cost ÷ Total units available",
      "Market value of inventory",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Physical inventory counts are conducted to:",
    options: [
      "Update the chart of accounts",
      "Verify book inventory quantities and identify shrinkage",
      "Calculate COGS",
      "Prepare the cash flow statement",
    ],
    correctAnswerIndex: 1,
  },
  // --- DEPRECIATION ---
  {
    questionText:
      "Which depreciation method spreads cost evenly over an asset's useful life?",
    options: [
      "Declining balance",
      "Sum-of-years'-digits",
      "Straight-line",
      "Units of production",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Under the double-declining balance method, the book value is multiplied each year by:",
    options: [
      "1/useful life",
      "2 × (1/useful life)",
      "(Cost − salvage)/life",
      "Remaining life/sum of years",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Accumulated depreciation is reported on the balance sheet as:",
    options: [
      "A long-term liability",
      "A contra asset",
      "An operating expense",
      "A revenue deduction",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Salvage value is:",
    options: [
      "The original cost of an asset",
      "The expected value of an asset at the end of its useful life",
      "The annual depreciation expense",
      "The book value at any point",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "A machine costs $50,000 with a $5,000 salvage value and 5-year life. Annual straight-line depreciation is:",
    options: ["$10,000", "$9,000", "$45,000", "$5,000"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Depreciation is NOT recorded for:",
    options: ["Buildings", "Equipment", "Land", "Vehicles"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "The units-of-production depreciation method is based on:",
    options: [
      "Time elapsed",
      "Asset's book value",
      "Actual usage or output",
      "A fixed percentage",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "When a fully depreciated asset continues to be used:",
    options: [
      "Additional depreciation is recorded",
      "No additional depreciation is recorded",
      "The asset must be sold",
      "The asset is written up to market value",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Depreciation expense on the income statement reduces:",
    options: [
      "Cash",
      "Owner's equity and total assets",
      "Only assets",
      "Only equity",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Amortization is:",
    options: [
      "Depreciation of natural resources",
      "Depreciation of intangible assets",
      "A cash expense",
      "A balance sheet liability",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The straight-line depreciation method results in:",
    options: [
      "Higher depreciation in early years",
      "Equal depreciation each year",
      "Higher depreciation in later years",
      "Depreciation based on usage",
    ],
    correctAnswerIndex: 1,
  },
  // --- ACCOUNTS RECEIVABLE ---
  {
    questionText:
      "The allowance method for bad debts is preferred over the direct write-off method because:",
    options: [
      "It is simpler",
      "It better matches bad debt expense with the related revenue",
      "It avoids estimating bad debts",
      "It requires no journal entries",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "When a specific customer's account is written off under the allowance method, which entry is made?",
    options: [
      "Debit Bad Debt Expense, Credit AR",
      "Debit Allowance for Doubtful Accounts, Credit AR",
      "Debit AR, Credit Allowance",
      "Debit AR, Credit Bad Debt Expense",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The accounts receivable turnover ratio measures:",
    options: [
      "How quickly inventory is sold",
      "How efficiently a company collects on credit sales",
      "The ratio of assets to liabilities",
      "Profitability on credit sales",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Days sales outstanding (DSO) is computed as:",
    options: [
      "365 ÷ Accounts receivable turnover",
      "365 × Accounts receivable turnover",
      "Receivables ÷ Daily sales",
      "Both A and C",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "The aging of receivables method estimates bad debts based on:",
    options: [
      "A fixed percentage of sales",
      "The age of each outstanding account",
      "Prior year bad debt rate",
      "Cash collection history",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "When a previously written-off account is subsequently collected, the first step is:",
    options: [
      "Debit Cash, Credit Bad Debt Expense",
      "Reverse the write-off entry (debit AR, credit Allowance), then record cash receipt",
      "Debit Cash, Credit Revenue",
      "Debit Allowance, Credit Cash",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "A note receivable that will be collected within 12 months is classified as:",
    options: [
      "A long-term asset",
      "A current asset",
      "A liability",
      "An equity item",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Factoring receivables means:",
    options: [
      "Collecting receivables in installments",
      "Selling receivables to a third party for cash",
      "Writing off uncollectible accounts",
      "Pledging receivables as loan collateral",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A control account in the general ledger is supported by:",
    options: [
      "The general journal",
      "A subsidiary ledger",
      "The trial balance",
      "The bank statement",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "The percentage-of-credit-sales method for bad debts estimates:",
    options: [
      "Bad debts based on age of receivables",
      "Bad debt expense as a percentage of credit sales",
      "Cash collections expected",
      "Current year revenue",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which of the following does NOT affect net accounts receivable?",
    options: [
      "Recording a credit sale",
      "Writing off a bad debt under the allowance method",
      "Collecting payment from a customer",
      "Recording estimated bad debt expense",
    ],
    correctAnswerIndex: 1,
  },
  // --- PAYROLL & TAX ---
  {
    questionText: "Payroll withholding taxes are classified as:",
    options: [
      "Expenses",
      "Liabilities until remitted to the government",
      "Assets",
      "Revenue",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "FICA taxes (Social Security and Medicare) are paid by:",
    options: [
      "Only the employer",
      "Only the employee",
      "Both employer and employee",
      "The federal government",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Gross pay minus payroll deductions equals:",
    options: [
      "Net pay",
      "Taxable income",
      "Base salary",
      "Take-home pay before taxes",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Employer payroll taxes include:",
    options: [
      "Federal income tax withheld",
      "The employer's share of FICA and FUTA",
      "Only FICA",
      "Only FUTA",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which of the following is NOT a payroll tax?",
    options: [
      "Social Security tax",
      "Medicare tax",
      "Federal unemployment tax",
      "Property tax",
    ],
    correctAnswerIndex: 3,
  },
  {
    questionText:
      "Under the cash basis of accounting for taxes, income is recognized:",
    options: ["When earned", "When received", "When billed", "At year-end"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Deferred tax liability arises when:",
    options: [
      "Tax expense is less than taxes owed",
      "Book income exceeds taxable income in the current period",
      "Taxable income exceeds book income",
      "A company has net operating losses",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Which form do U.S. employees complete for federal income tax withholding?",
    options: ["W-2", "1099", "W-4", "941"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "A W-2 form shows:",
    options: [
      "Quarterly estimated tax payments",
      "Annual wages paid and taxes withheld",
      "Business income and expenses",
      "Contractor payments of $600 or more",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Sales tax collected from customers is recorded as:",
    options: ["Revenue", "An expense", "A liability", "An asset"],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Form 941 is filed by employers to report:",
    options: [
      "Annual wages paid",
      "Quarterly federal payroll taxes",
      "Annual FUTA taxes",
      "Employee benefit plan information",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A tax deduction reduces:",
    options: [
      "Taxable income",
      "Tax liability by the full deduction amount",
      "Gross income proportionally",
      "Cash paid for taxes directly",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "A tax credit:",
    options: [
      "Reduces taxable income",
      "Reduces the tax liability dollar-for-dollar",
      "Increases the tax refund by the rate applied",
      "Is the same as a tax deduction",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Depreciation for tax purposes (MACRS in the US) often differs from book depreciation because:",
    options: [
      "Tax law and GAAP use different objectives",
      "Tax law requires straight-line only",
      "Book depreciation is always faster",
      "They are always identical",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "A 1099-NEC form is used to report:",
    options: [
      "Employee wages",
      "Non-employee compensation ($600+) paid to independent contractors",
      "Corporate dividends",
      "Retirement distributions",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The alternative minimum tax (AMT) is designed to:",
    options: [
      "Reduce taxes for high earners",
      "Ensure high-income taxpayers pay a minimum level of tax",
      "Provide credits for manufacturers",
      "Replace the corporate income tax",
    ],
    correctAnswerIndex: 1,
  },
  // --- FINANCIAL RATIOS ---
  {
    questionText: "The current ratio is calculated as:",
    options: [
      "Current liabilities ÷ Current assets",
      "Current assets ÷ Current liabilities",
      "Net income ÷ Total assets",
      "Total assets ÷ Total liabilities",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "The quick (acid-test) ratio differs from the current ratio by:",
    options: [
      "Including long-term assets",
      "Excluding inventory and prepaid expenses",
      "Including all liabilities",
      "Dividing by equity instead of liabilities",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Return on equity (ROE) measures:",
    options: [
      "How efficiently assets generate revenue",
      "Net income earned per dollar of stockholders' equity",
      "Profit margin on sales",
      "Solvency of the business",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The debt-to-equity ratio measures:",
    options: [
      "Profitability",
      "Liquidity",
      "Financial leverage",
      "Asset efficiency",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Inventory turnover ratio indicates:",
    options: [
      "How often inventory is purchased",
      "How quickly inventory is sold and replaced",
      "The ratio of inventory to assets",
      "Annual inventory cost",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Gross profit margin is calculated as:",
    options: [
      "Net income ÷ Revenue",
      "Gross profit ÷ Net sales",
      "Operating income ÷ Revenue",
      "EBITDA ÷ Sales",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The price-to-earnings (P/E) ratio is:",
    options: [
      "Share price ÷ Earnings per share",
      "Earnings per share ÷ Share price",
      "Market cap ÷ Book value",
      "Net income ÷ Shares outstanding",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "A company with a current ratio of 0.8 means:",
    options: [
      "It is highly profitable",
      "Current liabilities exceed current assets",
      "It has more assets than liabilities",
      "It has strong liquidity",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Asset turnover ratio measures:",
    options: [
      "Profitability per asset dollar",
      "How efficiently assets generate revenue",
      "The ratio of assets to equity",
      "Number of times assets are replaced",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Times interest earned (interest coverage ratio) is:",
    options: [
      "Net income ÷ Interest expense",
      "EBIT ÷ Interest expense",
      "Operating cash flow ÷ Debt",
      "Revenue ÷ Interest expense",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Return on assets (ROA) measures:",
    options: [
      "Profit earned relative to equity",
      "How efficiently assets generate profit",
      "The ratio of current to total assets",
      "Asset growth rate",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A high inventory turnover ratio generally indicates:",
    options: [
      "Excess inventory",
      "Efficient inventory management",
      "Slow sales",
      "High carrying costs",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Earnings per share (EPS) is calculated as:",
    options: [
      "Net income ÷ Total shares authorized",
      "(Net income − Preferred dividends) ÷ Weighted average common shares outstanding",
      "Net income ÷ Book value per share",
      "Revenue ÷ Number of shares",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "A company has net income of $100,000 and revenue of $500,000. The net profit margin is:",
    options: ["5%", "20%", "50%", "25%"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The dividend payout ratio is:",
    options: [
      "Dividends per share ÷ Earnings per share",
      "Net income ÷ Total dividends paid",
      "Dividends paid ÷ Market price",
      "Retained earnings ÷ Net income",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "The cash ratio is:",
    options: [
      "(Cash + Short-term investments) ÷ Current liabilities",
      "Cash ÷ Total assets",
      "Cash ÷ Total liabilities",
      "Cash from operations ÷ Current liabilities",
    ],
    correctAnswerIndex: 0,
  },
  // --- ADJUSTING ENTRIES ---
  {
    questionText:
      "Which type of adjusting entry records revenue earned but not yet billed?",
    options: [
      "Deferred revenue adjustment",
      "Accrued revenue adjustment",
      "Prepaid expense adjustment",
      "Depreciation adjustment",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The entry to record accrued wages at period-end is:",
    options: [
      "Debit Cash, Credit Wages Payable",
      "Debit Wages Expense, Credit Wages Payable",
      "Debit Wages Payable, Credit Cash",
      "Debit Wages Expense, Credit Cash",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Adjusting entries are made:",
    options: [
      "At the time of original transactions",
      "At the end of the accounting period",
      "When cash is received",
      "Only for errors",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which of the following does NOT require an adjusting entry?",
    options: [
      "Unpaid wages at period end",
      "Prepaid insurance expiring",
      "A cash sale recorded during the period",
      "Unearned revenue being earned",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "The adjusting entry for prepaid insurance that has expired is:",
    options: [
      "Debit Insurance Expense, Credit Prepaid Insurance",
      "Debit Prepaid Insurance, Credit Insurance Expense",
      "Debit Cash, Credit Insurance Expense",
      "Debit Insurance Expense, Credit Cash",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Adjusting entries affect:",
    options: [
      "Only balance sheet accounts",
      "Only income statement accounts",
      "Both balance sheet and income statement accounts",
      "Only cash accounts",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Unearned revenue is initially recorded as:",
    options: ["Revenue", "An asset", "A liability", "An expense"],
    correctAnswerIndex: 2,
  },
  {
    questionText:
      "Accrued interest on a note payable requires an adjusting entry that:",
    options: [
      "Debits Cash and credits Interest Expense",
      "Debits Interest Expense and credits Interest Payable",
      "Debits Interest Payable and credits Cash",
      "Debits Note Payable and credits Interest Expense",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The entry to record depreciation is:",
    options: [
      "Debit Equipment, Credit Depreciation Expense",
      "Debit Accumulated Depreciation, Credit Equipment",
      "Debit Depreciation Expense, Credit Accumulated Depreciation",
      "Debit Cash, Credit Accumulated Depreciation",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Reversing entries are:",
    options: [
      "Required under GAAP",
      "Optional entries made at the start of a new period to simplify recording",
      "The same as adjusting entries",
      "Required for all accruals",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "The matching principle is closely related to adjusting entries because:",
    options: [
      "Adjusting entries always increase cash",
      "Adjusting entries ensure expenses are matched to the revenues they generate in the correct period",
      "Adjusting entries close temporary accounts",
      "They are unrelated",
    ],
    correctAnswerIndex: 1,
  },
  // --- BANK RECONCILIATION ---
  {
    questionText: "Outstanding checks are checks that:",
    options: [
      "Have cleared the bank",
      "Have been issued but not yet presented to the bank",
      "Were returned by the bank",
      "Were voided by the company",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Deposits in transit are:",
    options: [
      "Deposits recorded by the bank but not the company",
      "Deposits recorded by the company but not yet by the bank",
      "Electronic transfers",
      "Cleared deposits",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "A bank service charge appearing on the bank statement but not recorded by the company requires:",
    options: [
      "An addition to the bank balance",
      "A deduction from the book balance",
      "An addition to the book balance",
      "No adjustment",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The purpose of a bank reconciliation is to:",
    options: [
      "Detect errors and reconcile the bank and book cash balances",
      "Calculate interest income",
      "Verify payroll calculations",
      "Prepare the cash flow statement",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "An NSF (non-sufficient funds) check on the bank statement:",
    options: [
      "Increases the book balance",
      "Decreases the book balance",
      "Has no effect on reconciliation",
      "Decreases the bank balance",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Interest earned on a bank account would appear on the bank reconciliation as:",
    options: [
      "An addition to the bank balance",
      "An addition to the book balance",
      "A deduction from the book balance",
      "A deduction from the bank balance",
    ],
    correctAnswerIndex: 1,
  },
  // --- BONDS & EQUITY ---
  {
    questionText: "A bond issued at a discount means:",
    options: [
      "The coupon rate exceeds the market rate",
      "The market rate exceeds the coupon rate",
      "The bond is issued above par value",
      "The bond has no interest rate",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "The carrying value of a bond is:",
    options: [
      "Its face value",
      "Its face value plus unamortized premium, or minus unamortized discount",
      "Its market value",
      "The total interest to be paid",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Common stockholders have which right that preferred stockholders typically do NOT?",
    options: [
      "Right to dividends",
      "Voting rights",
      "Priority in liquidation",
      "Fixed dividend rates",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Treasury stock is:",
    options: [
      "Stock issued to the government",
      "Shares repurchased by the issuing company",
      "New shares authorized but not issued",
      "Shares given to employees",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Which of the following increases paid-in capital?",
    options: [
      "Paying a dividend",
      "Reporting net income",
      "Issuing new shares of stock",
      "Repurchasing treasury stock",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "A stock dividend:",
    options: [
      "Distributes cash to shareholders",
      "Distributes additional shares to shareholders",
      "Reduces total stockholders' equity",
      "Is treated as an expense",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Bond interest is typically paid:",
    options: ["Annually", "Semi-annually", "Monthly", "Quarterly only"],
    correctAnswerIndex: 1,
  },
  {
    questionText: "When bonds are issued at a premium, the carrying value:",
    options: [
      "Increases over time",
      "Decreases over time toward par",
      "Stays constant",
      "Equals market value",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Par value of a stock is:",
    options: [
      "Its market trading price",
      "A nominal stated value set in the corporate charter",
      "The book value per share",
      "The liquidation value",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Diluted EPS accounts for:",
    options: [
      "Preferred dividends only",
      "All potential common shares from options, warrants, and convertibles",
      "Only actual shares outstanding",
      "Retained earnings per share",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "The effective interest method of amortizing bond discounts/premiums:",
    options: [
      "Amortizes a constant dollar amount each period",
      "Results in varying interest expense based on carrying value",
      "Is the same as straight-line",
      "Applies only to zero-coupon bonds",
    ],
    correctAnswerIndex: 1,
  },
  // --- COST ACCOUNTING ---
  {
    questionText:
      "Which costing system accumulates costs by individual job or batch?",
    options: [
      "Process costing",
      "Activity-based costing",
      "Job-order costing",
      "Standard costing",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "A fixed cost is one that:",
    options: [
      "Changes in total with output volume",
      "Remains constant in total regardless of output",
      "Changes per unit with volume",
      "Is controllable by management",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Variable cost per unit:",
    options: [
      "Increases as output increases",
      "Decreases as output increases",
      "Remains constant regardless of output",
      "Is always higher than fixed cost",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Contribution margin is calculated as:",
    options: [
      "Sales minus fixed costs",
      "Sales minus variable costs",
      "Gross profit minus operating expenses",
      "Net income plus taxes",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Manufacturing overhead includes:",
    options: [
      "Direct materials and direct labor",
      "Indirect manufacturing costs (factory rent, utilities, depreciation)",
      "Selling and administrative expenses",
      "COGS only",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Direct labor costs include:",
    options: [
      "All factory wages",
      "Wages of workers directly involved in production",
      "Supervisor salaries",
      "HR department wages",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "Activity-based costing (ABC) differs from traditional costing because:",
    options: [
      "It only uses direct costs",
      "It allocates overhead based on multiple cost drivers",
      "It doesn't allocate overhead",
      "It uses a single plantwide overhead rate",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Standard costing allows management to:",
    options: [
      "Eliminate all variances",
      "Analyze the difference between standard and actual costs",
      "Avoid preparing a budget",
      "Record costs only at year-end",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A favorable cost variance occurs when:",
    options: [
      "Actual costs exceed standard costs",
      "Standard costs exceed actual costs",
      "Revenues exceed costs",
      "Costs match the budget exactly",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Period costs in manufacturing include:",
    options: [
      "Raw materials",
      "Factory overhead",
      "Selling and administrative expenses",
      "Work-in-process",
    ],
    correctAnswerIndex: 2,
  },
  {
    questionText: "Process costing is most appropriate for:",
    options: [
      "Custom-order manufacturing",
      "Mass production of identical units",
      "Service businesses",
      "Job shops",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "An under-applied overhead balance at year-end is typically:",
    options: [
      "Added to ending inventory",
      "Closed to Cost of Goods Sold",
      "Reported as revenue",
      "Transferred to retained earnings",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Equivalent units in process costing are used to:",
    options: [
      "Measure actual units completed",
      "Express partially completed units as equivalent whole units",
      "Calculate the contribution margin",
      "Determine sales price",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A sunk cost is:",
    options: [
      "A future cost that can be avoided",
      "A cost already incurred and irrelevant to future decisions",
      "A variable cost per unit",
      "An overhead cost",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "A relevant cost is:",
    options: [
      "A cost that appeared in last year's budget",
      "A future cost that differs between decision alternatives",
      "A fixed cost",
      "A sunk cost",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Opportunity cost is:",
    options: [
      "The cost of an asset",
      "The benefit given up by choosing one alternative over another",
      "A recorded accounting cost",
      "A fixed overhead cost",
    ],
    correctAnswerIndex: 1,
  },
  // --- BREAK-EVEN ANALYSIS ---
  {
    questionText: "The break-even point is where:",
    options: [
      "Profit is maximized",
      "Total revenue equals total costs",
      "Variable costs equal fixed costs",
      "Sales equal the budget",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Break-even point in units is calculated as:",
    options: [
      "Fixed costs ÷ Contribution margin per unit",
      "Variable costs ÷ Sales price",
      "Fixed costs ÷ Sales price",
      "Total costs ÷ Contribution margin ratio",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Contribution margin ratio (CM ratio) is:",
    options: [
      "Variable cost ÷ Sales",
      "Contribution margin ÷ Sales revenue",
      "Fixed costs ÷ Total revenue",
      "Net income ÷ Sales",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Margin of safety is:",
    options: [
      "The difference between actual sales and break-even sales",
      "The total fixed costs",
      "The contribution margin ratio",
      "Net income divided by sales",
    ],
    correctAnswerIndex: 0,
  },
  {
    questionText: "If fixed costs increase, the break-even point:",
    options: [
      "Decreases",
      "Increases",
      "Stays the same",
      "Equals contribution margin",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Operating leverage refers to:",
    options: [
      "The ratio of debt to equity",
      "The extent to which fixed costs are used in operations",
      "The use of financial instruments",
      "The growth rate of sales",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText:
      "If sales price per unit is $20 and variable cost per unit is $12, the contribution margin ratio is:",
    options: ["40%", "60%", "80%", "167%"],
    correctAnswerIndex: 0,
  },
  {
    questionText: "Target profit analysis finds the sales volume needed to:",
    options: [
      "Break even",
      "Achieve a specific desired profit level",
      "Minimize variable costs",
      "Cover only fixed costs",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "Break-even analysis assumes:",
    options: [
      "Costs are non-linear",
      "Fixed costs change with volume",
      "Selling price, variable costs, and fixed costs remain constant within the relevant range",
      "All costs are variable",
    ],
    correctAnswerIndex: 2,
  },
];

/** Randomly pick `count` questions from the bank (Fisher-Yates shuffle) */
export function pickRandomQuestions(count: number): Question[] {
  const pool = [...ACCOUNTING_QUESTION_BANK];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}
