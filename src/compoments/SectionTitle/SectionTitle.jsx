

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className=" mx-auto text-center md:w-6/12 my-4">
            
            <p className="text-yellow-600 mb-2">---{subheading}---</p>
            <p className="text-3xl uppercase border-y-4 py-4">{ heading}</p>
            
        </div>
    );
};

export default SectionTitle;