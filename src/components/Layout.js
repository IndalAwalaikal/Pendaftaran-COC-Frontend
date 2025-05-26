import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script"; // Import Script component from next/script

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to section
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
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/img/apple-icon.png"
        />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>COCONUT OPEN CLASS</title>
      </Head>

      {/* Navbar */}
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-expand-lg bg-white navbar-light position-sticky top-0 shadow py-2"
      >
        <div className="container">
          <Link href="/" passHref>
            <a className="navbar-brand mr-lg-5">
              <Image
                src="/assets/img/logococonut.png"
                width={112}
                height={28}
                alt="Logo COCONUT"
                priority
              />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbar_global"
            aria-expanded="false"
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
                  <Link href="/" passHref>
                    <div class="col-6 collapse-brand">
                      <Image
                        src="/assets/img/logo.png"
                        width={112}
                        height={28}
                        alt="Logo COCONUT"
                        priority
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav align-items-lg-center ml-lg-auto">
              <li class="nav-item">
                <Link href="/https://www.facebook.com/coconutcomputer" passHref>
                  <a
                    class="nav-link nav-link-icon"
                    data-toggle="tooltip"
                    title="Like us on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a class="fa fa-facebook text-dark" href="https://www.facebook.com"></a>
                    <span class="nav-link-inner--text d-lg-none">Facebook</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://www.instagram.com/coconutdotorg" passHref>
                  <a
                    className="nav-link nav-link-icon"
                    data-toggle="tooltip"
                    title="Follow us on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a class="fa fa-instagram text-dark" href="https://www.instagram.com"></a>
                    <span class="nav-link-inner--text d-lg-none">Instagram</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="https://youtube.com/@coconutcomputerclub3982" passHref>
                  <a
                    className="nav-link nav-link-icon"
                    data-toggle="tooltip"
                    title="Click us on youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <a class="fa fa-youtube text-dark" href="https://www.youtube.com"></a>
                    <span class="nav-link-inner--text d-lg-none">youtube</span>
                  </a>
                </Link>
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
          </div>
          <div className="container">
            <div className="row row-grid align-items-center my-md">
              <div className="col-lg-6">
                <h3 className="text-primary font-weight-light mb-2">
                  COCONUT OPEN CLASS
                </h3>
                <h5 className="mb-0 font-weight-light">
                  <b>
                    <i>Mencerdaskan Kehidupan Bangsa</i>
                  </b>
                  <br />
                  Membuka Pengetahuan, Menghubungkan Pikiran.
                </h5>
              </div>
              <div className="col-lg-6 text-lg-center btn-wrapper">
                <Link href="https://youtube.com/@coconutcomputerclub3982" passHref className="mr-2">
                  <button
                    rel="nofollow"
                    className="btn btn-icon-only btn-youtube rounded-circle"
                    data-toggle="tooltip"
                    data-original-title="Subscribe us"
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <span className="btn-inner--icon">
                        <i className="fa fa-youtube" style={{ color: "white" }} />
                      </span>
                    </a>
                  </button>
                </Link>
                <Link href="https://www.facebook.com/coconutcomputer" passHref className="mr-2">
                  <button
                    rel="nofollow"
                    className="btn-icon-only rounded-circle btn btn-facebook"
                    data-toggle="tooltip"
                    data-original-title="Like us"
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <span className="btn-inner--icon">
                        <i className="fa fa-facebook" style={{ color: "white" }} />
                      </span>
                    </a>
                  </button>
                </Link>
                <Link href="https://coconut.or.id" passHref>
                  <button
                    rel="nofollow"
                    className="btn btn-icon-only btn-dribbble rounded-circle"
                    data-toggle="tooltip"
                    data-original-title="Follow us"
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      <span className="btn-inner--icon">
                        <i className="fa fa-chrome" style={{ color: "white" }} />
                      </span>
                    </a>
                  </button>
                </Link>
              </div>
            </div>
            <hr />
            <div className="row align-items-center justify-content-md-between">
              <div className="col-md-6">
                <div className="copyright">
                  © 2024 <Link href="https://coconut.or.id" passHref>
                    <a target="_blank" rel="noopener noreferrer">COCONUT Computer Club</a>
                  </Link>.
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav nav-footer justify-content-end">
                  <li className="nav-item">
                    <Link href="https://coconut.or.id" passHref>
                      <a className="nav-link" target="_blank" rel="noopener noreferrer">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="https://coconut.or.id/blog" passHref>
                      <a className="nav-link" target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* JavaScript Scripts with Next.js Script Component */}
      <Script
        src="/assets/js/core/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/core/popper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/core/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/plugins/perfect-scrollbar.jquery.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/bootstrap-switch.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/nouislider.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/moment.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/datetimepicker.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/plugins/bootstrap-datepicker.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/argon-design-system.min.js?v=1.2.2"
        strategy="lazyOnload"
      />
      <Script
        src="/assets/js/script.js"
        strategy="lazyOnload"
      />
    </>
  );
}