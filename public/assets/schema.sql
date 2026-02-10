-- 0. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS postgis;

-- 1. NEW ENUMS (Country & Currency)
CREATE TYPE "country" AS ENUM (
  'INDIA',
  'USA'
);

CREATE TYPE "currency" AS ENUM (
  'RUPEE',
  'DOLLAR'
);

-- 2. EXISTING ENUMS
CREATE TYPE "rental_type" AS ENUM (
  'ROOM',
  'APARTMENT',
  'LOOKING_FOR'
);

CREATE TYPE "item_category" AS ENUM (
  'FURNITURE',
  'ELECTRONICS',
  'VEHICLES',
  'BOOKS',
  'TICKETS',
  'OTHER'
);

CREATE TYPE "item_status" AS ENUM (
  'AVAILABLE',
  'SOLD',
  'RESERVED'
);

CREATE TYPE "subscription_tier" AS ENUM (
  'FREE',
  'PRO_MONTHLY',
  'PRO_QUARTERLY'
);

CREATE TYPE "sub_status" AS ENUM (
  'ACTIVE',
  'PAST_DUE',
  'CANCELED'
);

CREATE TYPE "usage_action" AS ENUM (
  'CREATE_LISTING',
  'APPLY_BOOST'
);

CREATE TYPE "interest_target" AS ENUM (
  'RENTAL',
  'ITEM',
  'ACTIVITY'
);

CREATE TYPE "interest_status" AS ENUM (
  'ACTIVE',
  'ARCHIVED',
  'ACCEPTED',
  'REJECTED'
);

CREATE TYPE "convo_type" AS ENUM (
  'DIRECT',
  'GROUP'
);

CREATE TYPE "bookmark_target" AS ENUM (
  'RENTAL',
  'ITEM',
  'ACTIVITY'
);

-- 3. CORE TABLES

CREATE TABLE "users" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "email" text UNIQUE NOT NULL,
  "phone" text UNIQUE,
  "username" text UNIQUE NOT NULL,
  "first_name" text NOT NULL,
  "last_name" text,
  "profile_pic_url" text,
  
  -- Updated Columns using ENUMs
  "country" country DEFAULT 'INDIA',
  "currency" currency DEFAULT 'RUPEE',
  
  "is_verified_email" boolean DEFAULT false,
  "is_verified_phone_number" boolean DEFAULT false,
  "trust_score" int DEFAULT 0,
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz
);

CREATE TABLE "user_locations" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "user_id" uuid REFERENCES "users" ("id"),
  "label" text, -- e.g. 'Home', 'Work'
  "location_point" geography,
  "location_details" jsonb,
  "is_primary" boolean DEFAULT false,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "rentals" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "owner_id" uuid REFERENCES "users" ("id"),
  "type" rental_type,
  "title" text,
  "description" jsonb, -- AI Generated structure
  "price" decimal(10,2),
  "tags" jsonb,
  "images" jsonb,
  
  -- Location
  "location_point" geography,
  "location_details" jsonb,
  
  -- Status
  "is_active" boolean DEFAULT true,
  "boosted_until" timestamptz,
  
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz
);

CREATE TABLE "marketplace_items" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "seller_id" uuid REFERENCES "users" ("id"),
  "category" item_category,
  "title" text,
  "description" jsonb,
  "price" decimal(10,2),
  "tags" jsonb,
  "images" jsonb,
  
  -- Location
  "location_point" geography,
  "location_details" jsonb,
  
  -- Status
  "status" item_status DEFAULT 'AVAILABLE',
  "boosted_until" timestamptz,
  
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz
);

CREATE TABLE "activities" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "host_id" uuid REFERENCES "users" ("id"),
  "title" text,
  "description" jsonb,
  "start_time" timestamptz,
  "end_time" timestamptz,
  
  -- Location
  "location_point" geography,
  "location_details" jsonb,
  
  "max_participants" int,
  "current_participants" int DEFAULT 0,
  
  -- Status
  "boosted_until" timestamptz,
  "is_trending" boolean DEFAULT false,
  
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz
);

-- 4. SAAS & LIMITS TABLES

CREATE TABLE "subscriptions" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "user_id" uuid UNIQUE REFERENCES "users" ("id"),
  "tier" subscription_tier DEFAULT 'FREE',
  "status" sub_status DEFAULT 'ACTIVE',
  
  "current_period_start" timestamptz,
  "current_period_end" timestamptz,
  "payment_gateway_id" text,
  
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz
);

CREATE TABLE "usage_logs" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "user_id" uuid REFERENCES "users" ("id"),
  "action_type" usage_action,
  "target_id" uuid, -- ID of Rental/Item
  "target_type" text,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "interests" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "user_id" uuid REFERENCES "users" ("id"),
  "target_id" uuid, -- Polymorphic ID
  "target_type" interest_target,
  
  "status" interest_status DEFAULT 'ACTIVE',
  "is_priority" boolean DEFAULT false,
  
  "created_at" timestamptz DEFAULT (now()),
  "updated_at" timestamptz
);

-- 5. SOCIAL & METADATA

CREATE TABLE "conversations" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "type" convo_type DEFAULT 'DIRECT',
  "related_interest_id" uuid REFERENCES "interests" ("id"),
  "related_activity_id" uuid REFERENCES "activities" ("id"),
  
  "last_message_at" timestamptz,
  "last_message_preview" text,
  "created_at" timestamptz DEFAULT (now())
);

CREATE TABLE "conversation_participants" (
  "conversation_id" uuid REFERENCES "conversations" ("id"),
  "user_id" uuid REFERENCES "users" ("id"),
  "joined_at" timestamptz DEFAULT (now()),
  PRIMARY KEY ("conversation_id", "user_id")
);

CREATE TABLE "bookmarks" (
  "id" uuid PRIMARY KEY DEFAULT uuidv7(),
  "user_id" uuid REFERENCES "users" ("id"),
  "target_id" uuid,
  "target_type" bookmark_target,
  "created_at" timestamptz DEFAULT (now())
);

-- 6. EMBEDDINGS (AI/Vector Search)
-- 1536 is standard dimension for OpenAI text-embedding-3-small

CREATE TABLE "user_embeddings" (
  "user_id" uuid PRIMARY KEY REFERENCES "users" ("id") ON DELETE CASCADE,
  "embedding" vector(1536), -- User preferences/personality vector
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "rental_embeddings" (
  "rental_id" uuid PRIMARY KEY REFERENCES "rentals" ("id") ON DELETE CASCADE,
  "embedding" vector(1536), -- Description + Amenities vector
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "item_embeddings" (
  "item_id" uuid PRIMARY KEY REFERENCES "marketplace_items" ("id") ON DELETE CASCADE,
  "embedding" vector(1536), -- Item Description vector
  "updated_at" timestamptz DEFAULT (now())
);

CREATE TABLE "activity_embeddings" (
  "activity_id" uuid PRIMARY KEY REFERENCES "activities" ("id") ON DELETE CASCADE,
  "embedding" vector(1536), -- Activity Description + Tags vector
  "updated_at" timestamptz DEFAULT (now())
);