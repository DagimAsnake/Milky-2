import { AiFillCheckCircle } from "react-icons/ai";

const Card = ({
        name = '', 
        price = 0, 
        currency = '$', 
        frequency = 'month',
        features = [],
        featured = false}) => {
    return ( 
        
        <div className={`bg-white border-[#74ceff] border-opacity-10 first-letter
        rounded-md shadow-xl cursor-pointer relative ${
            featured ? 'border-2' : 'border border-opacity-10'
        }`}>

        {/* Popular tag */}
        {
            featured ? (
                <span className="bg-[#74ceff] textwhite px-6 py-1 rounded-full 
                uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2
                transform -translate-x-1/2 -translate-y-1/2">
                    Most Popular
                </span>
            ): null }
        {/* Card header */}
        <div className="px-6 py-12 border-b-2 border-gray-200">
            <p className="text-3xl font-semibold text-center mb-4">{name}</p>
            <div className="flex justify-center items-center">
                <div className="flex items-start">
                    <p className="text-4xl font-medium">{currency}</p>
                    <p className="text-7xl font-bold">{price}</p>
                </div>
                <p className="text-2xl text-gray-400">/{frequency}</p>
            </div>
        </div>

        {/* Card body */}
        <div className="p-12 bg-gray-100">
            <ul className="space-y-3">
                { features.map((feature, index) => (
                    
                    <li key={index} className="flex items-center space-x-4">
                    <AiFillCheckCircle className="w-6 h-6 text-green-500 flex-shrink"/>
                    <p className="text-lg text-gray-600">{feature}</p>
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <button className={`mt-12 w-full py-4 px-8 rounded-lg text-lg
            whitespace-nowrap text-[rgb(50,87,106)] hover:bg-[#68cafe] 
            focus:outline-none focus-ring-4 focus:ring-[#74ceff]
            focus:ring-opacity-50 transition-all ${
                featured
                ? 'bg-[#74ceff] hover:bg-[#68cafe] text-[rgb(50,87,106)] hover:scale-105 transform'
                : 'bg-white text-[rgb(50,87,106)] hover:bg-gray-50'
            }`}>
                Register
            </button>
        </div>
        </div>
    );
}

export default Card;