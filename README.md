# Shagun Wedding Finance — Modular Production PWA

A high-fidelity, production-hardened Progressive Web Application built specifically for Indian families to navigate the financial and regulatory intricacies of high-value wedding celebrations.

## Architectural Foundations

The `shagun-website` has undergone rigorous enterprise-grade hardening to transition from an initial single-file paradigm into a modular, highly scalable repository layout:

```
src/
├── components/
│   ├── blog/          # Resource cards and publication views
│   ├── common/        # Shared interface elements (ScrollReveal, ErrorBoundary)
│   ├── home/          # Segmented domain components for the core landing experience
│   ├── layout/        # Persistent navigational components (Navbar, Footer, CTABanner)
│   └── widgets/       # Isolated dynamic tools (GSTScannerWidget)
├── config/
│   └── constants.js   # Centralized platform variables and target API parameters
├── data/
│   └── blogPosts.js   # Static publishing matrices for resource guides
├── pages/
│   └── ...            # Consolidated view routers (Home, Pricing, About, etc.)
├── services/
│   └── api.js         # Abstracted integration layer (Web3Forms client endpoints)
├── styles/
│   └── index.css      # Consolidated stylesheet variables and Tailwind directives
└── utils/
    └── formatters.js  # Dedicated currency formatting subroutines
```

## System Operational Highlights

- **Zero Inconsistency Paradigm:** All page routers ingest strict modular dependencies, eliminating redundant code paths and preventing drift across interactive views.
- **Flawless ESLint Compliance:** Batched tree-shaking has fully purged unreferenced declarations, legacy file stubs, and redundant library exports.
- **Decoupled API Layer:** Network interactions interface strictly via isolated abstractions in `src/services/api.js`.
- **Enterprise Error Boundaries:** Dynamic component zones are protected by declarative fallbacks ensuring zero silent system termination events.

## Build and Deployment Workflow

1. **Install Local Dependencies:**
   ```bash
   npm install
   ```

2. **Run Strict Code Audits:**
   ```bash
   npm run lint
   ```

3. **Launch Local Dev Protocol:**
   ```bash
   npm run dev
   ```

4. **Compile Production Bundle:**
   ```bash
   npm run build
   ```
