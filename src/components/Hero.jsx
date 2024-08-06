import { Link } from "wouter";

function Hero() {
  return (
    <section className="mt-44 max-w-5xl w-full mx-auto grid place-content-center ">
      <div className="px-8">
        <h1 className="text-center text-3xl lg:text-5xl font-bold !leading-normal">
          Discover the most influential and exciting{" "}
          <span className="text-violet-600 ">games</span> of the last century
        </h1>
        <div className="mt-12 flex items-center justify-center gap-14">
          <Link
            to="/games"
            className="bg-transparent border py-3 px-10 rounded-md font-semibold text-2xl tracking-wider"
          >
            Games
          </Link>
          <Link
            to="/sign-up"
            className="bg-violet-600 py-3 px-10 rounded-md font-semibold text-2xl tracking-wider"
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Hero;
