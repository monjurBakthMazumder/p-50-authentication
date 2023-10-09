import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Phone = ({Phone}) => {
    const {brand, image, phone_name, slug} = Phone || {}
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt={`images of ${phone_name}`} /></figure>
            <div className="card-body">
                <h2 className="card-title mx-auto">{phone_name}</h2>
                <p className='text-center'>{brand}</p>
                <div className="card-actions justify-center">
                    <Link to={`/phone/${slug}`} className='btn btn-primary btn-sm'>Details</Link>
                </div>
            </div>
        </div>
    );
};

Phone.propTypes = {
    Phone:PropTypes.object,
};

export default Phone;