import { NormMenuItem } from '@/router/types';

export const orderNo = 10;
export default {
  name: '运营管理',
  path: '/dashboard',
  children: [
    {
      path: '/welcome',
      name: '1-1',
    },
  ],
} as NormMenuItem;
