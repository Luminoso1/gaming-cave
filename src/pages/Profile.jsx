import { MdFavorite, MdMail, MdPerson } from "react-icons/md";
import brook from "../assets/avatars/avatar-brook.webp";
import { useAuth } from "../utils/hooks/useAuth";
import { useState } from "react";
import { Input } from "../components/Input";

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const [profile, setProfile] = useState({
    username: auth?.username ?? "",
    alias: auth?.alias ?? "",
    email: auth?.email ?? "",
    description: auth?.description ?? "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setProfile({
      ...profile,
      [e.target.name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    const { username, email } = profile;
    if (username !== "" && email !== "") {
      setAuth({ ...auth, ...profile });
    }
  };

  return (
    <div>
      <h1 className="font-jolly text-5xl text-center mt-10 capitalize">
        profile
      </h1>
      <section className="max-w-2xl w-full mx-auto mt-10 ">
        <div className="flex flex-col items-center gap-4">
          <img
            src={brook}
            alt="brook avatar"
            className="w-52 h-52 rounded-full border-violet-600 border-4"
          />
          <h2 className="capitalize text-2xl -tracking-tight">
            {auth?.alias || "Alias"}
          </h2>
        </div>
        <div className="my-20">
          <form
            noValidate
            className="flex flex-col md:grid md:grid-cols-2 gap-6 text-black p-4"
            onSubmit={handleSave}
          >
            <Input
              type="text"
              label="username"
              value={profile.username}
              handleChange={handleChange}
            >
              <MdPerson size={24} className="dark:fill-black fill-violet-600" />
            </Input>

            <Input
              type="text"
              label="alias"
              value={profile.alias}
              handleChange={handleChange}
            >
              <MdFavorite
                size={24}
                className="dark:fill-black fill-violet-600"
              />
            </Input>

            <Input
              type="email"
              label="email"
              value={profile.email}
              handleChange={handleChange}
            >
              <MdMail size={24} className="dark:fill-black fill-violet-600" />
            </Input>

            <textarea
              className="md:col-span-2 rounded-2xl h-32 p-4 resize-none bg-[#F2F2F2] 
              text-black outline-none"
              placeholder="description"
              id="description"
              name="description"
              value={profile.description}
              onChange={handleChange}
            ></textarea>
            <button
              className="btn mt-2 bg-violet-600 p-4 rounded-lg 
                           font-semibold text-lg text-white tracking-widest"
            >
              Save
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
