export default function handler(req, res) {
    res.status(200).json({
        "games": {
            "game1": { "version": "1.2", "url": "https://download-link.com/game1/latest.apk" },
            "game2": { "version": "2.0", "url": "https://download-link.com/game2/latest.apk" }
        }
    });
}