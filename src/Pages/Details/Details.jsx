import { useLoaderData, useNavigate } from "react-router-dom";

const Details = () => {
    const phones = useLoaderData();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1)
    }
    const phone = phones.data;
    const {image, name, others, mainFeatures, slug , releaseDate, brand} = phone
    return (
        <>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-5 sm:px-[10%] w-full mx-auto">
            <figure className="p-10 md:w-1/2 lg:w-2/5 xl:w-1/3"><img src={image} alt="img" className="w-full"/></figure>
            <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p><span className="font-semibold">Storage:</span> {mainFeatures?.storage}</p>
            <p><span className="font-semibold">Display Size:</span> {mainFeatures?.displaySize}</p>
            <p><span className="font-semibold">Chipset:</span> {mainFeatures?.chipSet}</p>
            <p><span className="font-semibold">Memory:</span> {mainFeatures?.memory}</p>
            <p><span className="font-semibold">Slug:</span> {slug}</p>
            <p><span className="font-semibold">Release data:</span> {releaseDate}</p>
            <p><span className="font-semibold">Brand:</span> {brand}</p>  
            <p><span className="font-semibold">GPS:</span> {others?.GPS || 'Not available'}</p>
            <p><span className="font-semibold">NFC:</span> {others?.NFC || 'Not available'}</p>
            <p><span className="font-semibold">Radio:</span> {others?.Radio || 'Not available'}</p>
            <p><span className="font-semibold">USB:</span> {others?.USB || 'Not available'}</p>
            <p><span className="font-semibold">WLAN:</span> {others?.WLAN || 'Not available'}</p>
            </div>
        </div>
            <div className="card-actions justify-center mb-10">
                <button 
                    onClick={handleClick}
                    className="btn btn-primary"
                >Close</button>
            </div>
        </>
    );
};

export default Details;