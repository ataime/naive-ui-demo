import { http } from '@/utils/http/axios';

export interface BasicResponseModel<T = any> {
  code: number;
  message: string;
  result: T;
}

export interface BasicPageParams {
  pageNumber: number;
  pageSize: number;
  total: number;
}


/**
 * @description: 获取管理员信息
 */
export function getAdminInfo() {
  return http.request({
    url: '/admin_info',
    method: 'GET',
  });
}


/**
 * @description: 获取用户信息
 */
export function getUserList() {
  return http.request({
    url: '/user/list',
    method: 'GET',
  });
}


/**
 * @description: 获取用户信息
 */
export function getMatchmakerList() {
  return http.request({
    url: '/matchmaker/list',
    method: 'GET',
  });
}

/**
 * @description: 用户新增
 */
export function addUser(params) {
  return http.request(
    {
      url: '/users',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 用户登录
 */
export function login(params) {
  return http.request<BasicResponseModel>(
    {
      url: '/login',
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 用户修改密码
 */
export function changePassword(params, uid) {
  return http.request(
    {
      url: `/user/u${uid}/changepw`,
      method: 'POST',
      params,
    },
    {
      isTransformResponse: false,
    }
  );
}

/**
 * @description: 用户登出
 */
export function logout(params) {
  return http.request({
    url: '/login/logout',
    method: 'POST',
    params,
  });
}
