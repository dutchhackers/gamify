import { Badge } from "@gamify/shared"

export interface ObtainedBadges {
    [key: number]: {
      badge: Badge,
      amount: number
    }
  }