// Produkt-/Dienstleistungsübersicht
export const products = [
    {
        id: "fa",
        name: "Förderapp",
        // Array mit tags
        tags: ["ausland", "privat"],
        description: "Mit der Förderapp können Sie als Privatperson unkompliziert und transparent weltweite Projekte unterstützen. Ideal für das schnelle, direkte Engagement.",
        pdfLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
        id: "wl",
        name: "Spendenplattform",
        tags: ["whitelabel", "inland"],
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        pdfLink: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
];

// Fragenkatalog
export const questions = {
    "design": {
        title: "Wie möchten Sie Ihre Spendenaktion konkret gestalten?",
        multiselect: true,
        next: "money_source",
        options: [
            { text: "Matching-Fund (z. B. Verdoppelungsaktionen durch das Unternehmen)" },
            { text: "Payroll Giving (z. B. Restcent- oder direkte Gehaltsspenden)" },
            { text: "Mitbestimmung (z. B. Votings für bestimmte Förderprojekte)" },
            { text: "Aktionsbasiert (z. B. Spendenläufe oder Unternehmensjubiläen)" }
        ]
    },
    "money_source": {
        title: "Wie setzt sich Ihr Spendenvolumen zusammen?",
        multiselect: true,
        next: "recipient_focus",
        options: [
            { text: "Unternehmensspende" },
            { text: "Mitarbeiterspenden" },
            { text: "Kundenspenden" },
        ]
    },
    "recipient_focus": {
        title: "Welche Spendenempfänger stehen bei Ihnen im Fokus?",
        multiselect: true,
        next: "size",
        options: [
            { text: "Lokales Umfeld (Fokus auf Projekte rund um unsere Unternehmensstandorte)" },
            { text: "Überregionale Leuchtturmprojekte (Bundesweit bekannte oder internationale NGOs)" },
            { text: "Kleinstorganisationen und Basisinitiativen (Kleine, lokale Organisationen, die oft schwerer erreichbar sind)" },
            { text: "Eigene Auswahl (Wir haben bereits festgelegte Partner, die wir gezielt fördern möchten)" }
        ]
    },
    "size": {
        title: "Wie groß ist Ihr Unternehmen?",
        options: [
            { text: "bis 10 Mitarbeiter", next: "volume" },
            { text: "bis 50 Mitarbeiter", next: "volume" },
            { text: "bis 250 Mitarbeiter", next: "volume" },
            { text: "größer als 250 Mitarbeiter", next: "volume" }
        ]
    },
    "volume": {
        title: "Wie hoch ist Ihr geplantes Spendenvolumen?",
        options: [
            { text: "< 100.000 €", next: "sphere_of_influence" },
            { text: "> 100.000 €", tag: "whitelabel", next: "sphere_of_influence" }
        ]
    },
    "sphere_of_influence": {
        title: "Wo möchten Sie sich engagieren?",
        options: [
            { text: "Innerhalb Deutschlands", tag: "inland" },
            { text: "Auch im Ausland (International)", tag: "ausland" }
        ]
    }
};