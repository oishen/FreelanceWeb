import Image from "next/image";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import serviceImg from "../component/image/serviceImg1.png";
import uiDesignImg from "../component/image/UIdesigner.png";
import webDeveloperImg from "../component/image/webdeveloper.png";
import deployImg from "../component/image/deploying.png";
import Link from "next/link";

const page = () => {
    return (
        <div id="Service">
            <Navbar />
            <div className="bg-warning bg-opacity-25 d-flex justify-content-center">
                <Image
                    src={serviceImg}
                    alt="service image"
                    className="w-50 h-auto"
                />
            </div>
            <div className="container-lg">
                {/* UX/UI */}
                <div className="row align-items-center flex-lg-row flex-column-reverse" id="ui">
                    <div className="col-lg">
                        <h3>
                            <span className="text-warning">Creative</span> UI
                            Design
                        </h3>
                        <br />
                        <ul>
                            <li>Consult on your project idea and goals.</li>
                            <li>
                                Research and refine ideas based on modern trends
                                and competitor analysis.
                            </li>
                            <li>
                                Drawing for discuss and web developer.Create
                                wireframes and mockups to discuss with
                                stakeholders and developers.
                            </li>
                            <li>
                                Desktop-first design (non-responsive by default;
                                mobile version can be added if needed).
                            </li>
                            <li>
                                Focus on user experience (UX) and intuitive
                                navigation.
                            </li>
                        </ul>
                        <br />
                        <Link href='/Contactus' className="btn btn-warning text-white shadow">
                            Get Started
                        </Link>
                    </div>
                    <div className="col-lg d-flex align-items-center justify-content-center mt-5">
                        <Image
                            src={uiDesignImg}
                            alt="uiDesignImg"
                            id="uiDesignImg"
                            className="w-100 h-auto"
                        />
                    </div>
                </div>

                {/* Web development */}
                <div className="row align-items-center" id="web">
                    <div className="col-lg d-flex align-items-center justify-content-center mt-5">
                        <Image
                            src={webDeveloperImg}
                            alt="webDeveloperImg"
                            id="webDeveloperImg"
                            className="w-100 h-auto"
                        />
                    </div>

                    <div className="col-lg">
                        <h3>
                            Custom{"  "}
                            <span className="text-warning">
                                Website Development
                            </span>
                        </h3>
                        <br />
                        <ul>
                            <li>
                                Develop based on your custom UI design or use
                                modern ready-made templates.
                            </li>
                            <li>
                                Fully responsive design — optimized for desktop,
                                tablet, and mobile devices.
                            </li>
                            <li>
                                Clean, well-commented code with clear structure
                                and best practices.
                            </li>
                            <li>
                                Frontend only, backend only, or full-stack
                                development — based on your project needs.
                            </li>
                            <li>
                                Fast-loading pages and scalable architecture.
                            </li>
                            <li>
                                Integration with third-party tools or APIs
                                (optional).
                            </li>
                        </ul>
                        <br />
                        <Link href="/Contactus" className="btn btn-warning text-white shadow">
                            Get Started
                        </Link>
                    </div>
                </div>

                {/* deployment */}
                <div className="row align-items-center flex-lg-row flex-column-reverse mb-5" id="hosting">
                    <div className="col-lg">
                        <h3>
                            <span className="text-warning">Cloud Hosting </span>{" "}
                            Services
                        </h3>
                        <br />
                        <ul>
                            <li>
                                Deploy your website online so it's accessible
                                worldwide.
                            </li>
                            <li>
                                Set up a domain name that reflects your brand or
                                business.
                            </li>
                            <li>
                                Configure SEO to help your site rank higher in
                                Google search results.
                            </li>
                            <li>Hosting and maintenance support available.</li>
                        </ul>
                        <br />
                        <Link href="/Contactus" className="btn btn-warning text-white shadow">
                            Get Started
                        </Link>
                    </div>
                    <div className="col-lg d-flex align-items-center justify-content-center mt-5">
                        <Image
                            src={deployImg}
                            alt="deployImg"
                            id="deployImg"
                            className="w-100 h-auto"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
