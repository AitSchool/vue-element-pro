import commonRoutes, { matchAllRouter } from './routerCommon';
import permissionRoutes from './routerPermission';

// 权限返回例子，需要请求返回 Promise
const fetchPermission = () => Promise.resolve([
  'general-information',
  'page-manage-home',
  'market-manage',
  'market-appointment',
  'product-manage',
  'order-manage',
  'user-manage',
  'setting-company',
  'setting-manager',
]);

// 权限路由过滤
const filterPermissionRoutes = (routes, permissions) => {
  const filterRoutes = [];
  routes.forEach((data) => {
    const route = { ...data };
    const notPermission = !route.permission;
    const hasPermission = permissions.includes(route.permission);
    const passPermission = notPermission || hasPermission;
    let hasPath = true;
    if (route.children) {
      route.children = filterPermissionRoutes(data.children, permissions);
      if (route.children.length === 0) {
        hasPath = false;
      }
    }
    if (passPermission && hasPath) {
      filterRoutes.push(route);
    }
  });
  return filterRoutes;
};

// 返回过滤后的权限路由
const fetchFilterPermissionRoutes = async () => {
  const permissions = await fetchPermission();
  const routes = permissionRoutes;
  return filterPermissionRoutes(routes, permissions);
};

export {
  commonRoutes, matchAllRouter, permissionRoutes, fetchFilterPermissionRoutes,
};
