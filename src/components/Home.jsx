import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from '../assets/react1.svg';
import img1 from '../assets/img/about.jpg';

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-[#13547A] to-[#7FCFC6]">
        <div className="min-h-screen flex items-center justify-center flex-col md:flex-row md:justify-between mx-5 md:mx-32">
            <div className="md:w-2/4 text-center">
                <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                    About<span className="text-3xl md:text-5xl font-semibold text-brightGreen"> Us</span>
                </h2>
    
                <p className="text-brightGreen mt-5 text-start mb-5">
                    A strong information Technology infrastructure is extremely critical for any country to achieve
                    robust economic growth, competitive manpower development, high performing education system, and
                    enhanced health care system. 
                </p>

                <Link to="contact" spy={true} smooth={true} duration={500}>
                    {/* <Button title="About us" /> */}
                </Link>
            </div>

            <div className="w-full md:w-2/4">
                <div className="relative rounded-lg overflow-hidden shadow-xl md:mt-0 mt-10 ">
                    <div style={{ paddingBottom: "56.25%" }}>
                        <img
                            src={img1}
                            alt="img"
                            className="object-cover absolute w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;
