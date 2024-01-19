import { Link } from 'react-scroll';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [minScroll, setMiniScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        setMiniScroll(!minScroll);
        setMenu(false); // Close the menu when scrolling
    };

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <>
        <div
            className={`absolute w-full z-10 min-h-[50px] flex justify-between pt-5 pl-5 items-center text-white ${
            scrollPosition > 0 ? 'bg-gray-0' : 'bg-gray-900/0'
            }`}
        >
            <Link to="/" className="font-semibold text-2xl p-3 cursor-pointer" onClick={closeMenu}>
            SKYNET.
            </Link>
            <nav className="hidden md:flex gap-5 font-medium p-1 cursor-pointer mx-20">
            {/* Add onClick event to each Link */}
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#74ceff] transition-all"
                onClick={closeMenu}
            >
                Home
            </Link>
            <Link
                to="courses"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#74ceff] transition-all"
                onClick={closeMenu}
            >
                Service
            </Link>
            <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#74ceff] transition-all"
                onClick={closeMenu}
            >
                About
            </Link>
            <Link
                to="Reviews"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#74ceff] transition-all"
                onClick={closeMenu}
            >
                Price
            </Link>
            <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#74ceff] transition-all"
                onClick={closeMenu}
            >
                Blog
            </Link>
            <Link
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-[#74ceff] transition-all"
                onClick={closeMenu}
            >
                Contact
            </Link>
            </nav>
            <div className="flex md:hidden" onClick={handleChange}>
            <div className="p-2">
                <AiOutlineMenu size={22} />
            </div>
            </div>
        </div>

        <div
            className={`${
            menu ? 'translate-x-0' : '-translate-x-full'
            }  md:hidden flex flex-col fixed bg-[#F6F1F1] left-0 top-0 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-10`}
        >
            {/* Add onClick event to each Link in mobile menu */}
        <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#74ceff] transition-all"
            onClick={closeMenu}
        >
            Home
        </Link>
        <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#74ceff] transition-all"
            onClick={closeMenu}
        >
            About
        </Link>
        <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#74ceff] transition-all"
            onClick={closeMenu}
        >
            Service
        </Link>
        <Link
            to="Reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#74ceff] transition-all"
            onClick={closeMenu}
        >
            Price
        </Link>
        <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#74ceff] transition-all"
            onClick={closeMenu}
        >
            Blog
        </Link>
        <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#74ceff] transition-all"
            onClick={closeMenu}
        >
            Contact
        </Link>
        </div>
    </>
);
};

export default Navbar;
