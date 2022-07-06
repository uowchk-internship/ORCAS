const Header = () => {
    return (
        <div>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="last-modified" content="2021-05-11" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="ORCAS - UOW College Hong Kong"
                />

                <meta
                    property="og:image"
                    content="https://www.uowchk.edu.hk/site-assets/logos/999x562-999x562.jpg"
                />
                <meta
                    property="og:url"
                    content="https://www.uowchk.edu.hk/about-us/about-the-faculties/"
                />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="ORCAS - UOW College Hong Kong"
                />

                <meta
                    name="twitter:image"
                    content="https://www.uowchk.edu.hk/site-assets/logos/999x562-999x562.jpg"
                />
                <meta
                    name="twitter:url"
                    content="https://www.uowchk.edu.hk/about-us/about-the-faculties/"
                />

                <meta name="date.created" content="2019-08-20" />
                <meta name="edit.date" content="2021-05-11" />
                <meta name="category" content="" />

                <meta
                    name="editingPage"
                    content="https://uoweduau-cms02-production.terminalfour.net/terminalfour/page/section#edit/20655/contents"
                />
                <meta name="date.sort" content="2021-05-11" />
                {/* <style type="text/css">
                    svg:not(:root).svg-inline--fa {
                        overflow: visible;
    }
                    .svg-inline--fa {
                        display: inline-block;
                    font-size: inherit;
                    height: 1em;
                    overflow: visible;
                    vertical-align: -0.125em;
    }
                    .svg-inline--fa.fa-lg {
                        vertical - align: -0.225em;
    }
                    .svg-inline--fa.fa-w-1 {
                        width: 0.0625em;
    }
                    .svg-inline--fa.fa-w-2 {
                        width: 0.125em;
    }
                    .svg-inline--fa.fa-w-3 {
                        width: 0.1875em;
    }
                    .svg-inline--fa.fa-w-4 {
                        width: 0.25em;
    }
                    .svg-inline--fa.fa-w-5 {
                        width: 0.3125em;
    }
                    .svg-inline--fa.fa-w-6 {
                        width: 0.375em;
    }
                    .svg-inline--fa.fa-w-7 {
                        width: 0.4375em;
    }
                    .svg-inline--fa.fa-w-8 {
                        width: 0.5em;
    }
                    .svg-inline--fa.fa-w-9 {
                        width: 0.5625em;
    }
                    .svg-inline--fa.fa-w-10 {
                        width: 0.625em;
    }
                    .svg-inline--fa.fa-w-11 {
                        width: 0.6875em;
    }
                    .svg-inline--fa.fa-w-12 {
                        width: 0.75em;
    }
                    .svg-inline--fa.fa-w-13 {
                        width: 0.8125em;
    }
                    .svg-inline--fa.fa-w-14 {
                        width: 0.875em;
    }
                    .svg-inline--fa.fa-w-15 {
                        width: 0.9375em;
    }
                    .svg-inline--fa.fa-w-16 {
                        width: 1em;
    }
                    .svg-inline--fa.fa-w-17 {
                        width: 1.0625em;
    }
                    .svg-inline--fa.fa-w-18 {
                        width: 1.125em;
    }
                    .svg-inline--fa.fa-w-19 {
                        width: 1.1875em;
    }
                    .svg-inline--fa.fa-w-20 {
                        width: 1.25em;
    }
                    .svg-inline--fa.fa-pull-left {
                        margin - right: 0.3em;
                    width: auto;
    }
                    .svg-inline--fa.fa-pull-right {
                        margin - left: 0.3em;
                    width: auto;
    }
                    .svg-inline--fa.fa-border {
                        height: 1.5em;
    }
                    .svg-inline--fa.fa-li {
                        width: 2em;
    }
                    .svg-inline--fa.fa-fw {
                        width: 1.25em;
    }
                    .fa-layers svg.svg-inline--fa {
                        bottom: 0;
                    left: 0;
                    margin: auto;
                    position: absolute;
                    right: 0;
                    top: 0;
    }
                    .fa-layers {
                        display: inline-block;
                    height: 1em;
                    position: relative;
                    text-align: center;
                    vertical-align: -0.125em;
                    width: 1em;
    }
                    .fa-layers svg.svg-inline--fa {
                        -webkit - transform - origin: center center;
                    transform-origin: center center;
    }
                    .fa-layers-counter,
                    .fa-layers-text {
                        display: inline-block;
                    position: absolute;
                    text-align: center;
    }
                    .fa-layers-text {
                        left: 50%;
                    top: 50%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                    -webkit-transform-origin: center center;
                    transform-origin: center center;
    }
                    .fa-layers-counter {
                        background - color: #ff253a;
                    border-radius: 1em;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    color: #fff;
                    height: 1.5em;
                    line-height: 1;
                    max-width: 5em;
                    min-width: 1.5em;
                    overflow: hidden;
                    padding: 0.25em;
                    right: 0;
                    text-overflow: ellipsis;
                    top: 0;
                    -webkit-transform: scale(0.25);
                    transform: scale(0.25);
                    -webkit-transform-origin: top right;
                    transform-origin: top right;
    }
                    .fa-layers-bottom-right {
                        bottom: 0;
                    right: 0;
                    top: auto;
                    -webkit-transform: scale(0.25);
                    transform: scale(0.25);
                    -webkit-transform-origin: bottom right;
                    transform-origin: bottom right;
    }
                    .fa-layers-bottom-left {
                        bottom: 0;
                    left: 0;
                    right: auto;
                    top: auto;
                    -webkit-transform: scale(0.25);
                    transform: scale(0.25);
                    -webkit-transform-origin: bottom left;
                    transform-origin: bottom left;
    }
                    .fa-layers-top-right {
                        right: 0;
                    top: 0;
                    -webkit-transform: scale(0.25);
                    transform: scale(0.25);
                    -webkit-transform-origin: top right;
                    transform-origin: top right;
    }
                    .fa-layers-top-left {
                        left: 0;
                    right: auto;
                    top: 0;
                    -webkit-transform: scale(0.25);
                    transform: scale(0.25);
                    -webkit-transform-origin: top left;
                    transform-origin: top left;
    }
                    .fa-lg {
                        font - size: 1.33333em;
                    line-height: 0.75em;
                    vertical-align: -0.0667em;
    }
                    .fa-xs {
                        font - size: 0.75em;
    }
                    .fa-sm {
                        font - size: 0.875em;
    }
                    .fa-1x {
                        font - size: 1em;
    }
                    .fa-2x {
                        font - size: 2em;
    }
                    .fa-3x {
                        font - size: 3em;
    }
                    .fa-4x {
                        font - size: 4em;
    }
                    .fa-5x {
                        font - size: 5em;
    }
                    .fa-6x {
                        font - size: 6em;
    }
                    .fa-7x {
                        font - size: 7em;
    }
                    .fa-8x {
                        font - size: 8em;
    }
                    .fa-9x {
                        font - size: 9em;
    }
                    .fa-10x {
                        font - size: 10em;
    }
                    .fa-fw {
                        text - align: center;
                    width: 1.25em;
    }
                    .fa-ul {
                        list - style - type: none;
                    margin-left: 2.5em;
                    padding-left: 0;
    }
    .fa-ul > li {
                        position: relative;
    }
                    .fa-li {
                        left: -2em;
                    position: absolute;
                    text-align: center;
                    width: 2em;
                    line-height: inherit;
    }
                    .fa-border {
                        border: solid 0.08em #eee;
                    border-radius: 0.1em;
                    padding: 0.2em 0.25em 0.15em;
    }
                    .fa-pull-left {
                        float: left;
    }
                    .fa-pull-right {
                        float: right;
    }
                    .fa.fa-pull-left,
                    .fab.fa-pull-left,
                    .fal.fa-pull-left,
                    .far.fa-pull-left,
                    .fas.fa-pull-left {
                        margin - right: 0.3em;
    }
                    .fa.fa-pull-right,
                    .fab.fa-pull-right,
                    .fal.fa-pull-right,
                    .far.fa-pull-right,
                    .fas.fa-pull-right {
                        margin - left: 0.3em;
    }
                    .fa-spin {
                        -webkit - animation: fa-spin 2s infinite linear;
                    animation: fa-spin 2s infinite linear;
    }
                    .fa-pulse {
                        -webkit - animation: fa-spin 1s infinite steps(8);
                    animation: fa-spin 1s infinite steps(8);
    }
                    @-webkit-keyframes fa-spin {
                        0 % {
        - webkit - transform: rotate(0);
                    transform: rotate(0);
      }
                    100% {
                        -webkit - transform: rotate(360deg);
                    transform: rotate(360deg);
      }
    }
                    @keyframes fa-spin {
                        0 % {
        - webkit - transform: rotate(0);
                    transform: rotate(0);
      }
                    100% {
                        -webkit - transform: rotate(360deg);
                    transform: rotate(360deg);
      }
    }
                    .fa-rotate-90 {
                        -webkit - transform: rotate(90deg);
                    transform: rotate(90deg);
    }
                    .fa-rotate-180 {
                        -webkit - transform: rotate(180deg);
                    transform: rotate(180deg);
    }
                    .fa-rotate-270 {
                        -webkit - transform: rotate(270deg);
                    transform: rotate(270deg);
    }
                    .fa-flip-horizontal {
                        -webkit - transform: scale(-1, 1);
                    transform: scale(-1, 1);
    }
                    .fa-flip-vertical {
                        -webkit - transform: scale(1, -1);
                    transform: scale(1, -1);
    }
                    .fa-flip-horizontal.fa-flip-vertical {
                        -webkit - transform: scale(-1, -1);
                    transform: scale(-1, -1);
    }
                    :root .fa-flip-horizontal,
                    :root .fa-flip-vertical,
                    :root .fa-rotate-180,
                    :root .fa-rotate-270,
                    :root .fa-rotate-90 {
                        -webkit - filter: none;
                    filter: none;
    }
                    .fa-stack {
                        display: inline-block;
                    height: 2em;
                    position: relative;
                    width: 2em;
    }
                    .fa-stack-1x,
                    .fa-stack-2x {
                        bottom: 0;
                    left: 0;
                    margin: auto;
                    position: absolute;
                    right: 0;
                    top: 0;
    }
                    .svg-inline--fa.fa-stack-1x {
                        height: 1em;
                    width: 1em;
    }
                    .svg-inline--fa.fa-stack-2x {
                        height: 2em;
                    width: 2em;
    }
                    .fa-inverse {
                        color: #fff;
    }
                    .sr-only {
                        border: 0;
                    clip: rect(0, 0, 0, 0);
                    height: 1px;
                    margin: -1px;
                    overflow: hidden;
                    padding: 0;
                    position: absolute;
                    width: 1px;
    }
                    .sr-only-focusable:active,
                    .sr-only-focusable:focus {
                        clip: auto;
                    height: auto;
                    margin: 0;
                    overflow: visible;
                    position: static;
                    width: auto;
    }
                </style> */}
                <link
                    rel="canonical"
                    href="https://www.uowchk.edu.hk/about-us/about-the-faculties/"
                />

                <title>ORCAS - UOW College Hong Kong</title>
                <link
                    rel="stylesheet"
                    href="https://cloud.typography.com/6112672/6956192/css/fonts.css"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                    href="https://www.uowchk.edu.hk/site-assets/styles/uow/app.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                    href="https://www.uowchk.edu.hk/site-assets/styles/uow/emergency-notices.css"
                />

                <script
                    type="text/javascript"
                    async=""
                    src="//siteimproveanalytics.com/js/siteanalyze_13656.js"
                ></script>
                <script
                    type="text/javascript"
                    async=""
                    src="https://www.google-analytics.com/analytics.js"
                ></script>
                <script
                    async=""
                    src="https://www.googletagmanager.com/gtm.js?id=GTM-TXSMLJ6"
                ></script>
                <script
                    defer=""
                    src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
                    integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
                    crossorigin="anonymous"
                ></script>
                <script src="https://use.fortawesome.com/dc5d3cc4.js"></script>
                <link
                    rel="stylesheet"
                    href="https://use.fortawesome.com/kits/dc5d3cc4/publications/92836/woff2.css"
                    media="all"
                />
                <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
                <script
                    defer=""
                    src="https://www.uowchk.edu.hk/site-assets/scripts/uow/emergency-notices.js"
                ></script>
                <script
                    defer=""
                    src="https://www.uowchk.edu.hk/site-assets/scripts/uow/jquery.easy-autocomplete.min.js"
                ></script>

                <link
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                    href="https://www.uowchk.edu.hk/site-assets/styles/uow/t4-updates.css"
                />
                <script
                    defer=""
                    src="https://www.uowchk.edu.hk/site-assets/scripts/uow/t4-updates.js"
                ></script>

                <meta class="foundation-mq" />
            </head>
            <div class="standard-content gutter public-inner-standard-with-nav">
                <noscript
                >&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXSMLJ6"
                    height="0" width="0"
                    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript
                >

                <div class="cookies-notice" role="contentinfo">
                    <div>
                        <div class="notice" tabindex="1">
                            <p>
                                We use cookies to improve your experience on our site and to show you
                                personalised advertising. To find out more, read our
                                <a
                                    class="t4-tag-content-item"
                                    target="_blank"
                                    title="Privacy policy and cookie policy"
                                    href="https://www.uowchk.edu.hk/about-us/legal-information"
                                    tabindex="1"
                                >privacy policy and cookie policy</a
                                >
                            </p>
                        </div>
                        <div>
                            <button class="button" tabindex="1">OK, THANKS</button>
                        </div>
                    </div>
                </div>

                <div class="emergencynotice" aria-live="assertive"></div>

                <header class="uw-header">
                    <a class="skip-link" href="#main-content" tabindex="1" role="navigation"
                    >Skip to Content</a
                    >
                    <div class="uw-header-top">
                        <div class="uw-header-container">
                            <div class="uw-header-logo">
                                <a href="/" aria-label="UOW College Hong Kong home page" tabindex="2">
                                    <img
                                        class="logo-regular logo-regular-white"
                                        src="https://www.uowchk.edu.hk/site-assets/logos/uow-college-hong-kong/uowchk-logo-white.svg"
                                        alt="UOW College Hong Kong logo"
                                    />
                                    <img
                                        class="logo-regular logo-regular-navy"
                                        src="https://www.uowchk.edu.hk/site-assets/logos/uow-college-hong-kong/uowchk-logo-navy.svg"
                                        alt="UOW College Hong Kong logo"
                                    />
                                    <img
                                        class="logo-horizontal"
                                        src="https://www.uowchk.edu.hk/site-assets/logos/uow-college-hong-kong/uowchk-logo-navy.svg"
                                        alt="UOW College Hong Kong logo"
                                    />
                                </a>
                            </div>

                            <div class="uw-header-navs">
                                <nav class="uw-top-menu">
                                    <ul class="top-menu">
                                        <li class="top-nav-order-1">
                                            <a class="btn-nav btn-search" href="" tabindex="3"
                                            ><span>Search</span></a
                                            >
                                        </li>

                                        <li class="top-nav-order-2">
                                            <a
                                                class="btn-nav btn-students"
                                                href="/current-students/"
                                                tabindex="5"
                                            ><span>Current </span>Students</a
                                            >
                                        </li>
                                        <li class="top-nav-order-3">
                                            <a class="btn-nav btn-staff" href="/staff/" tabindex="6"
                                            >Staff</a
                                            >
                                        </li>

                                        <li class="mobile-menu-trigger">
                                            <a class="btn-nav btn-menu btn-mob-trigger" href=""
                                            >Menu
                                                <div class="icon-menu-bar-1"></div>
                                                <div class="icon-menu-bar-2"></div>
                                                <div class="icon-menu-bar-3"></div>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <nav class="uw-main-menu">
                                    <div class="grid-container">
                                        <ul class="main-menu">
                                            <li>
                                                <a
                                                    class="uw-main-menu-item uw-has-submenu"
                                                    href="https://www.uowchk.edu.hk/study-at-uowchk/"
                                                >Study at UOWCHK</a
                                                >
                                            </li>
                                            <li>
                                                <a class="uw-main-menu-item uw-has-submenu" href=""
                                                >About us</a
                                                >
                                                <div class="uw-main-submenu">
                                                    <div class="grid-container">
                                                        <h2>About us</h2>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/about-us/message-from-the-president/"
                                                                >
                                                                    Message from the President
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/about-us/college-structure/">
                                                                    College Structure
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/about-us/about-the-faculties/"
                                                                >
                                                                    About the faculties
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/about-us/about-university-of-wollongong-australia/"
                                                                >
                                                                    About UOW Australia
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/study-at-uowchk/campuses-and-facilities/"
                                                                >
                                                                    Campuses and facilities
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/about-us/commitment-to-quality/"
                                                                >
                                                                    Commitment to quality
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/about-us/staff-directory/">
                                                                    Staff Directory
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/contact-us/"> Contact us </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/working-with-us/">
                                                                    Working with us
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <a href="/about-us/" class="subnav-cta" tabindex="-1"
                                                        >About us
                                                        </a>

                                                        <button class="close-nav" tabindex="-1">Close</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="">
                                                <a href="/news--events/" class="uw-main-menu-item"
                                                ><span>News &amp; Events</span></a
                                                >
                                            </li>
                                            <li>
                                                <a class="uw-main-menu-item uw-has-submenu" href=""
                                                >Quick Links</a
                                                >
                                                <div class="uw-main-submenu">
                                                    <div class="grid-container">
                                                        <h2>Quick Links</h2>
                                                        <ul>
                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/study-at-uowchk/find-programmes/international-language-proficiency-tests/"
                                                                >
                                                                    Language tests
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/study-at-uowchk/find-programmes/centre-for-lifelong-learning/"
                                                                >
                                                                    Short courses
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/current-students/useful-links/"
                                                                >
                                                                    Students useful links
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/current-students/download-forms/"
                                                                >
                                                                    Students download forms
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/academic-calendar-and-important-dates/"
                                                                >
                                                                    Academic calendar
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="https://www.uow.edu.au/library/"
                                                                >
                                                                    UOW library
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/study-at-uowchk/campuses-and-facilities/uowchk-libraries/"
                                                                >
                                                                    UOWCHK libraries
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/current-students/adverse-weather-arrangements/"
                                                                >
                                                                    Adverse Weather Arrangement
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <button class="close-nav" tabindex="-1">Close</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a class="uw-main-menu-item uw-has-submenu" href=""
                                                >學院課程</a
                                                >
                                                <div class="uw-main-submenu">
                                                    <div class="grid-container">
                                                        <h2>學院課程</h2>
                                                        <ul>
                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21868/s-21870/">
                                                                    選擇原因
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/s-21476/s-21868/find-programmes/"
                                                                >
                                                                    課程資訊
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/s-21476/s-21868/s-21538/#d.en.109298"
                                                                >
                                                                    入學要求
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21868/s-21538/">
                                                                    申請方法
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21868/s-21535/">
                                                                    學費、政府資助及獎學金
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21868/s-21873/">
                                                                    校舍及設施
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21486/">
                                                                    聯絡我們
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <a
                                                            href="/s-21476/s-21868/"
                                                            class="subnav-cta"
                                                            tabindex="-1"
                                                        >學院課程
                                                        </a>

                                                        <button class="close-nav" tabindex="-1">Close</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a class="uw-main-menu-item uw-has-submenu" href=""
                                                >關於我們</a
                                                >
                                                <div class="uw-main-submenu">
                                                    <div class="grid-container">
                                                        <h2>關於我們</h2>
                                                        <ul>
                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21720/s-21816/">
                                                                    校長的話
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/about-us/college-structure/">
                                                                    學院架構
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21720/s-21487/">
                                                                    學院簡介
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21720/s-22391/">
                                                                    澳洲伍倫貢大學
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21868/s-21873/">
                                                                    校舍及設施
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a
                                                                    tabindex="-1"
                                                                    href="/about-us/commitment-to-quality/"
                                                                >
                                                                    教育質素承諾
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21720/s-21818/">
                                                                    教職員名錄
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/s-21476/s-21486/">
                                                                    聯絡我們
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a tabindex="-1" href="/working-with-us/">
                                                                    工作機會
                                                                </a>
                                                            </li>
                                                        </ul>

                                                        <a
                                                            href="/s-21476/s-21720/"
                                                            class="subnav-cta"
                                                            tabindex="-1"
                                                        >關於我們
                                                        </a>

                                                        <button class="close-nav" tabindex="-1">Close</button>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div class="uw-header-clearfix"></div>

            </div>
        </div>
    )
}

export default Header;