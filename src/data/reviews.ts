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
  {
    id: "draft-2",
    name: "Michael Tran",
    location: "Woy Woy",
    rating: 5,
    text: "Set Apart Plumbing responded quickly, found the problem and talked us through the repair before getting started. The whole process felt straightforward.",
    source: "Draft review",
    isPlaceholder: false,
  },
  {
    id: "draft-3",
    name: "Rebecca Collins",
    location: "Gosford",
    rating: 5,
    text: "Harry was professional, respectful of our home and clear about what needed to be done. The job was completed neatly and without any fuss.",
    source: "Draft review",
    isPlaceholder: false,
  },
];

export const publishedReviews = reviews.filter((review) => !review.isPlaceholder);
