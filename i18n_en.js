const I18N_EN = {
    pageTitle: "Who's Who? - FNAF Edition (160 Characters)",
    headerTitle: "🐻 Who's Who? — FNAF Edition",
    modePvp: "2 Players Mode (Board)",
    modeCpu: "Vs CPU Mode",

    secretTitle: "Your Secret Character",
    secretPlaceholder: "Click the button to assign one",
    randomizeBtn: "🎲 Randomize my Character",

    cpuTitle: "🤖 VS CPU (CPU Animatronic)",
    cpuDesc: "The CPU has picked a random hidden character. Ask questions to deduce it and cross off options on the board.",
    newCpuBtn: "🔄 New CPU Game",
    cpuLogPlaceholder: "CPU answers will appear here...",
    cpuLogStart: "Questions asked: 0. Click any question below to ask the CPU.",
    yes: "YES",
    no: "NO",

    panelTitle: "Questions / Filters Panel",
    resetBtn: "Clear All",
    helpTextHtml: "<strong>Board Mode:</strong> Click the options you want to <b>DISCARD (cross out)</b>.<br><strong>CPU Mode:</strong> Click questions to ask the CPU (non-matching characters are crossed out automatically).",

    catGames: "1. Debut Game (Mainline)",
    catFamily: "2. Character Family / Variant",
    catLine: "3. Animatronic Line / Model (Withered, Toy, Rockstar...)",
    catNature: "4. Nature & Species",
    catTraits: "5. Specific Traits & Accessories",

    searchPlaceholder: "Search character by name or game...",
    remainingPrefix: "Remaining",

    confirmGuess: (name) => `Do you want to take a guess and say the secret character is ${name}?`,
    deducedWin: (count, name, id) => `🎉 You deduced it in ${count} question(s)! The CPU's hidden character was ${name} (#${id}).`,
    guessCorrect: (name, id, count) => `🏆 CORRECT! It was ${name} (#${id}). You got it in ${count} question(s).`,
    guessWrong: (name, id) => `❌ Wrong! That wasn't it. The CPU's secret character was ${name} (#${id}).`
};