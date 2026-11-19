// Metadatos de Juegos de la Línea Principal (FNAF 1 hasta Secret of the Mimic)
const FNAF_GAMES = {
    fnaf1: { es: "FNAF 1", en: "FNAF 1", color: "#7f1d1d" },
    fnaf2: { es: "FNAF 2", en: "FNAF 2", color: "#991b1b" },
    fnaf3: { es: "FNAF 3", en: "FNAF 3", color: "#3f6212" },
    fnaf4: { es: "FNAF 4", en: "FNAF 4", color: "#581c87" },
    sl:    { es: "Sister Location", en: "Sister Location", color: "#1d4ed8" },
    ffps:  { es: "FFPS (FNAF 6)", en: "FFPS (FNAF 6)", color: "#b45309" },
    ucn:   { es: "UCN", en: "UCN", color: "#be123c" },
    hw1:   { es: "Help Wanted 1", en: "Help Wanted 1", color: "#6d28d9" },
    sb:    { es: "Security Breach", en: "Security Breach", color: "#0e7490" },
    ruin:  { es: "SB: Ruin", en: "SB: Ruin", color: "#4338ca" },
    hw2:   { es: "Help Wanted 2", en: "Help Wanted 2", color: "#7e22ce" },
    sotm:  { es: "Secret of the Mimic", en: "Secret of the Mimic", color: "#0f766e" }
};

// Preguntas organizadas por bloque (de amplias a muy específicas)
const QUESTION_DEFS = {
    families: [
        { id: "freddy", es: "¿Es una variante de Freddy?", en: "Is it a Freddy variant?" },
        { id: "bonnie", es: "¿Es una variante de Bonnie?", en: "Is it a Bonnie variant?" },
        { id: "chica", es: "¿Es una variante de Chica?", en: "Is it a Chica variant?" },
        { id: "foxy", es: "¿Es una variante de Foxy?", en: "Is it a Foxy variant?" },
        { id: "golden", es: "¿Es variante de Golden Freddy / Fredbear?", en: "Is it a Golden Freddy / Fredbear variant?" },
        { id: "springtrap", es: "¿Es Springtrap / variante de Afton?", en: "Is it Springtrap / an Afton variant?" },
        { id: "puppet", es: "¿Es Puppet / Marionette o variante?", en: "Is it Puppet / Marionette or variant?" },
        { id: "bb", es: "¿Es Balloon Boy / JJ / Dee Dee?", en: "Is it Balloon Boy / JJ / Dee Dee?" },
        { id: "baby", es: "¿Es Baby / Elizabeth o variante?", en: "Is it Baby / Elizabeth or variant?" },
        { id: "endo", es: "¿Es un Endoesqueleto (incl. M1/M2)?", en: "Is it an Endoskeleton (incl. M1/M2)?" },
        { id: "mimic", es: "¿Es The Mimic o traje del Mimic?", en: "Is it The Mimic or a Mimic costume?" }
    ],
    lines: [
        { id: "classic", es: "¿Es de la línea Clásica?", en: "Is it from the Classic line?" },
        { id: "withered", es: "¿Es un Withered?", en: "Is it a Withered?" },
        { id: "toy", es: "¿Es un Toy?", en: "Is it a Toy?" },
        { id: "shadow", es: "¿Es un Shadow?", en: "Is it a Shadow?" },
        { id: "phantom", es: "¿Es un Phantom?", en: "Is it a Phantom?" },
        { id: "nightmare", es: "¿Es un Nightmare?", en: "Is it a Nightmare?" },
        { id: "funtime", es: "¿Es un Funtime?", en: "Is it a Funtime?" },
        { id: "rockstar", es: "¿Es un Rockstar?", en: "Is it a Rockstar?" },
        { id: "mediocre", es: "¿Es de los Mediocre Melodies?", en: "Is it from Mediocre Melodies?" },
        { id: "trash", es: "¿Es de Trash and the Gang?", en: "Is it from Trash and the Gang?" },
        { id: "glamrock", es: "¿Es un Glamrock?", en: "Is it a Glamrock?" },
        { id: "ruined", es: "¿Es una versión Ruined / Shattered?", en: "Is it a Ruined / Shattered version?" },
        { id: "springlock", es: "¿Es un traje Springlock?", en: "Is it a Springlock suit?" }
    ],
    nature: [
        { id: "animatronic", es: "¿Es un animatrónico / robot?", en: "Is it an animatronic / robot?" },
        { id: "human", es: "¿Es un humano?", en: "Is it a human?" },
        { id: "spirit", es: "¿Es un espíritu / alma?", en: "Is it a spirit / soul?" },
        { id: "entity", es: "¿Es alucinación / entidad digital?", en: "Is it a hallucination / digital entity?" },
        { id: "male", es: "¿Tiene género/voz masculina?", en: "Does it have male gender/voice?" },
        { id: "female", es: "¿Tiene género/voz femenina?", en: "Does it have female gender/voice?" }
    ],
    traits: [
        { id: "hat", es: "¿Lleva sombrero / gorro?", en: "Does it wear a hat / cap?" },
        { id: "bowtie", es: "¿Lleva pajarita / corbata?", en: "Does it wear a bowtie / tie?" },
        { id: "hook", es: "¿Tiene un garfio?", en: "Does it have a hook?" },
        { id: "instrument", es: "¿Lleva instrumento o micrófono?", en: "Does it hold an instrument or mic?" },
        { id: "damaged", es: "¿Está visiblemente roto o quemado?", en: "Is it visibly broken or burned?" },
        { id: "glowEyes", es: "¿Tiene ojos blancos/brillantes o sin ojos?", en: "Does it have glowing/white or missing eyes?" },
        { id: "jumpscare", es: "¿Tiene jumpscare letal (Game Over)?", en: "Does it have a lethal jumpscare?" },
        { id: "voice", es: "¿Tiene voz hablada en algún juego?", en: "Does it have spoken voice lines?" }
    ]
};

