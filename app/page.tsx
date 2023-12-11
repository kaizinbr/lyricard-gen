"use client";
import Image from "next/image";
import Link from "next/link";
import ExpandingArrow from "@/components/expanding-arrow";
import Uploader from "@/components/uploader";
import { Toaster } from "@/components/toaster";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useRef } from "react";
import CardBox from "@/components/card/card-box";
import Carousel from "@/components/carousel/carousel";

export default function Home() {
    const elementRef = useRef(null);
    // var node = document.getElementById("my-node");

    const htmlToImageConvert = () => {
        toPng(elementRef.current!, { cacheBust: false })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "my-image-name.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let slides = [
        "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
        "https://wallpapercave.com/wp/wp3386769.jpg",
        "https://wallpaperaccess.com/full/809523.jpg",
        "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
    ];

    return (
        <main
            className="relative flex min-h-screen flex-col items-center justify-center"
            ref={elementRef}
        >
            <CardBox />
            <div className="w-[60%] m-auto pt-11">
                {/* <Carousel slides={slides} /> */}
            </div>
            {/* <h1>hi</h1>
            <div
                className="w-96 h-96 bg-red-400 rounded-lg p-4 items-center justify-center text-center text-gray-100"
                ref={elementRef}
                id="my-node"
            >
                <h2>This is drama by aespa</h2>
                <p>
                    Drama-ma-ma-ma (bring it that) Drama-ma-ma-ma With my girls{" "}
                    <br />
                    in the back Girls in the back, yeah (I break) <br />
                    Trauma-ma-ma-ma (we them) Trauma-ma-ma-ma With my world in{" "}
                    <br />
                    the back 나로 시작되는 drama (drama) <br />
                </p>
            </div> */}
        </main>
    );
}
