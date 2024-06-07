export interface Links{
  pathname:string,
  title:string
}

export const NavbarLinks:Links[] = [
    { pathname: "/", title: "Home" },
    { pathname: "/about", title: "About" },
    { pathname: "/contact", title: "Contact" },
    { pathname: "/blog", title: "Blog" },
    { pathname: "/admin", title: "Admin" },
  ];

  