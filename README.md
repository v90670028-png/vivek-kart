# VivekKart — real website starter

This is a real full-stack starter, not just an HTML mockup.

## Stack
- Next.js
- Supabase Postgres database
- Supabase authentication can be added for customer/admin accounts
- Vercel can deploy the Next.js app

## Setup
1. Install Node.js on a computer.
2. Create a Supabase project.
3. Open Supabase SQL Editor and run `supabase/schema.sql`.
4. Copy `.env.example` to `.env.local`.
5. Put your Supabase URL and publishable key in `.env.local`.
6. Run:
   npm install
   npm run dev
7. Open http://localhost:3000

## Important
The storefront reads products from Supabase. Supplier ordering, real payment, shipping and production-grade admin authentication are intentionally not enabled yet. Do not accept real customer money until payment, refund, privacy, tax/business and supplier arrangements are properly set up with a parent/guardian and the relevant providers.
