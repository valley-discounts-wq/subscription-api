export default function handler(req, res) {
  const { userId } = req.query;

  return res.status(200).json({
    success: true,
    userId: userId || "none",
    message: "Tracking working"
  });
}
