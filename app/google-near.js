import axios from "axios";

const BASE_URLS = "https://maps.googleapis.com/maps/api/place";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
export default async function handler(req, res) {
  try {
    const response = await axios(
      BASE_URLS +
        "/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=" +
        req.query.category +
        "&location=" +
        req.query.lat +
        "," +
        req.query.lng +
        "radius=1000&key=" +
        GOOGLE_API_KEY
    );
    const data = response.data;
    res.status(200).json("sampleeeeee");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
}
