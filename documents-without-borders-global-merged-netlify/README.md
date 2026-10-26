# Documents Without Borders Global — Unified Website

This ZIP merges the prior saved institutional landing page's original editorial copy with the DWB-2 Netlify design, preserves the 7 original redesigned pages, and adds Notarizationship™, Global Dialogue, and a searchable index of country and territory names.

**Official email:** info@documentswithoutborders.org  
**Intended canonical website:** https://documentswithoutborders.org  
**Current staging/deployment website:** https://dwb-2.netlify.app

## Publish

Upload the extracted directory with `index.html` at its root to the existing Netlify `dwb-2` project. A static site needs no build command. If linked to GitHub, either update the connected repository and commit or disconnect automatic Git publishing in Netlify before a manual upload, per Netlify UI. Do not upload a containing parent folder instead of the actual website folder.

## Content preservation / limitations

The original `.org` live site and live Netlify page could not be retrieved for a page-by-page diff. This is **not** an assertion that every current `.org` function or every word was copied. The preserved text comes from the user's saved original `index.html`, and the language on the mission, terms, languages, source checks, founder and proposed projects is informed by the user's October 2026 founding proposal and executive summary. The original saved site was a temporary institutional preview and not a verified live copy of the current `.org` site.

See `dialogue.html` for the earlier landing site's original purpose, strategic priorities, listening initiative and four-phase roadmap. See `notarizationship.html` for explicit founder attribution.

## Structure

- `index.html`, `mission.html`, `initiatives.html`, `resources.html`, `conference.html`, `about.html`, `contact.html` — original redesigned pages, revised
- `dialogue.html` — founding international dialogue and roadmap
- `notarizationship.html` — founder-coined concept
- `explorer.html` — searchable country/territory *names*, not legal statuses
- `assets/data/jurisdictions.json` — 249 ISO 3166-1 entries plus a supplemental name entry for Kosovo. Names-only; do not infer Convention coverage.
- `assets/css/styles.css` — external stylesheet
- `assets/js/main.js`, `assets/js/explorer.js` — navigation and searchable index
- `_headers`, `_redirects`, `netlify.toml`, `robots.txt`, `sitemap.xml` — hosting

## Safety / accuracy

The site does not claim to be a government body, UN or HCCH partner, legal authority or professional regulator. It does not issue credentials or apostilles. The proposed Dubai chapter, conference, directory and training program are future concepts, not confirmed operations. The country/territory name index provides no apostille treaty-status conclusions and cannot replace the HCCH and receiving authority. 'Notarizationship™' is attributed to the founder as a coined term, not a registered mark.

## Domain consolidation

1. Keep testing via `https://dwb-2.netlify.app/`.
2. Back up content currently at `https://documentswithoutborders.org/` before switching host; the live .org site's code could not be retrieved.
3. Add the `.org` custom domain **to the same** Netlify site, check exact dashboard DNS instructions and retain email DNS records.
4. Verify HTTPS, navigation, robots, sitemap, and mailbox before considering redirecting the `.netlify.app` preview to `.org`. No automatic cross-domain redirect has been included.
5. Once the domain is verified, consider setting the primary domain via Netlify's domain management and avoiding duplicate indexing.

## Tests

Test homepage, all 10 content pages, footer mailto link, mobile nav, search of `Virgin Islands`, resources external links, and 404.