// Base de datos de 160 personajes de FNAF (FNAF 1 a Secret of the Mimic)
// Campos: [id, nombreES, nombreEN, game, family, line, nature, gender, traits[], wikiFileName]
const RAW_FNAF_CHARACTERS = [
    // --- FNAF 1 (11) ---
    [1, "Freddy Fazbear", "Freddy Fazbear", "fnaf1", "freddy", "classic", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Freddy_Fazbear.png"],
    [2, "Bonnie", "Bonnie", "fnaf1", "bonnie", "classic", "animatronic", "male", ["bowtie", "instrument", "jumpscare"], "Bonnie.png"],
    [3, "Chica", "Chica", "fnaf1", "chica", "classic", "animatronic", "female", ["jumpscare"], "Chica.png"],
    [4, "Foxy", "Foxy", "fnaf1", "foxy", "classic", "animatronic", "male", ["hook", "damaged", "jumpscare", "voice"], "Foxy.png"],
    [5, "Golden Freddy", "Golden Freddy", "fnaf1", "golden", "classic", "entity", "male", ["hat", "bowtie", "glowEyes", "jumpscare"], "Golden_Freddy.png"],
    [6, "Endo-01", "Endo-01", "fnaf1", "endo", "classic", "animatronic", "none", ["glowEyes"], "Endo-01.png"],
    [7, "Mike Schmidt", "Mike Schmidt", "fnaf1", "none", "none", "human", "male", [], "Mike_Schmidt.png"],
    [8, "Tipo del Teléfono (Ralph)", "Phone Guy (Ralph)", "fnaf1", "none", "none", "human", "male", ["voice"], "Phone_Guy.png"],
    [9, "Cupcake (Carl)", "Mr. Cupcake (Carl)", "fnaf1", "chica", "classic", "animatronic", "none", ["jumpscare"], "Cupcake.png"],
    [10, "Gabriel (Espíritu Freddy)", "Gabriel (Freddy Soul)", "fnaf1", "freddy", "none", "spirit", "male", ["glowEyes"], "Crying_Child_FNAF3.png"],
    [11, "Susie (Espíritu Chica)", "Susie (Chica Soul)", "fnaf1", "chica", "none", "spirit", "female", ["glowEyes", "voice"], "Susie_FNAF6.png"],

    // --- FNAF 2 (20) ---
    [12, "Toy Freddy", "Toy Freddy", "fnaf2", "freddy", "toy", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Toy_Freddy.png"],
    [13, "Toy Bonnie", "Toy Bonnie", "fnaf2", "bonnie", "toy", "animatronic", "male", ["bowtie", "instrument", "jumpscare", "voice"], "Toy_Bonnie.png"],
    [14, "Toy Chica", "Toy Chica", "fnaf2", "chica", "toy", "animatronic", "female", ["glowEyes", "jumpscare", "voice"], "Toy_Chica.png"],
    [15, "Mangle", "Mangle", "fnaf2", "foxy", "toy", "animatronic", "female", ["bowtie", "damaged", "jumpscare", "voice"], "Mangle.png"],
    [16, "Balloon Boy (BB)", "Balloon Boy (BB)", "fnaf2", "bb", "toy", "animatronic", "male", ["hat", "voice"], "Balloon_Boy.png"],
    [17, "JJ", "JJ", "fnaf2", "bb", "toy", "animatronic", "female", ["hat"], "JJ.png"],
    [18, "Puppet (Marionette)", "The Puppet (Marionette)", "fnaf2", "puppet", "toy", "animatronic", "female", ["glowEyes", "jumpscare", "voice"], "The_Puppet.png"],
    [19, "Withered Freddy", "Withered Freddy", "fnaf2", "freddy", "withered", "animatronic", "male", ["hat", "bowtie", "damaged", "jumpscare"], "Withered_Freddy.png"],
    [20, "Withered Bonnie", "Withered Bonnie", "fnaf2", "bonnie", "withered", "animatronic", "male", ["bowtie", "damaged", "glowEyes", "jumpscare", "voice"], "Withered_Bonnie.png"],
    [21, "Withered Chica", "Withered Chica", "fnaf2", "chica", "withered", "animatronic", "female", ["damaged", "jumpscare", "voice"], "Withered_Chica.png"],
    [22, "Withered Foxy", "Withered Foxy", "fnaf2", "foxy", "withered", "animatronic", "male", ["hook", "damaged", "jumpscare"], "Withered_Foxy.png"],
    [23, "Withered Golden Freddy", "Withered Golden Freddy", "fnaf2", "golden", "withered", "entity", "male", ["hat", "bowtie", "damaged", "glowEyes", "jumpscare"], "Withered_Golden_Freddy.png"],
    [24, "Endo-02", "Endo-02", "fnaf2", "endo", "withered", "animatronic", "none", ["glowEyes"], "Endo-02.png"],
    [25, "Shadow Freddy", "Shadow Freddy", "fnaf2", "freddy", "shadow", "entity", "male", ["hat", "bowtie", "glowEyes"], "Shadow_Freddy.png"],
    [26, "RWQFSFASXC (Shadow Bonnie)", "RWQFSFASXC (Shadow Bonnie)", "fnaf2", "bonnie", "shadow", "entity", "none", ["glowEyes"], "RWQFSFASXC.png"],
    [27, "Paperpals", "Paperpals", "fnaf2", "none", "toy", "entity", "none", [], "Paperpals.png"],
    [28, "Jeremy Fitzgerald", "Jeremy Fitzgerald", "fnaf2", "none", "none", "human", "male", [], "Jeremy_Fitzgerald.png"],
    [29, "Fritz Smith", "Fritz Smith", "fnaf2", "none", "none", "human", "male", [], "Fritz_Smith.png"],
    [30, "Jeremy (Espíritu Bonnie)", "Jeremy (Bonnie Soul)", "fnaf2", "bonnie", "none", "spirit", "male", ["glowEyes"], "Crying_Child_FNAF3.png"],
    [31, "Fritz (Espíritu Foxy)", "Fritz (Foxy Soul)", "fnaf2", "foxy", "none", "spirit", "male", ["glowEyes"], "Crying_Child_FNAF3.png"],

    // --- FNAF 3 (10) ---
    [32, "Springtrap", "Springtrap", "fnaf3", "springtrap", "springlock", "animatronic", "male", ["damaged", "glowEyes", "jumpscare", "voice"], "Springtrap.png"],
    [33, "Phantom Freddy", "Phantom Freddy", "fnaf3", "freddy", "phantom", "entity", "male", ["hat", "bowtie", "damaged", "glowEyes"], "Phantom_Freddy.png"],
    [34, "Phantom Chica", "Phantom Chica", "fnaf3", "chica", "phantom", "entity", "female", ["damaged", "glowEyes"], "Phantom_Chica.png"],
    [35, "Phantom Foxy", "Phantom Foxy", "fnaf3", "foxy", "phantom", "entity", "male", ["hook", "damaged", "glowEyes"], "Phantom_Foxy.png"],
    [36, "Phantom Mangle", "Phantom Mangle", "fnaf3", "foxy", "phantom", "entity", "female", ["damaged", "glowEyes"], "Phantom_Mangle.png"],
    [37, "Phantom Balloon Boy", "Phantom Balloon Boy", "fnaf3", "bb", "phantom", "entity", "male", ["hat", "damaged", "glowEyes"], "Phantom_BB.png"],
    [38, "Phantom Puppet", "Phantom Puppet", "fnaf3", "puppet", "phantom", "entity", "female", ["damaged", "glowEyes"], "Phantom_Puppet.png"],
    [39, "William Afton (Hombre Morado)", "William Afton (Purple Guy)", "fnaf3", "springtrap", "none", "human", "male", ["glowEyes", "voice"], "Purple_Guy_FNAF3.png"],
    [40, "Phone Dude", "Phone Dude", "fnaf3", "none", "none", "human", "male", ["voice"], "Phone_Dude.png"],
    [41, "Cassidy (Espíritu Golden Freddy)", "Cassidy (Golden Freddy Soul)", "fnaf3", "golden", "none", "spirit", "female", ["glowEyes"], "Crying_Child_FNAF3.png"],

    // --- FNAF 4 (13) ---
    [42, "Nightmare Freddy", "Nightmare Freddy", "fnaf4", "freddy", "nightmare", "animatronic", "male", ["hat", "bowtie", "damaged", "jumpscare", "voice"], "Nightmare_Freddy.png"],
    [43, "Freddles", "Freddles", "fnaf4", "freddy", "nightmare", "animatronic", "male", ["damaged", "jumpscare"], "Freddles.png"],
    [44, "Nightmare Bonnie", "Nightmare Bonnie", "fnaf4", "bonnie", "nightmare", "animatronic", "male", ["bowtie", "damaged", "jumpscare"], "Nightmare_Bonnie.png"],
    [45, "Nightmare Chica", "Nightmare Chica", "fnaf4", "chica", "nightmare", "animatronic", "female", ["damaged", "jumpscare"], "Nightmare_Chica.png"],
    [46, "Nightmare Foxy", "Nightmare Foxy", "fnaf4", "foxy", "nightmare", "animatronic", "male", ["hook", "damaged", "jumpscare"], "Nightmare_Foxy.png"],
    [47, "Nightmare Fredbear", "Nightmare Fredbear", "fnaf4", "golden", "nightmare", "animatronic", "male", ["hat", "bowtie", "damaged", "jumpscare", "voice"], "Nightmare_Fredbear.png"],
    [48, "Nightmare", "Nightmare", "fnaf4", "golden", "nightmare", "entity", "male", ["hat", "bowtie", "damaged", "glowEyes", "jumpscare", "voice"], "Nightmare.png"],
    [49, "Plushtrap", "Plushtrap", "fnaf4", "springtrap", "nightmare", "animatronic", "male", ["damaged", "jumpscare"], "Plushtrap.png"],
    [50, "Jack-O-Bonnie", "Jack-O-Bonnie", "fnaf4", "bonnie", "nightmare", "animatronic", "male", ["bowtie", "damaged", "glowEyes", "jumpscare"], "Jack-O-Bonnie.png"],
    [51, "Jack-O-Chica", "Jack-O-Chica", "fnaf4", "chica", "nightmare", "animatronic", "female", ["damaged", "glowEyes", "jumpscare", "voice"], "Jack-O-Chica.png"],
    [52, "Nightmare Mangle", "Nightmare Mangle", "fnaf4", "foxy", "nightmare", "animatronic", "female", ["damaged", "jumpscare"], "Nightmare_Mangle.png"],
    [53, "Nightmarionne", "Nightmarionne", "fnaf4", "puppet", "nightmare", "entity", "male", ["glowEyes", "jumpscare", "voice"], "Nightmarionne.png"],
    [54, "Niño Llorón (Crying Child)", "Crying Child (Garrett/Evan)", "fnaf4", "golden", "none", "spirit", "male", [], "Crying_Child_FNAF4.png"],

    // --- SISTER LOCATION (15) ---
    [55, "Circus Baby", "Circus Baby", "sl", "baby", "funtime", "animatronic", "female", ["instrument", "jumpscare", "voice"], "Circus_Baby.png"],
    [56, "Ballora", "Ballora", "sl", "none", "funtime", "animatronic", "female", ["jumpscare", "voice"], "Ballora.png"],
    [57, "Funtime Freddy", "Funtime Freddy", "sl", "freddy", "funtime", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Funtime_Freddy.png"],
    [58, "Bon-Bon", "Bon-Bon", "sl", "bonnie", "funtime", "animatronic", "male", ["bowtie", "jumpscare", "voice"], "Bon-Bon.png"],
    [59, "Funtime Foxy", "Funtime Foxy", "sl", "foxy", "funtime", "animatronic", "male", ["bowtie", "jumpscare", "voice"], "Funtime_Foxy.png"],
    [60, "Ennard", "Ennard", "sl", "endo", "funtime", "animatronic", "none", ["hat", "damaged", "glowEyes", "jumpscare", "voice"], "Ennard.png"],
    [61, "Bidybab", "Bidybab", "sl", "baby", "funtime", "animatronic", "female", ["jumpscare", "voice"], "Bidybab.png"],
    [62, "Electrobab", "Electrobab", "sl", "baby", "funtime", "animatronic", "female", ["glowEyes"], "Electrobab.png"],
    [63, "Minireena", "Minireena", "sl", "none", "funtime", "animatronic", "female", ["jumpscare"], "Minireena.png"],
    [64, "Yenndo", "Yenndo", "sl", "freddy", "funtime", "animatronic", "male", ["glowEyes", "jumpscare"], "Yenndo.png"],
    [65, "Bonnet", "Bonnet", "sl", "bonnie", "funtime", "animatronic", "female", ["bowtie", "jumpscare", "voice"], "Bonnet.png"],
    [66, "Lolbit", "Lolbit", "sl", "foxy", "funtime", "entity", "none", ["bowtie", "glowEyes"], "Lolbit.png"],
    [67, "Michael Afton", "Michael Afton", "sl", "none", "none", "human", "male", ["glowEyes", "voice"], "Michael_Afton.png"],
    [68, "Elizabeth Afton (Espíritu)", "Elizabeth Afton (Spirit)", "sl", "baby", "none", "spirit", "female", ["voice"], "Elizabeth_Afton.png"],
    [69, "HandUnit", "HandUnit", "sl", "none", "none", "entity", "male", ["voice"], "HandUnit.png"],

    // --- FFPS / FNAF 6 (24) ---
    [70, "Scrap Baby", "Scrap Baby", "ffps", "baby", "none", "animatronic", "female", ["damaged", "jumpscare", "voice"], "Scrap_Baby.png"],
    [71, "Molten Freddy", "Molten Freddy", "ffps", "freddy", "funtime", "animatronic", "male", ["hat", "bowtie", "damaged", "glowEyes", "jumpscare", "voice"], "Molten_Freddy.png"],
    [72, "Scraptrap (William Afton)", "Scraptrap (William Afton)", "ffps", "springtrap", "springlock", "animatronic", "male", ["damaged", "glowEyes", "jumpscare", "voice"], "Scraptrap.png"],
    [73, "Lefty", "Lefty", "ffps", "puppet", "rockstar", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Lefty.png"],
    [74, "Rockstar Freddy", "Rockstar Freddy", "ffps", "freddy", "rockstar", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Rockstar_Freddy.png"],
    [75, "Rockstar Bonnie", "Rockstar Bonnie", "ffps", "bonnie", "rockstar", "animatronic", "male", ["bowtie", "instrument", "jumpscare", "voice"], "Rockstar_Bonnie.png"],
    [76, "Rockstar Chica", "Rockstar Chica", "ffps", "chica", "rockstar", "animatronic", "female", ["instrument", "jumpscare", "voice"], "Rockstar_Chica.png"],
    [77, "Rockstar Foxy", "Rockstar Foxy", "ffps", "foxy", "rockstar", "animatronic", "male", ["hook", "instrument", "jumpscare", "voice"], "Rockstar_Foxy.png"],
    [78, "Happy Frog", "Happy Frog", "ffps", "none", "mediocre", "animatronic", "female", ["instrument", "jumpscare", "voice"], "Happy_Frog.png"],
    [79, "Mr. Hippo", "Mr. Hippo", "ffps", "none", "mediocre", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Mr_Hippo.png"],
    [80, "Pigpatch", "Pigpatch", "ffps", "none", "mediocre", "animatronic", "male", ["instrument", "jumpscare", "voice"], "Pigpatch.png"],
    [81, "Nedd Bear", "Nedd Bear", "ffps", "freddy", "mediocre", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Nedd_Bear.png"],
    [82, "Orville Elephant", "Orville Elephant", "ffps", "none", "mediocre", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Orville_Elephant.png"],
    [83, "Music Man", "Music Man", "ffps", "none", "none", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Music_Man.png"],
    [84, "El Chip", "El Chip", "ffps", "none", "none", "animatronic", "male", ["hat", "instrument"], "El_Chip.png"],
    [85, "Funtime Chica", "Funtime Chica", "ffps", "chica", "funtime", "animatronic", "female", ["voice"], "Funtime_Chica.png"],
    [86, "Security Puppet", "Security Puppet", "ffps", "puppet", "none", "animatronic", "none", ["hat", "glowEyes"], "Security_Puppet.png"],
    [87, "Bucket Bob", "Bucket Bob", "ffps", "none", "trash", "animatronic", "none", ["hat"], "Bucket_Bob.png"],
    [88, "Mr. Can-Do", "Mr. Can-Do", "ffps", "none", "trash", "animatronic", "none", [], "Mr_Can-Do.png"],
    [89, "Mr. Hugs", "Mr. Hugs", "ffps", "none", "trash", "animatronic", "none", [], "Mr_Hugs.png"],
    [90, "No. 1 Crate", "No. 1 Crate", "ffps", "none", "trash", "animatronic", "female", ["voice"], "No_1_Crate.png"],
    [91, "Pan Stan", "Pan Stan", "ffps", "none", "trash", "animatronic", "none", ["hat"], "Pan_Stan.png"],
    [92, "Henry Emily (Cassette Man)", "Henry Emily (Cassette Man)", "ffps", "none", "none", "human", "male", ["voice"], "Henry_Emily.png"],
    [93, "Charlie Emily (Espíritu Puppet)", "Charlie Emily (Puppet Soul)", "ffps", "puppet", "none", "spirit", "female", ["voice"], "Charlie_Emily.png"],

    // --- UCN (5) ---
    [94, "Fredbear (UCN)", "Fredbear (UCN)", "ucn", "golden", "springlock", "animatronic", "male", ["hat", "bowtie", "jumpscare", "voice"], "Fredbear_UCN.png"],
    [95, "Dee Dee", "Dee Dee", "ucn", "bb", "none", "entity", "female", ["hat", "voice"], "Dee_Dee.png"],
    [96, "XOR (Shadow Dee Dee)", "XOR (Shadow Dee Dee)", "ucn", "bb", "shadow", "entity", "female", ["hat", "glowEyes"], "XOR.png"],
    [97, "Old Man Consequences", "Old Man Consequences", "ucn", "none", "none", "entity", "male", [], "Old_Man_Consequences.png"],
    [98, "The One You Should Not Have Killed", "The One You Should Not Have Killed", "ucn", "golden", "none", "spirit", "male", ["glowEyes"], "TOYSNHK.png"],

    // --- HELP WANTED 1 (11) ---
    [99, "Glitchtrap", "Glitchtrap", "hw1", "springtrap", "springlock", "entity", "male", ["bowtie", "glowEyes", "voice"], "Glitchtrap.png"],
    [100, "Dreadbear", "Dreadbear", "hw1", "freddy", "none", "animatronic", "male", ["damaged", "glowEyes", "jumpscare"], "Dreadbear.png"],
    [101, "Grimm Foxy", "Grimm Foxy", "hw1", "foxy", "none", "animatronic", "male", ["hook", "damaged", "glowEyes", "jumpscare"], "Grimm_Foxy.png"],
    [102, "PlushBaby", "PlushBaby", "hw1", "baby", "none", "animatronic", "female", ["jumpscare", "voice"], "PlushBaby.png"],
    [103, "Captain Foxy", "Captain Foxy", "hw1", "foxy", "none", "animatronic", "male", ["hat", "hook", "voice"], "Captain_Foxy.png"],
    [104, "Jack-O-Endo", "Jack-O-Endo", "hw1", "endo", "nightmare", "animatronic", "none", ["glowEyes"], "Endo-01.png"],
    [105, "Burnt Foxy", "Burnt Foxy", "hw1", "foxy", "none", "animatronic", "male", ["hook", "damaged", "glowEyes", "jumpscare"], "Burnt_Foxy.png"],
    [106, "Dark Freddy", "Dark Freddy", "hw1", "freddy", "classic", "animatronic", "male", ["hat", "bowtie", "glowEyes", "jumpscare"], "Dark_Freddy.png"],
    [107, "Neon Bonnie", "Neon Bonnie", "hw1", "bonnie", "classic", "animatronic", "male", ["bowtie", "glowEyes", "jumpscare"], "Neon_Bonnie.png"],
    [108, "Neon Chica", "Neon Chica", "hw1", "chica", "classic", "animatronic", "female", ["glowEyes", "jumpscare"], "Neon_Chica.png"],
    [109, "Shadow Mangle", "Shadow Mangle", "hw1", "foxy", "shadow", "animatronic", "female", ["damaged", "glowEyes", "jumpscare"], "Shadow_Mangle.png"],

    // --- SECURITY BREACH (24) ---
    [110, "Glamrock Freddy", "Glamrock Freddy", "sb", "freddy", "glamrock", "animatronic", "male", ["hat", "bowtie", "instrument", "jumpscare", "voice"], "Glamrock_Freddy.png"],
    [111, "Glamrock Chica", "Glamrock Chica", "sb", "chica", "glamrock", "animatronic", "female", ["instrument", "jumpscare", "voice"], "Glamrock_Chica.png"],
    [112, "Montgomery Gator (Monty)", "Montgomery Gator (Monty)", "sb", "none", "glamrock", "animatronic", "male", ["instrument", "jumpscare", "voice"], "Montgomery_Gator.png"],
    [113, "Roxanne Wolf (Roxy)", "Roxanne Wolf (Roxy)", "sb", "none", "glamrock", "animatronic", "female", ["instrument", "jumpscare", "voice"], "Roxanne_Wolf.png"],
    [114, "Sun (Daycare Attendant)", "Sun (Daycare Attendant)", "sb", "none", "glamrock", "animatronic", "male", ["voice"], "Sun.png"],
    [115, "Moon (Daycare Attendant)", "Moon (Daycare Attendant)", "sb", "none", "glamrock", "animatronic", "male", ["hat", "glowEyes", "jumpscare", "voice"], "Moon.png"],
    [116, "DJ Music Man", "DJ Music Man", "sb", "none", "glamrock", "animatronic", "male", ["hat", "instrument"], "DJ_Music_Man.png"],
    [117, "Wind-Up Music Man", "Wind-Up Music Man", "sb", "none", "glamrock", "animatronic", "male", ["hat", "instrument", "jumpscare"], "Wind-Up_Music_Man.png"],
    [118, "Glamrock Endo", "Glamrock Endo", "sb", "endo", "glamrock", "animatronic", "none", ["glowEyes", "jumpscare"], "Glamrock_Endo.png"],
    [119, "S.T.A.F.F. Bot", "S.T.A.F.F. Bot", "sb", "none", "glamrock", "animatronic", "none", ["hat", "bowtie", "jumpscare", "voice"], "STAFF_Bot.png"],
    [120, "Map Bot", "Map Bot", "sb", "none", "glamrock", "animatronic", "male", ["hat", "jumpscare", "voice"], "Map_Bot.png"],
    [121, "Nightmarionne S.T.A.F.F. Bot", "Nightmarionne S.T.A.F.F. Bot", "sb", "puppet", "glamrock", "animatronic", "none", ["glowEyes", "jumpscare", "voice"], "Nightmarionne_Bot.png"],
    [122, "Shattered Glamrock Chica", "Shattered Glamrock Chica", "sb", "chica", "ruined", "animatronic", "female", ["damaged", "jumpscare", "voice"], "Shattered_Chica.png"],
    [123, "Shattered Monty", "Shattered Monty", "sb", "none", "ruined", "animatronic", "male", ["damaged", "jumpscare", "voice"], "Shattered_Monty.png"],
    [124, "Shattered Roxy", "Shattered Roxy", "sb", "none", "ruined", "animatronic", "female", ["damaged", "glowEyes", "jumpscare", "voice"], "Shattered_Roxy.png"],
    [125, "Burntrap", "Burntrap", "sb", "springtrap", "ruined", "animatronic", "male", ["damaged", "glowEyes"], "Burntrap.png"],
    [126, "The Blob (Tangle)", "The Blob (Tangle)", "sb", "freddy", "funtime", "animatronic", "none", ["hat", "damaged", "glowEyes", "jumpscare"], "The_Blob.png"],
    [127, "Vanny", "Vanny", "sb", "bonnie", "none", "human", "female", ["bowtie", "glowEyes", "jumpscare", "voice"], "Vanny.png"],
    [128, "Vanessa", "Vanessa", "sb", "none", "none", "human", "female", ["hat", "jumpscare", "voice"], "Vanessa.png"],
    [129, "Gregory", "Gregory", "sb", "none", "none", "human", "male", ["voice"], "Gregory.png"],
    [130, "Glamrock Bonnie", "Glamrock Bonnie", "sb", "bonnie", "glamrock", "animatronic", "male", ["bowtie", "instrument", "damaged"], "Glamrock_Bonnie.png"],
    [131, "Wet Floor Bot (PatPat)", "Wet Floor Bot (PatPat)", "sb", "none", "glamrock", "animatronic", "none", [], "Wet_Floor_Bot.png"],
    [132, "Comedy Bot", "Comedy Bot", "sb", "none", "glamrock", "animatronic", "male", ["hat", "bowtie", "instrument", "voice"], "Comedy_Bot.png"],
    [133, "Alien Bot", "Alien Bot", "sb", "none", "glamrock", "animatronic", "none", [], "Alien_Bot.png"],

    // --- SB: RUIN (10) ---
    [134, "The Mimic (M2)", "The Mimic (M2)", "ruin", "mimic", "ruined", "animatronic", "none", ["damaged", "glowEyes", "jumpscare", "voice"], "The_Mimic.png"],
    [135, "Ruined Glamrock Freddy (Prototype)", "Ruined Glamrock Freddy (Prototype)", "ruin", "freddy", "ruined", "animatronic", "male", ["damaged", "jumpscare"], "Prototype_Freddy.png"],
    [136, "Ruined Chica", "Ruined Chica", "ruin", "chica", "ruined", "animatronic", "female", ["damaged", "jumpscare"], "Ruined_Chica.png"],
    [137, "Ruined Monty", "Ruined Monty", "ruin", "none", "ruined", "animatronic", "male", ["damaged", "jumpscare"], "Ruined_Monty.png"],
    [138, "Ruined Roxy", "Ruined Roxy", "ruin", "none", "ruined", "animatronic", "female", ["damaged", "jumpscare", "voice"], "Ruined_Roxy.png"],
    [139, "Eclipse", "Eclipse", "ruin", "none", "glamrock", "animatronic", "male", ["voice"], "Eclipse.png"],
    [140, "Ruined DJ Music Man", "Ruined DJ Music Man", "ruin", "none", "ruined", "animatronic", "male", ["hat", "damaged"], "Ruined_DJ_Music_Man.png"],
    [141, "M.X.E.S. (La Entidad)", "M.X.E.S. (The Entity)", "ruin", "bonnie", "shadow", "entity", "none", ["glowEyes"], "MXES.png"],
    [142, "Cassie", "Cassie", "ruin", "none", "none", "human", "female", ["voice"], "Cassie.png"],
    [143, "Mask Bot", "Mask Bot", "ruin", "none", "ruined", "animatronic", "none", ["damaged", "jumpscare", "voice"], "Mask_Bot.png"],

    // --- HELP WANTED 2 (6) ---
    [144, "Mystic Hippo", "Mystic Hippo", "hw2", "none", "mediocre", "animatronic", "female", ["hat", "voice"], "Mystic_Hippo.png"],
    [145, "Carnie", "Carnie", "hw2", "freddy", "rockstar", "animatronic", "male", ["hat", "bowtie", "voice"], "Carnie.png"],
    [146, "Jack-O-Moon", "Jack-O-Moon", "hw2", "none", "glamrock", "animatronic", "male", ["hat", "glowEyes", "jumpscare", "voice"], "Jack-O-Moon.png"],
    [147, "Ruined Wind-Up Music Man", "Ruined Wind-Up Music Man", "hw2", "none", "ruined", "animatronic", "male", ["hat", "damaged", "jumpscare"], "Ruined_Mini_Music_Man.png"],
    [148, "Glamrock Ballora", "Glamrock Ballora", "hw2", "none", "funtime", "animatronic", "female", ["jumpscare"], "Ballora.png"],
    [149, "Scrap PlushBaby", "Scrap PlushBaby", "hw2", "baby", "ruined", "animatronic", "female", ["damaged", "jumpscare", "voice"], "Scrap_PlushBaby.png"],

    // --- SECRET OF THE MIMIC (11) ---
    [150, "Jackie", "Jackie", "sotm", "mimic", "none", "animatronic", "female", ["hat", "damaged", "jumpscare", "voice"], "Jackie.png"],
    [151, "Big Top", "Big Top", "sotm", "none", "none", "animatronic", "male", ["hat", "instrument", "jumpscare"], "Big_Top.png"],
    [152, "Dollie", "Dollie", "sotm", "none", "none", "animatronic", "female", ["jumpscare", "voice"], "Dollie.png"],
    [153, "M1 (F10-N4)", "M1 (F10-N4)", "sotm", "endo", "none", "animatronic", "female", ["glowEyes", "voice"], "M1_SOTM.png"],
    [154, "M2 (Endoesqueleto Mimic)", "M2 (Mimic Endoskeleton)", "sotm", "endo", "none", "animatronic", "none", ["glowEyes", "jumpscare", "voice"], "The_Mimic.png"],
    [155, "Edwin Murray", "Edwin Murray", "sotm", "none", "none", "human", "male", ["voice"], "Edwin_Murray.png"],
    [156, "Arnold", "Arnold", "sotm", "none", "none", "human", "male", [], "Arnold_SOTM.png"],
    [157, "Jester (Traje del Mimic)", "Jester (Mimic Costume)", "sotm", "mimic", "none", "animatronic", "male", ["hat", "jumpscare"], "Jester_SOTM.png"],
    [158, "Sharpay / León (Traje Mimic)", "Lion (Mimic Costume)", "sotm", "mimic", "none", "animatronic", "male", ["jumpscare"], "Lion_SOTM.png"],
    [159, "Seta / Mushroom (Traje Mimic)", "Mushroom (Mimic Costume)", "sotm", "mimic", "none", "animatronic", "none", ["hat", "jumpscare"], "Mushroom_SOTM.png"],
    [160, "Springlock Fredbear (SOTM)", "Springlock Fredbear (SOTM)", "sotm", "golden", "springlock", "animatronic", "male", ["hat", "bowtie", "jumpscare"], "Fredbear_UCN.png"]
];

// Genera un icono SVG personalizado según familia/naturaleza/color de juego
function buildCharacterIconSvg(char, bgColor) {
    const initials = char.nameEn
        .replace(/\(.*?\)/g, "")
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(w => w[0] ? w[0].toUpperCase() : "")
        .join("");

    let symbol = "★";
    if (char.nature === "human") symbol = "👤";
    else if (char.nature === "spirit") symbol = "👻";
    else if (char.nature === "entity") symbol = "👁";
    else if (char.family === "freddy" || char.family === "golden") symbol = "🐻";
    else if (char.family === "bonnie" || char.family === "springtrap") symbol = "🐇";
    else if (char.family === "chica") symbol = "🐥";
    else if (char.family === "foxy") symbol = "🦊";
    else if (char.family === "puppet") symbol = "🎭";
    else if (char.family === "endo" || char.family === "mimic") symbol = "⚙";
    else symbol = "🤖";

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
        <rect width="120" height="120" rx="16" fill="${bgColor}"/>
        <rect x="6" y="6" width="108" height="108" rx="12" fill="none" stroke="rgba(255,255,255,0.22)" stroke-width="2"/>
        <text x="60" y="54" font-size="34" text-anchor="middle" dominant-baseline="middle">${symbol}</text>
        <text x="60" y="92" font-family="Segoe UI, sans-serif" font-size="16" font-weight="800" fill="#ffffff" text-anchor="middle">${initials}</text>
    </svg>`;
    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

// Construye la lista final de 160 personajes con URL oficial de la Wiki y su icono de respaldo
function loadAllFnafCharacters() {
    return RAW_FNAF_CHARACTERS.map(([id, nameEs, nameEn, game, family, line, nature, gender, traits, file]) => {
        const gameColor = FNAF_GAMES[game] ? FNAF_GAMES[game].color : "#37304a";
        const officialUrl = `https://freddy-fazbears-pizza.fandom.com/wiki/Special:FilePath/${encodeURIComponent(file)}?width=160`;
        const proxyUrl = `https://wsrv.nl/?url=${encodeURIComponent(`https://freddy-fazbears-pizza.fandom.com/wiki/Special:FilePath/${encodeURIComponent(file)}`)}&w=160&h=160&fit=contain`;

        const baseChar = {
            id,
            nameEs,
            nameEn,
            fileName: file,
            game,
            family,
            line,
            nature,
            gender,
            traits: new Set(traits),
            sprite: officialUrl,
            proxySprite: proxyUrl,
            fallbackSprite: ""
        };
        baseChar.fallbackSprite = buildCharacterIconSvg(baseChar, gameColor);
        return baseChar;
    });
}