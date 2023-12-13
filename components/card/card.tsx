/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Card({
    lyrics,
    title,
    artist,
    bgColor,
    coverUrl,
    logoUrl,
    textColor,
}: {
    lyrics: string;
    title: string;
    artist: string;
    bgColor: string;
    coverUrl: string;
    logoUrl: string;
    textColor: string;
}) {
    console.log(coverUrl);

    const newLyrics = lyrics.split("\n").map((str, i) => <p key={i}>{str}</p>);
    // console.log(newLyrics)

    return (
        // <div
        //     className="w-96 h-96 bg-red-400 rounded-lg p-4 items-center justify-center text-center text-gray-100"
        //     style={{ backgroundColor: `#${bgColor}` }}
        // >
        //     {newLyrics}
        // </div>
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
                        flex justify-center items-center

                    `}
                >
                    {/* por algum motivo que vai alem das minhas humildes capacidades, se usar o image do next dá problema pra baixar a foto */}
                    <img
                        src={coverUrl}
                        alt="cover"
                        width={32}
                        height={32}
                        className={`
                            object-cover h-full w-full
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
                {newLyrics}
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
    );
}

{
    /* <div
                className={` 
                bg-indigo-300 rounded-2xl px-3 py-4
                transition-all duration-500
                w-80 
                ${className}
            `}
                style={{ backgroundColor: "#" + bgColor }}
            >
                <div
                    className={`
                    header
                    flex flex-row gap-3
                    mb-5
                `}
                >
                    <div>
                        <Image
                            src="/txt.jpg"
                            alt="cover"
                            width={32}
                            height={32}
                            className={`
                            rounded-md
                        `}
                        />
                    </div>
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
                            ANTIFRAGILE
                        </h2>
                        <p
                            className={`
                            text-[10px]
                        `}
                        >
                            LE SSERAFIM
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
                    <p>Caralho! Que pau ignorante</p>
                    <p>Parece muito mais um vidro de desodorante</p>
                    <p>Eu to chocada! Que pica exuberante</p>
                    <p>Parece muito mais uma tromba de elefante</p>
                    <p>Vem me arrombar gostoso</p>
                </div>
                <div
                    className={`
                    footer
                    flex flex-row justify-between
                    mt-5
                `}
                >
                    
                    <div>
                        <Image
                            src="/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
                            alt="cover"
                            width={70}
                            height={24}
                        />
                    </div>
                </div>
            </div> */
}
