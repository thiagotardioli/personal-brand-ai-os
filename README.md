# Personal Brand AI Operating System

> Automated content pipeline for an endurance athlete personal brand, built on n8n + OpenAI + Notion + Google Drive.

**Account**: [@journeytoendurance](https://www.instagram.com/journeytoendurance/) | **Audience**: Beginner endurance athletes | **Languages**: PT-BR + EN-GB

---

## What This System Does

Every morning at 08:00, this workflow automatically:

1. **Researches** 10 content opportunities aligned with your audience (beginner endurance athletes)
2. **Selects** the top 3 ideas most likely to drive saves, shares and follower growth
3. **Develops** detailed Instagram Reel concepts with dual-language hooks (PT-BR + EN-GB)
4. **Writes** full scripts in both languages — never translated, always naturally adapted
5. **Creates** a production brief: exactly what to film, what AI can generate, how to edit
6. **Scores** the content package out of 100 — only items scoring 85+ are approved
7. **Saves** approved packages to Notion with status "Ready for Review"
8. **Creates** a Google Drive folder for each approved post with scripts and briefs

You wake up to ready-to-review content packages. No manual copy-paste. No formatting.

---

## Stack

| Tool | Purpose |
|------|---------|
| n8n | Workflow automation engine |
| OpenAI GPT-4o | All 6 AI agents |
| Notion | Content pipeline, media library, training log, analytics |
| Google Drive | Script and asset file storage |
| Metricool | Scheduling (Phase 2 — pending API access) |
| Instagram | Publishing target (Phase 2) |

---

## Repository Structure

```
personal-brand-ai-os/
├── README.md                           ← You are here
├── prompts/
│   ├── research-agent.md              ← Generates 10 content ideas daily
│   ├── strategy-agent.md              ← Selects top 3 from the 10
│   ├── idea-agent.md                  ← Turns strategy into Reel concepts
│   ├── script-agent.md                ← Writes dual-language scripts
│   ├── production-brief-agent.md      ← Creates recording/editing briefs
│   ├── quality-control-agent.md       ← Scores and approves/rejects content
│   ├── publishing-agent.md            ← PHASE 2: Metricool scheduling
│   └── analytics-agent.md             ← PHASE 2: Weekly performance learning
├── n8n/
│   └── workflow.json                  ← Import this into n8n
├── notion/
│   └── setup-databases.js             ← Creates all 4 Notion databases via API
└── docs/
    ├── google-drive-structure.md      ← Drive folder layout and naming
    ├── notion-database-schema.md      ← Full database property reference
    └── phase-2-roadmap.md             ← Next phases after MVP
```

---

## Quick Start

### 1. Prerequisites

- n8n instance (cloud or self-hosted) — [n8n.io](https://n8n.io)
- OpenAI API key with GPT-4o access — [platform.openai.com](https://platform.openai.com)
- Notion account + internal integration token — [notion.so/my-integrations](https://notion.so/my-integrations)
- Google account with Drive API enabled

### 2. Configure Credentials in n8n

Go to **Settings → Variables** and set:

| Variable | Required | Where to get it |
|----------|----------|-----------------|
| `OPENAI_API_KEY` | ✅ | platform.openai.com → API keys |
| `NOTION_API_KEY` | ✅ | notion.so/my-integrations → New integration |
| `NOTION_CONTENT_PIPELINE_DB_ID` | ✅ | Output of setup-databases.js |
| `GOOGLE_DRIVE_FOLDER_ID` | ✅ | From URL of 07 Ready to Publish folder |
| `METRICOOL_API_KEY` | ⏳ Phase 2 | Metricool → Settings → Integrations |
| `INSTAGRAM_ACCOUNT_ID` | ⏳ Phase 2 | Meta Business Suite → Settings → Accounts |

Also configure these as **Credentials** in n8n (not just variables):
- **OpenAI API**: Settings → Credentials → New → OpenAI API
- **Notion API**: Settings → Credentials → New → Notion API
- **Google Drive OAuth2**: Settings → Credentials → New → Google Drive OAuth2

### 3. Create Notion Databases

```bash
# Install dependencies
npm install @notionhq/client dotenv

# Set environment variables
export NOTION_API_KEY=secret_xxxxxxxxxxxx
export NOTION_PARENT_PAGE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Run setup (creates all 4 databases and outputs their IDs)
node notion/setup-databases.js
```

Copy the 4 database IDs from the output and add `NOTION_CONTENT_PIPELINE_DB_ID` to n8n.

**Important**: Your Notion integration must be added to the parent page. Open the page in Notion → click "..." → Connections → Add your integration.

### 4. Create Google Drive Structure

Create the folder structure manually in Google Drive (see `docs/google-drive-structure.md`).

Copy the ID of the `07 Ready to Publish` folder as `GOOGLE_DRIVE_FOLDER_ID`.

### 5. Import n8n Workflow

1. Open n8n → **Workflows → Import from file**
2. Upload `n8n/workflow.json`
3. Open the imported workflow
4. Update each node's credential to point to your configured credentials
5. Set timezone in workflow **Settings** → **Timezone** (e.g. `Europe/Lisbon`)
6. Click the **Active** toggle to enable it

### 6. Test the Workflow

1. Click **Execute Workflow** (manual test — bypasses the schedule)
2. Watch each node execute in sequence in the canvas
3. Check Notion Content Pipeline for new items
4. Check Google Drive `07 Ready to Publish/` for new folders + script files

---

## Troubleshooting

**"Cannot parse QC Agent output"**
The Parse QC Results node handles markdown-wrapped JSON automatically. If it still fails, check the raw OpenAI response in the node output panel and look for unexpected prefixes.

**"Notion API error 400"**
Property names must match exactly. Run `node notion/setup-databases.js` to verify schema, or check that all required properties exist in your database.

**"Google Drive 403 Forbidden"**
Re-authenticate the Google Drive OAuth2 credential in n8n Settings → Credentials. Ensure your Google account has edit access to the target folder.

**"OpenAI 429 Rate Limit"**
The workflow makes 6 sequential GPT-4o calls. If you hit rate limits, add a **Wait** node (2-3 seconds) between agents. Alternatively, switch the Strategy Agent and Production Brief Agent to `gpt-4o-mini` to reduce costs and rate limit risk.

**"Workflow not triggering at 08:00"**
Check timezone in workflow Settings. Verify the workflow is toggled **Active** in the workflow list. For self-hosted n8n, ensure the process is running at trigger time.

---

## TODO — Missing Credentials

- [ ] `METRICOOL_API_KEY` — Phase 2. Required for Instagram scheduling. Get from Metricool → Settings → Integrations → API
- [ ] `INSTAGRAM_ACCOUNT_ID` — Phase 2. Found in Meta Business Suite → Settings → Accounts → Instagram account ID

---

## Language Rules (Non-Negotiable)

Every agent output follows these rules without exception:

- **PT-BR**: Warm, direct, passionate Brazilian Portuguese. Sounds like an athlete talking to a friend at the track.
- **EN-GB**: Grounded, honest European English. Not American. Not corporate. Real.
- **Never** literally translate between the two — always adapt culturally and tonally
- **Never** include Customer Experience, brand purpose, or marketing positioning language
- Scripts sound like a real person who trains, not a brand that sells

---

## Content Pillars

| Pillar | Topics |
|--------|--------|
| Education | Training science simplified, pacing, heart rate zones |
| Motivation | Journey moments, setbacks, why it matters |
| Story | Race days, training breakthroughs, honest failures |
| Tutorial | Step-by-step guides for beginners (first triathlon, open water, brick sessions) |
| Lifestyle | Balancing training with full-time work, sleep, routines |
| Nutrition | Fuelling for endurance, what to eat before/during/after |
| Recovery | Rest days, sleep, ice baths, tapering |
| Training | Actual sessions, workouts, zone 2 runs, swim drills |

---

## Phase 2 Preview

Once the MVP is running and producing content, the next steps are:

1. **Metricool Scheduling** — Auto-schedule approved posts when credentials are available
2. **Instagram Publishing** — Direct API publishing via Metricool
3. **Analytics Import** — Weekly performance data into Notion Analytics
4. **Media Library Search** — Match required footage to existing clips before briefs
5. **AI Video Generation** — AI B-roll for posts that do not require personal footage
6. **Automated Subtitles** — PT-BR and EN-GB SRT files via Whisper
7. **Weekly Learning Loop** — Analytics Agent feeds performance insights back into Research Agent

See `docs/phase-2-roadmap.md` for timeline and dependencies.
