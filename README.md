# Project Name

> Customer Reviews Service

## Related Projects

  - https://github.com/rpt25-fec-latke/

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> You will need to add two files in order to get this repo working properly:

> 1) A file titled "database.config.js" - in this file add your MySQL credentials in this format -
>   const token = {
>     user: 'username_here',
>     password: 'password_here',
>   };
>
>   module.exports = token;

> 2) A file titled ".env" with your AWS access key ID and AWS secret key in this format (for development) -
>   AWSAccessKeyId=access_key_id_here
>   AWSSecretKey=secret_key_here
>
> Following that, make sure to seed your database by running these commands from the root of the directory:
  ```sh
  npm run db-setup
  npm run seed
  ```
> From there you should be able to start up your server (port 3001) by running
  ```sh
  npm run server-dev
  ```
> And build by running
  ```sh
  npm run react-dev
  ```
> Make sure to edit the bundle name in webpack.config.js to be for your S3 bundle if you want to build out to there, you'll also need to update the link in the index.html to pull from your bundle. Otherwise, update both to build locally.
> To test, run
  ```sh
  npm run test
  ```
## Requirements

- Node 6.13.0
- MySQL 2.18.1

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
npm install -g nodemon
```
