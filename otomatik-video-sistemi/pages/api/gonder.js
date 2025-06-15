export default function handler(req, res) {
  const { konu } = req.body;
  console.log("Gelen konu:", konu);
  res.status(200).json({ mesaj: "Konu alındı: " + konu });
}
