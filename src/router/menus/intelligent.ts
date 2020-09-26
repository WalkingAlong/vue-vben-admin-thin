import { NormMenuItem } from '@/router/types';

export const orderNo = 50;
export default {
  name: '智能分析',
  path: '/dashboard',
  children: [
    {
      path: '/welcome',
      name: '1-1',
    },
  ],
} as NormMenuItem;
