import React from "react";

export default function Navbar(){
  const links = ["home","about","projects","skills","contact"];
  return (
    <nav className="navbar bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="text-lg font-bold">Jaison J P</div>
        <ul className="flex gap-6">
          {links.map(l => (
            <li key={l}><a href={"#"+l} className="capitalize hover:text-sky-600">{l}</a></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
