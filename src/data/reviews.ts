export type Review = {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  source: string;
  isPlaceholder: boolean;
};

export const reviews: Review[] = [
  {
    id: "placeholder-1",
    name: "Customer name",
    location: "Central Coast",
    rating: 5,
    text: "Replace this placeholder with a genuine customer review.",
    source: "Google",
    isPlaceholder: true,
  },
];

export const publishedReviews = reviews.filter((review) => !review.isPlaceholder);
