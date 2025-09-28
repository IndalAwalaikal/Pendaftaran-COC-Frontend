import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // Data untuk gallery cards
  const gallery = [
    {
      src: "/assets/img/coc 2024-2025/Coc4.png",
      alt: "COC 2024-2025 Batch 8",
    },
    {
      src: "/assets/img/coc 2024-2025/Webinar2025Promt.jpeg",
      alt: "COC 2023-2024 Event 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Webinar2025.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Coc3.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Coc2.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2024-2025/Coc1.jpg",
      alt: "COC 2023-2024 Seminar 1",
    },
    {
      src: "/assets/img/coc 2023-2024/coc4.jpg",
      alt: "COC 2023-2024 Event 2",
    },
    {
      src: "/assets/img/coc 2023-2024/coc3.png",
      alt: "COC 2023-2024 Event 3",
    },
    {
      src: "/assets/img/coc 2023-2024/coc2.png",
      alt: "COC 2023-2024 Event 4",
    },
    {
      src: "/assets/img/coc 2023-2024/seminar1.png",
      alt: "COC 2024-2025 Event 1",
    },
    {
      src: "/assets/img/coc 2023-2024/coc1.png",
      alt: "COC 2024-2025 Event 2",
    },
  ];

  return (
    <Layout>
      <div className="wrapper">
        {/* Hero Section */}
        <div className="section section-hero section-shaped">
          <div className="shape shape-style-1 shape-primary"></div>
          <div className="page-header">
            <div className="container shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6 text-center">
                    <Image
                      src="/assets/img/logo.png"
                      width={120}
                      height={120}
                      className="img-fluid"
                      alt="Coconut Open Class Logo"
                      priority
                    />
                    <p className="display-4 text-white">
                      COCONUT OPEN CLASS BATCH 8<br />
                      <br />
                      <sup>
                        Go REST, Go Fast: Membangun REST API dengan Golang
                      </sup>
                    </p>
                    <div className="btn-wrapper mt-2">
                      <Link
                        href="/dokumentasi"
                        className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0 mr-2 text-dark"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-image" />
                        </span>
                        <span className="btn-inner--text">
                          Lihat Dokumentasi
                        </span>
                      </Link>
                      <Link
                        href="/formulir"
                        className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0 text-dark"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-single-copy-04" />
                        </span>
                        <span className="btn-inner--text">Daftar Sekarang</span>
                      </Link>
                    </div>
                    <div className="mt-5">
                      <small className="font-weight-bold mb-0 mr-2 text-white">
                        Made by
                      </small>
                      <Image
                        src="/assets/img/logococonut.png"
                        width={112}
                        height={28}
                        alt="Coconut Computer Club Logo"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Separator */}
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x={0}
              y={0}
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container container-lg">
          <div className="row">
            {gallery.map((item, idx) => (
              <div key={idx} className="col-md-6 mb-5 mb-md-5">
                <div className="card card-lift--hover shadow border-0 overflow-hidden">
                  <div
                    style={{
                      width: "100%",
                      height: "800px", // tinggi seragam untuk semua kartu
                      position: "relative",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill // otomatis isi container
                      style={{ objectFit: "cover" }} // crop biar rapi
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
