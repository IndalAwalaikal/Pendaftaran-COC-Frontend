import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* End Navbar */}
      <div className="wrapper">
        <div className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-primary">
            {/* <span class="span-150"></span>
  <span class="span-50"></span>
  <span class="span-50"></span>
  <span class="span-75"></span>
  <span class="span-100"></span>
  <span class="span-75"></span>
  <span class="span-50"></span>
  <span class="span-100"></span>
  <span class="span-50"></span>
  <span class="span-100"></span> */}
          </div>
          <div className="page-header">
            <div className="container shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <img
                      src="./assets/img/logo.png"
                      style={{ width: 120 }}
                      className="img-fluid"
                    />
                    <p className="display-4 text-white">
                      COCONUT OPEN CLASS BATCH 1<br />
                      <br />
                      <sup>
                        Introduction to Sveltekit: The frontend framework of the
                        future
                      </sup>
                    </p>
                    <div className="btn-wrapper mt-2">
                      <a
                        href="/dokumentasi"
                        className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-image" />
                        </span>
                        <span className="btn-inner--text">Lihat Dokumentasi</span>
                      </a>
                      <a
                        href="/formulir"
                        className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-single-copy-04" />
                        </span>
                        <span className="btn-inner--text">Daftar Sekarang</span>
                      </a>
                      {/* <a href="https://github.com/creativetimofficial/argon-design-system" class="btn btn-lg btn-github btn-icon mb-3 mb-sm-0">
              <span class="btn-inner--icon"><i class="fa fa-github"></i></span>
              <span class="btn-inner--text"><span class="text-warning">Star us</span> on Github</span>
            </a> */}
                    </div>
                    <div className="mt-5">
                      <small className="font-weight-bold mb-0 mr-2 text-white">
                        Made by
                      </small>
                      <img
                        src="./assets/img/logococonut.png"
                        style={{ height: 28 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x={0}
              y={0}
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>
        {/* <div class="container">
<h2 class="mt-lg mb-5">
  <span>BPH COCONUT Computer Club</span>
</h2>
<div class="row" id="img-row">


</div>
    </div> */}
        {/* <div class="section" style="background-image: url('./assets/img/ill/1.svg');">
<div class="container py-md">
  <div class="row justify-content-between align-items-center">
    <div class="col-lg-6 mb-lg-auto">
      <div class="rounded overflow-hidden transform-perspective-left">
        <div id="carousel_example" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carousel_example" data-slide-to="0" class=""></li>
            <li data-target="#carousel_example" data-slide-to="1" class=""></li>
            <li data-target="#carousel_example" data-slide-to="2" class="active"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img class="img-fluid" src="./assets/img/panitia/pro1.jpg" alt="First slide">
            </div>
            <div class="carousel-item">
              <img class="img-fluid" src="./assets/img/panitia/pro2.jpg" alt="Second slide">
            </div>
            <div class="carousel-item active">
              <img class="img-fluid" src="./assets/img/panitia/pro3.webp" alt="Third slide">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carousel_example" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carousel_example" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div class="col-lg-5 mb-5 mb-lg-0">
      <h1 class="font-weight-light">Bootstrap carousel</h1>
      <p class="lead mt-4">Argon Design System comes with four pre-built pages to help you get started faster.
        You
        can change the text and images and you're good to go.</p>
      <a href="https://demos.creative-tim.com/argon-design-system/docs/components/carousel.html"
        class="btn btn-white mt-4">See all components</a>
    </div>
  </div>
</div>
    </div> */}
      </div>
      <div className="container container-lg">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-5">
            <div className="card card-lift--hover shadow border-0">
              <a href="#" title="Landing Page">
                <img src="./assets/img/coc 2023-2024/coc1.png" className="card-img" />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-5 mb-lg-0">
            <div className="card card-lift--hover shadow border-0">
              <a href="#" title="Profile Page">
                <img
                  src="./assets/img/coc 2023-2024/seminar1.png"
                  className="card-img"
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-5 mb-lg-0">
            <div className="card card-lift--hover shadow border-0">
              <a href="#" title="Profile Page">
                <img src="./assets/img/coc 2023-2024/coc2.png" className="card-img" />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-5 mb-lg-0">
            <div className="card card-lift--hover shadow border-0">
              <a href="#" title="Profile Page">
                <img src="./assets/img/coc 2023-2024/coc3.png" className="card-img" />
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-5 mb-lg-0">
            <div className="card card-lift--hover shadow border-0">
              <a href="#" title="Profile Page">
                <img src="./assets/img/coc 2023-2024/coc4.jpg" className="card-img" />
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-5 mb-lg-0">
            <div className="card card-lift--hover shadow border-0">
              <a href="#" title="Profile Page">
                <img src="./assets/img/coc 2024-2025/Coc1.jpg" className="card-img" />
              </a>
            </div>
          </div>
          <div className="col-md-6 mt-5 mb-lg-0">
            <div className="card card-lift--hover shadow border-0">
              <a href="#" title="Profile Page">
                <img src="./assets/img/coc 2024-2025/Coc2.jpg" className="card-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
