import BasicLayout from '@/components/BasicLayout.vue';

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue');
const PageManageHome = () => import(/* webpackChunkName: "page" */ '@/views/PageManageHome.vue');
const MarketManage = () => import(/* webpackChunkName: "market" */ '@/views/MarketManage.vue');
const MarketAppointment = () => import(/* webpackChunkName: "market" */ '@/views/MarketAppointment.vue');
const ProductManage = () => import(/* webpackChunkName: "product" */ '@/views/ProductManage.vue');
const ProductManageSKU = () => import(/* webpackChunkName: "product" */ '@/views/ProductManageSKU.vue');
const ProductManageClassify = () => import(/* webpackChunkName: "product" */ '@/views/ProductManageClassify.vue');
const OrderManage = () => import(/* webpackChunkName: "order" */ '@/views/OrderManage.vue');
const OrderManageItem = () => import(/* webpackChunkName: "order" */ '@/views/OrderManageItem.vue');
const UserManage = () => import(/* webpackChunkName: "user" */ '@/views/UserManage.vue');
const UserManageItem = () => import(/* webpackChunkName: "user" */ '@/views/UserManageItem.vue');
const UserManageEdit = () => import(/* webpackChunkName: "user" */ '@/views/UserManageEdit.vue');
const SettingCompany = () => import(/* webpackChunkName: "setting" */ '@/views/SettingCompany.vue');
const SettingManager = () => import(/* webpackChunkName: "setting" */ '@/views/SettingManager.vue');
const SettingManagerCreate = () => import(/* webpackChunkName: "setting" */ '@/views/SettingManagerCreate.vue');
const SettingManagerEdit = () => import(/* webpackChunkName: "setting" */ '@/views/SettingManagerEdit.vue');
const defaultSuffixTitle = ' - 嘻嘻😁';

