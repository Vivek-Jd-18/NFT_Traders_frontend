import type from './type';

const AdminLoginFetch = (payload) => ({
  type: type.fetchAdminLoginSuccess,
  payload,
});

const AdminLogOutAction = (payload) => ({
  type: type.AdminlogOutSuccess,
  payload,
});
export { AdminLoginFetch, AdminLogOutAction };

