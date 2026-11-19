let ALL_CHARACTERS = [];
let manualEliminated = new Set();
let eliminatedFilters = [];
let currentMode = "pvp"; // "pvp" o "cpu"
let currentLang = "es";  // "es" o "en"
let currentSecretChar = null;

document.addEventListener("DOMContentLoaded", () => {
    ALL_CHARACTERS = loadAllFnafCharacters();
    renderFilterButtons();
    setupEventListeners();
    renderBoard();
    if (typeof initCpuMode === "function") initCpuMode();
    

    // Carga y actualiza las imágenes oficiales de cada personaje en el tablero
    fetchOfficialFnafImages(ALL_CHARACTERS, () => {
        renderBoard();
        if (currentSecretChar) renderSecretCard();
        });
});

function getCharName(char) {
    return currentLang === "en" ? char.nameEn : char.nameEs;
}

function renderFilterButtons() {
    // 1. Juegos de debut
    const gamesContainer = document.getElementById("filter-games");
    gamesContainer.innerHTML = "";
    Object.entries(FNAF_GAMES).forEach(([key, info]) => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.dataset.category = "game";
        btn.dataset.value = key;
        btn.dataset.labelEs = `¿Debutó en ${info.es}?`;
        btn.dataset.labelEn = `Debuted in ${info.en}?`;
        btn.textContent = currentLang === "en" ? btn.dataset.labelEn : btn.dataset.labelEs;
        btn.style.borderLeft = `4px solid ${info.color}`;
        gamesContainer.appendChild(btn);
    });

    // 2. Familias / Variantes
    populateGroup("filter-families", "family", QUESTION_DEFS.families);

    // 3. Líneas / Modelos
    populateGroup("filter-lines", "line", QUESTION_DEFS.lines);

    // 4. Naturaleza y Género
    populateGroup("filter-nature", "nature", QUESTION_DEFS.nature);

    // 5. Rasgos Específicos
    populateGroup("filter-traits", "trait", QUESTION_DEFS.traits);
}

function populateGroup(containerId, category, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    items.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.dataset.category = category;
        btn.dataset.value = item.id;
        btn.dataset.labelEs = item.es;
        btn.dataset.labelEn = item.en;
        btn.textContent = currentLang === "en" ? item.en : item.es;
        container.appendChild(btn);
    });
}

function setupEventListeners() {
    document.getElementById("btn-mode-pvp").addEventListener("click", () => switchMode("pvp"));
    document.getElementById("btn-mode-cpu").addEventListener("click", () => switchMode("cpu"));

    // Botón para asignarte tu personaje secreto en PvP
    document.getElementById("btn-randomize-secret").addEventListener("click", () => {
        if (ALL_CHARACTERS.length === 0) return;
        currentSecretChar = ALL_CHARACTERS[Math.floor(Math.random() * ALL_CHARACTERS.length)];
        renderSecretCard();
    });

    // Limpiar filtros y tachados
    document.getElementById("btn-reset-filters").addEventListener("click", () => {
        manualEliminated.clear();
        eliminatedFilters = [];
        document.querySelectorAll(".filter-btn").forEach(b => {
            b.classList.remove("eliminated", "asked-yes", "asked-no");
        });
        if (typeof resetCpuLog === "function") resetCpuLog();
        renderBoard();
    });

    // Buscador por nombre o juego
    document.getElementById("search-character").addEventListener("input", () => renderBoard());

    // Clics en botones de preguntas/filtros
    document.querySelector(".control-panel").addEventListener("click", (e) => {
        if (!e.target.classList.contains("filter-btn")) return;
        const btn = e.target;
        const category = btn.dataset.category;
        const value = btn.dataset.value;

        if (currentMode === "pvp") {
            const idx = eliminatedFilters.findIndex(f => f.category === category && f.value === value && f.mode === "exclude");
            if (idx > -1) {
                eliminatedFilters.splice(idx, 1);
                btn.classList.remove("eliminated");
            } else {
                eliminatedFilters.push({ category, value, mode: "exclude" });
                btn.classList.add("eliminated");
            }
            renderBoard();
        } else if (currentMode === "cpu") {
            handleCpuQuestion(btn, category, value);
        }
    });
}

