import Footer from "./Footer";

export default function CustomLayout({ children }) {
  return (
    <div className="max-w-4xl w-full mx-auto mt-20 px-6">
      {children}
      <Footer />
    </div>
  );
}
