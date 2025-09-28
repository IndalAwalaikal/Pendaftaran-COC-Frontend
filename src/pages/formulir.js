import React, { useState } from "react";
import Layout from "@/components/Layout";

export default function Formulir() {
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    noTelp: "",
    asalSekolah: "",
    // framework: "",
    // hasJsFramework: false,
    file: null,
  });
  const [showFramework, setShowFramework] = useState(false);
  const [fileName, setFileName] = useState("Upload Bukti Follow Instagram");

  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api/pendaftar/add`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, file }));
    setFileName(file ? file.name : "Upload Bukti Follow Instagram");
  };

  const handleFrameworkToggle = (e) => {
    const hasJsFramework = e.target.value === "ya";
    setFormData((prev) => ({
      ...prev,
      hasJsFramework,
      framework: hasJsFramework
        ? prev.framework
        : "belum pernah menggunakan framework js",
    }));
    setShowFramework(hasJsFramework);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("nama-lengkap", formData.namaLengkap);
    payload.append("email", formData.email);
    payload.append("no-telp", formData.noTelp);
    payload.append("asal-sekolah", formData.asalSekolah);

    if (formData.file) {
      payload.append("bukti-follow", formData.file);
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        const text = await response.text();
        throw new Error(`Server error: ${text || "Unknown error"}`);
      }

      if (!response.ok) {
        // 👇 Handle specific error: email already exists
        if (
          data.message &&
          data.message.toLowerCase().includes("email already exists")
        ) {
          alert(
            "Email ini sudah terdaftar! Silakan gunakan email lain atau hubungi panitia."
          );
          return;
        }
        throw new Error(data.message || "Pendaftaran gagal");
      }

      alert("Pendaftaran berhasil!");
      // Optional: Reset form after success
      setFormData({
        namaLengkap: "",
        email: "",
        noTelp: "",
        asalSekolah: "",
        file: null,
      });
      setFileName("Upload Bukti Follow Instagram");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Gagal mendaftar: " + (error.message || "Terjadi kesalahan"));
    }
  };

  return (
    <Layout>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default"></div>
        <div className="container py-md">
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-6">
              {/* Bagian Judul Acara - Tetap */}
              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-success btn-tooltip"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Pendaftaran Berakhir pada Sabtu, 3 February 2024"
                  data-container="body"
                  data-animation="true"
                >
                  COCONUT OPEN CLASS BATCH 8
                </button>
                <h3 className="text-white">
                  <span className="text-white display-4">
                    Go REST, Go Fast: Membangun REST API dengan Golang
                  </span>
                </h3>
              </div>

              {/* Bagian Tabs */}
              <div className="nav-wrapper">
                <ul
                  className="nav nav-pills nav-fill flex-column flex-md-row"
                  id="tabs-icons-text"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0 active"
                      id="tabs-icons-text-1-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-1"
                      role="tab"
                      aria-controls="tabs-icons-text-1"
                      aria-selected="true"
                    >
                      <i className="ni ni-align-left-2 mr-2" /> Informasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-2-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-2"
                      role="tab"
                      aria-controls="tabs-icons-text-2"
                      aria-selected="false"
                    >
                      <i className="ni ni-align-left-2 mr-2" /> Tata Tertib
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link mb-sm-3 mb-md-0"
                      id="tabs-icons-text-3-tab"
                      data-toggle="tab"
                      href="#tabs-icons-text-3"
                      role="tab"
                      aria-controls="tabs-icons-text-3"
                      aria-selected="false"
                    >
                      <i className="ni ni-bag-17 mr-2" /> Benefit
                    </a>
                  </li>
                </ul>
              </div>

              {/* Card Konten */}
              <div className="card shadow">
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    {/* TAB INFORMASI */}
                    <div
                      className="tab-pane fade show active tab-fixed"
                      id="tabs-icons-text-1"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-1-tab"
                    >
                      <dl className="description-list">
                        <div className="desc-row">
                          <dt>Tipe</dt>
                          <dd>Open Class</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Pemateri 1</dt>
                          <dd>Musdalipa</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Pemateri 2</dt>
                          <dd>Syahrul Ramadhan</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Moderator</dt>
                          <dd>Ahmad Fajrul</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Materi</dt>
                          <dd>REST API Golang</dd>
                        </div>
                        <div className="desc-row">
                          <dt>Tempat</dt>
                          <dd>IndigoHub Makassar</dd>
                        </div>
                      </dl>

                      <p className="description">
                        <strong
                          style={{
                            display: "block",
                            fontWeight: "bold",
                            marginBottom: "10px",
                          }}
                        >
                          Tujuan:
                        </strong>
                        Pelatihan ini dirancang agar peserta dapat memahami
                        dasar-dasar pengembangan backend, khususnya dalam
                        membuat REST API. Peserta akan mempelajari dasar-dasar
                        bahasa pemrograman Golang untuk membangun fungsionalitas
                        di sisi server.
                        <br />
                        <br />
                        Dengan pendekatan yang praktis, peserta diharapkan mampu
                        membangun dan mengimplementasikan API sederhana
                        menggunakan Golang untuk mendukung aplikasi web atau
                        mobile mereka sendiri setelah mengikuti sesi ini.
                        <br />
                        <br />
                        Pada akhirnya, sesi ini akan membekali peserta dengan
                        keterampilan dasar yang kuat untuk memulai karir sebagai
                        backend developer. Peserta akan memiliki bekal
                        pengetahuan yang tidak hanya teoritis, tetapi juga siap
                        untuk diterapkan dalam proyek pribadi atau profesional
                        di masa depan.
                      </p>

                      <button type="button" className="btn btn-outline-default">
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        <b>Jumat, 17 Oktober 2025</b> 13:00 WITA - Selesai
                      </button>
                      <br />
                      <br />
                      <span>
                        Informasi lebih lanjut hubungi{" "}
                        <span className="text-success">Nurhasana</span>
                      </span>
                    </div>

                    {/* TAB TATA TERTIB */}
                    <div
                      className="tab-pane fade tab-fixed"
                      id="tabs-icons-text-2"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-2-tab"
                    >
                      <h3 className="bold">TATA TERTIB KEGIATAN</h3>
                      <p className="description">
                        <b>1.</b> Hadir 5 menit sebelum kegiatan di mulai <br />
                        <b>2.</b> Mengisi daftar hadir yang telah disediakan
                        panitia <br />
                        <b>3.</b> Mengikuti acara pembukaan <br />
                        <b>4.</b> Menggunakan pakaian yang sopan dan rapih{" "}
                        <br />
                        <b>5.</b> Peserta dilarang membawa senjata tajam dan
                        obat-obatan terlarang
                        <br />
                        <b>6.</b> Peserta dilarang menggunakan HP selama materi
                        berlangsung <br />
                        <b>7.</b> Menjaga ketenangan dan sopan santun <br />
                        <b>8.</b> Peserta wajib memperhatikan materi yang
                        diberikan <br />
                        <b>9.</b> Menjaga Kebersihan dan membuang sampah pada
                        tempatnya <br />
                      </p>
                    </div>

                    {/* TAB BENEFIT */}
                    <div
                      className="tab-pane fade tab-fixed"
                      id="tabs-icons-text-3"
                      role="tabpanel"
                      aria-labelledby="tabs-icons-text-3-tab"
                    >
                      {/* <p className="description">
                        <b>Pendaftaran Gratis</b>
                        <br />
                        1. Ilmu Bermanfaat <br />
                        2. Relasi
                      </p> */}
                      <p className="description">
                        <b>Pendaftaran Gratis</b>
                        <br />
                        1. Sertifikat <br />
                        2. Modul Pembelajaran <br />
                        3. Ilmu Bermanfaat <br />
                        4. Relasi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULIR */}
            <div className="col-lg-5 mb-lg-auto">
              <div className="transform-perspective-right">
                <div className="card bg-secondary shadow border-0">
                  <div className="card-body px-lg-5 py-lg-5">
                    <div className="text-center text-dark mb-4">
                      <small className="fw-semibold">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary btn-tooltip"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Lengkapi Formulir di Bawah"
                          data-container="body"
                          data-animation="true"
                        >
                          Formulir Pendaftaran
                        </button>
                      </small>
                    </div>

                    <form
                      onSubmit={handleSubmit}
                      encType="multipart/form-data"
                      id="register-form"
                    >
                      {/* Nama Lengkap */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-single-02" />
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder="Nama Lengkap"
                            id="nama-lengkap"
                            name="namaLengkap"
                            className="form-control form-control-lg"
                            value={formData.namaLengkap}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-email-83" />
                            </span>
                          </div>
                          <input
                            className="form-control form-control-lg"
                            placeholder="Email"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* No Telepon */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-mobile-button" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="no-telp"
                            name="noTelp"
                            placeholder="Masukkan nomor telepon"
                            value={formData.noTelp}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Asal Sekolah */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="ni ni-building" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="asal-sekolah"
                            name="asalSekolah"
                            placeholder="Asal perguruan tinggi"
                            value={formData.asalSekolah}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Pengalaman Framework
                      <div className="form-group mb-3">
                        <label className="text-dark fw-semibold">
                          Apakah pernah menggunakan framework JavaScript
                          sebelumnya?
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="pengalaman_js"
                            id="jsFrameworkYa"
                            value="ya"
                            checked={formData.hasJsFramework}
                            onChange={handleFrameworkToggle}
                          />
                          <label
                            className="form-check-label text-dark fw-semibold"
                            htmlFor="jsFrameworkYa"
                          >
                            Ya
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="pengalaman_js"
                            id="jsFrameworkTidak"
                            value="tidak"
                            checked={!formData.hasJsFramework}
                            onChange={handleFrameworkToggle}
                          />
                          <label
                            className="form-check-label text-dark fw-semibold"
                            htmlFor="jsFrameworkTidak"
                          >
                            Tidak
                          </label>
                        </div>
                      </div>

                      {showFramework && (
                        <div className="form-group mb-3">
                          <label className="text-dark fw-semibold">
                            Framework apa yang pernah digunakan?
                          </label>
                          <select
                            className="form-control form-control-lg"
                            id="framework"
                            name="framework"
                            value={formData.framework}
                            onChange={handleInputChange}
                          >
                            <option value="">Pilih framework</option>
                            <option value="React">React</option>
                            <option value="Vue">Vue</option>
                            <option value="Angular">Angular</option>
                            <option value="Svelte">Svelte</option>
                            <option value="Next.js">Next.js</option>
                            <option value="Nuxt.js">Nuxt.js</option>
                          </select>
                        </div>
                      )} */}

                      {/* Info Biaya */}
                      <br />
                      <small className="text-dark fw-semibold text-uppercase">
                        Pendaftaran kegiatan ini benar-benar gratis! Namun,
                        kalian tetap akan mendapatkan E-sertifikat, relasi
                        pertemanan yang luas, pengalaman berharga, dan tentunya
                        ilmu yang bermanfaat dari pemateri kami. Cukup follow
                        Instagram @coconutdotorg dan lampirkan bukti
                        screenshot-nya saat mendaftar untuk bergabung!
                        <br />
                        <br />
                        Mudah, bukan? Ayo gabung dan nikmati manfaatnya bersama
                        kami!
                      </small>

                      {/* Upload Bukti Transfer */}
                      <div className="form-group mb-3">
                        <div className="input-group input-group-alternative">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              id="buktitf"
                              name="file"
                              accept=".jpeg,.jpg,.png"
                              onChange={handleFileChange}
                            />
                            <label
                              className="custom-file-label text-dark"
                              htmlFor="buktitf"
                            >
                              {fileName}
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary my-4">
                          Kirim
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="separator separator-bottom separator-skew">
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
      </section>
    </Layout>
  );
}
