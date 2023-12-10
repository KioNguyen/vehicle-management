# Vincar Take Home Test

Hello!

This is the take home test that we use to let you showcase your full stack skills. This README will provide some helpful links for you to use as you build out your solution as well as general guidance on what we are looking for.

## Getting Started

1. First thing you should do is fork interview-take-home repo. Once forked you can commit and push your changes into the forked version of the repo.
2. Read through the READMEs in both the frontend and backend folders.

## Running the frontend

```bash
yarn install
yarn start (app should come up on localhost:3000)
```

## Running the backend

```bash
yarn install
yarn watch (server should start on localhost:8080)
```

## The codebase 

As you will notice, the codebase is pretty bare bones.

On the frontend: 

It is a NextJS + Typescript repo, utilising ChakraUI as the component and themeing library.

[ChakraUI Docs](https://chakra-ui.com/docs/components)
[NextJS Docs](https://nextjs.org/docs/getting-started)

There is only one page that the react application is rendering right now and it is the root path `/` found here `src/pages/index.tsx`.

There is a `theme.ts` file in the repo that is part of the chakraUI themeing system. It is what you should use to add new colors and other CSS properties to your theme.

On the backend:

It is a Node + Express + TypeORM repo

[TypeORM Docs](https://typeorm.io/)

`src/data-source.ts` is where you should define your postgresql credentials

`src/index.ts` is where you should define your API routes

## Your Task

Your goal for this take home test is to create a full stack application for us to review together.

Both the `frontend` and `backend` folders have their own individual READMEs with guidance on what we will be expecting.

Some things we will be looking for/evaluating when we read your final code submittion are as follows (this list is not exhaustive)

- Code organization/structure
- Code modularity
- Database structure/architecture

## How to Submit

1. Throughout your exercise you should be commiting and pushing code often to your repo/branch. This makes it easier for us to review how you break up your building.

2. Once you have your project finalised and are happy with your solution. Open up a Pull Request for your forked repo into the interview-take-home repo and tag the following people as reviewers `ernessttan` and `dre-draws`
3. Sit back and relax. We will review your submition and will follow up with you to set up a time for us to go through your solution together!

If you have any questions during your take home or are blocked from making progress for any reason please reach out to `ernesttan@vincar.com.sg`.
