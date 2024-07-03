import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
const Card = () => {
    const colors = [
        "#FFDAB9",
        "#E6E6FA",
        "#B0E0E6",
        "#FADBD8",
        "#FFFACD",
        "#FADADD",
    ];

    const [color, setColor] = useState(colors[0]);
    const [num, setNum] = useState(1);
    useEffect(() => {
        const ind = Math.floor(Math.random() * 6 + 1);
        setColor(colors[ind]);

        const nums = Math.floor(Math.random() * 8 + 1);
        setNum(nums);
    }, []);

    return (
        <div class="p-4 md:w-1/4">
            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    class="h-36 w-full object-cover object-center"
                    src={`/public/Assets/${num}.jpg`}
                    alt="blog"
                />
                <div class={`p-4 gap-x-2 bg-${"[" + color + "]"}`}>
                    <h1 class="title-font text-lg font-medium text-gray-900">
                        The 400 Blows
                    </h1>
                    <p class="text-[1rem] text-justify">
                        Photo booth fam kinfolk cold-pressed sriracha leggings
                        jianbing microdosing tousled waistcoat.
                    </p>
                    <div class="flex items-center justify-between mt-2">
                        <a class="inline-flex items-center">
                            Learn More{" "}
                            <FaArrowRightLong
                                fontSize={"1rem"}
                                className="ml-2"
                            />
                        </a>
                        <button class=" inline-flex items-center leading-none text-sm">
                            <MdDeleteOutline fontSize={"1.5rem"} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
