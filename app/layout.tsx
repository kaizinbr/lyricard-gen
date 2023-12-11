import "./globals.css";
import { Inter } from "next/font/google";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// export const metadata = {
//   title: 'Vercel Blob Starter',
//   description: 'A simple Next.js app with Vercel Blob for image uploads',
// }

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={`
                bg-[#f1f1f1] text-gray-900
                
            `}>{children}</body>
        </html>
    );
}
