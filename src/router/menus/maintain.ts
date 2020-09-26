import { NormMenuItem } from '@/router/types';

export const orderNo = 30;
export default {
  name: '维护管理',
  path: '/dashboard',
  children: [
    {
      path: '/welcome',
      name: '1-1',
    },
  ],
} as NormMenuItem;
