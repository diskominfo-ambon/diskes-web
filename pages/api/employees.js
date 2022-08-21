
const employees = [
  {
    "id": 1,
    "name": "drg. WENDY PELUPESSY, M.Kes",
    "employee_role": "KEPALA DINAS ",
    "profile": "/static/pegawai/diskes/kadis.JPG"
  },
  {
    "id": 2,
    "name": "dr. TJIANG ROBERTH CHANDRA, M.Kes",
    "employee_role": "SEKERTARIS DINAS",
    "profile": "/static/pegawai/diskes/sekdis.JPG"
  },
  {
    "id": 3,
    "name": "J. RIRIHENA",
    "employee_role": "KEPALA SUBAG KEUANGAN DAN ASET",
    "profile": "/static/pegawai/diskes/ririhena.JPG"
  },
  {
    "id": 4,
    "name": "JAKOBIS LEWIER, S.Sos, M.KM",
    "employee_role": "KEPALA SUBAG PERENCANAAN, KEPEGAWAIAN DAN UMUM",
    "profile": "/static/pegawai/diskes/jakobis.JPG"
  },
  {
    "id": 5,
    "name": "R.J. TALLE SKM, M.Kes",
    "employee_role": "KEPALA BIDANG P2P",
    "profile": "/static/pegawai/diskes/talle.JPG"
  },
  {
    "id": 6,
    "name": "dr. SIOLY SOEMPIET",
    "employee_role": "KEPALA BIDANG PELAYANAN DAN SDK ",
    "profile": "/static/img/avatar.jpg"
  },
  {
    "id": 7,
    "name": "dr. YUSDA TUHAREA",
    "employee_role": "KEPALA BIDANG KESEHATAN MASYARAKAT",
    "profile": "/static/pegawai/diskes/yusda.JPG"
  },
  {
    "id": 8,
    "name": "TIARA URSULA SISWANTO",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/tiara.JPG"
  },
  {
    "id": 9,
    "name": "BOKI HAWA USEMAHU, Amd.AK",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/boki.JPG"
  },
  {
    "id": 10,
    "name": "AMIAMALIA TANGKE, Amd. AK",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/amiamalia.JPG"
  },
  {
    "id": 11,
    "name": "NABILA PUTRI RISKY, Amd.AK",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/nabila.JPG"
  },
  {
    "id": 12,
    "name": "YULIET SOPLANIT, Amd.AK",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/yuliet.JPG"
  },
  {
    "id": 13,
    "name": "YANA SOMAE, Ns",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/yana.JPG"
  },
  {
    "id": 14,
    "name": "SEMOEL L. SAMSU, ST",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/semoel.JPG"
  },
  {
    "id": 15,
    "name": "NOVITA TUHAREA, SE",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/novita.JPG"
  },
  {
    "id": 16,
    "name": "NETY SOHUAT, S.Kom",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/nety.JPG"
  },
  {
    "id": 17,
    "name": "RICKY STEVEN LOUHENAPESSY",
    "employee_role": "KONTRAK",
    "profile": "/static/img/avatar.jpg"
  },
  {
    "id": 18,
    "name": "JONGKY STEVI NOYA, SP",
    "employee_role": "KONTRAK",
    "profile": "/static/img/avatar.jpg"
  },
  {
    "id": 19,
    "name": "ALI ALFATASYAH ARRIFKIH MUH",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/ali.JPG"
  },
  {
    "id": 20,
    "name": "EVELYN MEISAN THENU",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/evelyn.JPG"
  },
  {
    "id": 21,
    "name": "ZUSIANA NAOMI HAUMAHU",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/zusiana.JPG"
  },
  {
    "id": 22,
    "name": "AGUSTINA HAUMAHU",
    "employee_role": "KONTRAK",
    "profile": "/static/pegawai/diskes/agustina.JPG"
  },
  {
    "id": 23,
    "name": "AGREET R. WATTIMENA, A.Md. K.L",
    "employee_role": "KONTRAK",
    "profile": "/static/img/avatar.jpg"
  }
 ];

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: employees,
  });
}
