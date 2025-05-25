import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Cookies from "js-cookie"; // ✅ Import js-cookie

export default function Pendaftar() {
  const [pendaftar, setPendaftar] = useState([]);
  const [jumlah, setJumlah] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [currentBukti, setCurrentBukti] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window === "undefined") return;

      const token = Cookies.get("authToken"); // ✅ Ambil token dari cookie

      if (!token) {
        window.location.href = "/login";
        return;
      }

      try {
        const res = await fetch("http://localhost:9000/api/pendaftar/get", {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Kirim token via header jika diperlukan
          },
        });

        if (!res.ok) throw new Error("Gagal mengambil data");

        const result = await res.json();
        setPendaftar(result.data);
        setJumlah(result.data.length);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const openModal = (filename) => {
    setCurrentBukti(`http://localhost:9000/api/pendaftar/uploads/${filename}`);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setCurrentBukti("");
  };

  return (
    <Layout>
      <section className="section section-lg section-shaped">
        <div className="shape shape-style-1 shape-default" />
        <div className="container py-md">
          <div className="row row-grid justify-content-between align-items-center">
            <div className="col-lg-12">
              <div className="mb-3">
                <button type="button" className="btn btn-sm btn-success">
                  COCONUT OPEN CLASS BATCH 1
                </button>
                <h3 className="text-white">
                  <span className="display-4">
                    Introduction to Sveltekit: The frontend framework of the future
                  </span>
                </h3>
              </div>

              <div className="nav-wrapper">
                <ul className="nav nav-pills nav-fill flex-column flex-md-row" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#pendaftar">
                      <i className="ni ni-align-left-2 mr-2" />
                      Informasi Pendaftar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tatib">
                      <i className="ni ni-align-left-2 mr-2" />
                      Tata Tertib
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card shadow">
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="pendaftar">
                      <div className="d-flex justify-content-between mb-3">
                        <p className="txt-biru mb-0">
                          Jumlah Pendaftar <b>{jumlah}</b> Orang
                        </p>
                        <a
                          href="http://localhost:9000/api/pendaftar/database/pendaftar.db"
                          className="btn btn-sm btn-primary"
                          download="backup-pendaftaran.db"
                        >
                          <i className="ni ni-cloud-download-95 me-2" /> Download Backup
                        </a>
                      </div>

                      <table
                        border={1}
                        style={{ width: "100%", tableLayout: "fixed", textAlign: "center" }}
                      >
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Nama Lengkap</th>
                            <th>Email</th>
                            <th>No Telepon</th>
                            <th>Framework</th>
                            <th>Bukti Transfer</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pendaftar.map((item, idx) => (
                            <tr key={idx}>
                              <td>{idx + 1}</td>
                              <td>{item["nama-lengkap"]}</td>
                              <td>{item.email}</td>
                              <td>{item["no-telp"]}</td>
                              <td>{item.framework}</td>
                              <td>
                                <button
                                  className="btn btn-sm btn-info"
                                  onClick={() => openModal(item["bukti-transfer"])}
                                >
                                  <i className="ni ni-image" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <br />
                      <button type="button" className="btn btn-outline-default">
                        <i className="ni ni-calendar-grid-58 mr-2" />
                        <b>Jum'at, 11 Oktober 2024</b> 13:00 WITA - Selesai
                      </button>
                      <br />
                      <br />
                      <span>
                        Informasi lebih lanjut hubungi{" "}
                        <a href="https://api.whatsapp.com/send/?phone=62895605378736&text=assalamualaikum">
                          Fikri Haekal
                        </a>
                      </span>
                    </div>

                    <div className="tab-pane fade" id="tatib">
                      <h3 className="bold">TATA TERTIB KEGIATAN</h3>
                      <p className="description">
                        <b>1. </b>Hadir 5 menit sebelum kegiatan dimulai<br />
                        <b>2. </b>Mengisi daftar hadir<br />
                        <b>3. </b>Mengikuti acara pembukaan<br />
                        <b>4. </b>Pakaian sopan dan rapi<br />
                        <b>5. </b>Dilarang membawa senjata tajam / narkoba<br />
                        <b>6. </b>Dilarang menggunakan HP selama materi<br />
                        <b>7. </b>Dilarang ribut<br />
                        <b>8. </b>Wajib memperhatikan materi<br />
                        <b>9. </b>Buang sampah pada tempatnya<br />
                        <b>10. </b>Ketentuan tambahan akan diinformasikan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg x={0} y={0} viewBox="0 0 2560 100" preserveAspectRatio="none">
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>

        {/* Modal Gambar */}
        {showModal && (
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={closeModal}
          >
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Bukti Transfer</h5>
                  <button type="button" className="close" onClick={closeModal}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body text-center">
                  <img
                    src={currentBukti}
                    alt="Bukti Transfer"
                    className="img-fluid rounded"
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                  />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={closeModal}>
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}