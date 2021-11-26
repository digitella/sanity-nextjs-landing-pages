export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61a09440bef5151b3fb13bad',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xme3s54f',
                  apiId: '4552c016-0328-4674-bc17-54ca39e613cf'
                },
                {
                  buildHookId: '61a0944023a7bb187d1b018c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4gy618ap',
                  apiId: '994da5cf-47cb-45cf-a2cd-3eb5b2372766'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitella/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4gy618ap.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
