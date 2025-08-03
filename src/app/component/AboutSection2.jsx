import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import iconHtml from "./image/html.png";
import iconCss from "./image/css.png";
import iconJs from "./image/js.png";
import iconBootstrap from "./image/bootstrap.png";
import iconNextjs from "./image/nextjs.png";
import iconReact from "./image/reactjs.png";
import iconPhp from "./image/php.png";
import iconFigma from "./image/figma.png";
import iconMysql from "./image/mysql.png";
import iconGithub from "./image/github.png";
import Image from "next/image";

const AboutSection2 = () => {
    const data = [
        {
            src: iconHtml,
            name: "HTML",
        },
        {
            src: iconCss,
            name: "CSS",
        },
        {
            src: iconJs,
            name: "JavaScript",
        },
        {
            src: iconBootstrap,
            name: "Bootstrap",
        },
        {
            src: iconReact,
            name: "ReactJS",
        },
        {
            src: iconNextjs,
            name: "NextJS",
        },
        {
            src: iconPhp,
            name: "PHP",
        },
        {
            src: iconFigma,
            name: "Figma",
        },
        {
            src: iconMysql,
            name: "MySQL",
        },
        {
            src: iconGithub,
            name: "Github",
        },
    ];
    return (
        <div id="AboutSection2" className="container-fluid mt-5">
            <h3 className="text-center mb-3">Our <span className="text-warning">Skills</span></h3>
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    py: 1,
                    overflow: "auto",
                    width: "100%",
                    scrollSnapType: "x mandatory",
                    "& > *": {
                        scrollSnapAlign: "center",
                    },
                    "::-webkit-scrollbar": { display: "none" },
                }}>
                {data.map((item) => (
                    <Card
                        orientation="horizontal"
                        size="sm"
                        key={item.name}
                        variant="outlined">
                        <AspectRatio ratio="1" id="block">
                            <Image src={item.src} alt={item.name} />
                        </AspectRatio>
                        <Box sx={{ whiteSpace: "nowrap", mx: 1 }}>
                            <Typography level="title-md">
                                {item.name}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Box>
        </div>
    );
};

export default AboutSection2;
