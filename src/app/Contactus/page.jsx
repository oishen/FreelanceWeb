import Image from "next/image";
import contactImg from "../component/image/callcenter.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const page = () => {
    return (
        <div id="contact">
            <Navbar />
            <div className="container-lg mt-md-5 mt-3 mb-md-5 mb-3">
                <div className="row">
                    <div className="col-lg-7">
                        <Image
                            src={contactImg}
                            alt="contact image"
                            className="w-100 h-auto"
                        />
                    </div>
                    <div className="col">
                        <span className="bg-warning ps-4 pe-4 p-2 rounded-pill text-white shadow">
                            CONTACT US
                        </span>
                        <h3 className="mt-4">
                            <span className="text-warning">Reach</span> & Get In
                            Touch With Us !
                        </h3>
                        <form action="" className="was-validated">
                            <div className="mb-3 mt-5">
                                <input
                                    type="text"
                                    className="form-control p-2"
                                    id="uname"
                                    placeholder="Enter your name"
                                    name="uname"
                                    required
                                />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="pwd"
                                    placeholder="Enter your email"
                                    name="pswd"
                                    required
                                />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">
                                    Please fill out this field.
                                </div>
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    id="message"
                                    className="form-control"
                                    rows="5" placeholder="Enter message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning shadow text-white ps-4 pe-4 border-white">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
