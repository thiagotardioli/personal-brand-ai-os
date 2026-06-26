# Phase 2 Roadmap

## Current State: MVP (Phase 1) — Active

The MVP delivers daily content packages automatically:
- 10 content ideas researched by AI
- Top 3 selected by strategy logic
- Full PT-BR + EN-GB scripts written
- Production briefs with exact recording instructions
- QC scoring (85+ to pass)
- Notion Content Pipeline populated
- Google Drive folders created with scripts

Not yet automated: Instagram publishing, analytics import, media library search, AI video.

---

## Phase 2: Publishing Automation

**Trigger**: Metricool API key + Instagram Professional Account configured.

**What activates**:
- Publishing Agent node in n8n becomes active
- When edited video is uploaded to `07 Ready to Publish/`, workflow auto-schedules via Metricool
- Notion status updates to "Scheduled" with datetime
- Posting window optimised: Tue-Thu, 06:00-09:00 or 18:00-21:00 Europe/Lisbon

**Required credentials**:
- `METRICOOL_API_KEY` — Get from Metricool → Settings → Integrations → API
- `INSTAGRAM_ACCOUNT_ID` — Found in Meta Business Suite → Settings → Accounts

**Estimated effort**: 1-2 days after credentials are available.

---

## Phase 3: Analytics Learning Loop

**Trigger**: Phase 2 complete + at least 4 posts published with 48h+ data.

**What activates**:
- Analytics Agent runs every Sunday at 09:00
- Imports post metrics from Metricool API
- Stores data in Notion Analytics database
- Generates weekly learning report
- Feeds top-performing topics/formats back into Research Agent as context

**Key questions the loop answers**:
- Which hooks drove the most profile visits?
- Which topics drove the most saves?
- What duration gets the best retention?
- Which day/time gets the best reach?

**Estimated effort**: 2-3 days after Phase 2 is stable.

---

## Phase 4: Media Intelligence

**Trigger**: Notion Media Library has 20+ entries.

**What activates**:
- Before running Production Brief Agent, n8n queries Notion Media Library
- Matches required footage types against available clips
- Reduces "new footage required" cases
- Builds a searchable, reusable asset bank

**Estimated effort**: 2-3 days.

---

## Phase 5: AI Content Generation

**Trigger**: Phase 4 complete + AI tool API access confirmed.

**What activates**:
- Runway ML / Pika Labs for AI B-roll generation from text prompts
- Canva API for automated thumbnail generation
- OpenAI Whisper for automatic subtitle generation (PT-BR + EN-GB SRT files)
- Auto-caption export for both language versions

**Estimated effort**: 3-5 days per integration.

---

## Summary Timeline

| Phase | Status | Dependency | Est. Effort |
|-------|--------|------------|-------------|
| MVP (Phase 1) | ✅ Active | — | Done |
| Phase 2: Publishing | ⏳ Pending | Metricool API | 1-2 days |
| Phase 3: Analytics | ⏳ Pending | Phase 2 + posts | 2-3 days |
| Phase 4: Media Intel | ⏳ Pending | Media Library populated | 2-3 days |
| Phase 5: AI Generation | ⏳ Pending | AI tool APIs | 3-5 days |
