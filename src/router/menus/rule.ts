import { NormMenuItem } from '@/router/types';

export const orderNo = 60;
export default {
  name: '规则引擎',
  path: '/dashboard',
  children: [
    {
      path: '/welcome',
      name: '1-1',
    },
  ],
} as NormMenuItem;
