export const getRatingDisplay = (rating: number) => {
  if (rating > 4.4) {
    return { grade: "A", label: "GREAT", bgColor: "bg-finnick-green" };
  } else if (rating > 3.4) {
    return { grade: "B", label: "GOOD", bgColor: "bg-finnick-blue" };
  } else if (rating > 2.4) {
    return { grade: "C", label: "NORMAL", bgColor: "bg-finnick-yellow" };
  } else {
    return { grade: "D", label: "BAD", bgColor: "bg-finnick-red" };
  }
};
