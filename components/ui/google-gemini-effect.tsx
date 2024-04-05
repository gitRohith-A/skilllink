"use client";
import { cn } from "@/utils/cn";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
    duration: 0,
    ease: "linear",
};

export const GoogleGeminiEffect = ({
    pathLengths,
    title,
    description,
    className,
}: {
    pathLengths: MotionValue[];
    title?: string;
    description?: string;
    className?: string;
}) => {
    return (
        <div className={cn("sticky top-80", className)}>
            <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
                {title || `Build with Aceternity UI`}
            </p>
            <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
                {description ||
                    `Scroll this component and see the bottom SVG come to life wow this
        works!`}
            </p>
            <div className="w-full h-[890px] -top-60 md:-top-40  flex items-center justify-center bg-red-transparent absolute ">
                <button className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs  w-fit mx-auto ">
                    ui.aceternity.com
                </button>
            </div>
            <svg
                width="1440"
                height="890"
                viewBox="0 0 1440 890"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute -top-60  md:-top-40 w-full"
            >
                {pathLengths.map((_, index) => (
                    <motion.path
                        key={index}
                        d="M0 663C145.5 663 191 666.265 269 647C326.5 630 339.5 621 397.5 566C439 531.5 455 529.5 490 523C509.664 519.348 521 503.736 538 504.236C553.591 504.236 562.429 514.739 584.66 522.749C592.042 525.408 600.2 526.237 607.356 523.019C624.755 515.195 641.446 496.324 657 496.735C673.408 496.735 693.545 519.572 712.903 526.769C718.727 528.934 725.184 528.395 730.902 525.965C751.726 517.115 764.085 497.106 782 496.735C794.831 496.47 804.103 508.859 822.469 518.515C835.13 525.171 850.214 526.815 862.827 520.069C875.952 513.049 889.748 502.706 903.5 503.736C922.677 505.171 935.293 510.562 945.817 515.673C954.234 519.76 963.095 522.792 972.199 524.954C996.012 530.611 1007.42 534.118 1034 549C1077.5 573.359 1082.5 594.5 1140 629C1206 670 1328.5 662.5 1440 662.5"
                        stroke="#FFB7C5" // Replace with appropriate stroke color
                        strokeWidth="2"
                        fill="none"
                        initial={{
                            pathLength: 0,
                        }}
                        style={{
                            pathLength: pathLengths[index],
                        }}
                        transition={transition}
                    />
                ))}
                {/* Gaussian blur for the background paths */}
                {pathLengths.map((_, index) => (
                    <path
                        d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 534.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"

                        key={index}
                        stroke="#FFB7C5" // Replace with appropriate stroke color
                        strokeWidth="2"
                        fill="none"
                        pathLength={1}
                        filter="url(#blurMe)"
                    />
                ))}
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};
