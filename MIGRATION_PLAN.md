# Migration Plan: Legacy to New Website

## Overview
This document outlines the plan to migrate the current Next.js application to a new structure based on the design in `new-website-for-migrate`.

## Directory Structure
- **`new-website-for-migrate/`**: Contains the target design and static assets (HTML/CSS/JS replication).
  - Served on: `http://localhost:8092` (served from `new-website-for-migrate/site` subdirectory)
- **`app/`**: Contains the current Next.js application logic and content.
  - Served on: `http://localhost:3002`
- **`public/`**: Contains shared static assets (images, icons, etc.).

## Workflow

### 1. Preparation
- [x] Start new website server (Port 8092 for `new-website-for-migrate/site`) -> http://localhost:8092
- [x] Start current website server (`npm run dev`) -> http://localhost:3002
- [ ] Analyze the "New Website" structure (HTML/CSS) from the correct source folder to identify reusable components and differences from the previous attempt.

### 2. Implementation Strategy (Step-by-Step)

#### Phase 1: Layout & Core Components
- [x] **Global Styles**: Update `globals.css` / `tailwind.config.js` to match the new design's typography, colors, and spacing.
- [x] **Header/Navigation**:
    - Recreate the navigation menu from the new design.
    - Implement the dropdown/mega-menu functionality.
    - Ensure mobile responsiveness matches the new design.
- [x] **Footer**: Recreate the footer component.
- [x] **Layout Wrapper**: Update `app/layout.tsx` to use the new Header and Footer.

#### Phase 2: Page Migration (One by One)
For each page (Homepage, About, Products, etc.):
1.  **Analyze**: Look at the corresponding page in the new design (static HTML).
2.  **Componentize**: Break down the page into Next.js components (e.g., `HeroSection`, `FeatureGrid`, `ContentBlock`).
3.  **Implement**: Create these components in `app/components/`.
4.  **Assemble**: Create/Update the page in `app/` (e.g., `app/page.tsx` for homepage) using these components.
5.  **Content**: Transfer text and images.
    - Images from `new-website-for-migrate` might need to be moved to `public/` if they aren't there already.
6.  **Verify**: Compare `http://localhost:3002/page-url` with `http://localhost:8092/page.html`.

#### Phase 3: Navigation & Routing
- [ ] Ensure all links in the new Header/Footer point to the correct Next.js routes.
- [ ] Set up redirects if URL structures change significantly.

#### Phase 4: Cleanup
- [ ] Remove unused components and styles from the old design.
- [ ] Optimize images and assets.

## Current Status
- **New Website**: Running on port 8092 (from `new-website-for-migrate`).
- **Current App**: Running on port 3002.
- **Next Action**: Re-analyze the homepage from the correct source and update the Next.js implementation.
