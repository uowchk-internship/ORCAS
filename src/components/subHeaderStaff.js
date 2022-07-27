import { useState, useEffect } from "react";
import Router from 'next/router'

import Link from 'next/link'

import { checkLoginStatus, logout } from '../functions/admin'

export default function SubHeader(props) {
  let location = props.path !== undefined ? props.path : "";

  const [loginChecked, setLoginChecked] = useState(false)

  const logoutHandler = () => {
    logout();
    setLoginChecked(false)
  }

  useEffect(() => {
    const checkLogin = async () => {
      let isLogin = await checkLoginStatus()

      if (isLogin) {
        setLoginChecked(true)
      } else {
        Router.push("/login")
      }
    }

    if (!loginChecked) {
      checkLogin();
    }
  })

  return (
    <section className="uw-masthead uw-masthead--page-nav uw-masthead--image">
      <div className="grid-container blue-nav">
        <div className="page-navigator js-page-navigator">
          <div className="grid-x page-navigator__button-wrapper">
            <a
              href="#"
              className="page-navigator__button page-navigator__button--breadcrumbs js-page-navigator__button"
              data-toggle="page-navigator__list--breadcrumbs"
            >
              You are here
              <svg
                className="svg-inline--fa fa-chevron-down fa-w-14"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                ></path>
              </svg>
              <svg
                className="svg-inline--fa fa-times fa-w-11"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="times"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="page-navigator__button page-navigator__button--pages js-page-navigator__button"
              data-toggle="page-navigator__list--pages"
            >
              More Pages
              <svg
                className="svg-inline--fa fa-chevron-down fa-w-14"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                ></path>
              </svg>
              <svg
                className="svg-inline--fa fa-times fa-w-11"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="times"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 352 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="page-navigator__list page-navigator__list--breadcrumbs">
            <ul className="no-bullet breadcrumbs js-breadcrumbs">
              <li>
                <a href="https://www.uowchk.edu.hk/">Home</a>
              </li>
              <li>
                <a href="https://www.uowchk.edu.hk/current-students/">
                  Current students
                </a>
              </li>
              <li>
                <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/">
                  Students Learning Support System
                </a>
              </li>
              <li>
                {location === "/" ? "ORCAS" :
                  <Link href="/">
                    ORCAS
                  </Link>
                }
              </li>
              <li>
                {location === "/staff" ? "Staff" :
                  <Link href="/staff">
                    Staff
                  </Link>
                }
              </li>
              {location == "/staff" ? "" :
                <li>
                  {(location.charAt(7).toUpperCase() + location.substring(8, location.length))}
                </li>
              }
            </ul>
          </div>
          <div className="page-navigator__list page-navigator__list--pages">
            <div className="page-navigator__list--pages--wrapper">
              <p className="page-navigator__title">ORCAS - Staff</p>
              <ul className="no-bullet">
                <li>
                  <span className={location === "/staff" ? "currentbranch0" : ""} >
                    <Link href="/staff">Staff</Link>
                  </span>
                </li>
                <li>
                  <span className={location === "/staff/approval" ? "currentbranch0" : ""} >
                    <Link href="/staff/approval">Approval</Link>
                  </span>
                </li>
                <li>
                  <span className={location === "/staff/management" ? "currentbranch0" : ""} >
                    <Link href="/staff/management">Management</Link>
                  </span>
                </li>
                <li>
                  <span className={location === "/staff/upload" ? "currentbranch0" : ""} >
                    <Link href="/staff/upload">Upload</Link>
                  </span>
                </li>
                <li>
                  <span >
                    <a onClick={() => logoutHandler()}>Logout</a>
                  </span>
                </li>
              </ul>
              <button className="page-navigator-more">Show more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="uw-masthead__main">
        <div className="grid-container">
          <div className="grid-x align-left">
            <div className="uw-masthead__content">
              <h1 className="cell js-scroll-reveal--left uw-masthead__title uw-masthead__subbrand--title">
                {location == "/staff" ? "Staff" : (location.charAt(7).toUpperCase() + location.substring(8, location.length))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
