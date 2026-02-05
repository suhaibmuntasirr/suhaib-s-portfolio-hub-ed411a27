

# Fix for GitHub Pages Deployment

## The Problem

When deploying to GitHub Pages, your app shows a blank white page because:

1. **Asset paths are wrong** - Your app is trying to load files from the root (`/`) but GitHub Pages serves from `/repo-name/`
2. **Router issue** - GitHub Pages doesn't support the type of routing your app uses (BrowserRouter)

---

## What Needs to Change

### 1. Update Vite Configuration

Add a `base` path setting so assets load from the correct location.

**File:** `vite.config.ts`

```text
Add: base: "/your-repo-name/"
```

Replace `your-repo-name` with your actual GitHub repository name.

### 2. Switch Router Type

Change from `BrowserRouter` to `HashRouter` so navigation works on GitHub Pages.

**File:** `src/App.tsx`

```text
Change: BrowserRouter → HashRouter
```

---

## GitHub Pages Settings

In your GitHub repository:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions** (recommended) or **Deploy from a branch**
3. If using branch deployment, select `gh-pages` branch and `/ (root)` folder

---

## Optional: Add GitHub Actions Workflow

For automatic deployments, you'll need a workflow file at `.github/workflows/deploy.yml` that:
- Builds your project with `npm run build`
- Deploys the `dist` folder to GitHub Pages

---

## Summary of Changes

| File | Change |
|------|--------|
| `vite.config.ts` | Add `base: "/repo-name/"` |
| `src/App.tsx` | Replace `BrowserRouter` with `HashRouter` |

---

## Technical Details

**vite.config.ts changes:**
```ts
export default defineConfig(({ mode }) => ({
  base: "/your-repo-name/",  // ADD THIS LINE
  server: {
    // ... existing config
  },
  // ... rest of config
}));
```

**src/App.tsx changes:**
```tsx
// Change import
import { HashRouter, Routes, Route } from "react-router-dom";

// Change usage
<HashRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</HashRouter>
```

