import React from "react";
import { useState, useEffect } from "react";
const ViewNote = () => {
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
            <div className="container flex lg:px-16 h-full border-2 lg:py-16 px-4 items-center justify-center">
                <div
                    className={`lg:w-2/5 w-full h-5/6 border rounded-lg shadow-xl shadow-gray-200 py-4 px-6 bg-${color}`}
                >
                    <h1 className="text-xl text-center pb-4">Your Note</h1>
                    <h3 className="text-lg text-justify mb-2">
                        Title : Lorem ipsum dolor sit amet.
                    </h3>
                    <p className="text-base text-justify mb-2">
                        Description : Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Illum et qui incidunt optio quasi
                        neque quos, porro at ipsa aliquid aspernatur? Velit
                        doloribus, quasi, ex quis repellat a maxime quibusdam
                        ipsam vitae pariatur sunt.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ViewNote;
