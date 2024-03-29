import Typical from "react-typical";
import img from "../../assets/pallob .png";
import pdf from "../../assets/partho cv.pdf";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="mt-32">
      <div className="bg-gray-700 mt-32 mb-20">
        <div className="hero container mx-auto md:h-96">
          <div className="hero-content flex-col lg:flex-row">
            <div className="hidden md:block">
              <img
                className=" banner-img bottom-28 relative"
                src={img}
                alt="img"
              />
            </div>
            <div className="md:w-3/5 md:text-left bottom-20 relative ml-20">
              <h1 className="text-3xl md:text-6xl">Partho bepary</h1>

              <Typical
                className="text-3xl text-white"
                steps={[
                  "I am Web Developer...",
                  500,
                  "I am React Developer...",
                  1000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <a className="btn btn-primary" download={pdf} href={pdf}>
                Dowonload CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
