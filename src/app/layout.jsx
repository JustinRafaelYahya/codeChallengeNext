import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import ProductsOverview from "@/components/ProductsOverview";

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
      </body>
    </html>
  );
}
