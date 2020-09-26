import { NormMenuItem } from '@/router/types';

export const orderNo = 70;
export default {
  name: '知识库',
  path: '/dashboard',
  children: [
    {
      path: '/welcome',
      name: '1-1',
    },
  ],
} as NormMenuItem;
