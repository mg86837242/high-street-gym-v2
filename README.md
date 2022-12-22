# High Street Gym v2

A gym website project created for school work.

## 🛠️ Installation

WIP

## 📖 Dev Use Only

### 1. ✅ To-Do List

#### 1.1 Coding

-   [x] Database modeling
-   [ ] Models
-   [ ] Controllers
-   [ ] Views

#### 1.2 Research

-   [x] React 18
-   [x] Vite – for bundling and scaffolding
-   [x] Git – for version control
-   [x] Prettier – for code formatting, subsequently improving code consistency and readability
-   [x] ESLint – for code quality, subsequently improving code consistency and readability
-   [x] Sequelize – ORM for data modeling
-   [ ] ...

### 2. 🔁 Changelogs

These changelogs are created as quick references. In real development and production, changelogs will be managed within GitHub releases and/or Wiki.

#### V0

#### V1

This version is created because the previous version is stuck on the coding of model .js files, since using plain SQL to write complex queries is rather cumbersome to solve the issue raised by the complexity of the database design/modeling (too many many-to-many relationships).

This version will focus on the implementation of ORM.

-   Adopt Sequelize as the ORM tool, subsequently leads to the change of data modeling
-   Provide an alternative solution by using npm scripts to automate the creation and population of tables in an existing [MySQL schema/database](https://stackoverflow.com/questions/11618277/difference-between-schema-database-in-mysql) with the same name as the database string specified in `./src/data/database.js`, this approach is inspired by the [seeding in Prisma](https://www.prisma.io/docs/guides/database/seed-database).

#### V2

This version is created because of an issue encountered during the implementation of [`sequelize-auto`](https://github.com/sequelize/sequelize-auto) and [basing the .prettierignore on .gitignore and .eslintignore](https://prettier.io/docs/en/install.html), the later calls for [these solutions](https://stackoverflow.com/questions/65635648/how-to-base-prettierignore-file-on-gitignore). As the possibility of incorrectly specifying the path has been ruled out, the issue is potentially caused by [the use of proxy server](https://techcommunity.microsoft.com/t5/windows-powershell/the-term-is-not-recognized-as-the-name-of-a-cmdlet/m-p/1414518) when using `parcel` and `webpack`. More importantly, the project file/folder structure in Vite is more close to the one used in Next.js, which will help the developer to smooth out the transition to Next.js in the future.

This version will focus on the implementation of ORM.

-   Adopt Vite as the [bundler](https://beta.reactjs.org/learn/start-a-new-react-project), subsequently leads to [restructuring files/folders](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
-   Configure ESLint, with reference to Prettier and Git, and enforce linting rules
-   Remodel the database, removing the `Gyms` table and replacing the `Users` table by the `Logins` table
