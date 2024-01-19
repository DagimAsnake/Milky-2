const Button = (props) => {
    return (
        <div>
            <button className="bg-[#6fb9e1] py-2 px-5 rounded-sm st-4 outline-white hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:bg-[#74ceff] hover:text-gray">
                {props.title}
            </button>
        </div>
    );
}

export default Button;