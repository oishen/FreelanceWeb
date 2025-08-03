import Link from "next/link";
import image from "./image/consultant.png";
import Image from "next/image";
const Section2 = () => {
    const item = [
        {
            number: "1",
            name: "Contact Us",
            text: "Let’s talk about your business needs and challenges.",
        },
        {
            number: "2",
            name: "Consult",
            text: "Get expert advice and a personalized action plan.",
        },
        {
            number: "3",
            name: "Place Order",
            text: "Start your project with a solution built just for you.",
        },
        {
            number: "4",
            name: "Payment",
            text: "Secure and flexible payment options that work for you.",
        },
    ];
    return (
        <div id="section2" className="bg-warning bg-opacity-25 pt-5 pb-5">
            <div className="container-lg">
                <div className="row align-items-center">
                    <div className="col-lg d-flex justify-content-center">
                        <Image src={image} alt="image" id="image" />
                    </div>
                    <div className="col-lg">
                        <h1>
                            Simple{" "}
                            <span className="text-warning">Solution!</span>
                        </h1>
                        <br />
                        <p>
                            We offer effective and easy-to-implement solutions
                            tailored to your business needs. Whether you're
                            starting out or scaling up, our team is here to
                            support your journey from consultation to
                            completion.
                        </p>
                        <br />
                        {item.map((item, i) => {
                            return (
                                <div className="d-flex pb-3" key={i}>
                                    <button className="btn pe-4">
                                        <span
                                            className="badge bg-warning rounded-pill"
                                            id="badge">
                                            {item.number}
                                        </span>
                                    </button>
                                    <div className="lh-1">
                                        <h5>{item.name}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                        <Link href='/Contactus' className="btn btn-warning text-white shadow me-5">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;
