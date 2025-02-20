// Importa Express
const express = require('express');
const app = express();
const port = 3000;

// Definizione delle 11 migliori squadre del Napoli
const bestTeams = [
    {
        year: "1986-87",
        players: ["Maradona", "Giordano", "Bagni", "Ferrara", "De Napoli", "Garella", "Renica", "Bruscolotti", "Carnevale", "Ferrario", "Volpecina"]
    },
    {
        year: "1989-90",
        players: ["Maradona", "Careca", "Alemão", "De Napoli", "Crippa", "Renica", "Ferrara", "Francini", "Baroni", "Zola", "Galli"]
    },
    {
        year: "2011-12",
        players: ["Cavani", "Hamsik", "Lavezzi", "Inler", "Gargano", "Maggio", "Zuniga", "Cannavaro", "Aronica", "Fernandez", "De Sanctis"]
    },
    {
        year: "2017-18",
        players: ["Mertens", "Insigne", "Callejon", "Hamsik", "Jorginho", "Allan", "Ghoulam", "Koulibaly", "Albiol", "Hysaj", "Reina"]
    },
    {
        year: "2022-23",
        players: ["Osimhen", "Kvaratskhelia", "Lobotka", "Zielinski", "Anguissa", "Di Lorenzo", "Kim", "Rrahmani", "Olivera", "Meret"]
    },
    {
        year: "1994-95",
        players: ["Fonseca", "Agostini", "Benny Carbone", "Buso", "Fabbri", "Galan", "Pecchia", "Tarantino", "Caldaroni", "Ayala", "Taglialatela"]
    },
    {
        year: "2007-08",
        players: ["Lavezzi", "Hamsik", "Zalayeta", "Gargano", "Blasi", "Domizzi", "Contini", "Cannavaro", "Grava", "Mannini", "Iezzo"]
    },
    {
        year: "2015-16",
        players: ["Higuain", "Insigne", "Callejon", "Allan", "Jorginho", "Hamsik", "Ghoulam", "Koulibaly", "Albiol", "Hysaj", "Reina"]
    },
    {
        year: "1990-91",
        players: ["Careca", "Zola", "Maradona", "Crippa", "De Napoli", "Alemão", "Ferrara", "Renica", "Francini", "Baroni", "Galli"]
    },
    {
        year: "1932-33",
        players: ["Vojak", "Sallustro", "Buscaglia", "Ferraris", "Colombari", "Gramaglia", "Casanova", "Germano", "Ratti", "Fenoglio", "Pavese"]
    },
    {
        year: "1961-62",
        players: ["Altafini", "Canè", "Panzanato", "Montefusco", "Ronzon", "Moro", "Bruno", "Fornaciari", "Clemente", "Bandoni", "Mistone"]
    }
];

// Endpoint API per ottenere le migliori squadre del Napoli
app.get('/best-teams', (req, res) => {
    res.json(bestTeams);
});

// Avvio del server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});

// Esportazione del modulo per test
module.exports = app;