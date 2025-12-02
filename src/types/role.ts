import { z }  from 'zod';

export const roleSchema = z.enum(['user', 'ai']);

export type Role = z.infer<typeof roleSchema>;