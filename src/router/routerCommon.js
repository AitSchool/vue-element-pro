const AccountLogin = () => import(/* webpackChunkName: "error" */ '@/views/AccountLogin.vue');
const AccountRegister = () => import(/* webpackChunkName: "error" */ '@/views/AccountRegister.vue');
const NotFound = () => import(/* webpackChunkName: "error" */ '@/views/ErrorNotfound.vue');
const ServiceError = () => import(/* webpackChunkName: "error" */ '@/views/ErrorService.vue');

const defaultSuffixTitle = ' - 嘻嘻😁';
export default [
  // {
  //   path: '/',
  //   redirect: { name: 'Login' },
  // },
  {
    path: '/login',
    component: AccountLogin,
    name: 'AccountLogin',
    meta: {
      title: `登录${defaultSuffixTitle}`,
    },
  },
  {
    path: '/register',
    component: AccountRegister,
    name: 'AccountRegister',
    meta: {
      title: `注册${defaultSuffixTitle}`,
    },
  },
  {
    path: '/404',
    component: NotFound,
    name: 'NotFound',
    meta: {
      title: `404${defaultSuffixTitle}`,
    },
  },
  {
    path: '/500',
    component: ServiceError,
    name: 'ServiceError',
    meta: {
      title: `500${defaultSuffixTitle}`,
    },
  },
];

export const matchAllRouter = {
  path: '*',
  redirect: { name: 'NotFound' },
};
