
import NavBar from "@/components/Home/NavBar";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <html lang="en">
            <body>
                <NavBar>
                    {children}
                </NavBar>
            </body>
        </html>
    );
}
