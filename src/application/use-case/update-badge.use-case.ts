import { Pingu } from '../../model/pingu.model';

export function updateBadge(pingu: Pingu) {
  if (pingu.isAngry) {
    return {
      ...pingu,
      badge: '😡',
    };
  }
  if (!pingu.isAngry) {
    return {
      ...pingu,
      badge: '😃',
    };
  }
}
