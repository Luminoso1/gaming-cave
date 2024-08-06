import img from "../assets/img-signup.png";
import { MdPerson, MdMail, MdLock } from "react-icons/md";
import { useAuth } from "../utils/hooks/useAuth";
import { Redirect } from "wouter";
import { useLocation } from "wouter";
import { Input } from "../components/Input";

export default function Signup() {
  const { auth, setAuth } = useAuth();
  const [, setLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const username = data.get("username")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const password = data.get("password")?.toString() ?? "";

    if (username !== "" && email !== "" && password !== "") {
      setAuth({ username, email });
      setLocation("/profile");
    }
  };

  if (auth) {
    return <Redirect to="/profile" />;
  }

  return (
    <section className="min-h-dvh grid place-content-center px-6 my-20 md:my-10">
      <div className="dark:bg-white bg-[#222222] max-w-6xl w-full overflow-hidden rounded-3xl flex items-center ">
        <div className="md:block hidden h-full">
          <img
            src={img}
            alt="sign up image"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="text-black flex flex-col gap-10 max-w-[440px] w-full px-6 lg:px-8 py-8 lg:py-4
        "
        >
          <div className="text-white dark:text-black">
            <h1 className="text-3xl !leading-normal lg:text-4xl text-center font-semibold ">
              Sign up and start exploring our world
            </h1>
            <p className="text-base lg:text-lg text-center mt-6">
              your next steps will make us proud of our work
            </p>
          </div>
          <div>
            <form
              noValidate
              className="flex flex-col gap-10"
              onSubmit={handleSubmit}
            >
              <Input type="text" label="username">
                <MdPerson size={24} />
              </Input>

              <Input type="email" label="email">
                <MdMail size={24} />
              </Input>

              <Input type="password" label="password">
                <MdLock size={24} />
              </Input>

              <button
                className="btn mt-10 bg-violet-600 p-4 rounded-lg 
                           font-semibold text-lg text-white tracking-widest"
              >
                Sign Up !!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
