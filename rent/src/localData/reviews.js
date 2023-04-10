const reviews = [
  {
    name: "Ruben Rodrigues",
    date: new Date("11/23/2022"),
    rating: 4,
    title: "Fast delivery",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "John Doe",
    date: new Date("12/26/2022"),
    rating: 2,
    title: "Trustable Shop",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Turpis massa tincidunt dui ut ornare lectus sit. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Augue ut lectus arcu bibendum at. Vitae proin sagittis nisl rhoncus mattis rhoncus. Morbi tristique senectus et netus et malesuada fames ac turpis. Semper risus in hendrerit gravida rutrum quisque non tellus. Sodales ut eu sem integer vitae justo. Vitae ultricies leo integer malesuada nunc. In pellentesque massa placerat duis ultricies lacus. Non arcu risus quis varius quam quisque id. Porta nibh venenatis cras sed. A erat nam at lectus urna duis convallis convallis tellus.",
  },
  {
    name: "Alex Picker",
    date: new Date("02/21/2023"),
    rating: 3,
    title: "Not bad",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. Turpis massa tincidunt dui ut ornare lectus sit. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Augue ut lectus arcu bibendum at. Vitae proin sagittis nisl rhoncus mattis rhoncus. Morbi tristique senectus et netus et malesuada fames ac turpis. Semper risus in hendrerit gravida rutrum quisque non tellus.",
  },
  {
    name: "Bruce Wayne",
    date: new Date("03/02/2023"),
    rating: 5,
    title: "Amazing",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in hac habitasse platea. ",
  },
];

export const getReviews = filter => {
  if (filter === "all") return reviews;
  if (filter === "1") return reviews.filter(review => review.rating === 1);
  if (filter === "2") return reviews.filter(review => review.rating === 2);
  if (filter === "3") return reviews.filter(review => review.rating === 3);
  if (filter === "4") return reviews.filter(review => review.rating === 4);
  if (filter === "5") return reviews.filter(review => review.rating === 5);
};
