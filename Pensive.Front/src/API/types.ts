interface Review {
  id: number;
  type: string;
  title: string;
  posterUrl?: string;
}

interface ReviewType {
  name: string;
  code: string;
}

export type { Review, ReviewType };
