# Adhithyan S, Portfolio Site

A single page portfolio built with plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no dependencies beyond two Google Fonts. Designed to be hosted for free on GitHub Pages.

## What is in here

```
portfolio-site/
  index.html        the entire page
  css/style.css      all styling
  js/main.js         nav, scroll spy, reveal animations, counters, typing effect
  assets/resume.pdf   current resume, downloadable from the site
```

## How to put this on GitHub Pages

1. Create a new repository on GitHub. Two options:
   - Name it `your-username.github.io` to get the site at `https://your-username.github.io` directly, or
   - Name it anything else, for example `portfolio`, and the site will live at `https://your-username.github.io/portfolio`.

2. From inside this `portfolio-site` folder, run:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

3. On GitHub, go to the repository's **Settings** tab, then **Pages** in the left sidebar.
   - Under "Build and deployment", set **Source** to "Deploy from a branch".
   - Set **Branch** to `main` and folder to `/ (root)`.
   - Click **Save**.

4. Wait one or two minutes, then refresh the Pages settings page. It will show your live URL at the top. That is the link to put on your resume, LinkedIn, and job applications.

## Updating the site later

Whenever your resume changes, replace `assets/resume.pdf` with the new file (keep the same filename so the download link on the page keeps working), then commit and push:

```
git add .
git commit -m "Update resume and content"
git push
```

GitHub Pages redeploys automatically within a minute or two of every push to `main`.

## Editing content

All the text content (summary, skills, certifications, CPENT results, projects, contact links) lives directly in `index.html`. Search for the section you want to change by its heading text and edit the surrounding HTML. No rebuild step is needed, just save and push.

## Custom domain (optional)

If you later buy a domain, add a file named `CNAME` in this folder containing just your domain name (for example `adhithyans.dev`), then point your domain's DNS to GitHub Pages following GitHub's custom domain documentation. This is entirely optional and the `github.io` URL works fine on its own for job applications.
