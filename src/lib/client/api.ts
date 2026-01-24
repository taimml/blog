import { App } from '@/server/api/index';
import { treaty } from '@elysiajs/eden';

let origin = '';
if (typeof window !== 'undefined') {
  origin = window.location.origin;
}
export const api = treaty<App>(`${origin}`).api;
