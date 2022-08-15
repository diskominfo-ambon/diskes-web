

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: [
      {
        id: 1,
        title: "Judul kegiatan",
        picture_url: "https://dinkes.malukuprov.go.id/img/dokumen/1763856625.jpg",
        created_at: "Rabu 12 Agustus 2022",
      },
      {
        id: 2,
        title: "Judul kegiatan",
        picture_url: "https://dinkes.malukuprov.go.id/img/dokumen/1763856625.jpg",
        created_at: "Rabu 12 Agustus 2022",
      },
      {
        id: 3,
        title: "Judul kegiatan",
        picture_url: "https://dinkes.malukuprov.go.id/img/dokumen/341445894.jpg",
        created_at: "Rabu 12 Agustus 2022",
      },
      {
        id: 4,
        title: "Judul kegiatan",
        picture_url: "https://dinkes.malukuprov.go.id/img/dokumen/1248504451.jpg",
        created_at: "Rabu 12 Agustus 2022",
      },
      {
        id: 5,
        title: "Judul kegiatan",
        picture_url: "https://dinkes.malukuprov.go.id/img/dokumen/1601351656.jpg",
        created_at: "Rabu 12 Agustus 2022",
      },
    ]
  })
}
