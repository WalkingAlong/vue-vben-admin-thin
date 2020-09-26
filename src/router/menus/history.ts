import { NormMenuItem } from '@/router/types';

export const orderNo = 40;
export default {
  name: '历史管理',
  path: '/dashboard',
  children: [
    {
      path: '/welcome',
      name: '1-1',
    },
  ],
} as NormMenuItem;
