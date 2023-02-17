import { useContext } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/userContext';

const privateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const userlocation = useLocation();

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if (!user) {

        <Navigate to='/' state={{ from: userlocation }} replace />;
    }
    return children;
};

export default privateRouter;