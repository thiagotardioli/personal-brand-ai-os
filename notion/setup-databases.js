#!/usr/bin/env node
/**
 * Notion Database Setup Script
 * Personal Brand AI Operating System
 *
 * Run: node notion/setup-databases.js
 *
 * Requirements:
 *   npm install @notionhq/client dotenv
 *   NOTION_API_KEY env var set
 *   NOTION_PARENT_PAGE_ID env var set
 */

require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID;

if (!process.env.NOTION_API_KEY || !PARENT_PAGE_ID) {
  console.error('ERROR: Set NOTION_API_KEY and NOTION_PARENT_PAGE_ID environment variables.');
  process.exit(1);
}

async function createContentPipelineDB() {
  console.log('Creating Content Pipeline database...');
  const db = await notion.databases.create({
    parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
    title: [{ type: 'text', text: { content: 'Content Pipeline' } }],
    icon: { type: 'emoji', emoji: '🎬' },
    properties: {
      'Title': { title: {} },
      'Status': { select: { options: [
        { name: 'Ideas', color: 'gray' },
        { name: 'In Production', color: 'yellow' },
        { name: 'Ready for Review', color: 'blue' },
        { name: 'Approved', color: 'green' },
        { name: 'Needs Improvement', color: 'red' },
        { name: 'Ready for Scheduling', color: 'purple' },
        { name: 'Scheduled', color: 'orange' },
        { name: 'Published', color: 'default' }
      ]}},
      'Priority': { select: { options: [
        { name: 'High', color: 'red' },
        { name: 'Medium', color: 'yellow' },
        { name: 'Low', color: 'gray' }
      ]}},
      'Platform': { select: { options: [
        { name: 'Instagram', color: 'pink' },
        { name: 'YouTube', color: 'red' },
        { name: 'TikTok', color: 'default' },
        { name: 'Multi-platform', color: 'blue' }
      ]}},
      'Language': { select: { options: [
        { name: 'PT-BR + EN-GB', color: 'green' },
        { name: 'PT-BR only', color: 'yellow' },
        { name: 'EN-GB only', color: 'blue' }
      ]}},
      'Content Pillar': { select: { options: [
        { name: 'Education', color: 'blue' },
        { name: 'Motivation', color: 'orange' },
        { name: 'Story', color: 'purple' },
        { name: 'Tutorial', color: 'green' },
        { name: 'Lifestyle', color: 'pink' },
        { name: 'Nutrition', color: 'yellow' },
        { name: 'Recovery', color: 'default' },
        { name: 'Training', color: 'red' }
      ]}},
      'Content Type': { select: { options: [
        { name: 'Reel', color: 'pink' },
        { name: 'Carousel', color: 'blue' },
        { name: 'Static Post', color: 'gray' },
        { name: 'Story', color: 'yellow' }
      ]}},
      'Hook PT-BR': { rich_text: {} },
      'Hook EN-GB': { rich_text: {} },
      'Script PT-BR': { rich_text: {} },
      'Script EN-GB': { rich_text: {} },
      'Caption PT-BR': { rich_text: {} },
      'Caption EN-GB': { rich_text: {} },
      'CTA PT-BR': { rich_text: {} },
      'CTA EN-GB': { rich_text: {} },
      'Recording Needed': { checkbox: {} },
      'Recording Instructions': { rich_text: {} },
      'AI Only': { checkbox: {} },
      'Publish Date': { date: {} },
      'Google Drive Folder': { url: {} },
      'Approval Status': { select: { options: [
        { name: 'Pending Review', color: 'gray' },
        { name: 'Approved', color: 'green' },
        { name: 'Needs Improvement', color: 'red' },
        { name: 'Rejected', color: 'default' }
      ]}},
      'Published': { checkbox: {} },
      'Reach': { number: { format: 'number' } },
      'Saves': { number: { format: 'number' } },
      'Shares': { number: { format: 'number' } },
      'Followers Generated': { number: { format: 'number' } },
      'Learning': { rich_text: {} }
    }
  });
  console.log('Content Pipeline DB created:', db.id);
  return db.id;
}

