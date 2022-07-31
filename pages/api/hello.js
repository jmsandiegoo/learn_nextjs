export default function handler(req, res) {
  res.status(200).join({ text: "Hello" });
}
