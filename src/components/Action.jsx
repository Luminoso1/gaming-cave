import { Link } from "wouter";

export const LinkAction = ({ children, href, className }) => {
  return (
    <Link
      to={href}
      className="py-4 px-4 font-bold 
         rounded-md text-lg hover:opacity-80 active:scale-95 transition"
    >
      {children}
    </Link>
  );
};
