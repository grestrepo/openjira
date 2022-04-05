// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ok: boolean;
  message: string;
  method: string;
  secret: string;
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(process.env);
  res.status(201).json({
    ok: true,
    message: 'todo correcto',
    method: req.method || 'No hay method',
    secret: process.env.SECRET_KEY!
  });
}
