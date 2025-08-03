import Blog from "./component/Blog";
import Navbar from "./component/Navbar";
import Section1 from "./component/Section1";
import UI from "./component/image/uxui.png";
import website from "./component/image/website.png";
import hosting from "./component/image/hosting.png";
import Section2 from "./component/Section2";
import Footer from "./component/Footer";
const Page = () => {
    const serviceItem = [
        {
            id: 1,
            name: "Creative UI Design",
            text: "Our team crafts intuitive and modern user interfaces tailored to your brand. Boost user experience with sleek, responsive, and interactive designs.",
            background: "bg-secondary",
            image: UI,
            link: "/Service#ui",
        },
        {
            id: 2,
            name: "Custom Website Development",
            text: "We build high-performance websites that are fast, secure, and scalable. Whether it’s a business site or a web app, we deliver with precision.",
            background: "bg-warning",
            image: website,
            link: "/Service#web",
        },
        {
            id: 3,
            name: "Cloud Hosting Services",
            text: "Experience 99.9% uptime, top-tier security, and seamless scalability. Our hosting ensures your digital presence is always online and reliable.   ",
            background: "bg-info",
            image: hosting,
            link: "/Service#hosting",
        },
    ];
    return (
        <div id="home">
            <Navbar />
            <Section1 />
            <div className="container-lg">
                <div className="row pt-5 pb-5 mt-5 justify-content-between">
                    <h3 className="text-center">
                        We Provide Premium Digital{" "}
                        <span className="text-warning">Solutions</span>
                    </h3>
                    <div className="d-flex justify-content-center text-center">
                        <p className="pb-4" id="para1">
                            Empowering your business through design,
                            development, and reliable infrastructure. Discover
                            how we transform your ideas into digital reality.
                        </p>
                    </div>
                    {serviceItem.map((item, i) => {
                        return (
                            <div key={i} id="mainBlog">
                                <Blog
                                    name={item.name}
                                    text={item.text}
                                    background={item.background}
                                    image={item.image}
                                    link={item.link}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Section2 />
            <Footer />
        </div>
    );
};

export default Page;
