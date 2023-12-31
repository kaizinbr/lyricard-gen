/* eslint-disable @next/next/no-img-element */
import { useState, useRef, useCallback } from "react";
import Card from "./card";
import { toPng } from "html-to-image";
import Uploader from "@/components/uploader";
import Demo from "../color/colorWheel";
import TextNLogo from "../color/textColor";
import Carousel from "@/components/carousel/carousel";
import { FontSize, Borders } from "../settings";

import React from "react";
import { EmblaOptionsType } from "embla-carousel-react";
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS: EmblaOptionsType = {};

export default function CardBox() {
    const [showCopy, setShowCopy] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [pXY, setPXY] = useState('px-3 py-4');
    const [fontWeight, setFontWeight] = useState('bold');
    const [border, setBorder] = useState('rounded-2xl');

    const [bgColor, setBgColor] = useState("#A4B8D1");
    const [textColor, setTextColor] = useState("black");
    const [logoUrl, setLogoUrl] = useState(
        "/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
    );
    const [title, setTitle] = useState("Fabulous");
    const [coverUrl, setCoverUrl] = useState("/txt.jpg");
    const [artist, setArtist] = useState("Taeyeon");
    const [lyrics, setLyrics] = useState("Hi my name is");

    function handleBgColorChange(e: { target: { value: any } }) {
        setBgColor(e.target.value);
    }

    function handleTitleChange(e: { target: { value: any } }) {
        setTitle(e.target.value);
    }

    function handleArtistChange(e: { target: { value: any } }) {
        setArtist(e.target.value);
    }

    function handleLyricsChange(e: { target: { value: any } }) {
        setLyrics(e.target.value);
    }

    const ref = useRef<HTMLDivElement>(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true, pixelRatio: 2, quality: 1 })
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = `lyricard.png`;
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    let slides = [
        <Demo key={1} setBgColor={setBgColor} />,
        <div
            className={`
                w-[348px] 
                px-4   
                flex flex-col gap-8
            `}
            key={2}
        >
            <Uploader setCoverUrl={setCoverUrl} />
        </div>,
        <div
            className={`
                w-[348px] 
                px-4   
                flex flex-col gap-8
            `}
            key={2}
        >
            <TextNLogo setTextColor={setTextColor} setLogoUrl={setLogoUrl} />
            <FontSize setFontSize={setFontSize} fontSize={fontSize} setPXY={setPXY} setFontWeight={setFontWeight} />
            <Borders border={border} setBorder={setBorder} />
        </div>,
        <form
            key={3}
            action=""
            className="flex flex-col gap-2 px-4 w-[348px] "
        >
            <label className="flex flex-col text-base font-extrabold">
                Título:
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-seashell-800 focus:bg-seashell-700 rounded-lg transition duration-300"
                    value={title}
                    onChange={handleTitleChange}
                />
            </label>
            <label className="flex flex-col text-base font-extrabold">
                Artista:
                <input
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-seashell-800 focus:bg-seashell-700 rounded-lg transition duration-300"
                    value={artist}
                    onChange={handleArtistChange}
                />
            </label>
            <label className="flex flex-col text-base font-extrabold">
                Letras:
                <textarea
                    rows={6}
                    className="text-base font-medium  border border-transparent focus:border-deluge-600 px-3 py-2 mb-3 outline-none bg-seashell-800 focus:bg-seashell-700 rounded-lg transition duration-300"
                    value={lyrics}
                    onChange={handleLyricsChange}
                />
            </label>
        </form>,
    ];

    return (
        <div
            className={`
                main-box                
                relative flex flex-col lg:flex-row items-center justify-between
                gap-4
                w-full min-h-full md:min-h-[600px]
                
                
            `}
        >
            <div className="flex flex-col items-center gap-8 min-w-[40%]">
                <div ref={ref} className="w-80">
                    <Card
                        lyrics={lyrics}
                        title={title}
                        artist={artist}
                        bgColor={bgColor}
                        coverUrl={coverUrl}
                        logoUrl={logoUrl}
                        textColor={textColor}
                        fontSize={fontSize}
                        pXY={pXY}
                        fontWeight={fontWeight}
                        border={border}
                    />
                </div>
                <button
                    className={`
                        bg-deluge-600 text-seashell-100 px-8 py-2 rounded-full border border-deluge-600
                        transition duration-500
                        hover:bg-seashell-600 
                    `}
                    onClick={onButtonClick}
                >
                    Baixar
                </button>
            </div>

            <div className="sandbox">
                <div className="sandbox__carousel">
                    <Carousel slides={slides} options={OPTIONS} />
                    {/* <div
                        className={`
                        flex flex-col gap-8
                        `}
                    >
                        <Demo setBgColor={setBgColor} />
                        <Uploader setCoverUrl={setCoverUrl} />
                        <TextNLogo
                            setTextColor={setTextColor}
                            setLogoUrl={setLogoUrl}
                        />
                        </div>
                        <form action="" className="flex flex-col gap-2 w-80">
                            <label className="flex flex-col text-xs text-gray-800">
                                Título:
                                <input
                                    className="text-base text-black px-2 py-3 outline-none bg-transparent focus:bg-gray-100 rounded-md transition duration-300"
                                    value={title}
                                    onChange={handleTitleChange}
                                />
                            </label>
                            <label className="flex flex-col">
                                Artista:
                                <input
                                    className="text-base text-black px-2 py-3 outline-none bg-transparent focus:bg-gray-100 rounded-md transition duration-300"
                                    value={artist}
                                    onChange={handleArtistChange}
                                />
                            </label>
                            <label className="flex flex-col">
                                Lyrics:
                                <textarea
                                    rows={5}
                                    className="text-base text-black px-2 py-3 outline-none bg-transparent focus:bg-gray-100 rounded-md transition duration-300"
                                    value={lyrics}
                                    onChange={handleLyricsChange}
                                />
                            </label>
                        </form> */}
                    {/* <Carousel/> */}
                </div>
            </div>

            {/* usar caso continue dando erro na hora de baixar */}
            {/* {showCopy && (
                <div
                    className={`
                    absolute z-50
                    top-0 left-0
                    w-screen h-screen
                    flex flex-col items-center justify-center
                    bg-black bg-opacity-50
                `}
                >
                    <button
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            setShowCopy(false);
                        }}
                    >
                        Copiar
                    </button>
                    <div ref={ref}>
                    <div
            className={` 
                bg-indigo-300 rounded-2xl px-3 py-4
                transition-all duration-500
                w-80 
                text-${textColor}
            `}
            style={{ backgroundColor: bgColor }}
        >
            <div
                className={`
                    header
                    flex flex-row gap-3
                    mb-5
                `}
            >
                <picture
                    className={` 
                        rounded-md 
                        overflow-hidden h-8 w-8
                    `}
                >
                    <img
                        src={coverUrl}
                        alt="cover"
                        width={32}
                        height={32}
                        className={`
                            
                        `}
                        crossOrigin="anonymous"
                    />
                </picture>
                <div
                    className={`
                        flex flex-col
                    `}
                >
                    <h2
                        className={`
                            font-black text-[13px]
                        `}
                    >
                        {title}
                    </h2>
                    <p
                        className={`
                            text-[10px]
                        `}
                    >
                        {artist}
                    </p>
                </div>
            </div>
            <div
                className={`
                    body
                    flex flex-col gap-2
                    text-sm font-bold
                `}
            >
                {lyrics.split("\n").map((str, i) => <p key={i}>{str}</p>)}
            </div>
            <div
                className={`
                    footer
                    flex flex-row justify-between
                    mt-5
                `}
            >
                <div>
                    <img src={logoUrl} alt="cover" width={70} height={24} />
                </div>
            </div>
        </div>
                    </div>
                    <button
                        className="bg-indigo-500 text-white px-4 py-2 rounded-md"
                        onClick={onButtonClick}
                    >
                        baixar
                    </button>
                </div>
            )} */}
            {/* <SimpleSlider /> */}
        </div>
    );
}
