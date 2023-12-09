"use client";
import Image from "next/image";
import Link from "next/link";
import ExpandingArrow from "@/components/expanding-arrow";
import Uploader from "@/components/uploader";
import { Toaster } from "@/components/toaster";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useRef } from "react";

export default function Home() {
    const elementRef = useRef(null);
    var node = document.getElementById("my-node");

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

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center">
            <h1>hi</h1>
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
            </div>
            <button onClick={htmlToImageConvert}>Download Image</button>
        </main>
    );
}
