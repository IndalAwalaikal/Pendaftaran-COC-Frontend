import React, { useState } from "react";
import Layout from "@/components/Layout";

const dokumentasiData = [
  { src: "assets/img/dokumentasi/2024-2025/batch1/1.JPG", batch: 1 },
  { src: "assets/img/dokumentasi/2024-2025/batch1/2.JPG", batch: 1 },
  { src: "assets/img/dokumentasi/2024-2025/batch1/3.JPG", batch: 1 },
  { src: "assets/img/dokumentasi/2024-2025/batch1/4.JPG", batch: 1 },
  { src: "assets/img/dokumentasi/2024-2025/batch2/1.JPG", batch: 2 },
  { src: "assets/img/dokumentasi/2024-2025/batch2/2.JPG", batch: 2 },
  { src: "assets/img/dokumentasi/2024-2025/batch2/3.JPG", batch: 2 },
  { src: "assets/img/dokumentasi/2024-2025/batch2/4.JPG", batch: 2 },
  { src: "assets/img/dokumentasi/2024-2025/batch2/5.JPG", batch: 2 },
];

export default function Dokumentasi() {
  const [selectedBatch, setSelectedBatch] = useState("all");

  const handleFilter = (batch) => {
    setSelectedBatch(batch);
  };

  const filteredImages =
    selectedBatch === "all"
      ? dokumentasiData
      : dokumentasiData.filter((item) => item.batch === selectedBatch);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3 className="gallery-title mt-5">
              DOKUMENTASI KEGIATAN COCONUT OPEN CLASS SEBELUMNYA
            </h3>
          </div>

          <div className="text-center mb-4">
            {["all", 1, 2, 3, 4, 5].map((batch) => (
              <button
                key={batch}
                className={`btn btn-default filter-button m-1 ${
                  selectedBatch === batch ? "btn-primary" : ""
                }`}
                onClick={() => handleFilter(batch)}
              >
                {batch === "all" ? "Semua BATCH" : `BATCH ${batch}`}
              </button>
            ))}
          </div>

          {filteredImages.map((item, index) => (
            <div
              key={index}
              className="gallery_product col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3"
            >
              <img
                src={item.src}
                className="img-responsive img-fluid w-100"
                alt={`Dokumentasi batch ${item.batch}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
