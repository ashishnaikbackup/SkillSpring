# Field Radar: automatic headlines and source policy

Field Radar now combines evergreen learning notes with a separately maintained headline feed.

## How the feed works

- The allowlist is stored in data/field-radar-sources.json.
- A GitHub Actions workflow runs daily and after repository updates.
- scripts/update-field-radar.mjs fetches the configured RSS/Atom feeds, keeps short headline/excerpt records and writes data/field-radar.json.
- The static Field Radar page reads that JSON and renders headlines with the publisher name, category, publication date and original link.
- The workflow keeps last-known-good items for a source when that source is temporarily unavailable. It commits and redeploys only when feed content or source status changes.

## Sources and coverage

The initial allowlist includes official publisher, regulator and standards/engineering feeds across:
- Programming and software development
- AI and data science
- Microsoft 365, Power Platform and analytics
- Finance and regulation in India (RBI and SEBI)
- Cybersecurity advisories (CISA)
- Design (Figma)
- Engineering and electronics (IEEE Spectrum)

The sources file is the authoritative list. A source's inclusion does not mean SkillSpring endorses every opinion or announcement in that feed.

## Editorial and safety rules

- Headlines and short feed excerpts are automatically collected; the original article remains on the publisher's website.
- Do not copy full articles, paywalled text, images or long excerpts.
- Render feed content as text, never as trusted HTML.
- Use only HTTPS links and show the original source.
- Display publication dates where available; do not silently replace them with collection dates.
- If a source is unavailable, retain its last successful items and mark its status.
- The feed is a discovery aid, not personalised financial, legal, medical or cybersecurity advice.
- Do not automatically rewrite course lessons based on headlines. Educational content changes go through the course freshness review process and human validation.

## Limitations

- RSS feeds can be delayed, incomplete, blocked or discontinued.
- A headline and excerpt are not a complete account of an event. Read the publisher's source before relying on it.
- The initial feed mix is a curated starting point and should be expanded carefully.
- The feed is not a comprehensive news service and does not guarantee coverage of every learning school.
