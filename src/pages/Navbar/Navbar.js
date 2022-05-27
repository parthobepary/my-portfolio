import React from "react";
import logoImg from "../../assets/pallab 5PORT SIZE w.jpg";
import "./Navbar.css";

const Navbar = ({children}) => {
  return (
    <div>
      <div class="drawer drawer-end ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar bg-gray-600">
            <div class="flex-1 px-2 mx-2">
              <div>
                <img className="nav-img" src={logoImg} alt="" />
              </div>
              <h1 className="text-2xl ml-3 tracking-wider">Pallob's info</h1>
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div class="flex-none hidden lg:block">
              <ul class="nav-menu">
                <li class="nav-iteam">
                  <a class="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-iteam">
                  <a class="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-iteam">
                  <a class="nav-link" href="#contuct">
                    Contuct
                  </a>
                </li>
                <li class="nav-iteam">
                  <a class="nav-link" href="#hire">
                    Why hire
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div class="drawer-side">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-gray-600 ">
            <li class="nav-iteam">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-iteam">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-iteam">
              <a class="nav-link" href="#contuct">
                Contuct
              </a>
            </li>
            <li class="nav-iteam">
              <a class="nav-link" href="#hire">
                Why hire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;