import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    
    const handleScroll = (visible) => {
        // When the element enters the viewport, set the counterOn state to true.
        if (visible) {
            setCounterOn(true);
        } else {
            // When the element exits the viewport, reset the counter.
            setCounterOn(false);
        }
    };

    return (
        <ScrollTrigger onEnter={() => handleScroll(true)} onExit={() => handleScroll(false)}>
            <div className=' w-full h-35 bg-black mt-0  text-white p-5 rounded-sm shadow-md flex top-0'>
                <h1 className='text-3xl font-bold'>
                    <span className='text-[#74ceff]'>+</span>
                    {counterOn && <CountUp start={0} end={2000} duration={2} delay={0} />}
                </h1>
                <h2 className='mx-5 text-3xl mt-0'>
                    Customers
                </h2>
            </div>
        </ScrollTrigger>
    );
}

export default Counter;