const permissionRoutes = [
  {
    path: '/',
    redirect: { name: 'DashboardGeneral' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect: { name: 'DashboardGeneral' },
    component: BasicLayout,
    meta: {
      breadcrumb: {
        title: '概况',
        replace: false,
      },
      nav: {
        icon: 'el-icon-pie-chart',
        title: '概况',
      },
    },
    children: [
      {
        path: '/dashboard',
        name: 'DashboardGeneral',
        permission: 'general-information',
        component: Dashboard,
        meta: {
          title: `概况${defaultSuffixTitle}`,
          breadcrumb: {
            title: '数据分析',
            replace: false,
          },
        },
      },
    ],
  },
  {
    path: '/page',
    name: 'PageManage',
    redirect: { name: 'PageManageHome' },
    component: BasicLayout,
    meta: {
      breadcrumb: {
        title: '页面',
        replace: false,
      },
      nav: {
        icon: 'el-icon-house',
        title: '首页',
      },
    },
    children: [
      {
        path: '/page/home',
        name: 'PageManageHome',
        permission: 'page-manage-home',
        component: PageManageHome,
        meta: {
          title: `首页管理${defaultSuffixTitle}`,
          breadcrumb: {
            title: '首页管理',
            replace: false,
          },
        },
      },
    ],
  },
  {
    path: '/market',
    name: 'Market',
    component: BasicLayout,
    meta: {
      breadcrumb: {
        title: '活动',
        replace: false,
      },
      nav: {
        icon: 'el-icon-wind-power',
        title: '活动',
      },
    },
    children: [
      {
        path: '/market',
        name: 'MarketManage',
        permission: 'market-manage',
        component: MarketManage,
        meta: {
          title: `活动页${defaultSuffixTitle}`,
          nav: {
            title: '活动页',
          },
          breadcrumb: {
            title: '活动页',
            replace: false,
          },
        },
      },
      {
        path: '/market/appointment',
        name: 'MarketAppointment',
        permission: 'market-appointment',
        component: MarketAppointment,
        meta: {
          title: `活动预约${defaultSuffixTitle}`,
          nav: {
            title: '活动预约',
          },
          breadcrumb: {
            title: '活动预约',
            replace: false,
          },
        },
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    component: BasicLayout,
    meta: {
      breadcrumb: {
        title: '商品',
        replace: false,
      },
      nav: {
        icon: 'el-icon-present',
        title: '商品',
      },
    },
    children: [
      {
        path: '/product',
        name: 'ProductManage',
        permission: 'product-manage',
        component: ProductManage,
        meta: {
          title: `所有商品${defaultSuffixTitle}`,
          nav: {
            title: '所有商品',
          },
          breadcrumb: {
            title: '所有商品',
            replace: false,
          },
        },
      },
      {
        path: '/product/classify',
        name: 'ProductManageClassify',
        permission: 'product-manage',
        component: ProductManageClassify,
        meta: {
          title: `商品分类${defaultSuffixTitle}`,
          nav: {
            title: '商品分类',
          },
          breadcrumb: {
            title: '商品分类',
            replace: false,
          },
        },
      },
      {
        path: '/product/:id',
        name: 'ProductManageSKU',
        permission: 'product-manage',
        component: ProductManageSKU,
        meta: {
          title: `商品 SKU${defaultSuffixTitle}`,
          breadcrumb: {
            title: 'SKU',
            replace: false,
          },
        },
      },
    ],
  },
  {
    path: '/order',
    name: 'Order',
    component: BasicLayout,
    redirect: { name: 'OrderManage' },
    meta: {
      breadcrumb: {
        title: '订单',
        replace: false,
      },
      nav: {
        icon: 'el-icon-tickets',
        title: '订单',
      },
    },
    children: [
      {
        path: '/order',
        name: 'OrderManage',
        permission: 'order-manage',
        component: OrderManage,
        meta: {
          title: `所有订单${defaultSuffixTitle}`,
          breadcrumb: {
            title: '所有订单',
            replace: false,
          },
        },
      },
      {
        path: '/order/:id',
        name: 'OrderManageItem',
        permission: 'order-manage',
        component: OrderManageItem,
        meta: {
          title: `订单详情${defaultSuffixTitle}`,
          breadcrumb: {
            title: 'SKU',
            replace: false,
          },
        },
      },
    ],
  },
  {
    path: '/user',
    name: 'User',
    component: BasicLayout,
    redirect: { name: 'UserManage' },
    meta: {
      breadcrumb: {
        title: '用户',
        replace: true,
      },
      nav: {
        icon: 'el-icon-user',
        title: '用户',
      },
    },
    children: [
      {
        path: '/user',
        name: 'UserManage',
        permission: 'user-manage',
        component: UserManage,
        meta: {
          title: `用户管理${defaultSuffixTitle}`,
        },
      },
      {
        path: '/user/:id',
        name: 'UserManageItem',
        permission: 'user-manage',
        component: UserManageItem,
        meta: {
          title: `用户详情${defaultSuffixTitle}`,
          breadcrumb: {
            title: '详情',
            replace: false,
          },
        },
      },
      {
        path: '/user/:id/edit',
        name: 'UserManageEdit',
        permission: 'user-manage',
        component: UserManageEdit,
        meta: {
          title: `编辑用户${defaultSuffixTitle}`,
          breadcrumb: {
            title: '编辑',
            replace: false,
          },
        },
      },
    ],
  },
  {
    path: '/setting',
    name: 'Setting',
    component: BasicLayout,
    meta: {
      nav: {
        icon: 'el-icon-setting',
        title: '设置',
      },
      breadcrumb: {
        title: '设置',
        replace: false,
      },
    },
    children: [
      {
        path: '/setting/company',
        name: 'SettingCompany',
        component: SettingCompany,
        permission: 'setting-company',
        meta: {
          title: `公司设置${defaultSuffixTitle}`,
          nav: {
            title: '公司',
          },
          breadcrumb: {
            title: '公司',
            replace: false,
          },
        },
      },
      {
        path: '/setting/manager',
        name: 'SettingManager',
        component: SettingManager,
        permission: 'setting-manager',
        meta: {
          title: `管理员${defaultSuffixTitle}`,
          nav: {
            title: '管理员',
          },
          breadcrumb: {
            title: '管理员',
            replace: false,
          },
        },
      },
      {
        path: '/setting/manager/create',
        name: 'SettingManagerCreate',
        component: SettingManagerCreate,
        permission: 'setting-manager',
        meta: {
          title: `添加子管理员${defaultSuffixTitle}`,
          breadcrumb: {
            title: '创建',
            replace: false,
          },
        },
      },
      {
        path: '/setting/manager/:id/edit',
        name: 'SettingManagerEdit',
        component: SettingManagerEdit,
        permission: 'setting-manager',
        meta: {
          title: `编辑子管理员${defaultSuffixTitle}`,
          breadcrumb: {
            title: '编辑',
            replace: false,
          },
        },
      },
    ],
  },
];

export default permissionRoutes;