async function createMediaLibraryDB() {
  console.log('Creating Media Library database...');
  const db = await notion.databases.create({
    parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
    title: [{ type: 'text', text: { content: 'Media Library' } }],
    icon: { type: 'emoji', emoji: '📁' },
    properties: {
      'Name': { title: {} },
      'Category': { select: { options: [
        { name: 'Raw Footage', color: 'gray' },
        { name: 'Edited Clip', color: 'blue' },
        { name: 'Thumbnail', color: 'pink' },
        { name: 'AI Asset', color: 'purple' },
        { name: 'B-roll', color: 'yellow' },
        { name: 'Photo', color: 'orange' }
      ]}},
      'Activity': { select: { options: [
        { name: 'Running', color: 'orange' },
        { name: 'Cycling', color: 'yellow' },
        { name: 'Swimming', color: 'blue' },
        { name: 'Gym', color: 'red' },
        { name: 'Nutrition', color: 'green' },
        { name: 'Lifestyle', color: 'pink' },
        { name: 'Talking Head', color: 'default' },
        { name: 'Race', color: 'purple' }
      ]}},
      'File URL': { url: {} },
      'Duration': { rich_text: {} },
      'Location': { rich_text: {} },
      'Notes': { rich_text: {} },
      'Reusable For': { rich_text: {} },
      'Language Independent': { checkbox: {} }
    }
  });
  console.log('Media Library DB created:', db.id);
  return db.id;
}

async function createTrainingSessionsDB() {
  console.log('Creating Training Sessions database...');
  const db = await notion.databases.create({
    parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
    title: [{ type: 'text', text: { content: 'Training Sessions' } }],
    icon: { type: 'emoji', emoji: '🏃' },
    properties: {
      'Date': { title: {} },
      'Sport': { select: { options: [
        { name: 'Running', color: 'orange' },
        { name: 'Cycling', color: 'yellow' },
        { name: 'Swimming', color: 'blue' },
        { name: 'Strength Training', color: 'red' },
        { name: 'Brick Session', color: 'purple' },
        { name: 'Rest / Recovery', color: 'gray' }
      ]}},
      'Distance': { rich_text: {} },
      'Duration': { rich_text: {} },
      'Intensity': { select: { options: [
        { name: 'Zone 1 — Recovery', color: 'gray' },
        { name: 'Zone 2 — Aerobic', color: 'green' },
        { name: 'Zone 3 — Tempo', color: 'yellow' },
        { name: 'Zone 4 — Threshold', color: 'orange' },
        { name: 'Zone 5 — VO2max', color: 'red' }
      ]}},
      'Notes': { rich_text: {} },
      'Video Available': { checkbox: {} },
      'Media URL': { url: {} }
    }
  });
  console.log('Training Sessions DB created:', db.id);
  return db.id;
}

async function createAnalyticsDB() {
  console.log('Creating Analytics database...');
  const db = await notion.databases.create({
    parent: { type: 'page_id', page_id: PARENT_PAGE_ID },
    title: [{ type: 'text', text: { content: 'Analytics' } }],
    icon: { type: 'emoji', emoji: '📊' },
    properties: {
      'Date': { title: {} },
      'Post': { rich_text: {} },
      'Platform': { select: { options: [
        { name: 'Instagram', color: 'pink' },
        { name: 'YouTube', color: 'red' },
        { name: 'TikTok', color: 'default' }
      ]}},
      'Reach': { number: { format: 'number' } },
      'Views': { number: { format: 'number' } },
      'Saves': { number: { format: 'number' } },
      'Shares': { number: { format: 'number' } },
      'Comments': { number: { format: 'number' } },
      'Profile Visits': { number: { format: 'number' } },
      'Followers Generated': { number: { format: 'number' } },
      'Watch Time': { rich_text: {} },
      'Retention': { rich_text: {} },
      'Learning': { rich_text: {} }
    }
  });
  console.log('Analytics DB created:', db.id);
  return db.id;
}

async function main() {
  console.log('\n Setting up Personal Brand AI OS — Notion Databases\n');
  const contentPipelineId = await createContentPipelineDB();
  const mediaLibraryId = await createMediaLibraryDB();
  const trainingSessionsId = await createTrainingSessionsDB();
  const analyticsId = await createAnalyticsDB();
  console.log('\n All databases created!');
  console.log('\n Copy these IDs to your n8n environment variables:\n');
  console.log('NOTION_CONTENT_PIPELINE_DB_ID=' + contentPipelineId);
  console.log('NOTION_MEDIA_LIBRARY_DB_ID=' + mediaLibraryId);
  console.log('NOTION_TRAINING_SESSIONS_DB_ID=' + trainingSessionsId);
  console.log('NOTION_ANALYTICS_DB_ID=' + analyticsId);
  console.log('\nDone!');
}

main().catch(err => { console.error('Error:', err.message); process.exit(1); });
