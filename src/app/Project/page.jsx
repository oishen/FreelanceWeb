import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import projectImg from '../component/image/projectImg.png'
import img1 from "../component/image/project1.png";
import img2 from "../component/image/project2.png";
import img3 from "../component/image/project3.png";
import img4 from '../component/image/project4.png'
import BlogProject from "../component/BlogProject";

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
        {
            img: img4,
            detail: "Personal Portfolio Using ReactJS + Bootstrap5",
            name: "Website Design",
            link: "https://oishen.github.io/myPortfolio/",
        },
    ];
    return (
        <div id="project">
            <Navbar />
            <div className="container-lg">
                <div className="row">
                    <div className="col-lg-4 d-none d-lg-block sticky-top h-50">
                        <Image
                            src={projectImg}
                            alt="project image"
                            className="w-100"
                        />
                    </div>

                    <div className="col-lg-8">
                        <div className="justify-content-center mb-4" id="blogProject">
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
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
