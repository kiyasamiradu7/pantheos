const olympians = [
        
    {
        name: "Zeus",
        title: "King of the Gods",
        description: "The supreme deity who rules Mount Olympus as god of the sky, lightning, thunder, law, order, and justice.",
        symbols: ["Thunderbolt", "Eagle", "Oak Tree", "Aegis", "Bull"],
        story: "Zeus was born to the Titans Cronus and Rhea, who feared that one of their children would overthrow them. To prevent this, Cronus swallowed each child at birth. Rhea saved Zeus by hiding him in Crete, giving Cronus a stone wrapped in swaddling clothes instead. When Zeus grew, he forced Cronus to regurgitate his siblings, and together they defeated the Titans in a mighty battle called the Titanomachy.\n\nAs king of the gods, Zeus ruled Mount Olympus with supreme authority. He wielded the thunderbolt and maintained order among gods and mortals alike. Zeus was also known for his numerous affairs with goddesses and mortals, producing many famous offspring. Despite his power, his actions often led to conflicts that shaped the fate of humans and gods.\n\nZeus's influence extended beyond Olympus into human affairs, where he presided over justice, law, and social order. Festivals such as the Olympic Games honored him, reflecting his central role in both divine and mortal worlds. His duality of mercy and wrath reminded mortals of the balance between divine authority and natural forces."
    },
    {
        name: "Hera",
        title: "Queen of Olympus",
        description: "Goddess of marriage, women, childbirth, and family. She is the wife and sister of Zeus.",
        symbols: ["Peacock", "Cow", "Pomegranate", "Diadem"],
        story: "Hera was the devoted and often vengeful wife of Zeus, protecting the sanctity of marriage and family. She played a key role in many myths, defending her dignity against Zeus’s numerous affairs. Hera often punished those who crossed her or became entangled in Zeus's romantic escapades.\n\nDespite her wrath, Hera was also revered as a nurturing goddess who blessed marriages and childbirth. Her peacock, symbolizing beauty and pride, became her most recognized emblem across the Greek world.\n\nHera's influence extended to rulers and human society, where she embodied authority, dignity, and justice in domestic and civic life. Her festivals, like the Heraia, celebrated her protective and watchful nature, reinforcing ideals of family and loyalty."
    },
    {
        name: "Poseidon",
        title: "God of the Sea",
        description: "Ruler of the oceans, seas, earthquakes, and horses. Brother of Zeus and Hades.",
        symbols: ["Trident", "Horse", "Dolphin", "Bull"],
        story: "Poseidon controlled the seas, causing storms, earthquakes, and tidal waves at his will. He competed with other gods for dominion and was feared by sailors and mortals alike. Poseidon also created the first horse and was associated with both marine life and terrestrial animals like bulls.\n\nHe played a central role in many myths, including the contest with Athena over the city of Athens. Though he lost to her, he continued to influence mortals through his control of the oceans and his sometimes tempestuous nature, reminding humans of the sea's power and unpredictability.\n\nBeyond his destructive side, Poseidon could also be generous, calming waters and providing safe passage or abundant marine harvests. His dual nature symbolized both the peril and bounty of the natural world, demonstrating the Greeks’ respect for the forces of nature."
    },
    {
        name: "Demeter",
        title: "Goddess of the Harvest",
        description: "Goddess of agriculture, fertility, and the cycles of life and death.",
        symbols: ["Cornucopia", "Wheat", "Torch", "Bread"],
        story: "Demeter governed the fertility of the earth and the growth of crops, ensuring that humans had sustenance. Her grief over the abduction of her daughter Persephone by Hades caused the earth to wither, explaining the origin of the seasons.\n\nShe taught humans the art of agriculture and grain cultivation, becoming one of the most important deities for sustaining life. Festivals like the Eleusinian Mysteries celebrated her gifts, emphasizing the sacred connection between humans, crops, and the divine cycles of life and death.\n\nDemeter's care and sorrow reflected the close bond between humans and nature, highlighting the interdependence of life, death, and renewal. Her myth symbolized the power of maternal love and the enduring influence of the divine on everyday existence."
    },
    {
        name: "Athena",
        title: "Goddess of Wisdom",
        description: "Goddess of wisdom, strategy, warfare, and crafts, born fully grown from Zeus's head.",
        symbols: ["Owl", "Olive Tree", "Shield", "Spear"],
        story: "Athena was born fully armed from Zeus’s head, symbolizing her role as a goddess of intellect and strategy. She guided heroes such as Odysseus, Perseus, and Heracles, offering wisdom and protection in their quests. Athena embodied rational warfare, preferring strategy over brute force.\n\nShe also fostered arts, crafts, and the olive tree, which became a symbol of peace and prosperity. Worshipped across Greece, Athena balanced power with wisdom, teaching mortals and gods alike that intelligence could triumph over strength.\n\nAthena's counsel was sought in matters of state, war, and law. Her temples, such as the Parthenon in Athens, became centers of knowledge, artistry, and civic pride, reflecting her enduring role as both protector and teacher."
    },
    {
        name: "Apollo",
        title: "God of the Sun and Music",
        description: "God of light, prophecy, music, poetry, and healing.",
        symbols: ["Lyre", "Laurel", "Sun", "Bow and Arrow"],
        story: "Apollo brought light and order to the world as the god of the sun, guiding mortals and offering prophetic wisdom. He was a master musician and poet, often playing the lyre and inspiring artistic expression among gods and humans.\n\nHe also had the power to bring disease and healing, demonstrating his dual role as a force of both destruction and restoration. Apollo's influence was wide-reaching, encompassing the arts, medicine, and the moral guidance of humankind through his oracles.\n\nHis worship included elaborate rituals and festivals, such as the Pythian Games, celebrating his mastery of arts and sports. Apollo's harmonious nature reflected the ideals of balance, clarity, and enlightenment."
    },
    {
        name: "Artemis",
        title: "Goddess of the Moon and Hunt",
        description: "Goddess of the moon, wilderness, hunting, and childbirth.",
        symbols: ["Bow and Arrow", "Moon", "Stag", "Hunting Dog"],
        story: "Artemis was the protector of wildlife, young women, and childbirth. She roamed forests with her nymphs, skilled in hunting and archery, ensuring the balance of nature and defending the innocent.\n\nShe demanded respect from mortals, punishing those who harmed animals or defiled her sacred spaces. Artemis represented independence, purity, and the untamed spirit of the natural world.\n\nHer duality of nurturing and fierceness reflected the unpredictability of nature. Festivals like the Brauronia honored her, emphasizing rites of passage and the sacredness of life in both wild and human realms."
    },
    {
        name: "Ares",
        title: "God of War",
        description: "God of violent warfare, battlelust, and courage.",
        symbols: ["Spear", "Helmet", "Dog", "Vulture"],
        story: "Ares personified the brutal and chaotic aspect of war, reveling in bloodshed and conflict. He often clashed with Athena, who represented strategic warfare, highlighting the difference between brute force and skillful planning.\n\nDespite being feared on the battlefield, Ares was not widely loved by gods or mortals. His presence reminded humans of war’s harsh realities and the consequences of uncontrolled aggression.\n\nAres symbolized the raw, violent side of human nature. While his influence could be destructive, it also underscored courage, strength, and the importance of discipline in martial endeavors."
    },
    {
        name: "Aphrodite",
        title: "Goddess of Love and Beauty",
        description: "Goddess of love, beauty, desire, and fertility.",
        symbols: ["Dove", "Rose", "Mirror", "Swan"],
        story: "Aphrodite could inspire love, desire, and passion among gods and mortals. She played pivotal roles in myths like the Trojan War, often influencing events through her charm and beauty.\n\nHer influence extended beyond romance, embodying the creative and sensual aspects of life. Mortals worshipped her to gain favor in love and relationships, while she also taught lessons about the consequences of desire.\n\nAphrodite's cult spread widely, emphasizing fertility, attraction, and artistic inspiration. She exemplified the transformative power of love, both constructive and perilous, in shaping human destinies."
    },
    
    {
        name: "Hephaestus",
        title: "God of Fire and Craftsmanship",
        description: "God of fire, metalworking, and craftsmanship, patron of artisans.",
        symbols: ["Hammer", "Anvil", "Tongs", "Volcano"],
        story: "Hephaestus, though rejected by Hera for his deformity, became the master craftsman of Olympus. He forged weapons, armor, and magical items for gods and heroes, demonstrating unmatched skill and ingenuity.\n\nDespite hardships and physical challenges, Hephaestus remained diligent, creative, and respected for his craftsmanship. His creations were vital to the gods’ power, from Zeus’s thunderbolt to Achilles’ armor.\n\nHephaestus symbolized the power of intellect, creativity, and perseverance. His myth emphasized that strength and value often lie in skill, artistry, and dedication rather than physical perfection."
    },
    {
        name: "Hermes",
        title: "Messenger of the Gods",
        description: "God of travel, commerce, thieves, and messenger of the gods.",
        symbols: ["Winged Sandals", "Caduceus", "Petasos Hat"],
        story: "Hermes delivered messages for the gods and guided souls to the underworld. Known for cunning, wit, and speed, he also protected travelers, merchants, and thieves alike.\n\nHe invented the lyre, mediated disputes, and solved problems for both gods and mortals. Hermes’ cleverness allowed him to navigate divine and human realms with ease.\n\nHermes represented communication, adaptability, and intelligence. He symbolized the importance of negotiation, quick thinking, and versatility, making him an indispensable figure in Greek mythology."
    },
    
    {
        name: "Hestia",
        title: "Goddess of the Hearth",
        description: "Goddess of the hearth, home, and domesticity.",
        symbols: ["Hearth", "Fire", "Veil"],
        story: "Hestia was revered as the calm and gentle goddess of the home, overseeing domestic life and family harmony. She gave up her seat on Olympus for Dionysus to maintain peace among the gods, showing her selflessness and dedication.\n\nMortals honored her with the hearth fire, symbolizing warmth, safety, and community. She ensured that homes remained sacred spaces where families could thrive and live in stability.\n\nHestia represented stability and devotion, reminding humans of the sacredness of home and family. Her presence underscored the importance of domestic life as the foundation of society and moral order."
    },
    {
        name: "Dionysus",
        title: "God of Wine and Theatre",
        description: "God of wine, revelry, theatre, and ecstasy.",
        symbols: ["Grapevine", "Thyrsus", "Leopard", "Wine Cup"],
        story: "Dionysus introduced wine and celebration to humans, offering joy, ecstasy, and freedom from restraint. He traveled among mortals, teaching the pleasures of indulgence and the arts of theater and performance.\n\nHis festivals, including the Dionysia, became the foundation of Greek theatre, inspiring dramatic arts and communal celebrations. He represented both joy and chaos, embodying the duality of pleasure and disorder.\n\nDionysus bridged the mortal and divine worlds, showing that indulgence and creativity could inspire but also disrupt. His stories emphasized liberation, transformation, and the potent power of human expression."
    },
    {
        name: "Hades",
        title: "God of the Underworld",
        description: "Ruler of the dead and god of the underworld.",
        symbols: ["Cerberus", "Scepter", "Cypress Tree", "Helm of Darkness"],
        story: "Hades ruled the realm of the dead with stern justice. He rarely left his dark domain and maintained strict order, ensuring that souls were guided appropriately. His abduction of Persephone to be his queen angered Demeter and caused the seasons.\n\nThough feared by mortals, Hades was not evil; he upheld the balance between life and death. He rewarded virtue and punished wrongdoing, embodying fairness and authority in the underworld.\n\nHades’ domain symbolized inevitability and the natural order. Worship of him focused on respect and reverence, reminding humans of mortality, justice, and the consequences of their earthly actions."
    },
    {
        name: "Persephone",
        title: "Queen of the Underworld",
        description: "Goddess of spring growth and queen of the underworld.",
        symbols: ["Pomegranate", "Seasons", "Torch"],
        story: "Persephone, daughter of Demeter, was kidnapped by Hades to become queen of the underworld. Her presence there symbolized death and transformation, while her return to the earth brought life and spring growth.\n\nShe divided her year between the underworld and the mortal world, representing the cycles of life, death, and rebirth. This duality explained the origin of the seasons.\n\nPersephone’s myth emphasized the interconnection between life and death. Mortals celebrated her return as a time of fertility and growth, showing reverence for her power over both the natural and divine realms."
    },
    {
        name: "Thanatos",
        title: "God of Death",
        description: "Personification of death and peaceful passing.",
        symbols: ["Skull", "Torch", "Winged Spirit"],
        story: "Thanatos was the gentle god of death, ensuring that souls passed peacefully to the underworld. Unlike violent or sudden death, he represented inevitability, calm, and natural order.\n\nHe rarely acted violently and was often overshadowed by more dramatic deities like Hades. Despite this, his role was crucial in guiding souls and maintaining balance between life and the afterlife.\n\nThanatos reminded mortals of the certainty of death, encouraging reflection on virtue and morality. His presence symbolized the quiet, essential aspect of existence and the cycle of life."
    },
    {
        name: "Hecate",
        title: "Goddess of Magic and Witchcraft",
        description: "Goddess of magic, witchcraft, the moon, ghosts, and necromancy.",
        symbols: ["Keys", "Torches", "Dogs", "Moon"],
        story: "Hecate was associated with magic, crossroads, and the night. She guided mortals and spirits, summoning supernatural forces to influence events. Her mysterious nature made her both feared and respected.\n\nShe was invoked in spells and rituals, often connected with protection, divination, and transformations. Hecate bridged the mortal and divine realms, embodying secret knowledge and mystical power.\n\nHecate represented the unseen forces of the universe. Her influence extended into the spiritual and mystical, teaching humans to respect the unknown and harness inner wisdom responsibly."
    },
    {
        name: "Gaia",
        title: "Primordial Goddess of Earth",
        description: "Personification of the Earth and mother of all life.",
        symbols: ["Earth", "Cornucopia", "Plants"],
        story: "Gaia emerged from Chaos as the mother of all life, giving birth to the sky, mountains, and seas. She nurtured the Titans and Olympians alike, sustaining creation with her enduring presence.\n\nHer influence extended to mortals, representing fertility, growth, and stability. Humans honored her for the bounty of the earth, relying on her for crops, shelter, and survival.\n\nGaia symbolized the eternal foundation of life and the natural order. She demonstrated that all beings were connected to the earth, emphasizing respect and stewardship of the environment."
    },
    {
        name: "Uranus",
        title: "Primordial God of the Sky",
        description: "Personification of the sky, father of the Titans.",
        symbols: ["Sky", "Stars", "Heavens"],
        story: "Uranus was the first ruler of the cosmos, covering Gaia with the sky. He fathered the Titans but feared being overthrown, leading to conflict with his son Cronus.\n\nHis control over the heavens symbolized order, authority, and cosmic balance. The struggle between Uranus and Cronus set the stage for the rise of the Olympian gods.\n\nUranus represented the vastness and permanence of the sky, reminding mortals and deities of divine authority and the inevitability of generational change among gods."
    },
    {
        name: "Nyx",
        title: "Primordial Goddess of Night",
        description: "Personification of night and darkness.",
        symbols: ["Night", "Stars", "Shadow"],
        story: "Nyx emerged from Chaos as the embodiment of night, shrouded in mystery and power. She was feared even by other gods due to her connection with darkness and fate.\n\nShe gave birth to deities of shadows, dreams, and death, influencing the unseen forces that shaped mortal lives. Nyx’s presence underscored the balance between light and darkness in the cosmos.\n\nNyx represented both the beauty and terror of night. Mortals honored her as a symbol of the unknown, mystery, and the eternal cycles that govern life and death."
    },
    {
        name: "Eros",
        title: "God of Love and Desire",
        description: "God of romantic love and attraction.",
        symbols: ["Bow", "Arrow", "Wings"],
        story: "Eros inspired love and desire among gods and mortals, often sparking passion that could change fates. His arrows could ignite affection or chaos in hearts and minds.\n\nThrough his influence, relationships formed, marriages occurred, and myths unfolded, showing love's transformative power. Eros was both playful and potent, capable of shaping divine and human destinies.\n\nHe represented the irresistible force of attraction and the lessons it brings. Mortals and gods alike learned from Eros that love could create harmony, strife, or profound inspiration."
    },
    {
        name: "Nike",
        title: "Goddess of Victory",
        description: "Personification of victory in war and competitions.",
        symbols: ["Wings", "Laurel", "Palm"],
        story: "Nike rewarded those who excelled in battle, athletic contests, and other challenges, flying swiftly to crown them with glory. She personified the triumph of effort, skill, and courage.\n\nHer presence inspired both mortals and gods to strive for excellence. Nike was closely associated with Zeus and Athena, symbolizing divine favor in achieving victory.\n\nNike encouraged perseverance, valor, and recognition for accomplishments. She reminded humanity that triumph required skill, discipline, and the favor of higher powers."
    },
    {
        name: "Nemesis",
        title: "Goddess of Retribution",
        description: "Goddess of revenge and balance.",
        symbols: ["Sword", "Scales", "Wheel"],
        story: "Nemesis ensured justice by punishing arrogance, hubris, and wrongdoing. She acted to restore balance when mortals or gods acted with excessive pride or cruelty.\n\nHer presence reminded humans to act with humility and fairness, emphasizing moral responsibility. Nemesis reinforced the concept that unchecked power or pride leads to consequences.\n\nThrough her influence, mortals learned that balance and retribution are essential to the cosmos. Nemesis maintained order and fairness, safeguarding divine and human equilibrium."
    },
    {
        name: "Pan",
        title: "God of the Wild and Shepherds",
        description: "God of nature, wild animals, shepherds, and rustic music.",
        symbols: ["Pan Flute", "Goat", "Nature"],
        story: "Pan roamed forests and mountains, playing his pipes to inspire delight and fear. He embodied the untamed spirit of nature and its unpredictable rhythms.\n\nHe interacted with both mortals and gods, teaching respect for wildlife and the wilderness. His music could charm, entertain, or terrify, reflecting the duality of nature.\n\nPan symbolized spontaneity, instinct, and joy. His presence reminded humans of the harmony and unpredictability of the natural world, encouraging connection with rustic life and the outdoors."
    },
    {
        name: "Heracles",
        title: "Son of Zeus, Hero of the Twelve Labors",
        description: "Hero known for his immense strength and legendary Twelve Labors.",
        symbols: ["Club", "Lion Skin", "Bow"],
        story: "Heracles, son of Zeus and a mortal woman, was destined for greatness from birth. Driven by strength and courage, he undertook the Twelve Labors to atone for a tragic crime committed in a fit of madness.\n\nHe faced monsters, impossible challenges, and divine tests, demonstrating resilience and ingenuity. Each labor became a tale of heroism that inspired generations.\n\nHeracles symbolized the triumph of determination over adversity. His feats reflected human potential, endurance, and the enduring influence of divine parentage on mortal destinies."
    },
    {
        name: "Perseus",
        title: "Slayer of Medusa",
        description: "Hero famed for beheading the Gorgon Medusa.",
        symbols: ["Sword", "Shield", "Winged Sandals", "Medusa Head"],
        story: "Perseus embarked on a dangerous quest to slay Medusa, using divine gifts and cunning strategy. His mission showcased bravery, intelligence, and reliance on both human skill and divine intervention.\n\nHe defeated the Gorgon, rescued Andromeda, and brought peace and honor to his homeland. Perseus became celebrated as a hero who overcame impossible odds.\n\nHis story exemplified courage, cleverness, and the triumph of intellect and valor. Perseus inspired heroes and mortals alike, demonstrating that ingenuity and bravery could conquer the most formidable foes."
    },
    {
        name: "Achilles",
        title: "Hero of the Trojan War",
        description: "Mighty warrior and central figure of the Trojan War.",
        symbols: ["Shield", "Spear", "Armor"],
        story: "Achilles was the greatest Greek warrior of the Trojan War, nearly invincible except for his heel. His skill in combat and fearlessness made him a formidable presence on the battlefield.\n\nHis wrath and honor played crucial roles in determining the outcomes of battles and influencing the fates of both allies and enemies. Achilles’ life reflected the complex interplay of mortality, pride, and destiny.\n\nHis story became a timeless symbol of heroism, valor, and human vulnerability. Achilles reminded mortals that even the mightiest have weaknesses, blending glory with the inevitability of fate."
    },
    {
        name: "Theseus",
        title: "Slayer of the Minotaur",
        description: "Hero who defeated the Minotaur in Crete’s labyrinth.",
        symbols: ["Sword", "Labyrinth", "Crown"],
        story: "Theseus journeyed to Crete to confront the deadly Minotaur, using Ariadne’s thread to navigate the labyrinth. His bravery liberated Athens from the burdensome tribute to Crete, establishing him as a celebrated hero.\n\nHe demonstrated intelligence and courage, combining strategy with martial skill. Theseus became a model for leadership, showing that cleverness and bravery could overcome daunting challenges.\n\nHis legacy inspired generations of Greeks, emphasizing heroism, ingenuity, and civic duty. Theseus symbolized the triumph of human skill and courage in the face of danger and oppression."
    }
]



     
const grid = document.getElementById('olympianGrid');
const infoPanel = document.getElementById('infoPanel');
const closeBtn = document.getElementById('closeBtn');
const godTitle = document.getElementById('godTitle');
const godDescription = document.getElementById('godDescription');

