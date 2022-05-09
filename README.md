# Feedget 

<p align="center">
  <img alt="Feedget Mockup" src=".github/mockup.png" width="100%">
</p>

## 🔖 Layout

You can view the project layout through the link below:

- [Feedback Widget - Figma](https://www.figma.com/community/file/1102912516166573468)

## 🚀 Technologies

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Vitejs](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)

### Server

```bash
# From the project root folder access the 'server' folder
$ cd server

# Install the dependencies
$ npm install

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
$ cp .env.example .env

# With a PostgreSQL running, run the migrations
$ npx prisma migrate dev

# Start the server
$ npm run dev
```

### Web

**Make sure to have the server running**

```bash
# From the project root folder access the 'web' folder
$ cd web

# Install the dependencies
$ npm install

# Make a copy of '.env.local.example' to '.env.local'
$ cp .env.local.example .env.local

# Start the application
$ npm run dev
```

### Mobile

**Make sure to have the server running**

```bash
# From the project root folder access the 'mobile' folder
$ cd mobile

# Install the dependencies
$ npm install

# If you are going to emulate with android, run this command
$ npm run android

# If you are going to emulate with ios, run this command
$ npm run ios

# Or just start the bundle
$ npm run start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
