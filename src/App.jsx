import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Loader from "./Pages/Loader";
import { useSelector } from "react-redux";
const App = () => {
    const isLoading = useSelector((state) => state.isLoading);
    if (isLoading) return <Loader />;

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default App;
