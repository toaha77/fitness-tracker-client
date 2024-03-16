import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="mt-4">
      <h2 className="text-center text-orange-500 text-3xl">Team member</h2>

      <p className="mt-2 text-center text-5xl">TEAM OF EXPERT COACHES</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 container mx-auto">
          {data.map((data) => (
            <div key={data.id}>
              <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={data.img}
                    alt="img"
                    className="rounded-full"
                  />
                </figure>
                <div className= "items-center text-center">
                  <h2 className="text-2xl mt-1 uppercase">{data.name}</h2>
                  <p>{data.title}</p>
                </div>
                <div className="flex justify-center gap-1 pb-4">
                    <p>{data.face}</p>
                    <p>{data.insta}</p>
                    <p>{data.x}</p>

                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};


const data = [
    {
        "id" : 1,
        "img": "https://designingmedia.com/xtremefitness/wp-content/uploads/2024/01/team-1-1.jpg",
        "name" : "Marvin joiner",
        "title" : "Crossfit Coach",
        "face" : <FaFacebook></FaFacebook>,
        "insta" : <FaInstagram></FaInstagram>,
        "x" : <FaTwitter></FaTwitter>
    },
    {
        "id" : 2,
        "img": "https://designingmedia.com/xtremefitness/wp-content/uploads/2024/01/team-2-1.jpg",
        "name" : "Patricia woodrum",
        "title" : "Cardio & Conditioning",
        "face" : <FaFacebook></FaFacebook>,
        "insta" : <FaInstagram></FaInstagram>,
        "x" : <FaTwitter></FaTwitter>
    },
    {
        "id" : 1,
        "img": "https://designingmedia.com/xtremefitness/wp-content/uploads/2024/01/team-3-1.jpg",
        "name" : "Hannaz Stone",
        "title" : "Fitness Coach",
        "face" : <FaFacebook></FaFacebook>,
        "insta" : <FaInstagram></FaInstagram>,
        "x" : <FaTwitter></FaTwitter>
    },
]

export default Team;
