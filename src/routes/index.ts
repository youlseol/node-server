// src/routes/index.ts
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express and Node.js using Router!');
});

export default router;
