import PAGES from "./pageModel.js";
import {
  HOME_PAGE,
  ABOUT_PAGE,
  CREATE_PIC_PAGE,
  ERROR404_PAGE,
  SIGNUP_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE_LINK,
  LOGIN_PAGE_LINK,
  CREATE_PIC_PAGE_LINK,LOGOUT_BTN
} from "../services/domService.js";

export const onChangePage = (page) => {
  HOME_PAGE.className = "d-none";
  ABOUT_PAGE.className = "d-none";
  CREATE_PIC_PAGE.className = "d-none";
  SIGNUP_PAGE.className = "d-none";
  LOGIN_PAGE.className = "d-none";
  ERROR404_PAGE.className = "d-none";
  if (page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
  if (page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
  if (page === PAGES.CREATE_PIC) return (CREATE_PIC_PAGE.className = "d-block");
  if (page === PAGES.LOGIN) return (LOGIN_PAGE.className = "d-block");
  if (page === PAGES.SIGNUP) return (SIGNUP_PAGE.className = "d-block");
  ERROR404_PAGE.className = "d-block";
};
export const updateUserInterface = () => {
  console.log('SIGNUP_PAGE_LINK:', SIGNUP_PAGE_LINK.classList.contains("d-block"));
  console.log('LOGIN_PAGE_LINK:', LOGIN_PAGE_LINK.classList.contains("d-block"));
  console.log('CREATE_PIC_PAGE_LINK:', CREATE_PIC_PAGE_LINK.classList.contains("d-none"));
  console.log('LOGOUT_BTN:', LOGOUT_BTN.classList.contains("d-none"));

  if (
    SIGNUP_PAGE_LINK.classList.contains("d-block") &&
    LOGIN_PAGE_LINK.classList.contains("d-block") &&
    CREATE_PIC_PAGE_LINK.classList.contains("d-none") &&
    LOGOUT_BTN.classList.contains("d-none")
  ) {
    SIGNUP_PAGE_LINK.classList.replace("d-block", "d-none");
    LOGIN_PAGE_LINK.classList.replace("d-block", "d-none");
    CREATE_PIC_PAGE_LINK.classList.replace("d-none", "d-block");
    LOGOUT_BTN.classList.replace("d-none", "d-block");
    onChangePage(PAGES.HOME)
    console.log(`${HOME_PAGE.className}+${PAGES.HOME}`);
  }
  else {
    SIGNUP_PAGE_LINK.classList.replace("d-none","d-block" );
    LOGIN_PAGE_LINK.classList.replace( "d-none","d-block");
    CREATE_PIC_PAGE_LINK.classList.replace("d-block","d-none");
    LOGOUT_BTN.classList.replace("d-block","d-none");
    onChangePage(PAGES.HOME)
    console.log(`${HOME_PAGE.className}+${PAGES.HOME}`);
  } 
};
