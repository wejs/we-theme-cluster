# we-theme-cluster a we.js theme

## How to develop:

### install for development:

#### 1 install all dependencies
```sh
npm install
```

#### 2 link this theme as npm module in your we.js project
```sh
#First in your theme folder:
## you may need sudo for this command
ǹpm link 
# then enter in your project and type:
npm link we-theme-cluster
```

#### 3 change your project settings to use this theme:

**file:** [project]/config/themes.js
```js
module.exports.themes = {
    enabled: [
      'we-theme-cluster',
      'we-theme-admin-default'
    ],
    app: 'we-theme-cluster',
    admin: 'we-theme-admin-default'
};
```

### Run the theme tasks and project

##### Run the tasks
```sh
# in  theme folder
npm run tasks
```

##### Run the project
```sh
# in project folder
npm run dev
```

## License

MIT
