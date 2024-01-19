import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import ResImg from "../assets/img/Resedential.png"
import ComImg from "../assets/img/commercial.png"
import EntImg from "../assets/img/Enterprise.png"
const Courses = () => {
    return ( 
        <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 p-14">
            <Heading title1="Our" title2="Services"/>
        
        <div className=" flex flex-wrap justify-center gap-2 mt-2">
            <CoursesCard img={ResImg}  title="Resedential" par="We provide a dependable, fast internet Connection
                    with a local maintenance and support staff that 
                    you can rely on. For Residential Customer."/>
            <CoursesCard img={ComImg}  title="Commercial" par="We provide a site survey and guaranteed
            solutions with same-day service turnaround and fast, local tech support."/>
            <CoursesCard img={EntImg}  title="Enterprise" par="We provide redundancy solutions and advanced,
            microwave fixed wireless technology for the fastest, lowest latency signal available."/>
        </div>

        </div>
    );
}

export default Courses;