import { z } from 'zod';
import { roleSchema } from './role';
import type { ReactNode } from 'react';

export const messageSchema = z.object({
  id: z.number(),
  role: roleSchema,
});

export type Message = (z.infer<typeof messageSchema> & { text: ReactNode });