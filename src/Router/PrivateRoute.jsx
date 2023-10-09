import PropTypes from 'prop-types';
import useAuth from '../Hock/useAuth';
import { Navigate } from 'react-router-dom';
import Loading from '../Component/Loading/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        return <Loading/>
    }

    if(!user){
        return <Navigate to={'/login'} />
    }

    return children
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;