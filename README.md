# ARGENT BANK

![Argent bank logo](/argentbank-front/src/assets/argentBankLogo.png)

Argent Bank is an online bank service where customers have the possibility to login in order to manage their bank account.

**Below the main goals of the project**:

- API Integration
- Use of Redux (state management)
- Swagger (future endpoints list)

---

## Prerequisites

- [Git](https://git-scm.com/)
- [nodeJS](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/)
- [React](https://fr.reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Redux](https://redux.js.org/)
- [Redux Persist](https://www.npmjs.com/package/redux-persist)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [PropTypes](https://www.npmjs.com/package/prop-types)
- [Swagger](https://swagger.io/)

---

## Installation

### Clone the repository

```sh
git clone https://github.com/Yas2410/YaseminKocak_13_26092022.git
```

### BACK-END Launching

Move to the back-end folder : `cd argentbank-back`  
Install the dependencies : `npm install`  
Start local dev server : `npm run dev:server`  
Populate database with two users : `npm run populate-db`

_Server should now be running at http://locahost:3001 and you will now have two users in the MongoDB database_

1. Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

2. Steve Rogers

- First Name: `Steve`
- Last Name: `Rogers`
- Email: `steve@rogers.com`
- Password: `password456`

_Data can be seen in MongoDB Compass on `argentBankDB/users/` directory_

### FRONT-END Launching

Move to the front-end folder : `cd argentbank-front`  
Install the dependencies : `npm install`  
Launch the project : `npm start`

---

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs
