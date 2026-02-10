# **Hyv**

Motto: An AI-first utility platform for everything around you.

## 

## **1\. Project Overview & Problem Statement**

### **1.1 The Problem**

Modern urban residents rely on fragmented, untrustworthy, and non-localized platforms (WhatsApp, Facebook Groups, OLX) for core real-world needs (rentals, local trade, activity discovery). This leads to **high user friction, rampant fraud, and ineffective discovery**.

### **1.2 The Solution**

Hyv is a single, consolidated digital ecosystem that leverages **Artificial Intelligence and hyper-local data** to provide utility, trust, and community connection. The primary USP is the **AI powered search functionality**, replacing cumbersome manual search with conversational query resolution.

### **1.3 Unique Selling Proposition (USP)**

* **AI-First Interface:** Conversational search powered by Vector DB for instant, hyper-relevant matches.  
* **Hyper-local Native:** Geo-indexed for block-level relevance, eliminating noise.  
* **Trusted Ecosystem:** Multi-level verification system centered on **verified emails and phone numbers** for high-assurance trust.  
* **Modular Utility:** A "Super App" structure combining multiple necessary services (Rentals, Marketplace, Activities).

## 

## **2\. Core Functional Specifications (MVP)**

### **2.1 AI Powered Search**

* **Function:** Accepts complex, natural language queries (e.g., "Find me a verified roommate near Whitefield who likes board games and has a budget of 15k").  
* **Architecture:** The query is vectorized and compared against user/listing embeddings to retrieve hyper-relevant, filtered results.

### **2.2 Roommate/Tenant Finder**

* **Listings:** Users can post/search for rooms, apartments, or tenants.  
* **Matching Logic:** Based on budget, location, lifestyle preferences (noise, food habits, smoking), and common interests. AI/Vector matching provides compatibility scores.  
* **Communication:** In-app chat with Priority Interest feature.

### **2.3 Buy & Sell Marketplace**

* **Listings:** Items categorized (furniture, electronics, books, tickets).  
* **Trust Layer:** Listings from email and phone number verified users are prioritized.  
* **Moderation (Future):** Automated system detects and flags/removes listings based on reverse image search (to catch common scam photos) and price deviation analysis.  
* **Communication:** Negotiation chat within the app, with a custom negotiation solution as future scope.

### **2.4 Local Activity Discovery**

* **Creation:** Users can create public or private activity groups (running, reading, food walks).  
* **Discovery:** Geo-based feed showing activities within a configurable radius.  
* **Hyves System (Future):** Activities will be categorized under major interest groups (Hyves) for enhanced community organization.

## 

## **3\. Monetization Strategy & Model**

Hyv operates on a **Consumer SaaS Model** (Phase 1\) transitioning to an **Enterprise SaaS** model (Phase 2).

### **3.1 Consumer App Monetisation**

* [Hyv \- Monetisation Strategy](https://docs.google.com/document/d/1BdJLuwMrCZ2RgQThGpvngyCZS0EdXixlsg8Dc-ez1dU/edit?usp=drive_link)

### **3.2 Enterprise Monetisation (Phase 2 Moat)**

* **Product:** Hyv Enterprise Suite.  
* **Model:** SSO-based annual licensing fee per employee/seat (B2B SaaS).  
* **Features:** Private internal marketplace, corporate event management, and more enterprise related features.

## 

## **4\. Technical Specifications (Tech Stack)**

The architecture is high-performance, polyglot, and cloud-native, designed for agility and vertical scaling of specialized services.

| Component | Technologies | Purpose |
| :---- | :---- | :---- |
| **Frontend** | **NextJS (React \+ TypeScript), Tanstack Query, Tailwind, ShadCN** | Optimized for fast, responsive, and data-efficient delivery (SSR/SSG). |
| **Backend Core** | **SpringBoot (Java)** | Handles core transactional stability, security, and high-volume financial logic (Monetization, User Auth). |
| **AI/ML Services** | **FastAPI (Python)** | Dedicated microservices for low-latency AI inference, running vectorization, and recommendation algorithms. |
| **Relational DB** | **Azure PostgreSQL** | Primary storage for structured data (User Profiles, Listings Metadata, Transactions). |
| **Vector DB** | **Azure PostgreSQL with pgVector** | Stores vector embeddings of user interests and listing descriptions to power semantic search and AI compatibility matching. |
| **Hosting** | **Vercel (Frontend), Azure App Service (Backend)** | Optimized for continuous integration, performance, and enterprise scalability. |

## 

## **5\. MVP Roadmap (6 Weeks)**

This extended roadmap details the incremental feature rollout, maintaining a tight feedback loop and scaling trust features.

| Week | Focus Area | Key Deliverables |
| :---- | :---- | :---- |
| **Week 1** | **Foundation & AI Hook** | Global Sign-up (Email/OTP), Detailed Profile Creation (Interests & Preferences), Geo-location/Radius setting, Basic **AI Utility Chatbot** (text-to-initial-search logic). |
| **Week 2** | **Core Utility: Listings** | **Roommate Finder** (Post/Search MVP), **Marketplace** (Post/Images, Negotiation Chat), Initial Backend Data Models (PostgreSQL). |
| **Week 3** | **Trust & Social** | **Local Activities** (Create/Join/Group Chat), **L4 Listing Vetting** (Reverse Image Scan for Marketplace), Basic User Reporting tools. |
| **Week 4** | **Monetization & Performance** | **Credit System Implementation**, Boost Listing Functionality (25 Credits), **Initial Vector Embedding** generation (Milvus DB), Performance tuning. |
| **Week 5** | **Pre-Launch Refinement** | **Pro Subscription Tier** activation, Full UI/UX audit, In-app tutorial/onboarding flow, Targeted internal beta testing (Bangalore micro-area). |
| **Week 6** | **Public Launch** | Implement Push Notifications, **Safety & Moderation Dashboard**, Public Launch in 1–2 Major Cities (Target: Bangalore & Hyderabad). |

## 

## **6\. Future Enhancements**

* **Hyves System:** Introduce thematic meta-communities (e.g., Hyve: Travel, Hyve: Tech) that aggregate relevant activities, marketplace listings, and discussion forums, enhancing user stickiness.  
* **Advanced Discovery:** Implement Geo-indexing for sub-locality relevance, Activity Heatmaps, and full **Vector Search** integration for hyper-accurate AI matching.  
* **Enterprise Suite Rollout:** Develop SSO integration, private community tools, and HR analytics dashboards for B2B offering.