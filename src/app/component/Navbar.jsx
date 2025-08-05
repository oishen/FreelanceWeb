"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/component/image/logo.png";
import iconMenu from "./image/menu.png";
import iconArrow from "./image/arrow.png";

const Navbar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/AboutUs" },
        { name: "Services", href: "/Service" },
        { name: "Projects", href: "/Project" },
        { name: "Contact Us", href: "/Contactus" },
    ];

    return (
        <div id="navbar">
            <nav className="navbar navbar-expand-lg" id="nav">
                <div className="container-lg">
                    <Link href="/" className="navbar-brand">
                        <Image src={logo} alt="logo" id="logo" />
                    </Link>

                    <div className="d-lg-flex d-none w-100 justify-content-end">
                        <ul className="navbar-nav gap-4">
                            {menuItems.map((item) => (
                                <li className="nav-item" key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`nav-link ${
                                            pathname === item.href
                                                ? "active"
                                                : ""
                                        }`}
                                        id="navItem">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* icon menu */}
                    <div>
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#navResponsive"
                            className="navbar-toggler"
                            id="wrapIconMenu">
                            <Image
                                src={iconMenu}
                                alt="icon menu"
                                id="iconMenu"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* responsive modal */}
            <div className="modal fade" id="navResponsive">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <ul className="navbar-nav gap-4">
                                {menuItems.map((item) => (
                                    <li
                                        className="nav-item"
                                        key={item.href}
                                        data-bs-dismiss="modal">
                                        <Link
                                            href={item.href}
                                            className={`nav-link btn w-100 text-start justify-content-between d-flex align-items-center ${
                                                pathname === item.href
                                                    ? "active"
                                                    : ""
                                            }`}>
                                            {item.name}
                                            <Image
                                                src={iconArrow}
                                                alt="icon arrow"
                                                width={16}
                                                height={16}
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
