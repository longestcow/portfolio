const projectsData = [
  {
    "name": "Hexapod",
    "year": 2025,
    "status": "in development",
    "desc": "cool 6-legged robot",
    "lang": ["arduino (c++), unity (c#), inventor"],
    "links": ["https://github.com/longestcow/hexapod"]
  },
  {
    "name": "pill dispenser",
    "year": 2026,
    "status": "finished",
    "desc": "apsc 171 final project",
    "lang": ["arduino (c++), solidworks"],
    "links": ["https://youtu.be/NyqUwpdmJ5w?si=SAIx2Uo4ZxgKSwk7"]
  },
  {
    "name": "sumobot v2",
    "year": 2025,
    "status": "finished",
    "desc": "made (again) for SaskPolytech robot rumble",
    "lang": ["arduino (c++), inventor"],
    "links": ["https://github.com/longestcow/sumobotV2"]
  },
  {
    "name": "electric screwdriver",
    "year": 2025,
    "status": "finished",
    "desc": "side quest while making the strandbeest",
    "lang": ["inventor"],
    "links": ["https://github.com/longestcow/screwdriver"]

  },
  {
    "name": "particle life",
    "year": 2025,
    "status": "finished",
    "desc": "life-like patterns emerging from particles",
    "lang": ["unity (c#)"],
    "links": ["https://github.com/longestcow/particleLife"]
  },
  {
    "name": "strandbeest",
    "year": 2025,
    "status": "kinda finished",
    "desc": "organic looking linkage mechanism",
    "lang": ["inventor"],
    "links": ["https://github.com/longestcow/strandbeest"]
  },
  {
    "name": "scribrawl",
    "year": 2025,
    "status": "prototype",
    "desc": "online pvp game about scribbling and brawling",
    "lang": ["unity (c#)"],
    "links": ["https://github.com/longestcow/scribrawl/"]
  },
  {
    "name": "Lab-Rat",
    "year": 2024,
    "status": "finished",
    "desc": "made in 2 days for saskatoon game jam",
    "lang": ["unity (c#)"],
    "links": ["https://long-cow.itch.io/lab-rat"]
  },
  {
    "name": "Pop-purr",
    "year": 2024,
    "status": "finished",
    "desc": "made in 2 days for WTFxIGDC jam",
    "lang": ["unity (c#)"],
    "links": ["https://long-cow.itch.io/poppurr"]
  },
  {
    "name": "Robotic Hand",
    "year": 2024,
    "status": "finished",
    "desc": "computer vision controlled robotic hand",
    "lang": ["arduino (c++)", "python"],
    "links": ["https://github.com/longestcow/roboticHand"]
  },
  {
    "name": "Outer Wilds",
    "year": 2024,
    "status": "finished",
    "desc": "3d physics n-body simulation",
    "lang": ["p5js"],
    "links": ["https://longestcow.github.io/OuterWilds"]
  },
  {
    "name": "Polemos",
    "year": 2024,
    "status": "demo available",
    "desc": "online multiplayer fighting game",
    "lang": ["unity (c#)"],
    "links": ["https://long-cow.itch.io/polemos"]
  },
  {
    "name": "3D Cellular Automata",
    "year": 2024,
    "status": "finished",
    "desc": "cellular automata + new dimension",
    "lang": ["p5js"],
    "links": ["https://longestcow.github.io/3DGameOfLife/"]
  },
  {
    "name": "Sumobot",
    "year": 2024,
    "status": "finished",
    "desc": "made for SaskPolytechnic robot rumble",
    "lang": ["arduino (c++), inventor"],
    "links": ["https://github.com/longestcow/sumobot"]
  },
  {
    "name": "WFC - Tubes",
    "year": 2023,
    "status": "finished",
    "desc": "wave function collapse with tubes",
    "lang": ["p5js"],
    "links": ["https://longestcow.github.io/WaveFunctionCollapse/WFCTubes/"]
  },
  {
    "name": "WFC - Islands",
    "year": 2023,
    "status": "finished",
    "desc": "wave function collapse with islands",
    "lang": ["p5js"],
    "links": ["https://longestcow.github.io/WaveFunctionCollapse/WFCIslands/"]
  },
  {
    "name": "Subterranaut",
    "year": 2023,
    "status": "finished",
    "desc": "made in 3 days for Jame Gam #34",
    "lang": ["unity (c#)"],
    "links": ["https://long-cow.itch.io/subterranaut"]
  },
  {
    "name": "evolution",
    "year": 2023,
    "status": "finished",
    "desc": "simulation of genetic evolution",
    "lang": ["java"],
    "links": ["https://github.com/longestcow/Evolution"]
  },
  {
    "name": "this site",
    "year": 2023,
    "status": "finished",
    "desc": "literally this site",
    "lang": ["html", "js", "css"],
    "links": ["https://longestcow.github.io/portfolio/"]
  },
  {
    "name": "connect4",
    "year": 2023,
    "status": "finished",
    "desc": "its connect4 but you can't win",
    "lang": ["java"],
    "links": ["https://github.com/longestcow/connect4"]
  },
  {
    "name": "MemesUploader",
    "year": 2023,
    "status": "finished",
    "desc": "automating creation and upload of meme compilations",
    "lang": ["java"],
    "links": ["https://github.com/longestcow/MemesUploader"]
  },
  {
    "name": "titato",
    "year": 2023,
    "status": "finished",
    "desc": "its tictactoe but you can't win",
    "lang": ["java", "unity (c#)"],
    "links": ["https://github.com/longestcow/titato"]
  },
  {
    "name": "platformer",
    "year": 2022,
    "status": "demo available",
    "desc": "first major game dev project",
    "lang": ["unity (c#)"],
    "links": ["https://long-cow.itch.io/platformer"]
  },
  {
    "name": "platform fighter",
    "year": 2023,
    "status": "demo available",
    "desc": "game inspried by smash",
    "lang": ["unity (c#)"],
    "links": ["https://github.com/longestcow/platformFighter"]
  },
  {
    "name": "mirror reflection",
    "year": 2023,
    "status": "finished",
    "desc": "light mirror collision simulation",
    "lang": ["java"],
    "links": ["https://github.com/longestcow/MirrorReflection"]
  },
  {
    "name": "omogodot's GOL",
    "year": 2022,
    "status": "finished",
    "desc": "cellular automata",
    "lang": ["java"],
    "links": ["https://github.com/longestcow/GameOfLife"]
  }
]

