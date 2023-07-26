import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
