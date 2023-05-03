import logo from "./logo.svg";
import "./App.css";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";
import { borderBottom } from "@mui/system";

function App() {
  return (
    <>
      <Grid className="mainDiv" justifyContent={"center"} container>
        <Grid
          align="center"
          item
          xs={12}
          class="topName"
        >
          <Typography
            class="nameTag"
            align="center"
            variant="h3"
            fontWeight={800}
            letterSpacing={1.5}
            style={{
              "border-bottom": "0.1px solid rgba(255,255,255,0.35)",
              // padding: "10px 50px",
              margin: "10px",
            }}
          >
            <span style={{ color: "white" }}>Nitish Kumar</span>
          </Typography>
          <Typography
            style={{ "font-size": "28px", color: "#FFFFFF", fontWeight: "200" }}
          >
            Interactive resume
          </Typography>
        </Grid>
        <Grid item xs={6} m={0}>
          {/* <Divider /> */}
        </Grid>
      </Grid>
      <Grid justifyContent="center" container mt={5} spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="h3">
            Profile
          </Typography>
          <Typography mt={3} variant="h5" align="center" color="#727878">
            I'm a MERN Stack Developer
          </Typography>
        </Grid>
        <Grid justifyContent="center" mt={4} mb={4} container xs={12}>
          <Grid item xs={6}>
            <Divider />
          </Grid>
        </Grid>
        <Grid justifyContent="center" container xs={6}>
          <Grid item lg={4} sm={12}>
            <Typography my={2} variant="h4">
              About me
            </Typography>
            <Typography>
              Seeking a MERN Stack developer position where I can apply my
              programming and problem solving skills. And I would like to be a
              part of an organization where I could use and enhance my knowledge
              and talent for the development of both the organization and
              myself.
            </Typography>
          </Grid>
          <Grid item ls={4} px={4} py={3} dm={12} >
            <Avatar
              alt="Remy Sharp"
              src={"profile.jpg"}
              sx={{ minWidth: 50, minHeight: 50, height: 200, width: 200 }}
            />
          </Grid>
          <Grid item lg={4} sm={12}>
            <Typography my={2} align="" variant="h4">
              Details
            </Typography>
            <Typography my={1} fontWeight={"700"}>
              Name :
            </Typography>
            <Typography fontWeight={"100"}>Nitish Kumar :</Typography>
            <Typography my={1} fontWeight={"700"}>
              Age :
            </Typography>
            <Typography fontWeight={"100"}>22 years</Typography>
            <Typography my={1} fontWeight={"700"}>
              Location :
            </Typography>
            <Typography fontWeight={"100"} fontFamily={"sans-serif"}>
              Sikandrabad, Bulandshahr Uttar Pradesh
            </Typography>
            <LinkedInIcon lg />
            {/* <a
              href="https://www.linkedin.com/in/nitishkumar746/"
              style={{ textDecoration: "none", color: "#727878" }}
            >
              https://www.linkedin.com/in/nitishkumar746/
            </a> */}
          </Grid>
        </Grid>
      </Grid>

      {/* ------------------------------------------------------> Experience */}

      <Grid
        container
        mt={5}
        justifyContent="center"
        spacing={2}
        my={15}
        bgcolor="#eddfa6"
      >
        <Grid align="center" item xs={12}>
          <Typography variant="h3">Experiences</Typography>
        </Grid>
        <Grid item xs={6} my={5}>
          <Divider />
        </Grid>
        <Grid container pt={10} pb={3} justifyContent="center">
          <Grid item xs={6}>
            <Typography variant="h5">Educations</Typography>
          </Grid>
        </Grid>
        <Grid container pb={10} xs={6} justifyContent="center">
          <Grid item lg={6} sm={12} py={2} >
            <Typography variant="h6">
              Dr. A.P.J. Abdul Kalam Technical University
            </Typography>
            <Typography>July 2017- May 2021</Typography>
          </Grid>
          <Grid item lg={6} sm={12} py={2}>
            <Typography fontWeight={600}>
              Bachelor of Technology in Computer Science
            </Typography>
            <Typography>
              Hi-Tech institute of Engineering & Technology Ghaziabad
            </Typography>
            <Typography>
              <LocationOnIcon style={{ fontSize: "15px" }} color="success" />
              Ghaziabad U.P
            </Typography>
          </Grid>
          <Grid item mt={4} lg={6} sm={12} >
            <Typography variant="h6">Cources</Typography>
          </Grid>
          <Grid mt={4} item lg={6} sm={12} >
            <Typography>
              Completed Full Stack Web Development course with NodeJS
            </Typography>
          </Grid>
          <Grid mt={4} item lg={6} sm={12}></Grid>
          <Grid mt={4} item lg={6} sm={12} >
            <Typography>Completed JavaScript course from Udemy</Typography>
          </Grid>
          <Grid mt={4} item lg={6} sm={12} ></Grid>
          <Grid mt={4} item lg={6} sm={12} >
            <Typography>Completed Python course from Udemy</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={6} my={5}>
          <Divider />
        </Grid>
        <Grid container pt={10} pb={3} justifyContent="center">
          <Grid item xs={6}>
            <Typography variant="h5">Careers</Typography>
          </Grid>
        </Grid>
        <Grid container pb={10} xs={6} justifyContent="center">
          <Grid item lg={6} sm={12} py={2}>
            <Typography variant="h6">Junior FullStack Developer</Typography>
            <Typography>May 2021 - Jan 2022</Typography>
          </Grid>
          <Grid item lg={6} sm={12} py={2}>
            <Typography fontWeight={600}>Cliffex Software Solution</Typography>
            <Typography>FullTime Employee</Typography>
            <Typography pt={2}>
              I am FullStack Developer at Cliffex Software Solution. I joined
              Cliffex as fresher now I have good knowledge in ReactJS, NodeJS in
              these technologies and I put this for the growth of the company
              And every new day I learn many new things.
            </Typography>
            <Typography pt={1}>
              <LocationOnIcon style={{ fontSize: "15px" }} color="success" />
              Sectr 58, Noida, Uttar Pradesh
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid container pb={10} xs={6} justifyContent="center">
          <Grid item  lg={6} sm={12} py={2}>
            <Typography variant="h6">MERN Stack Developer</Typography>
            <Typography>Feb 2022 - Present</Typography>
          </Grid>
          <Grid item lg={6} sm={12} py={2}>
            <Typography fontWeight={600}>Applore Technologies</Typography>
            <Typography>FullTime Employee</Typography>
            <Typography pt={2}>
              I am MERN Stack Developer at Applore Technologies. I joined
              Applore as Full time employee now I have good knowledge in
              ReactJS, NodeJS in these technologies and I put this for the
              growth of the company And every new day I learn many new things.
            </Typography>
            <Typography pt={1}>
              <LocationOnIcon style={{ fontSize: "15px" }} color="success" />
              WTT Sectr 16, Noida, Uttar Pradesh
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* ------------------------->Abilities */}

      <Grid container justifyContent="center" spacing={2} mt={15}>
        <Grid align="center" item lg={12}>
          <Typography variant="h3">Abilities</Typography>
        </Grid>
        <Grid align="center" item xs={12}>
          <Typography color="#727878" variant="p" fontSize={"25px"}>
            “Life without knowledge is death in disguise.”
          </Typography>
        </Grid>

        <Grid align="center" item xs={12}>
          <Typography color="#727878" variant="p" fontSize={"25px"}>
            - Talib Kweli
          </Typography>
        </Grid>

        <Grid item xs={6} my={5}>
          <Divider />
        </Grid>

        <Grid container pt={10} pb={3} justifyContent="center">
          <Grid item xs={6}>
            <Typography variant="h5">Skills</Typography>
          </Grid>
        </Grid>
        <Grid container pb={10} xs={6} justifyContent="center">


          <Grid item lg={3} sm={6} xs={6} mb={3}>
            <Typography variant="p">HTML</Typography>
          </Grid>
          <Grid item  lg={3} sm={6} xs={6} >
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={5} name="simple-controlled" />
            </Box>
          </Grid>
          <Grid item lg={3} sm={6} xs={6} mb={3}>
            <Typography variant="p">CSS</Typography>
          </Grid>

          <Grid item lg={3}sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={5} name="simple-controlled" />
            </Box>
          </Grid>

          <Grid item lg={3}sm={6} xs={6}mb={3}>
            <Typography variant="p">JavaScript</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={4} name="simple-controlled" />
            </Box>
          </Grid>

          <Grid item lg={3}sm={6} xs={6}mb={3}>
            <Typography variant="p">Bootstrap</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={4} name="simple-controlled" />
            </Box>
          </Grid>

          <Grid item lg={3}sm={6} xs={6}mb={3}>
            <Typography variant="p">ReactJS</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={4} name="simple-controlled" />
            </Box>
          </Grid>

          <Grid item lg={3}sm={6} xs={6}mb={3}>
            <Typography variant="p">Node.js</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={4} name="simple-controlled" />
            </Box>
          </Grid>

          <Grid item lg={3}sm={6} xs={6}mb={3}>
            <Typography variant="p">ExpressJS</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={3} name="simple-controlled" />
            </Box>
          </Grid>

          <Grid item lg={3}sm={6} xs={6}mb={3}>
            <Typography variant="p">MongoDB</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={4} name="simple-controlled" />
            </Box>
          </Grid>
        </Grid>

        {/* ---------------------------------->Languages */}

        <Grid item xs={12}></Grid>
        <Grid item xs={6}>
          <Divider />
        </Grid>

        <Grid container pt={10} pb={1} justifyContent="center">
          <Grid item xs={6}>
            <Typography variant="h5">Languages</Typography>
          </Grid>
        </Grid>
        <Grid container pb={10} xs={6} justifyContent="center">
          <Grid item lg={3} sm={6} xs={6} mb={3}>
            <Typography variant="p">Hindi</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={5} name="simple-controlled" />
            </Box>
          </Grid>

          <Grid item lg={3} sm={6} xs={6} mb={3}>
            <Typography variant="p">English</Typography>
          </Grid>

          <Grid item lg={3} sm={6} xs={6}>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating value={3} name="simple-controlled" />
            </Box>
          </Grid>
        </Grid>

        {/* ----------------------------------------> Contact */}

        <Grid
          container
          bgcolor="#434242"
          justifyContent="center"
          spacing={2}
          mt={15}
          py={10}
          px={5}
        >
          <Grid align="center" item xs={12}>
            <Typography variant="h3" color="white"> 
              Contact
            </Typography> 
          </Grid> 
          <Grid align="center" item xs={12}>
            <Typography color="#727878" variant="p" fontSize={"25px"}>
              “If I had asked people what they wanted, they would have said
              faster horses. ”
            </Typography>
          </Grid>
 
          <Grid align="center" item xs={12}>
            <Typography color="#727878" variant="p" fontSize={"25px"}>
              - Henry Ford
            </Typography> 
          </Grid>

          <Grid item xs={6} my={5} m={0} p={0}>
            <Divider p={0} />
          </Grid>

          <Grid container pt={10} pb={0} justifyContent="right">
            <Grid item lg={6} sm={12} xs={12} >
            </Grid>
          </Grid>
          <Grid container pb={0} xs={6} justifyContent="center">
            <Grid align='right' item lg={1} sm={4} xs={4} mb={3}>
              <Typography variant="p">
                <LinkedInIcon
                  color="action"
                  style={{ color: "#FFFFFF" }}
                  fontSize="large"
                />
              </Typography>
            </Grid>


            <Grid align='center' item lg={3} sm={8} xs={8} pt={1} >
              <Link
              align="right"
                href="https://www.linkedin.com/in/nitishkumar746/"
                color={"#727878"}
                underline="none"
              >
                LinkedIn Profile
              </Link>
            </Grid>


            <Grid align='right' item lg={1} sm={4} xs={4} mb={3}>
              <Typography variant="p">
                <GitHubIcon fontSize="large" style={{ color: "#FFFFFF" }} />
              </Typography>
            </Grid>

            <Grid align='center' item lg={3} sm={8} xs={8}  pt={1}>
              <Link
                href="https://github.com/NIitishKumar"
                color={"#727878"}
                underline="none"
              >
                GitHub Profile
              </Link>
            </Grid>

            <Grid align='right' item lg={1} sm={4} xs={4} mb={3} >
              <Typography variant="p">
                <EmailIcon fontSize="large" style={{ color: "#FFFFFF" }} />{" "}
              </Typography>
            </Grid>
            <Grid align='center' item  lg={3} sm={8} xs={8}  pt={1}>
              <Link
                href="Nitishkumar.ng746@gmail.com"
                color={"#727878"}
                underline="none"
              >
                Gmail
              </Link>
            </Grid>
            <Grid item xs={6} mb={3}>
              <Typography variant="p"></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
