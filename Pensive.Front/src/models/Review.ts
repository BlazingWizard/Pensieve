interface Review {
  id: number;
  type: string;
  title: string;
  mark: number;
  text?: string;
  posterUrl?: string;
}

export default Review;
