import { useBase } from 'h3';
import { register } from './model';

const router = createRouter();

router.post(
  '/register',
  defineEventHandler(async (event) => register(event)),
);

export default useBase('/api/auth', router.handler);
