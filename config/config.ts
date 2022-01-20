// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/_/user',
      layout: false,
      routes: [
        {
          path: '/_/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
        {
          path: '/_/user',
          redirect: '/_/user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/_/user/register-result',
          component: './user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/_/user/register',
          component: './user/register',
        },
        {
          component: '404',
        },
      ],
    },
    {
      path: '/_/dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      routes: [
        {
          path: '/_/dashboard',
          redirect: '/_/dashboard/analysis',
        },
        {
          name: 'analysis',
          icon: 'smile',
          path: '/_/dashboard/analysis',
          component: './dashboard/analysis',
        },
        {
          name: 'monitor',
          icon: 'smile',
          path: '/_/dashboard/monitor',
          component: './dashboard/monitor',
        },
        {
          name: 'workplace',
          icon: 'smile',
          path: '/_/dashboard/workplace',
          component: './dashboard/workplace',
        },
      ],
    },
    {
      path: '/_/form',
      icon: 'form',
      name: 'form',
      routes: [
        {
          path: '/_/form',
          redirect: '/_/form/basic-form',
        },
        {
          name: 'basic-form',
          icon: 'smile',
          path: '/_/form/basic-form',
          component: './form/basic-form',
        },
        {
          name: 'step-form',
          icon: 'smile',
          path: '/_/form/step-form',
          component: './form/step-form',
        },
        {
          name: 'advanced-form',
          icon: 'smile',
          path: '/_/form/advanced-form',
          component: './form/advanced-form',
        },
      ],
    },
    {
      path: '/_/list',
      icon: 'table',
      name: 'list',
      routes: [
        {
          path: '/_/list/search',
          name: 'search-list',
          component: './list/search',
          routes: [
            {
              path: '/_/list/search',
              redirect: '/_/list/search/articles',
            },
            {
              name: 'articles',
              icon: 'smile',
              path: '/_/list/search/articles',
              component: './list/search/articles',
            },
            {
              name: 'projects',
              icon: 'smile',
              path: '/_/list/search/projects',
              component: './list/search/projects',
            },
            {
              name: 'applications',
              icon: 'smile',
              path: '/_/list/search/applications',
              component: './list/search/applications',
            },
          ],
        },
        {
          path: '/_/list',
          redirect: '/_/list/table-list',
        },
        {
          name: 'table-list',
          icon: 'smile',
          path: '/_/list/table-list',
          component: './list/table-list',
        },
        {
          name: 'basic-list',
          icon: 'smile',
          path: '/_/list/basic-list',
          component: './list/basic-list',
        },
        {
          name: 'card-list',
          icon: 'smile',
          path: '/_/list/card-list',
          component: './list/card-list',
        },
      ],
    },
    {
      path: '/_/profile',
      name: 'profile',
      icon: 'profile',
      routes: [
        {
          path: '/_/profile',
          redirect: '/_/profile/basic',
        },
        {
          name: 'basic',
          icon: 'smile',
          path: '/_/profile/basic',
          component: './profile/basic',
        },
        {
          name: 'advanced',
          icon: 'smile',
          path: '/_/profile/advanced',
          component: './profile/advanced',
        },
      ],
    },
    {
      name: 'result',
      icon: 'CheckCircleOutlined',
      path: '/_/result',
      routes: [
        {
          path: '/_/result',
          redirect: '/_/result/success',
        },
        {
          name: 'success',
          icon: 'smile',
          path: '/_/result/success',
          component: './result/success',
        },
        {
          name: 'fail',
          icon: 'smile',
          path: '/_/result/fail',
          component: './result/fail',
        },
      ],
    },
    {
      name: 'exception',
      icon: 'warning',
      path: '/_/exception',
      routes: [
        {
          path: '/_/exception',
          redirect: '/_/exception/403',
        },
        {
          name: '403',
          icon: 'smile',
          path: '/_/exception/403',
          component: './exception/403',
        },
        {
          name: '404',
          icon: 'smile',
          path: '/_/exception/404',
          component: './exception/404',
        },
        {
          name: '500',
          icon: 'smile',
          path: '/_/exception/500',
          component: './exception/500',
        },
      ],
    },
    {
      name: 'account',
      icon: 'user',
      path: '/_/account',
      routes: [
        {
          path: '/_/account',
          redirect: '/_/account/center',
        },
        {
          name: 'center',
          icon: 'smile',
          path: '/_/account/center',
          component: './account/center',
        },
        {
          name: 'settings',
          icon: 'smile',
          path: '/_/account/settings',
          component: './account/settings',
        },
      ],
    },
    {
      name: 'editor',
      icon: 'highlight',
      path: '/_/editor',
      routes: [
        {
          path: '/_/editor',
          redirect: '/_/editor/flow',
        },
        {
          name: 'flow',
          icon: 'smile',
          path: '/_/editor/flow',
          component: './editor/flow',
        },
        {
          name: 'mind',
          icon: 'smile',
          path: '/_/editor/mind',
          component: './editor/mind',
        },
        {
          name: 'koni',
          icon: 'smile',
          path: '/_/editor/koni',
          component: './editor/koni',
        },
      ],
    },
    {
      path: '/_/',
      redirect: '/_/dashboard/analysis',
    },
    {
      component: '404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/_/',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
      // 或者使用在线的版本
      // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
      schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
});
