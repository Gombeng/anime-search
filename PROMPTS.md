# PROMPTS.md

This file documents the AI prompts used while building this project.

### Feature: Project scaffolding + stack choices
Prompt:
"Create a Vite + React + TypeScript project boilerplate for an Anime Search App. Include Redux Toolkit, Chakra UI, react-router-dom, axios, and a debounce hook. Configure dev server to run on port 4000 and ensure npm only."

Which parts it helped with:
- Project layout
- package.json and vite.config.ts suggestions
- File-by-file starter code

### Feature: Debounced search hook
Prompt:
"Implement a reusable useDebounce hook in TypeScript with a default delay of 250ms."

Which parts it helped with:
- Implementing the debounce hook used by the search input.

### Feature: Redux slice for Jikan API
Prompt:
"Create a Redux Toolkit slice with createAsyncThunk to fetch paginated anime search results from Jikan API and fetch anime detail."

Which parts it helped with:
- animeSlice async thunks and reducer structure
