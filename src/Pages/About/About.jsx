const About = () => {
  return (
    <div className="pt-8">
      <div className="container mx-auto text-center "></div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 flex items-end justify-end">
          <img
            className="w-[400px] h-[400px]"
            src="https://designingmedia.com/xtremefitness/wp-content/uploads/2022/03/about-us-image.jpg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-orange-500 text-3xl">About Us</h2>

          <p className="text-5xl">WELCOME TO THE REVITALIZE FITNESS</p>
          <p>
            At REVITALIZE, we go beyond traditional fitness. With
            state-of-the-art facilities, experienced trainers, and a supportive
            community, we are committed to helping you achieve holistic
            well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
