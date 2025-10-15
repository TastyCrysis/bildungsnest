import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div>
      <div className="bg-[#fbefd9]">
        <Navbar />
      </div>
      <div className="pt-10 justify-center items-center flex bg-[#fbefd9]">
        <Header />
      </div>
      <Footer />
    </div>
  );
}
