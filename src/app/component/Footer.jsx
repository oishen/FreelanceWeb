import logo from "./image/logo.png";
import iconFacebook from "./image/facebook.png";
import iconTelegram from "./image/telegram.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/AboutUs" },
        { name: "Services", href: "/Service" },
        { name: "Projects", href: "/Project" },
        { name: "Contact Us", href: "/Contactus" },
    ];
    return (
        <div id="footer" className="bg-warning bg-opacity-25">
            <div className="container-lg">
                <div className="d-flex d-sm-none justify-content-center pt-5">
                    <Image
                        src={logo}
                        alt="logo"
                        id="logo"
                    />
                </div>
                <div className="d-flex justify-content-between align-items-center pt-5">
                    <Image
                        src={logo}
                        alt="logo"
                        id="logo"
                        className="d-sm-block d-none"
                    />
                    <div
                        className="d-flex justify-content-between"
                        id="nav-menu">
                        {menuItems.map((menu, i) => {
                            return (
                                <Link
                                    href={menu.href}
                                    key={i}
                                    className="text-decoration-none text-dark">
                                    {menu.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="border-top w-100  border-secondary border-opacity-25 mt-4 pb-4"></div>
                </div>
                <div className="row flex-column-reverse justify-content-between align-items-center">
                    <p className="col-12 text-center">Copyright © 2025 | All Rights Reserved</p>
                    <div className="col-12 justify-content-center d-flex">
                        <Link
                            href="https://web.facebook.com/soy.zen.20112024"
                            target="_blank">
                            <Image
                                src={iconFacebook}
                                alt="icon facebook"
                                id="icon"
                            />
                        </Link>
                        <Link href="https://t.me/S_E_N_3" target="_blank">
                            <Image
                                src={iconTelegram}
                                alt="icon telegram"
                                id="icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
