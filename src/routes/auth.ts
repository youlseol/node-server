// src/routes/auth.ts
import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const SECRET_KEY = 'your-secret-key';

router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;

  // 데이터베이스에서 사용자 정보 확인 후 검증
  const isAuthenticated = username === 'user' && password === 'password';

  if (isAuthenticated) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

export default router;
