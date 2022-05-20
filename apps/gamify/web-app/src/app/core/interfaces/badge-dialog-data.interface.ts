import { BadgeTier } from "@gamify/shared";

export interface BadgeDialogData {
    action: 'create' | 'edit';
    name: string;
    tier: BadgeTier|'';
    repeatedlyObtainable: boolean;
    error?: string|string[]
  }