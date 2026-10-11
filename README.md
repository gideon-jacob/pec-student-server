# PEC Student Server

The backend service for **PEC Student Hub**, a student-facing academic portal developed to simplify access to college academic information.

## Overview

This repository contains the server-side application responsible for handling academic data and supporting the frontend client.

**Frontend:** [pec-student-client →](https://github.com/gideon-jacob/pec-student-client)

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **Supporting Tools:** dotenv, serverless-http

## Responsibilities

- Handle requests from the student-facing frontend.
- Retrieve and provide academic information through backend routes.
- Integrate with MongoDB for data access.
- Support serverless deployment through the serverless HTTP adapter.

## Getting Started

### Prerequisites

- Node.js and npm
- Access to a MongoDB database
- Environment configuration required by the application

### Installation

```bash
git clone https://github.com/gideon-jacob/pec-student-server.git
cd pec-student-server
npm install
```

### Configuration

Configure the required environment variables for the database connection and any external services used by the application.

Do not commit credentials or environment files containing secrets.

### Run Locally

```bash
npm run dev
```

The development script compiles the TypeScript server and starts the Node.js application.

## Related Project

PEC Student Hub was the first version of a larger student academic portal initiative. Its broader successor is **[PEC Tracking Online Portal (PECTOP)](https://github.com/pec-developers/pec-tracking-online-portal)**.

