import { getDb } from "../config/db.js";

// GET /api/settings/:section
export const getSettings = async (req, res) => {
  const { section } = req.params;
  try {
    const db = getDb();
    const settings = await db.collection("settings").findOne({ section });
    return res.json(settings ? settings.data : {});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error fetching settings" });
  }
};

// POST /api/settings/:section
export const saveSettings = async (req, res) => {
  const { section } = req.params;
  const data = req.body;
  try {
    const db = getDb();
    const result = await db.collection("settings").updateOne(
      { section },
      { $set: { data } },
      { upsert: true }
    );
    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error saving settings" });
  }
};
