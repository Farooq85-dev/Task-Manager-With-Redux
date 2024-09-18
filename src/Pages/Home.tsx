import { MdNavigateNext } from "react-icons/md";
import HomeImg from "../assets/images/home-img.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className=" flex flex-col justify-center items-center gap-4 shadow-md rounded-2xl p-6 bg-[#e7e7e7]">
        <img
          width={500}
          height={500}
          src={HomeImg}
          alt="Shoes"
          loading="lazy"
        />
        <div className="flex flex-col justify-center items-center gap-1">
          <h2 className="text-4xl  text-center font-semibold">
            Conveninet task manager
          </h2>
          <h3 className="text-2xl text-center">
            Keep healthy work-life balance
          </h3>
        </div>
        <Link to="/tasks">
          <button className="btn btn-neutral text-xl">
            Get Started <MdNavigateNext size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
