import React from "react";
import { useState, useEffect } from "react";
const CreateNote = () => {
    const colors = [
        "peach",
        "lavender",
        "mint",
        "skyBlue",
        "lemon",
        "palePink",
    ];

    const [color, setColor] = useState("white");
    useEffect(() => {
        const ind = Math.floor(Math.random() * (6 + 1));
        setColor(colors[ind]);
    }, []);
    return (
        <section className="text-black body-font w-full h-screen flex items-center justify-center">
            <div className="container flex lg:px-16 lg:py-16 px-4 items-center justify-center">
                <form
                    className={`lg:w-1/2 w-full border rounded-md shadow-xl shadow-gray-200 p-4 bg-${color}`}
                >
                    <h1 className="text-xl text-center pb-4">
                        Create a New Note
                    </h1>
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none"
                            placeholder="title"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="description"
                            className="shadow-sm rounded-md w-full h-40 px-3 py-2 border border-gray-300 focus:outline-none "
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        class="mt-4 w-full flex justify-center py-2 px-4 border border-black rounded-md shadow-sm text-[1rem] text-white bg-black hover:bg-transparent hover:text-black focus:outline-none"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CreateNote;
