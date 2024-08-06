import logo from "../assets/logo.svg";
import logoBgWhite from "../assets/logo-bg-white.svg";
import { useState, useEffect } from "react";
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import brook from "../assets/avatars/avatar-brook.webp";

import {
  MdHome,
  MdGamepad,
  MdGroups,
  MdDiversity1,
  MdLogin,
  MdLogout,
  MdLightMode,
  MdDarkMode,
} from "react-icons/md";
import { useAuth } from "../utils/hooks/useAuth";
import { useTheme } from "../utils/hooks/useTheme";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleShow = () => setIsOpen((prev) => !prev);
  const [location] = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <Navbar isOpen={isOpen} handleShow={handleShow} />
      {!isOpen && (
        <button
          onClick={handleShow}
          className="fixed right-6 top-6 cursor-pointer active:scale-95 transition 
          z-[999] bg-[#222222] p-2 dark:bg-white rounded-lg"
        >
          <img src={logoBgWhite} alt="gaming cave logo" />
        </button>
      )}
    </>
  );
}

const Navbar = ({ isOpen, handleShow }) => {
  const containerControls = useAnimationControls();

  const variants = {
    open: {
      width: "300px",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    closed: {
      width: "0px",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("closed");
    }
  }, [isOpen]);

  return (
    <AnimatePresence initial={false}>
      <motion.nav
        variants={variants}
        animate={containerControls}
        className={`fixed w-0 right-0 top-0 bottom-0 h-full bg-black rounded-l-xl z-[999]`}
      >
        <div className="px-6 py-8 h-full">
          <div className="flex flex-col justify-between h-full overflow-auto">
            <div className="flex flex-col gap-14">
              <GamingCaveLogo src={logo} />
              <Links />
            </div>
            <BtnSignUp />
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

const GamingCaveLogo = ({ src, className, handleShow }) => {
  const { theme, changeTheme } = useTheme();
  return (
    <div className="flex items-center gap-4">
      <button onClick={handleShow} className={className}>
        <img src={src} alt="gaming cave logo" />
      </button>
      {theme === "dark" ? (
        <button onClick={changeTheme}>
          <MdDarkMode size={32} fill="#6774ff" />
        </button>
      ) : (
        <button onClick={changeTheme}>
          <MdLightMode size={32} fill="#fff700" />
        </button>
      )}
    </div>
  );
};

const Links = () => {
  const items = [
    {
      name: "home",
      Logo: MdHome,
    },
    {
      name: "games",
      Logo: MdGamepad,
    },
    {
      name: "squad",
      Logo: MdGroups,
    },
    {
      name: "community",
      Logo: MdDiversity1,
    },
  ];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDuration: 1,
      },
    },
  };

  const item = {
    open: { y: 0, opacity: 1 },
    closed: { y: 50, opacity: 0 },
  };

  return (
    <motion.menu
      variants={variants}
      className="[&>li>a]:bg-[#222222]
        [&>li>a]:p-4  [&>li]:my-10
        [&>li>a]:rounded-md  [&>li>a]:font-semibold [&>li>a]:text-lg
        [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-x-4
        capitalize
        tracking-widest
        "
    >
      {items.map(({ name, Logo }) => {
        const to = name === "home" ? "" : name;
        return (
          <motion.li key={name} variants={item} className="text-white">
            <Link
              to={`/${to}`}
              className={(isActive) =>
                isActive ? "text-black !bg-[#ffffffd7]" : ""
              }
            >
              <Logo size={28} className="fill-[#9747FF]" />
              {name}
            </Link>
          </motion.li>
        );
      })}
    </motion.menu>
  );
};

const BtnSignUp = () => {
  const { auth, logout } = useAuth();
  return (
    <>
      {!auth ? (
        <Link
          to="/sign-up"
          className="btn bg-violet-600 py-4 font-bold 
         rounded-md text-lg flex items-center gap-x-14 px-4 text-white"
        >
          <MdLogin size={24} />
          Sign Up
        </Link>
      ) : (
        <div
          className=" text-white 
          font-bold py-4 rounded-md flex items-center justify-between text-lg px-4"
        >
          <button onClick={logout}>
            <MdLogout size={24} className="hover:fill-violet-600"/>
          </button>
          <Link
            to="/profile"
            className="btn flex items-center gap-3 p-4 rounded-lg"
          >
            {auth?.username}
            <img src={brook} alt="logo" className="rounded-full w-10 h-10" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Navigation;
