export default [
  {
    path: '/_/user',
    layout: false,
    routes: [
      {
        path: '/_/user',
        routes: [
          {
            name: 'login',
            path: '/_/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/_/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/_/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/_/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/_/list',
    component: './TableList',
  },
  {
    path: '/_/',
    redirect: '/_/welcome',
  },
  {
    component: './404',
  },
];
