import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ReorderIcon from "@mui/icons-material/Reorder";
import Tooltip from "@mui/material/Tooltip";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Link } from "react-scroll";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import "../../style/EntryPage.css"

function More({ size }: { size: any }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeLink, setActiveLink] = React.useState<string>("home"); // Track active link
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSetActive = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div>
      <React.Fragment>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            bgcolor: "bg:red-300",
            color: "black"
          }}
        >
          <Tooltip title="Account settings" >
            <IconButton
              onClick={handleClick}
              size="large"
              sx={{ mt: 0 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}

            >
              <ReorderIcon
                fontSize={size}
                className="w-[40px] text-black h-24"
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          style={{ padding: "0px" }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          className=""
          slotProps={{
            paper: {
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.1)", // light transparent layer
                backdropFilter: "blur(20px)", // strong blur
                WebkitBackdropFilter: "blur(20px)", // for Safari support
                zIndex: 1000000,
                borderRadius: "14px"
              },
            }
          }}
          sx={{
            "& .MuiPaper-root": {

            },
          }}
        >

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full "
              to="home"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("home");
              }}
              onSetActive={() => handleSetActive("home")}
            >
              <div className="flex w-[100%] justify-left sm:py-1">
                <HomeOutlinedIcon
                  className={
                    activeLink === "home" ? "text-[#000000]": "text-[#FFFFFF]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "home"
                    ? "text-[#000000] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  HOME
                </p>
              </div>
            </Link>
          </MenuItem>

          
          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="qualification"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("qualification");
              }}
              onSetActive={() => handleSetActive("qualification")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <WorkOutlineOutlinedIcon
                  className={
                    activeLink === "qualification" ? "text-[#000000]": "text-[#FFFFFF]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "qualification"
                    ? "text-[#000000] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  QUALIFICATION
                </p>
              </div>
            </Link>
          </MenuItem>

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="services"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("services");
              }}
              onSetActive={() => handleSetActive("services")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <GroupsOutlinedIcon
                  className={
                    activeLink === "services" ? "text-[#000000]": "text-[#FFFFFF]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "services"
                    ? "text-[#000000] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  SERVICES
                </p>
              </div>
            </Link>
          </MenuItem>


          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="projects"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("projects");
              }}
              onSetActive={() => handleSetActive("projects")}
            >
              <div className="flex w-[100%] justify-left sm:py-4">
                <DevicesOutlinedIcon
                  className={
                    activeLink === "projects" ? "text-[#000000]": "text-[#FFFFFF]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "projects"
                    ? "text-[#000000] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  PROJECTS
                </p>
              </div>
            </Link>
          </MenuItem>

        

          <MenuItem style={{ paddingBottom: "0px", paddingTop: "0px" }}>
            <Link
              className="w-full  "
              to="contact"
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => {
                handleClose();
                handleSetActive("contact");
              }}
              onSetActive={() => handleSetActive("contact")}
            >
              <div className="flex w-[100%] sm:py-4">
                <PhoneOutlinedIcon
                  className={
                    activeLink === "contact" ? "text-[#4a7198]": "text-[#FFFFFF]"
                  }
                />
                <p
                  className={`text-[12.3px] grid items-center text-start font-lato ml-[10px] ${activeLink === "contact"
                    ? "text-[#000000] font-extrabold"
                    : "text-[#FFFFFF]"
                    }`}
                >
                  CONTACT
                </p>
              </div>
            </Link>
          </MenuItem>

        </Menu>
      </React.Fragment>
    </div>
  );
}

export default More;
