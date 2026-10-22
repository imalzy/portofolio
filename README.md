# Imal Zaya Harahap – Personal Profile & Portfolio Website

A high-performance, responsive portfolio website built with **React**, **TypeScript**, and **Tailwind CSS**. All content is statically rendered from human-editable Markdown and YAML frontmatter files in `/content`.

---

## 🚀 Features

- **Markdown-Driven Content**: Update your bio, experience, projects, skills, and certifications by editing files in `/content/*.md` without writing code.
- **Light & Dark Mode**: Automatically adapts to system preference with an instant manual toggle switch and zero-flicker client hydration.
- **Responsive & Accessible (WCAG AA)**: Fully mobile-first layout tested across 320px screens, tablets, and high-DPI desktop viewports. Strict semantic tags and visible focus rings.
- **Graceful Optional Links**: If a project or profile has no live URL or GitHub repo, the corresponding button is automatically hidden rather than rendering an empty link.
- **SEO & Social Cards**: Rich OpenGraph tags, Twitter cards, sitemap.xml, robots.txt, and Schema.org `Person` JSON-LD structured data.
- **Downloadable CV**: Attached PDF resume directly linked and downloadable at `/CV_Imal_Zaya_Harahap.pdf`.
- **Interactive Experience & Project Filters**: Quick filters for Enterprise, Contracts, Mentoring, and Fintech systems.
- **Contact Center**: One-click email copy, telephone links, and a prefilled mailto message composer.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Markdown & Frontmatter**: `js-yaml`, `marked`, `dompurify`
- **Icons**: `lucide-react`

---

## 💻 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` (or `http://localhost:5173`) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The production-ready static assets will be output to the `dist/` directory.

---

## 📝 How to Edit Content in `/content`

All portfolio data lives in markdown files with YAML frontmatter at the top:

| File | Purpose | Key Frontmatter Fields |
| :--- | :--- | :--- |
| `content/profile.md` | Personal info & bio | `name`, `title`, `location`, `email`, `phone`, `social` (linkedin, github, portfolio), `stats` |
| `content/experience.md` | Work history & mentoring | `experiences` (company, role, startDate, endDate, location, achievements, highlights), `mentoring` |
| `content/education.md` | Academic degrees | `education` (institution, degree, years, thesis, notes) |
| `content/skills.md` | Grouped skill badges | `categories` (name, description, skills: [name, level]) |
| `content/projects.md` | Project portfolio | `projects` (title, role, period, company, description, techStack, link, repo, metric, featured) |
| `content/certifications.md` | Professional certs | `certifications` (title, issuer, year, credentialId, skills, summary) |

Any markdown text below the second `---` is rendered as the narrative body for that section with clean typography and sanitization.

---

## ➕ How to Add a New Project

Open `content/projects.md` and append a new entry to the `projects` list:

```yaml
  - title: "My New Application"
    role: "Lead Full-Stack Engineer"
    period: "Jan 2026 – Present"
    company: "Acme Corp"
    description: "Architected a real-time analytics engine processing 10,000 events/sec with sub-50ms latency."
    techStack:
      - "Next.js"
      - "TypeScript"
      - "Tailwind CSS"
      - "Node.js"
    link: "https://example.com"    # Optional: leave empty or omit to hide the live link button
    repo: "https://github.com/..." # Optional: leave empty or omit to hide the source code button
    featured: true                 # Set to true to highlight in the "Featured Only" filter
    metric: "10,000 events/sec sub-50ms latency"
```

Save the file and your dev server will hot-reload with the new project instantly.

---

## ☁️ How to Deploy to Vercel

1. Push your repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your portfolio will be live on an SSL-enabled global CDN in seconds!

---

## 📄 License

Apache-2.0. Built for Imal Zaya Harahap.
