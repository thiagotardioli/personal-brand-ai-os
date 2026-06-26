# Notion Database Schema

## 1. Content Pipeline 🎬

The core database. Every piece of content lives here from idea to published.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Title | Title | Format: Post Title EN-GB \| PT-BR |
| Status | Select | Ideas / In Production / Ready for Review / Approved / Needs Improvement / Ready for Scheduling / Scheduled / Published |
| Priority | Select | High / Medium / Low |
| Platform | Select | Instagram / YouTube / TikTok / Multi-platform |
| Language | Select | PT-BR + EN-GB / PT-BR only / EN-GB only |
| Content Pillar | Select | Education / Motivation / Story / Tutorial / Lifestyle / Nutrition / Recovery / Training |
| Content Type | Select | Reel / Carousel / Static Post / Story |
| Hook PT-BR | Rich Text | First 3 seconds hook in Portuguese Brazil |
| Hook EN-GB | Rich Text | First 3 seconds hook in European English |
| Script PT-BR | Rich Text | Full spoken script in Portuguese |
| Script EN-GB | Rich Text | Full spoken script in English |
| Caption PT-BR | Rich Text | Instagram caption + hashtags in Portuguese |
| Caption EN-GB | Rich Text | Instagram caption + hashtags in English |
| CTA PT-BR | Rich Text | Call to action in Portuguese |
| CTA EN-GB | Rich Text | Call to action in English |
| Recording Needed | Checkbox | Whether new footage must be filmed |
| Recording Instructions | Rich Text | Exact step-by-step recording instructions |
| AI Only | Checkbox | Whether content can be 100% AI-generated without recording |
| Publish Date | Date | Target publish date from QC Agent suggestion |
| Google Drive Folder | URL | Link to post folder — auto-populated by n8n |
| Approval Status | Select | Pending Review / Approved / Needs Improvement / Rejected |
| Published | Checkbox | Tick after publishing |
| Reach | Number | Post reach (fill after publishing) |
| Saves | Number | Post saves |
| Shares | Number | Post shares |
| Followers Generated | Number | New followers attributed to this post |
| Learning | Rich Text | Post-performance insights and notes |

## 2. Media Library 📁

Catalogue of all filmed footage and created assets.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Name | Title | Descriptive filename |
| Category | Select | Raw Footage / Edited Clip / Thumbnail / AI Asset / B-roll / Photo |
| Activity | Select | Running / Cycling / Swimming / Gym / Nutrition / Lifestyle / Talking Head / Race |
| File URL | URL | Google Drive direct link |
| Duration | Rich Text | e.g. "00:45", "01:30" |
| Location | Rich Text | Where it was filmed |
| Notes | Rich Text | Quality notes, use cases, what it shows |
| Reusable For | Rich Text | Which content pillars or topics this suits |
| Language Independent | Checkbox | No language-specific on-screen text — can be used for both PT-BR and EN-GB versions |

## 3. Training Sessions 🏃

Log of training sessions — source material for authentic content.

| Property | Type | Values / Notes |
|----------|------|----------------|
| Date | Title | Session date (used as primary identifier) |
| Sport | Select | Running / Cycling / Swimming / Strength Training / Brick Session / Rest / Recovery |
| Distance | Rich Text | e.g. "12km", "1.9km", "90km" |
| Duration | Rich Text | e.g. "1:15:00", "00:45:00" |
| Intensity | Select | Zone 1 Recovery / Zone 2 Aerobic / Zone 3 Tempo / Zone 4 Threshold / Zone 5 VO2max |
| Notes | Rich Text | How it felt, what worked, what did not |
| Video Available | Checkbox | Whether the session was filmed |
| Media URL | URL | Google Drive link to footage |

## 4. Analytics 📊

Performance data for all published content.

| Property | Type | Description |
|----------|------|-------------|
| Date | Title | Post publish date |
| Post | Rich Text | Post title reference |
| Platform | Select | Instagram / YouTube / TikTok |
| Reach | Number | Unique accounts reached |
| Views | Number | Total video plays |
| Saves | Number | Most important KPI for educational content |
| Shares | Number | Key viral indicator |
| Comments | Number | Engagement depth |
| Profile Visits | Number | Discovery traffic generated |
| Followers Generated | Number | New followers from this specific post |
| Watch Time | Rich Text | Total accumulated watch time |
| Retention | Rich Text | Average % of video watched |
| Learning | Rich Text | What this post's data teaches about the audience |
