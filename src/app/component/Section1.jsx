import Link from "next/link";
import image from "./image/groupdicuss.png";
import Image from "next/image";
const Section1 = () => {
    return (
        <div id="section1">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-lg">
                        <h1>
                            We Create <br className="d-lg-block d-none" />
                            <span className="text-warning">
                                Solution
                            </span> For <br /> Your Business
                        </h1>
                        <br />
                        <p>
                            We craft tailored digital solutions that help your
                            business grow and succeed. From design to
                            deployment, our team ensures every detail works in
                            your favor — delivering innovation, efficiency, and
                            results.
                        </p>
                        <br />
                        <Link
                            href="/Contactus"
                            className="btn btn-warning text-white shadow">
                            Get Started
                        </Link>
                    </div>
                    <div className="col-lg d-flex align-items-center justify-content-center mt-5">
                        <Image src={image} alt="image" id="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
