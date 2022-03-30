const Reviews = ({ reviews }: any) => {
  // console.log("reviews2:", reviews);
  return (
    <div className="mt-16">
      <h1 className="font-bold text-4xl my-2 text-primary ">Reviews</h1>
      <div className="mt-8">
        {!!reviews &&
          reviews.slice(0, 2).map((review: any) => {
            return (
              <div className="mb-6 px-12 py-16 bg-gradient-to-r from-cardGradientBlue-1 to-cardGradientBlue-2 border-solid border-2 border-primary shadow-sm rounded-md" key={review.id}>
                <p className="text-lato font-normal text-white text-base mb-1">
                  {review.content}
                </p>
                <div className="text-lato text-primary font-bold text-xl mb-1 mt-6">
                  - {review.author}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Reviews;
