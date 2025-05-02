import linkedin from "../assets/Icons/linkedin.png";
import github from "../assets/Icons/github.png";
import gmail from "../assets/Icons/gmail.png"
import { openGitHubPage, openLinkedInPage, openGmail } from "../utilities/Helpers/ExternalConnection";

export const icons = [
    { src: linkedin, alt: "LinkedIn", onClick: () => {openLinkedInPage("/erisazaimi") }},
    { src: github, alt: "GitHub", onClick: () => openGitHubPage("ezaimi") },
    { src: gmail, alt: "Gmail", onClick: () => openGmail("zaierami222@gmail.com") },
  ];

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';


export const footerIcons = [
  { icon: <LinkedInIcon fontSize="medium" />, onClick: () =>openLinkedInPage("/erisazaimi") },
  { icon: <EmailOutlinedIcon fontSize="medium" />, onClick: () => openGmail("zaierami222@gmail.com") },
  { icon: <GitHubIcon fontSize="medium" />, onClick: () => openGitHubPage("ezaimi") },

];

