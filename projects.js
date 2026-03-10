/**
 * ============================================================
 *  PORTFOLIO DATA  — edit this file to update your portfolio
 * ============================================================
 *
 *  Projects order: Eco, NHL 20, Godforge, then newest → oldest.
 */

const PORTFOLIO = {

  /* ── Owner info ──────────────────────────────────────────── */
  owner: {
    name:     "Grigoriy Zatravkin",
    title:    "Lead Game Engineer",
    tagline:  "Unity, .NET, and CI/CD. The whole game, end to end.",
    bio:      "Lead Game Engineer working across Unity and .NET — game client, backend, live services, and the CI/CD that holds it together. " +
              "From solo Android builds to AAA at EA Sports — nine years, seven titles, over a million copies sold.",
    github:   "https://github.com/gzatravkin",
    email:    "grigoriy.zatravkin@gmail.com",
    location: "Buenos Aires, Argentina",
    stats: [
      { value: "9+",  label: "Years Experience"        },
      { value: "7",   label: "Titles Shipped"           },
      { value: "5",   label: "Platforms Shipped On"     },
      { value: "1",   label: "Merged into .NET Roslyn"  },
    ],
  },

  /* ── Projects: Eco · NHL 20 · Godforge, then newest → oldest */
  projects: [

    /* ── ECO (flagship — first) ────────────────────────────── */
    {
      id:          "eco",
      title:       "Eco",
      subtitle:    "100-Player Persistent Multiplayer Simulation",
      year:        "2019–2024",
      role:        "Backend Developer → Tech Lead",
      company:     "Strange Loop Games",
      description: "Up to 100 players, one persistent server, one civilisation, one meteor incoming. " +
                   "Five years building and leading backend on one of indie gaming's most technically ambitious games — " +
                   "real ecological simulation, player-run government, and a fully networked world.",
      contributions: [
        "Rewrote the network protocol — 4× traffic reduction, connection time halved",
        "Parallelised server boot — from 5 minutes to 30 seconds (10× speedup)",
        "Accelerated biome and wildlife simulation by orders of magnitude",
        "Cut Jenkins CI build time from 120 min to 30 min; automated PR tagging and test runs",
        "Built global minimap raycasting, photo system, cooking system, and room-stats engine",
        "Worked across the full stack: .NET backend, Unity client, DOTS, React, and custom shaders",
        "Led a team of 5 developers",
        "Contributed a bug fix merged directly into the official Roslyn .NET compiler repository",
      ],
      images: [
        { src: "./Assets/Strange Loop Games Company/Eco/ss_a55f17232e3ed1b7735a1bdf00d370187e9991e3.1920x1080.jpg", alt: "Eco — world overview",   type: "screenshot" },
        { src: "./Assets/Strange Loop Games Company/Eco/screenshot_1.jpg",  alt: "Eco — civilization",  type: "screenshot" },
        { src: "./Assets/Strange Loop Games Company/Eco/screenshot_3.jpg",  alt: "Eco — ecosystem",     type: "screenshot" },
        { src: "./Assets/Strange Loop Games Company/Eco/screenshot_5.jpg",  alt: "Eco — town building", type: "screenshot" },
        { src: "./Assets/Strange Loop Games Company/Eco/screenshot_7.jpg",  alt: "Eco — environment",   type: "screenshot" },
        { src: "./Assets/Strange Loop Games Company/Eco/screenshot_10.jpg", alt: "Eco — multiplayer",   type: "screenshot" },
      ],
      link:        "https://play.eco",
      tags:        ["C#", ".NET", "Unity", "DOTS", "Azure", "CosmosDB", "React", "Jenkins", "enet", "Open Source"],
      featured:    true,
      accentColor: "#4ade80",
    },

    /* ── NHL 20 (second) ────────────────────────────────────── */
    {
      id:          "nhl20",
      title:       "NHL 20",
      subtitle:    "EA SPORTS · AAA Ice Hockey",
      year:        "2018–2019",
      role:        "Fullstack Game Developer",
      company:     "Globant (for EA Sports)",
      description: "EA's flagship ice hockey simulation for PlayStation and Xbox. " +
                   "Most advanced skating physics and gameplay in franchise history at release. " +
                   "Worked in a 20+ person team shipping to millions of players.",
      contributions: [
        "Shipped a new game mode — from design through QA to release",
        "Developed UI systems in Lua and ActionScript; contributed gameplay fixes in C++",
        "Refactored the UI framework on own initiative — faster to build, fewer production bugs",
        "Contributed to the C++ data delivery layer that feeds all in-game interfaces",
      ],
      images: [
        { src: "./Assets/Globant company/NHL-20/Screenshot 1.PNG", alt: "NHL 20 — gameplay",  type: "screenshot" },
        { src: "./Assets/Globant company/NHL-20/Screenshot 2.PNG", alt: "NHL 20 — game mode", type: "screenshot" },
      ],
      link:        "https://www.ea.com/games/nhl/nhl-20",
      tags:        ["C++", "Lua", "ActionScript", "Unity", "AAA", "PlayStation", "Xbox"],
      featured:    true,
      accentColor: "#3b82f6",
    },

    /* ── GODFORGE (third) ───────────────────────────────────── */
    {
      id:          "godforge",
      title:       "Godforge",
      subtitle:    "Cross-Platform Hero Collector RPG",
      year:        "2025–2026",
      role:        "Unity Lead Developer",
      company:     "Ironbelly (for Fateless)",
      description: "A cross-platform hero collector RPG with 250+ heroes, deep equipment systems, " +
                   "guilds, and competitive multiplayer. Built on Unity with a full Azure/PlayFab backend. " +
                   "Recognized by the client multiple times for architecture decisions that unblocked the team.",
      contributions: [
        "Built core systems from scratch: config, inventory, buy/sell, and hero summoning",
        "Designed Addressables setup with a 'load essentials first' strategy — dramatically faster cold start",
        "Set up automated tests and CI/CD pipelines; improved deployment reliability",
        "Led architecture from Ironbelly's side — investigated the hardest problems, attended 'fire' incidents",
        "Integrated PlayFab (inventory, guilds, user data) and Azure Anonymous Functions",
        "Heavy optimization across the Unity client for smooth cross-platform performance",
        "Recognized multiple times by the client for architecture proposals that saved significant rework",
      ],
      images: [
        { src: "./Assets/Ironbelly Company/GDF/IMG-2-GODFORGE-1024x576.webp", alt: "Godforge — hero roster",  type: "screenshot" },
        { src: "./Assets/Ironbelly Company/GDF/IMG-4-GODFORGE-1024x576.webp", alt: "Godforge — combat scene", type: "screenshot" },
      ],
      link:        "https://www.fateless.gg/",
      tags:        ["Unity", "C#", "PlayFab", "Azure", "Addressables", "CI/CD", "RPG"],
      featured:    true,
      accentColor: "#ef4444",
    },

    /* ── 2025 ─────────────────────────────────────────────── */
    {
      id:          "eggbert",
      title:       "Eggbert",
      subtitle:    "Companion Idle Clicker · Keeper of Secrets",
      year:        "2025",
      role:        "Unity Developer",
      company:     "Ironbelly",
      description: "A companion idle clicker for Keeper of Secrets — earn cross-game bonuses through daily play. " +
                   "Full store, daily quests, special offers, and a layered rewards system backed by Azure.",
      contributions: [
        "Designed the core idle loop and multi-tier reward system",
        "Built store mechanics, daily quests, and limited-time special offers",
        "Integrated cross-game bonuses with Keeper of Secrets via Azure backend",
        "Participated in production incident response and sprint planning",
      ],
      images: [
        { src: "./Assets/Ironbelly Company/Eggbert/Screenshot 1.PNG", alt: "Eggbert — main screen",  type: "screenshot" },
        { src: "./Assets/Ironbelly Company/Eggbert/Screenshot 2.PNG", alt: "Eggbert — store",        type: "screenshot" },
        { src: "./Assets/Ironbelly Company/Eggbert/Screenshot 3.PNG", alt: "Eggbert — daily quests", type: "screenshot" },
      ],
      link:        null,
      tags:        ["Unity", "C#", "Azure", "Idle Game", "Live Ops"],
      featured:    false,
      accentColor: "#fbbf24",
    },

    /* ── 2024 ─────────────────────────────────────────────── */
    {
      id:          "keeper-of-secrets",
      title:       "Keeper of Secrets",
      subtitle:    "Crypto Adventure / Puzzle · Sky Mavis",
      year:        "2024",
      role:        "Unity Tech Lead",
      company:     "Ironbelly",
      description: "An episodic crypto-integrated adventure/puzzle game on Sky Mavis. " +
                   "Live ops, daily quests, stealth mechanics, and in-game crypto payments — " +
                   "shipped on a tight schedule with a team of 4.",
      contributions: [
        "Built the inventory system, minimap, and stealth mechanics entirely from scratch",
        "Identified a fundamental flaw in the weapon system — redesigned it, shipped the fix",
        "Implemented daily quests, crypto payment flow, and in-game store",
        "Set up CI/CD pipelines; optimised multiple performance-critical systems",
        "Led a team of 4 developers; drove key game design decisions",
      ],
      images: [
        { src: "./Assets/Ironbelly Company/Keeper of Secrets/Screenshot 1.PNG", alt: "Keeper of Secrets — gameplay",    type: "screenshot" },
        { src: "./Assets/Ironbelly Company/Keeper of Secrets/Screenshot 2.PNG", alt: "Keeper of Secrets — world scene", type: "screenshot" },
      ],
      link:        "https://hub.skymavis.com/games/tribesters-ko-s",
      tags:        ["Unity", "C#", "Beamable", "Azure", "Crypto", "Live Ops", "CI/CD"],
      featured:    false,
      accentColor: "#f59e0b",
    },

    {
      id:          "ar-medical",
      title:       "AR Medical Platform",
      subtitle:    "Healthcare Augmented Reality · DigiLens",
      year:        "2024",
      role:        "Senior XR Developer",
      company:     "Effective Soft",
      description: "AR system on DigiLens smart glasses for US hospitals — notifies nurses in real time " +
                   "about new lab results and orders, integrated with live hospital infrastructure. " +
                   "Built from scratch, architected for critical-care latency requirements.",
      contributions: [
        "Architected and built the full application from scratch in Unity and C#",
        "Integrated DigiLens AR glasses with live hospital systems using SignalR",
        "Implemented voice activation powered by Azure Cognitive Services",
        "Optimised the rendering pipeline to meet strict latency requirements for clinical use",
      ],
      images: [
        { src: "./Assets/Effective Soft Company/Healthcare/Screenshot 1.png",             alt: "AR Medical — interface",  type: "screenshot" },
        { src: "./Assets/Effective Soft Company/Healthcare/MicrosoftTeams-image (7).png", alt: "AR Medical — device view", type: "screenshot" },
      ],
      link:        "https://www.digilens.com/",
      tags:        ["Unity", "C#", "AR", "DigiLens", "Azure", "SignalR", "Voice AI", "Healthcare"],
      featured:    false,
      accentColor: "#60a5fa",
    },

    /* ── 2019–2020 ────────────────────────────────────────── */
    {
      id:          "oculus-qa",
      title:       "Oculus Rift QA Platform",
      subtitle:    "Internal Validation Tool · Meta — NDA",
      year:        "2019–2020",
      role:        "Senior Game Developer",
      company:     "Globant (for Meta)",
      description: "Internal tool used by Meta's QA engineers to validate all functionality " +
                   "of Oculus Rift headsets before production release. Sole developer. " +
                   "No screenshots — NDA.",
      contributions: [
        "Sole developer of a QA validation platform used by Meta's hardware engineering team",
        "Built comprehensive test coverage for every Oculus Rift hardware subsystem",
        "Iterated directly with QA engineers to match evolving validation requirements",
      ],
      images: [],
      link:        null,
      tags:        ["Unity", "C#", "VR", "Oculus", "Internal Tools", "QA"],
      featured:    false,
      accentColor: "#818cf8",
    },

    /* ── 2018 ─────────────────────────────────────────────── */
    {
      id:          "hoa",
      title:       "Heroes of Arkanoid",
      subtitle:    "Arkanoid / RPG Hybrid · Android",
      year:        "2018",
      role:        "Sole Developer & Publisher",
      company:     "ZSG (Indie)",
      description: "An arkanoid/RPG mashup where players choose from 3 hero classes, " +
                   "cast spells, and fight through 4 locations on a journey from Hell to Heaven. " +
                   "Designed, built, and published solo.",
      contributions: [
        "Designed the full game — mechanics, progression, and level structure",
        "Built 3 hero classes each with unique stats, spells, and passive bonuses",
        "Created 4 hand-crafted locations with unique interactive blocks and enemies",
        "Published and managed the game independently on Google Play",
      ],
      images: [
        { src: "./Assets/ZSG company/HOA/screen-1.webp", alt: "Heroes of Arkanoid — gameplay",   type: "screenshot" },
        { src: "./Assets/ZSG company/HOA/screen-3.webp", alt: "Heroes of Arkanoid — spell cast", type: "screenshot" },
        { src: "./Assets/ZSG company/HOA/screen-5.webp", alt: "Heroes of Arkanoid — boss",       type: "screenshot" },
        { src: "./Assets/ZSG company/HOA/screen-6.webp", alt: "Heroes of Arkanoid — character",  type: "screenshot" },
      ],
      link:        "https://apkpure.com/heroes-of-arkanoid-hoa/com.ZST.ArcaHero",
      tags:        ["Unity", "C#", "Android", "RPG", "Physics"],
      featured:    false,
      accentColor: "#fb923c",
    },

    /* ── 2017 ─────────────────────────────────────────────── */
    {
      id:          "accurate-eye",
      title:       "Accurate Eye",
      subtitle:    "Eye Trainer · Android",
      year:        "2017",
      role:        "Sole Developer & Publisher",
      company:     "ZSG (Indie)",
      description: "An eye-training app with precision and reaction exercises, " +
                   "global leaderboards, and two exercise variants per challenge. " +
                   "Published on Google Play.",
      contributions: [
        "Designed and built all exercises targeting visual accuracy and reaction speed",
        "Implemented global leaderboard and score-tracking system",
        "Built a polished UI-heavy experience optimised for touch",
      ],
      images: [
        { src: "./Assets/ZSG company/AccurateEye/screen-0 (1).webp", alt: "Accurate Eye — exercise", type: "screenshot" },
        { src: "./Assets/ZSG company/AccurateEye/screen-7.webp",      alt: "Accurate Eye — results",  type: "screenshot" },
      ],
      link:        "https://apkpure.com/eye-trainer/gri.ZSG.Glazomer",
      tags:        ["Unity", "C#", "Android", "UI"],
      featured:    false,
      accentColor: "#34d399",
    },

    /* ── 2016 ─────────────────────────────────────────────── */
    {
      id:          "air-hockey",
      title:       "Air Hockey",
      subtitle:    "Local Multiplayer · Android",
      year:        "2016",
      role:        "Sole Developer",
      company:     "ZSG (Indie)",
      description: "Two-player air hockey on a single device, with shader-generated procedural graphics. " +
                   "The technique was written up in a technical article on Habr.",
      contributions: [
        "Built the full game solo including physics, input, and UI",
        "Generated all table visuals procedurally using custom GLSL shaders",
        "Published a technical article on the shader approach — received coverage on Habr",
      ],
      images: [
        { src: "./Assets/ZSG company/AirHockey/AirHockey.jpg",   alt: "Air Hockey — gameplay",    type: "screenshot" },
        { src: "./Assets/ZSG company/AirHockey/Airhockey 2.jpg", alt: "Air Hockey — split-screen", type: "screenshot" },
      ],
      link:        "https://habr.com/ru/articles/335454/",
      tags:        ["Unity", "C#", "GLSL", "Shaders", "Android"],
      featured:    false,
      accentColor: "#38bdf8",
    },

    {
      id:          "magic-orbs",
      title:       "Magic Orbs",
      subtitle:    "Match-3 Puzzle · Android",
      year:        "2016",
      role:        "Sole Developer & Publisher",
      company:     "ZSG (Indie)",
      description: "A colorful match-3 mobile game with a magic-themed bonus system and 50 handcrafted levels. " +
                   "First published game — designed, coded, and shipped solo.",
      contributions: [
        "Built the complete game solo — design, code, art integration, and publishing",
        "Implemented a magic power-up system layered on top of the match-3 core",
        "Designed 50 levels with escalating difficulty and special mechanics",
      ],
      images: [
        { src: "./Assets/ZSG company/Magic Orbs/screen-0.webp", alt: "Magic Orbs — gameplay",     type: "screenshot" },
        { src: "./Assets/ZSG company/Magic Orbs/screen-1.webp", alt: "Magic Orbs — level select", type: "screenshot" },
        { src: "./Assets/ZSG company/Magic Orbs/screen-5.webp", alt: "Magic Orbs — bonus screen", type: "screenshot" },
      ],
      link:        "https://apkpure.com/magic-orbs-match-3/com.ZST.Lines",
      tags:        ["Unity", "C#", "Android", "Match-3"],
      featured:    false,
      accentColor: "#c084fc",
    },

  ],
};
