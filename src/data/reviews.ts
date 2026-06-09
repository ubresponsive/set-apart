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
    id: "draft-1",
    name: "Andrew McElroy",
    location: "Umina Beach",
    rating: 5,
    text: "Harry was easy to deal with, explained the issue clearly and left everything tidy. We would happily call Set Apart Plumbing again.",
    source: "Draft review",
    isPlaceholder: false,
  },
];

export const publishedReviews = reviews.filter((review) => !review.isPlaceholder);
