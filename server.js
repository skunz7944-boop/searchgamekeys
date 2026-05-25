require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Hier zieht sich der Server deinen API-Schlüssel aus den Render-Einstellungen
const DEIN_API_KEY = process.env.MY_SECRET_API_KEY;

// WICHTIG: Liefert die Dateien direkt aus dem Hauptverzeichnis aus
app.use(express.static(__dirname));

// Deine API-Route für das Frontend
app.get('/api/daten', (req, res) => {
    // Hier Logik mit DEIN_API_KEY einbauen...
    res.json({ message: "Erfolg!" });
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
  
});
