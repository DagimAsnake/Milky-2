import net from '../assets/img/nettt.jpg'
import Button from '../layout/Button';
import { Link } from 'react-scroll';
const Hero = () => {
    return ( 
        <div className="w-full h-screen z-0">
            <img 
            className='top-0 left-0 w-full h-screen object-cover'
            src={net} alt="" />
            {/* <div className='bg-black/30 absolute top-0 w-full h-screen object-cover'/> */}
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4' >
                    <p className='text-3xl'>Dependable, Fast</p>
                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Internet Connection</h1>
                    <p className='max-w-[600] drop-shadow-2xl py-2 text-2xl'>
                        WITH A LOCAL MAINTENANCE AND SUPPORT STAFF THAT YOU CAN RELY ON!
                    </p>
                    <Button className='my-2 text-2x'title="Register Now">
                        Register
                    </Button>
                </div>
            </div>

            
        </div>
    );
}

export default Hero;