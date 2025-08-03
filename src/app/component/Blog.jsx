import Image from "next/image";
import Link from "next/link";
import iconArrow from "./image/arrow1.png";

const Blog = (props) => {
    return (
        <div id="blog" className="shadow rounded-1">
            <Image
                src={props.image}
                alt="image"
                id="image"
                className={`${props.background} rounded-bottom-5`}
            />
            <div className="p-3">
                <h5> {props.name} </h5>
                <p> {props.text} </p>
                <Link href={props.link} className="text-decoration-none" id="link">
                    See more
                    <Image src={iconArrow} alt="icon arrow" id="iconArrow" />
                </Link>
            </div>
        </div>
    );
};

export default Blog;