olympians.forEach((god, index) => {
    const card = document.createElement('div');
    card.className = 'god-card';
    card.dataset.index = index;

    const name = document.createElement('div');
    name.className = 'god-name';
    name.textContent = god.name;

    card.appendChild(name);
    grid.appendChild(card);

    card.addEventListener('click', () => {
        showGodInfo(god);
    });
});

closeBtn.addEventListener('click', () => infoPanel.classList.remove('active'));
infoPanel.addEventListener('click', e => {
    if (e.target === infoPanel) infoPanel.classList.remove('active');
});

function showGodInfo(god) {
    godTitle.textContent = `${god.name} - ${god.title}`;

    let symbolsHtml = '<div class="symbol-list">';
    god.symbols.forEach(s => symbolsHtml += `<span class="symbol-item">${s}</span>`);
    symbolsHtml += '</div>';

    godDescription.innerHTML = `
        <p>${god.description}</p>
        <h3>Sacred Symbols</h3>
        ${symbolsHtml}
        <h3>Mythological Story</h3>
        <p class="story">${god.story}</p>
    `;

    infoPanel.classList.add('active');
}

    //  stars
    for (let i = 0; i < 400; i++) {
        let star = document.createElement("div");
        star.className = "star";
        let size = Math.random() * 3 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = (Math.random() * 4 + 2) + "s";
        document.body.appendChild(star);
    }

    window.addEventListener("load", function() {
      const loader = document.getElementById("loader");
      setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 1000);
      }, 1000); 
    });