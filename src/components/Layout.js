import Head from "next/head";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to section-download
  const scrollToDownload = () => {
    const el = document.querySelector(".section-download");
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.scrollToDownload = scrollToDownload;
  }, []);

  // Toggle navbar menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="./assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="./assets/img/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>COCONUT OPEN CLASS</title>
        {/* Fonts and icons */}
        {/* <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" /> */}
        {/* <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet" /> */}
        {/* Nucleo Icons */}
        <link href="./assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />
        {/* Font Awesome Icons */}
        <link href="./assets/css/font-awesome.css" rel="stylesheet" />
        <link href="./assets/css/nucleo-svg.css" rel="stylesheet" />
        {/* CSS Files */}
        <link href="./assets/css/argon-design-system.css?v=1.2.2" rel="stylesheet" />
      </Head>

      {/* Navbar */}
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2"
      >
        <div className="container">
          <a className="navbar-brand mr-lg-5" href="./index.html">
            <img src="./assets/img/logococonut.png" alt="Logo COCONUT" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbar_global"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>×</span>
            ) : (
              <span className="navbar-toggler-icon" />
            )}
          </button>

          <div
            className={`navbar-collapse collapse ${isOpen ? "show" : ""}`}
            id="navbar_global"
            style={{ marginTop: isOpen ? "65px" : "0px" }}
          >
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="./index.html">
                    <img src="./assets/img/logococonut.png" alt="Logo COCONUT" />
                  </a>
                </div>
              </div>
            </div>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://www.facebook.com/coconutcomputer"
                  data-toggle="tooltip"
                  title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none">Facebook</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://www.instagram.com/coconutdotorg"
                  data-toggle="tooltip"
                  title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">Instagram</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://youtube.com/@coconutcomputerclub3982"
                  data-toggle="tooltip"
                  title="Follow us on youtube"
                >
                  <i className="fa fa-youtube-square" />
                  <span className="nav-link-inner--text d-lg-none">youtube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="wrapper">{children}</div>

      {/* Footer */}
      <footer className="footer has-cards">
        <div className="container container-lg">
          <div className="row">
            {/* ... footer cards and content ... */}
            {/* (Kamu bisa copy paste footer dari kode original kamu) */}
          </div>
          <div className="container">
            <div className="row row-grid align-items-center my-md">
              <div className="col-lg-6">
                <h3 className="text-primary font-weight-light mb-2">
                  COCONUT OPEN CLASS
                </h3>
                <h5 className="mb-0 font-weight-light">
                  <b>
                    <i>"Mencerdaskan Kehidupan Bangsa"</i>
                  </b>
                  <br />
                  Membuka Pengetahuan, Menghubungkan Pikiran.
                </h5>
              </div>
              <div className="col-lg-6 text-lg-center btn-wrapper">
                <button
                  rel="nofollow"
                  className="btn btn-icon-only btn-youtube rounded-circle"
                  data-toggle="tooltip"
                  data-original-title="Subscribe us"
                >
                  <a href="https://youtube.com/@coconutcomputerclub3982">
                    <span className="btn-inner--icon">
                      <i className="fa fa-youtube" style={{ color: "white" }} />
                    </span>
                  </a>
                </button>
                <button
                  rel="nofollow"
                  className="btn-icon-only rounded-circle btn btn-facebook"
                  data-toggle="tooltip"
                  data-original-title="Like us"
                >
                  <a href="https://www.facebook.com/coconutcomputer">
                    <span className="btn-inner--icon">
                      <i className="fa fa-facebook" style={{ color: "white" }} />
                    </span>
                  </a>
                </button>
                <button
                  rel="nofollow"
                  className="btn btn-icon-only btn-dribbble rounded-circle"
                  data-toggle="tooltip"
                  data-original-title="Follow us"
                >
                  <a href="https://coconut.or.id">
                    <span className="btn-inner--icon">
                      <i className="fa fa-chrome" style={{ color: "white" }} />
                    </span>
                  </a>
                </button>
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-md-between">
              <div className="col-md-6">
                <div className="copyright">
                  © 2024 <a href="https://coconut.or.id">COCONUT Computer Club</a>.
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav nav-footer justify-content-end">
                  <li className="nav-item">
                    <a href="https://coconut.or.id" className="nav-link">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://coconut.or.id/blog" className="nav-link">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* JS Scripts */}
      <script src="./assets/js/core/jquery.min.js" type="text/javascript"></script>
      <script src="./assets/js/core/popper.min.js" type="text/javascript"></script>
      <script src="./assets/js/core/bootstrap.min.js" type="text/javascript"></script>
      <script src="./assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>

      <script src="./assets/js/plugins/bootstrap-switch.js"></script>
      <script src="./assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
      <script src="./assets/js/plugins/moment.min.js"></script>
      <script src="./assets/js/plugins/datetimepicker.js" type="text/javascript"></script>
      <script src="./assets/js/plugins/bootstrap-datepicker.min.js"></script>

      <script src="./assets/js/argon-design-system.min.js?v=1.2.2" type="text/javascript"></script>
      
      <script src="assets/js/script.js"></script>
    </>
  );
}