/**
 * @module  Theme
 * @name    we-theme-cluster
 */

module.exports = {
  // theme config
  configs: {
    emailTemplates: {
      path: 'templates/email',
    },
    javascript: 'files/public/script.js',
    stylesheet: 'files/public/style.css'
  },

  autoLoadAllTemplates: true,
  // will be auto loaded
  templates: {},
  // set layouts here
  layouts: {
    'default': {
      template: __dirname + '/templates/server/layouts/default-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    },
    'fullwidth': {
      template: __dirname + '/templates/server/layouts/full-width-layout.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        }
      }
    },
    'home': {
      template: __dirname + '/templates/server/layouts/home.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        }
      }
    },
    'article-layout': {
      template: __dirname + '/templates/server/layouts/article.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        }
      }
    },
    'wejsdoc': {
      template: __dirname + '/templates/server/layouts/wejsdoc.hbs',
      regions: {
        highlighted: {
          name: 'Highlighted'
        },
        afterContent: {
          name: 'After content'
        },
        sidebar: {
          name: 'Sidebar'
        }
      }
    }
  },
  widgets: {}
};
