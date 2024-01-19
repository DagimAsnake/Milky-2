import img from "../assets/contact.svg";
import Heading from "../layout/Heading";
import Button from "../layout/Button";

const Contact = () => {
    return (  
        <div className="bg-gradient-to-r from-[#13547A] to-[#7FCFC6] flex flex-col items-center justify-center min-h-screen">
            <Heading title1="Contact" title2="Us"/>
            <div className="flex flex-col md:flex-row justify-between w-full ">
                <form className=" w-full md:w-2/5 space-y-5 pt-20">
                    <div className="flex flex-col mx-[10%]">
                        <label className="mx-[30%]" htmlFor="UserName">
                            Your Name
                        </label>
                        <input 
                        className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                        type="text" 
                        name="userName"
                        id="userName"
                        placeholder="enter your name"/>
                    </div>
                    <div className=" flex flex-col mx-[10%]">
                        <label className="mx-[30%]" htmlFor="useEmail">
                            Your Email
                        </label>
                        <input 
                        className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                        type="email" 
                        name="userEmail"
                        id="userEmail"
                        placeholder="enter your email"/>
                    </div>
                    <div className="flex flex-col mx-[10%]">
                        <label className="mx-[30%]" htmlFor="userNumber">
                            Your Number
                        </label>
                        <input 
                        className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
                        type="text" 
                        name="userNumber"
                        id="userNumber"
                        placeholder="enter your number"
                        />
                    </div>

                    <div className=" flex flex-row justify-center">
                        <Button title="Send Message" />
                    </div>
                </form>

                <div className=" w-full md:w-2/4">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;