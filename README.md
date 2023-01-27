# Kliksutin ![Release](https://github.com/UniversityOfHelsinkiCS/kliksutin/actions/workflows/main.yml/badge.svg) ![Release](https://github.com/UniversityOfHelsinkiCS/kliksutin/actions/workflows/test.yml/badge.svg)

## Scripts

`docker compose up` to run locally

`npm run test` to run all e2e tests

`npm run test:cypress` to open cypress, then run the container (set the port [here](https://github.com/UniversityOfHelsinkiCS/kliksutin/blob/ffe33eee1f187f260cd27c587825fbe4771430ba/cypress/support/e2e.ts#LL19))

`npm run lint` to eslint

## Development

Typescript? `as unknown as ...` and `: any` are allowed.

> "Dynamic types are customer value"
>
> – mluukkai, maybe
