// Daten aus data importieren
import { products, questions }  from "./data.js";

// Zustand definieren
let collectedTags = [];

// HTML-Elemente adressieren
const titleElement = document.getElementById("question-title");
const answersContainer = document.getElementById("answers-container");

// Parameter nodeId
function renderNode(nodeId) {
    // [Object]
    const currentNode = questions[nodeId];

    // Titel des Nodes an HTML übergeben
    titleElement.innerText = currentNode.title;
    // Container leeren bevor neue Buttons erzeugt werden
    answersContainer.innerHTML = "";

    if (currentNode.multiselect) {
        // Checkboxen für Optionen bauen
        currentNode.options.forEach((option, index) => {
            // Container für Checkbox und Text
            const wrapper = document.createElement("div");
            wrapper.style.marginBottom = "10px";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            // Wenn Tag existiert, wird er im "value"-Attribut der Checkbox gespeichert
            checkbox.value = option.tag ? option.tag : "";
            // ID zum Verknüpfen der Box mit dem Text
            checkbox.id = "check_" + index;

            const label = document.createElement("label");
            label.htmlFor = "check_" + index;
            label.innerText = option.text;

            wrapper.appendChild(checkbox);
            wrapper.appendChild(label);
            answersContainer.appendChild(wrapper);
        });

        // "Weiter"-Button erschaffen
        const nextBtn = document.createElement("button");
        nextBtn.innerText = "Weiter";

        // Logik für Weiter-Button
        nextBtn.onclick = () => {
            // alle angekreuzten Checkboxen werden als Liste gespeichert
            const checkedBoxes = answersContainer.querySelectorAll("input:checked");
            // Iteration durch die erzeugte Liste
            checkedBoxes.forEach(box => {
                if (box.value !== "") {
                    collectedTags.push(box.value);
                }
            });

            // Navigation zur nächsten Frage
            if (currentNode.next) {
                renderNode(currentNode.next);
            } else {
                showResult();
            }
        };

        answersContainer.appendChild(nextBtn);
    } else {
        // Schleife für "normale" Antworten
        currentNode.options.forEach(option => {
            // Neues HTML-Element Button erstellen
            const btn = document.createElement("button");
            // Button beschriften
            btn.innerText = option.text;
            // wenn Button geklickt wird
            btn.onclick = () => {
                // wenn ein Produkt hinterlegt ist, wird dieses angezeigt und die Schleife beendet
                if (option.product) {
                    showResult(option.product);
                    return;
                }
                // wenn ein Tag existiert, wird dieses im Array collectedTags gespeichert
                if (option.tag) {
                    collectedTags.push(option.tag);
                }
                // wenn next existiert
                if (option.next) {
                    // überschreibe nodeId mit der von next
                    nodeId = option.next;
                    // rufe Methode mit neuer nodeId auf
                    renderNode(nodeId);
                // wenn keine weiteren Fragen offen sind zur Ergebnisausgabe
                } else {
                    showResult();
                }
            }
            // Button dem answerContainer zuordnen
            answersContainer.appendChild(btn);
        });
    }
}

function showResult(directProductId = null) {
    // answersContainer leeren
    answersContainer.innerHTML = "";
    titleElement.innerText = "Dieses Produkt passt am besten zu Ihren Anforderungen"
    // Default Förderapp
    let finalProductId = "fa";

    // Falls productId vorliegt, wird diese gesetzt
    if (directProductId) {
        finalProductId = directProductId;
    } else {
        // wenn die tags whitelabel und inland vorhanden sind, kommt wl
        if (collectedTags.includes("whitelabel") && collectedTags.includes("inland")) {
            finalProductId = "wl";
        }
    }

    // finales Produkt anhand der productId bestimmen
    const finalProduct = products.find(p => p.id === finalProductId);
    // Neues Überschriften-Element erstellen, befüllen und answersContainer hinzufügen
    const h3 = document.createElement("h3");
    h3.innerText = finalProduct.name;
    answersContainer.appendChild(h3);

    // Textbaustein erstellen und hinzufügen
    if (finalProduct.description) {
        const desc = document.createElement("p");
        desc.innerText = finalProduct.description;
        // Abstände nach oben und unten
        desc.style.margin = "15px 0 25px 0";
        desc.style.lineHeight = "1.5";
        answersContainer.appendChild(desc);
    }

    // Web-Link (Anchor-Tag) erstellen und hinzufügen
    if (finalProduct.link) {
        const pageLink = document.createElement("a");
        pageLink.href = finalProduct.link;
        pageLink.innerText = "Zur Produktseite";
        pageLink.target = "_blank"; // Öffnet auch diesen Link im neuen Tab

        // Styling für den Link
        pageLink.style.display = "inline-block";
        // Wir nehmen hier das Orange für einen schönen farblichen Kontrast zum grünen PDF-Link
        pageLink.style.color = "var(--hds-green)";
        pageLink.style.textDecoration = "none";
        pageLink.style.fontWeight = "bold";
        pageLink.style.marginBottom = "20px";
        pageLink.style.marginRight = "15px"; // Falls PDF und Web-Link nebeneinander stehen

        answersContainer.appendChild(pageLink);
        answersContainer.appendChild(document.createElement("br"));
    }

    // PDF-Link erstellen und hinzufügen
    if (finalProduct.pdfLink) {
        const link = document.createElement("a");
        link.href = finalProduct.pdfLink;
        link.innerText = "📄 Weitere Informationen (PDF)";
        // PDF in neuem Tab öffnen
        link.target = "_blank";

        // Link optisch gestalten
        link.style.display = "inline-block";
        link.style.color = "var(--hds-green)";
        link.style.textDecoration = "none";
        link.style.fontWeight = "bold";
        link.style.marginBottom = "20px";

        answersContainer.appendChild(link);

        // Zeilenumbruch vor "Neu starten"-Button
        answersContainer.appendChild(document.createElement("br"));
    }

    // "Neu starten"-Button
    // Button erstellen
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "Neu starten";
    restartBtn.style.marginTop = "20px";

    // Klick-Logik
    restartBtn.onclick = () => {
        // gespeicherte Tags löschen
        collectedTags = [];
        // auf ersten Knotenpunkt springen
        renderNode("target_group");
    };

    // Button an den Container hängen
    answersContainer.appendChild(restartBtn);
}

// Aufrufen der function renderNode
renderNode("target_group");