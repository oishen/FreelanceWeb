import AboutSection1 from "../component/AboutSection1";
import AboutSection2 from "../component/AboutSection2";
import BlogProject from "../component/BlogProject";
import Navbar from "../component/Navbar";
import img1 from "../component/image/project1.png";
import img2 from "../component/image/project2.png";
import img3 from "../component/image/project3.png";
import BlogProjectImg from "../component/image/project.png";
import Image from "next/image";
import Footer from "../component/Footer";
import Link from "next/link";

const page = () => {
    const projectItem = [
        {
            img: img1,
            detail: "Company Portfolio Using HTML5 + Bootstrap5",
            name: "Website Design",
            link: "https://oishen.github.io/interior/",
        },
        {
            img: img2,
            detail: "Electronic Store Using ReactJS + Bootstrap5",
            name: "Website Design",
            link: "https://oishen.github.io/k-shop/",
        },
        {
            img: img3,
            detail: "Personal Portfolio Using Figma tool",
            name: "UI Design",
            link: "https://www.figma.com/proto/SdxQqjfJxt0LeHa5mbtbek/Untitled?node-id=1-2&p=f&t=BA4BNVRkEZmrjoJn-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
        },
    ];
    return (
        <div id="aboutus">
            <Navbar />
            <AboutSection1 />
            <AboutSection2 />
            <div className="container-fluid">
                <div className="row mt-5 pt-lg-5 mb-4">
                    <div className="col-5 d-lg-flex d-none justify-content-center">
                        <Image
                            src={BlogProjectImg}
                            alt="People Image"
                            id="ProjectImg"
                        />
                    </div>
                    <div className="col-lg-7 col">
                        <h3 className="text-center">Explore Our <span className="text-warning">Projects</span></h3>
                        <div className="d-md-flex d-sm-block justify-content-center">
                            {projectItem.map((item, i) => {
                                return (
                                    <BlogProject
                                        img={item.img}
                                        name={item.name}
                                        detail={item.detail}
                                        link={item.link}
                                        key={i}
                                    />
                                );
                            })}
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link href="/Project" className="btn btn-warning shadow text-white btn-outline-white mt-4 ps-4 pe-4">
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
