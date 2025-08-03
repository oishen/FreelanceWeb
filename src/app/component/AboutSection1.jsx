import image from "./image/people.png";
import Image from "next/image";
import TextWriter from "./TextWriter";
import Link from "next/link";
const AboutSection1 = () => {
    return (
        <div id="AboutSection1">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-lg">
                        <h5 className="h5">Hi, We Are</h5>
                        <h3 className="h3">CIRCLE</h3>
                        <TextWriter />
                        <p className="text-secondary">
                            With a shared passion for crafting stunning and
                            user-friendly web interfaces, we specialize in
                            transforming creative ideas into functional digital
                            experiences. Our expertise spans HTML, CSS,
                            JavaScript, and modern frontend frameworks. As a
                            team, we are committed to delivering seamless and
                            impactful user experiences that make a lasting
                            impression.
                        </p>
                        <Link
                            className="btn btn-warning text-white shadow btn-outline-white"
                            href="/Contactus">
                            Get Started
                        </Link>
                    </div>

                    <div className="col-lg d-flex align-items-center justify-content-center">
                        <Image src={image} alt="people" id="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection1;
