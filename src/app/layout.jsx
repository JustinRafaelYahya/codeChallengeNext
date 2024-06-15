import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blitz PC",
  description: "Best Performance, Best Bang for Bucks.",
};

export default function RootLayout({ children, hero, overview, products }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
