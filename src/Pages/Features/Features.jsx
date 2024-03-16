const Features = () => {
  return (
    <div>
      <div className="mt-6 text-center">
        <h2 className="text-4xl text-orange-500  mb-6">Feature</h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 container mx-auto">
          {data.map((data) => (
            <div key={data.id}>
              <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={data.img}
                    alt="img"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{data.title}</h2>
                  <p>{data.description}</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    img: "https://designingmedia.com/xtremefitness/wp-content/uploads/2022/03/flex-muscle.png",
    title: "Flex Muscle",
    description:
      "The largest selection fitness articles exercises workouts, supplements & community to help you reach your goals .",
  },
  {
    id: 2,
    img: "https://designingmedia.com/xtremefitness/wp-content/uploads/2022/03/weight-lifting.png",
    title: "Weight Lifting",
    description:
      "The largest selection fitness articles exercises workouts, supplements & community to help you reach your goals .",
  },
  {
    id: 3,
    img: "https://designingmedia.com/xtremefitness/wp-content/uploads/2022/03/abdominal-sessipons.png",
    title: "Abdominal SESSIONS",
    description:
      "The largest selection fitness articles exercises workouts, supplements & community to help you reach your goals .",
  },
];

export default Features;
