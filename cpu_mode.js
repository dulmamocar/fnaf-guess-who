let cpuSecretCharacter = null;
let cpuQuestionsCount = 0;

function initCpuMode() {
    pickNewCpuCharacter();

    document.getElementById("btn-new-cpu").addEventListener("click", () => {
        document.getElementById("btn-reset-filters").click();
        pickNewCpuCharacter();
    });
}

function pickNewCpuCharacter() {
    if (ALL_CHARACTERS.length === 0) return;
    cpuSecretCharacter = ALL_CHARACTERS[Math.floor(Math.random() * ALL_CHARACTERS.length)];
    cpuQuestionsCount = 0;
    resetCpuLog();
}

function resetCpuLog() {
    const log = document.getElementById("cpu-answer-log");
    if (!log) return;
    const msg = currentLang === "en"
        ? I18N_EN.cpuLogStart
        : "Preguntas realizadas: 0. Haz clic en cualquier pregunta de abajo para consultar a la máquina.";
    log.innerHTML = `<p class="log-placeholder">${msg}</p>`;
}

function handleCpuQuestion(btn, category, value) {
    if (!cpuSecretCharacter) pickNewCpuCharacter();
    if (btn.classList.contains("asked-yes") || btn.classList.contains("asked-no")) return;

    cpuQuestionsCount++;
    const answerIsYes = matchesCondition(cpuSecretCharacter, category, value);

    if (answerIsYes) {
        btn.classList.add("asked-yes");
        eliminatedFilters.push({ category, value, mode: "require" });
    } else {
        btn.classList.add("asked-no");
        eliminatedFilters.push({ category, value, mode: "exclude" });
    }

    const log = document.getElementById("cpu-answer-log");
    if (cpuQuestionsCount === 1) log.innerHTML = "";

    const yesText = currentLang === "en" ? I18N_EN.yes : "SÍ";
    const noText = currentLang === "en" ? I18N_EN.no : "NO";

    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.innerHTML = `
        <span>${cpuQuestionsCount}. ${btn.textContent}</span> → 
        <span class="${answerIsYes ? "log-yes" : "log-no"}">${answerIsYes ? yesText : noText}</span>
    `;
    log.prepend(entry);

    renderBoard();

    const remaining = ALL_CHARACTERS.filter(c => !manualEliminated.has(c.id) && !isEliminatedByFilters(c));
    if (remaining.length === 1) {
        const secretName = getCharName(cpuSecretCharacter);
        setTimeout(() => {
            const winMsg = currentLang === "en"
                ? I18N_EN.deducedWin(cpuQuestionsCount, secretName, cpuSecretCharacter.id)
                : `🎉 ¡Lo has deducido en ${cpuQuestionsCount} preguntas! El personaje oculto de la máquina era ${secretName} (#${cpuSecretCharacter.id}).`;
            alert(winMsg);
        }, 250);
    }
}

function checkCpuFinalGuess(guessedChar) {
    const secretName = getCharName(cpuSecretCharacter);
    if (guessedChar.id === cpuSecretCharacter.id) {
        const msg = currentLang === "en"
            ? I18N_EN.guessCorrect(secretName, cpuSecretCharacter.id, cpuQuestionsCount)
            : `🏆 ¡CORRECTO! Era ${secretName} (#${cpuSecretCharacter.id}). Lo lograste en ${cpuQuestionsCount} preguntas.`;
        alert(msg);
    } else {
        const msg = currentLang === "en"
            ? I18N_EN.guessWrong(secretName, cpuSecretCharacter.id)
            : `❌ ¡Fallaste! Ese no era. El personaje secreto de la máquina era ${secretName} (#${cpuSecretCharacter.id}).`;
        alert(msg);
    }
    document.getElementById("btn-new-cpu").click();
}