function renderSecretCard() {
    if (!currentSecretChar) return;
    const gameLabel = FNAF_GAMES[currentSecretChar.game][currentLang];
    document.getElementById("secret-character-display").innerHTML = `
        <img src="${currentSecretChar.sprite}" onerror="this.onerror=null;this.src='${currentSecretChar.fallbackSprite}'" alt="${getCharName(currentSecretChar)}">
        <strong>#${currentSecretChar.id} ${getCharName(currentSecretChar)}</strong>
        <small>${gameLabel}</small>
    `;
}

function switchMode(mode) {
    currentMode = mode;
    document.getElementById("btn-mode-pvp").classList.toggle("active", mode === "pvp");
    document.getElementById("btn-mode-cpu").classList.toggle("active", mode === "cpu");
    document.getElementById("pvp-secret-box").classList.toggle("hidden", mode !== "pvp");
    document.getElementById("cpu-box").classList.toggle("hidden", mode !== "cpu");
    document.getElementById("btn-reset-filters").click();
}

// Evalúa si un personaje cumple una pregunta/condición
function matchesCondition(char, category, value) {
    switch (category) {
        case "game":
            return char.game === value;
        case "family":
            // Si preguntan por Endo, incluimos M2 (The Mimic de Ruin) además de los de familia endo
            if (value === "endo") return char.family === "endo" || char.id === 134;
            return char.family === value;
        case "line":
            return char.line === value;
        case "nature":
            if (value === "male" || value === "female") return char.gender === value;
            return char.nature === value;
        case "trait":
            return char.traits.has(value);
        default:
            return false;
    }
}

function isEliminatedByFilters(char) {
    for (const filter of eliminatedFilters) {
        const matches = matchesCondition(char, filter.category, filter.value);
        if (filter.mode === "exclude" && matches) return true;
        if (filter.mode === "require" && !matches) return true;
    }
    return false;
}

function renderBoard() {
    const grid = document.getElementById("character-grid");
    const searchTerm = document.getElementById("search-character").value.toLowerCase().trim();
    grid.innerHTML = "";

    let remainingCount = 0;

    ALL_CHARACTERS.forEach(char => {
        const isEliminated = manualEliminated.has(char.id) || isEliminatedByFilters(char);
        if (!isEliminated) remainingCount++;

        const displayName = getCharName(char);
        const gameInfo = FNAF_GAMES[char.game];
        const gameName = gameInfo ? gameInfo[currentLang] : char.game;

        if (
            searchTerm &&
            !char.nameEs.toLowerCase().includes(searchTerm) &&
            !char.nameEn.toLowerCase().includes(searchTerm) &&
            !gameName.toLowerCase().includes(searchTerm) &&
            !String(char.id).includes(searchTerm)
        ) {
            return;
        }

        const card = document.createElement("div");
        card.className = `char-card ${isEliminated ? "eliminated" : ""}`;
        card.innerHTML = `
            <div class="char-num">#${String(char.id).padStart(3, "0")}</div>
            <img src="${char.sprite}" loading="lazy" onerror="this.onerror=null;this.src='${char.fallbackSprite}'" alt="${displayName}">
            <div class="char-name" title="${displayName}">${displayName}</div>
            <div class="char-badges">
                <span class="badge" style="background:${gameInfo.color}">${gameName}</span>
            </div>
        `;

        // Clic para tachar/destachar o arriesgar en modo CPU
        card.addEventListener("click", () => {
            if (currentMode === "cpu" && !isEliminated && remainingCount <= 6) {
                const confirmMsg = currentLang === "en"
                    ? I18N_EN.confirmGuess(displayName)
                    : `¿Quieres arriesgarte y decir que el personaje secreto es ${displayName}?`;
                if (confirm(confirmMsg)) {
                    checkCpuFinalGuess(char);
                    return;
                }
            }
            if (manualEliminated.has(char.id)) {
                manualEliminated.delete(char.id);
            } else {
                manualEliminated.add(char.id);
            }
            renderBoard();
        });

        grid.appendChild(card);
    });

    const prefix = currentLang === "en" ? I18N_EN.remainingPrefix : "Restantes";
    document.getElementById("counter-display").textContent = `${prefix}: ${remainingCount} / ${ALL_CHARACTERS.length}`;
}