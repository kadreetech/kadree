# BlueSoft

[![Deploy Next.js (frontend) to FTP](https://github.com/Overlap-Web/bluesoft-web-2022/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Overlap-Web/bluesoft-web-2022/actions/workflows/deploy.yml)

![BlueSoft documentation header](https://i.imgur.com/aT8nHZN.png)

## Backend

Start it locally:

- `npm run start`
- <http://localhost:3333/>
  - Login using GitHub into the project `bluesoft-website-2022`

### Build and Deploy

The data is being stored automatically. The only time that something needs to be pushed, is when the schemas are updated or created. To do it, you need to:

- `sanity deploy`

## Frontend

Start it locally:

- `npm run dev`
- <http://localhost:3000/>

To deploy it, you need to create a PR and merge it into `main`. That will trigger the *Digital Ocean* build.
