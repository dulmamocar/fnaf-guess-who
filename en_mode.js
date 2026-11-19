(function () {
    function setLanguage(lang) {
        currentLang = lang;
        const isEn = lang === "en";
        document.documentElement.lang = lang;

        // Cabecera y controles superiores
        document.title = isEn ? I18N_EN.pageTitle : "¿Quién es quién? - Edición FNAF (160 Personajes)";
        document.querySelector("header h1").textContent = isEn ? I18N_EN.headerTitle : "🐻 ¿Quién es quién? — FNAF Edition";
        document.getElementById("btn-mode-pvp").textContent = isEn ? I18N_EN.modePvp : "Modo 2 Jugadores (Tablero)";
        document.getElementById("btn-mode-cpu").textContent = isEn ? I18N_EN.modeCpu : "Modo Contra la Máquina";

        // Panel Secreto PvP
        document.getElementById("lbl-secret-title").textContent = isEn ? I18N_EN.secretTitle : "Tu Personaje Secreto";
        const placeholder = document.getElementById("lbl-secret-placeholder");
        if (placeholder) {
            placeholder.textContent = isEn ? I18N_EN.secretPlaceholder : "Pulsa el botón para asignarte uno";
        }
        document.getElementById("btn-randomize-secret").textContent = isEn ? I18N_EN.randomizeBtn : "🎲 Randomizar mi Personaje";
        if (currentSecretChar && typeof renderSecretCard === "function") {
            renderSecretCard();
        }

        // Panel CPU
        document.getElementById("lbl-cpu-title").textContent = isEn ? I18N_EN.cpuTitle : "🤖 VS Máquina (Animatrónico CPU)";
        document.getElementById("lbl-cpu-desc").textContent = isEn
            ? I18N_EN.cpuDesc
            : "La máquina ha elegido un personaje oculto al azar. Haz preguntas para deducirlo y descartar en el tablero.";
        document.getElementById("btn-new-cpu").textContent = isEn ? I18N_EN.newCpuBtn : "🔄 Nueva Partida CPU";

        // Panel Preguntas
        document.getElementById("lbl-panel-title").textContent = isEn ? I18N_EN.panelTitle : "Panel de Preguntas / Filtros";
        document.getElementById("btn-reset-filters").textContent = isEn ? I18N_EN.resetBtn : "Limpiar Todo";
        document.getElementById("lbl-help-text").innerHTML = isEn
            ? I18N_EN.helpTextHtml
            : "<strong>Modo Tablero:</strong> Haz clic en las opciones que quieras <b>DESCARTAR (tachar)</b>.<br><strong>Modo CPU:</strong> Haz clic en las preguntas para consultar a la máquina (se tachará automáticamente lo que no coincida).";

        // Encabezados de categorías
        const esHeaders = {
            catGames: "1. Juego de Debut (Línea Principal)",
            catFamily: "2. Familia / Variante de Personaje",
            catLine: "3. Línea / Modelo (Withered, Toy, Rockstar...)",
            catNature: "4. Naturaleza y Especie",
            catTraits: "5. Rasgos Específicos y Accesorios"
        };
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.dataset.i18n;
            el.textContent = isEn ? I18N_EN[key] : esHeaders[key];
        });

        // Traducción dinámica de botones de preguntas
        document.querySelectorAll(".control-panel .filter-btn").forEach(btn => {
            if (btn.dataset.labelEs && btn.dataset.labelEn) {
                btn.textContent = isEn ? btn.dataset.labelEn : btn.dataset.labelEs;
            }
        });

        // Buscador y Tablero
        document.getElementById("search-character").placeholder = isEn
            ? I18N_EN.searchPlaceholder
            : "Buscar personaje por nombre o juego...";

        // Estilo activo en botones ES / EN
        document.getElementById("btn-lang-es").classList.toggle("active-lang", !isEn);
        document.getElementById("btn-lang-en").classList.toggle("active-lang", isEn);

        if (typeof renderBoard === "function") renderBoard();
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("btn-lang-es").addEventListener("click", () => setLanguage("es"));
        document.getElementById("btn-lang-en").addEventListener("click", () => setLanguage("en"));
        setLanguage("es");
    });
})();