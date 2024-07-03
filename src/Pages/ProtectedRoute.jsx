import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
    const isAuthenticated = true;
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated === false) navigate("/login", { replace: true });
    }, [navigate, isAuthenticated]);

    return children;
};

export default Protected;
