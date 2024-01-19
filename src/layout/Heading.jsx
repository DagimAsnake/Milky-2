const Heading = (props) => {
    return (  
        <div>
            <h3 className=" text-4xl font-semibold text-black pt-10">
                {props.title1} <span className="text-brightGreen">{props.title2}</span>
            </h3> 
        </div>
    );
}

export default Heading;