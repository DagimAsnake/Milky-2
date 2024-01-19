import Card from "../constants/Card";


const data =  [{
    name: 'Basic',
    price: 299,
    currency: '$',
    frequency: 'month',
    features: [
        'Nullam gravida elementum',
        'Mauris mauris neque',
        'Duis auctor tincidunt leo',
    ],
},
{
    name: 'Medium',
    price: 599,
    currency: '$',
    frequency: 'month',
    featured: true,
    features: [
        'Nullam gravida elementum',
        'Mauris mauris neque',
        'Duis auctor tincidunt leo',
    ],
},
{
    name: 'Premium',
    price: 899,
    currency: '$',
    frequency: 'month',
    features: [
        'Nullam gravida elementum',
        'Mauris mauris neque',
        'Duis auctor tincidunt leo',
    ],
},
];

const Price = () => {
    return ( 
        <div className="h-full px-6 py-12 lg:flex lg:justify-center lg:items-center bg-[#F6F1F]">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-10">
            {data.map(datas => (
                <div className={`w-full max-w-md mx-auto ${
                    datas.featured
                        ? 'order-first lg:order-none lg:scale-110 lg:transform xl:z-10'
                        : 'lg:transform lg:scale-90'
                }`}>
                    <Card {...datas} key={datas.name}/>
                </div>
                
            ))}
            </div>
        </div>
    );
}

export default Price;