import { NormMenuItem } from '@/router/types';

export const orderNo = 20;
export default {
  name: '健康管理',
  path: '/dashboard',
  children: [
    {
      path: '/welcome',
      name: '1-1',
    },
  ],
} as NormMenuItem;
