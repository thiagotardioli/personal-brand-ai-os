# Google Drive Structure

## Folder Layout

Create this structure in your Google Drive manually:

```
Personal Brand AI OS/
├── 01 Raw Footage/
│   ├── Running/          ← GPS watch clips, track sessions, trail runs
│   ├── Cycling/          ← Bike rides, trainer sessions, transitions, gear shots
│   ├── Swimming/         ← Pool/open water sessions, stroke drills
│   ├── Gym/              ← Strength sessions, mobility work
│   ├── Nutrition/        ← Meal prep, race fuel, recovery snacks
│   ├── Lifestyle/        ← Morning routines, commute training, life moments
│   └── Talking Head/     ← Direct camera monologues, Q&A, stories to camera
│
├── 02 Scripts/           ← Auto-populated by n8n workflow (PT-BR + EN-GB)
├── 03 Production Briefs/ ← Auto-populated by n8n workflow
├── 04 AI Assets/         ← AI-generated graphics, animations, overlays
├── 05 Edited Videos/     ← Final edited Reels before export
├── 06 Thumbnails/        ← Custom thumbnails / Reel covers
├── 07 Ready to Publish/  ← GOOGLE_DRIVE_FOLDER_ID target — n8n writes here
├── 08 Published/         ← Move here after publishing
├── 09 Analytics/         ← Performance reports, Metricool exports
└── 10 Brand Assets/      ← Logo, fonts, colour palette, templates
```

## How the n8n Workflow Uses Google Drive

When a content package is approved by the QC Agent:

1. Creates a new folder inside `07 Ready to Publish/` named: `YYYY-MM-DD_Post_Title`
2. Uploads `_script.txt` containing full PT-BR and EN-GB scripts, captions, CTAs and recording instructions
3. Updates the Notion Content Pipeline item with the folder URL as a clickable link

## Finding Your Folder ID

1. Open Google Drive
2. Navigate to `07 Ready to Publish`
3. URL: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
4. Copy the ID after `folders/`
5. Set as `GOOGLE_DRIVE_FOLDER_ID` in n8n Settings → Variables

## Raw Footage Naming Convention

```
YYYY-MM-DD_[Sport]_[Description]_[Duration].mp4

Examples:
2026-06-26_Running_TrailRun_Morning_Zone2_00m45s.mp4
2026-06-26_Cycling_IndoorTrainer_Intervals_01h30m.mp4
2026-06-26_Gym_LegDay_SquatFocus_00m30s.mp4
2026-06-26_TalkingHead_WhyIStartedTriathlon_02m00s.mp4
```

Consistent naming lets the Phase 4 Media Library search work correctly.
