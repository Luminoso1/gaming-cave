import logo from "../assets/logo-bg-white.svg";

function Footer() {
  return (
    <footer className="mt-10 max-w-4xl w-full mx-auto flex items-center justify-between pt-20 pb-4 flex-col gap-y-20 md:flex-row">
      <img src={logo} alt="logo gaming cave" className="w-12 fill-black" />
      <p className="order-3 ">By @Luminoso1</p>
      <ul className="flex flex-col md:flex-row gap-10 md:order-3">
        <li>
          <a href="#!">Terms</a>
        </li>
        <li>
          <a href="#!">Privacy</a>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
