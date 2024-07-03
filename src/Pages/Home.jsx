import { IoMdLogIn } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <section className="text-gray-600 body-font w-full h-screen flex items-center justify-center">
            <div className="container mx-auto flex lg:px-16 lg:py-16 px-4 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        A Simple NoteTaking React App
                    </h1>
                    <p className="mb-2 leading-relaxed text-xl">
                        Certain emotions just take you to the notes - being
                        furious, heroic, sad, erotic, when rain comes.
                    </p>
                    <div className="flex justify-center">
                        <p> ~ Jeff Buckley</p>
                    </div>
                    <div className="flex lg:gap-x-2 gap-x-1 text-black mt-6">
                        <Link
                            to="/login"
                            className="inline-flex lg:gap-x-2 gap-x-1 items-center bg-yellow-500 border-2 border-yellow-500 py-1 px-3 focus:outline-none hover:bg-transparent rounded lg:text-base text-sm"
                        >
                            Login <IoMdLogIn />
                        </Link>
                        <Link
                            to="/register"
                            className="inline-flex lg:gap-x-2 gap-x-1 items-center bg-yellow-500 border-2 border-yellow-500 py-1 px-3 focus:outline-none hover:bg-transparent rounded lg:text-base text-sm "
                        >
                            Register <FiUserPlus />
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full lg:block md:w-1/2 w-5/6 hidden">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="/public/Assets/idea.png"
                    />
                </div>
            </div>
        </section>
    );
};

export default Home;
