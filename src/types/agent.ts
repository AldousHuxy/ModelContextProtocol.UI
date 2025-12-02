import type { JSX } from 'react';
import { z } from 'zod';

export const AgentSchema = z.object({
  id: z.string(),
  name: z.string(),
  // icon is not easily representable in zod, so we skip it here
});

export type Agent = (z.infer<typeof AgentSchema> & { icon: JSX.Element });