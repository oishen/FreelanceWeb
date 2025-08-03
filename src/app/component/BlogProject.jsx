import Image from "next/image";
import Link from "next/link";

const BlogProject = (props) => {
    return (
        <Link
            href={props.link}
            className="shadow rounded-1 p-3 ms-1 me-1 mt-md-5 mt-3 text-decoration-none btn btn-outline-light text-start w-100"
            target="_blank">
            <Image
                src={props.img}
                alt={props.detail}
                className="rounded-1 w-100 h-auto"
            />
            <p className="text-warning"> {props.name} </p>
            <h6 className="text-dark"> {props.detail} </h6>
        </Link>
    );
};

export default BlogProject;