addProjects = function() {
  var container = document.getElementById("cardsHolder");
  for (var i = 0; i < projectsData.length; i++) {
    let projInfo = projectsData[i];
    var mainCard = document.createElement("div");
    mainCard.className = 'card mainCard';
    var cardBody = document.createElement("div");
    cardBody.className = 'card-body';
    cardBody.style="padding: 0.85vw;"
    mainCard.appendChild(cardBody);

    var title = createELM("p", "card-title cardComp", "margin-bottom:0.8vw; font-size:0.85vw", "");
    var titleLink = createELM("a", "pLink", "", projInfo["name"]);
    titleLink.href = projInfo["links"][0];
    titleLink.target = "_blank";
    title.appendChild(titleLink);
    cardBody.appendChild(title);

    var yearStatus = createELM("p", "card-subtitle text-body-secondary cardComp", "font-size:0.7vw;margin-bottom:0.4vw;", projInfo["year"] + " - " + projInfo["status"])
    cardBody.appendChild(yearStatus);

    var desc = createELM("p", "card-text cardComp", "font-size:0.65vw;color:#999999;margin-bottom:0.5vw;", projInfo["desc"])
    cardBody.appendChild(desc);
    var curText = "";
    for (var j = 0; j < projInfo["lang"].length; j++) {
      if (j != 0) {
        curText += "<span style='color:white'>, </span>";
      }
      curText += projInfo["lang"][j];
    }

    var langs = createELM("p", "card-text cardComp", "font-size:0.65vw;color:#FE4773", curText);

    cardBody.appendChild(langs);

    container.appendChild(mainCard);
    console.log(projInfo["name"] + ": " + projInfo["year"] + " - " + projInfo["status"] + ", '" + projInfo["desc"] + "', " + projInfo["lang"] + ", " + projInfo["links"]);

  }
}

function createELM(type, classN, style, inner) {
  var newELM = document.createElement(type);
  newELM.className = classN;
  newELM.style = style;
  newELM.innerHTML = inner;

  return newELM;
}
