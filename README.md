## Description

A system that allows you to perform some of the functionalities of an application like Tricount, but in a scaled-down version.

# Project Installation Guide

This guide will help you install and set up a Nest.js project with Prisma from a local GitHub repository.

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (version 14 or higher)
- Git
- npm

## Installation Steps

1. Clone the GitHub repository to a local directory:

```bash
$ git clone <repository_url>
```

2. Navigate to the project directory:

```bash
$ cd <project_name>
```

3. Install project dependencies using npm:

```bash
$ npm install
```

4. Configure the database:

a. Rename the `.env.example` file to `.env` and configure the environment variables according to your database configuration.

b. Run migrations to create the database tables:

```bash
$ npx prisma migrate dev
```

5. Start the application:

```bash
$ npm run start:dev
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Prisma

```bash
# afficher la bdd et les données
$ npx prisma studio

# initialiser la bdd / modifier la bdd en ajoutant / supprimant des colonnes, tables ...
$ npx prisma db push

# faire une migration
$ npx prisma migrate dev
```
