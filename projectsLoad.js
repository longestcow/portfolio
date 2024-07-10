const projectsData = [
  {
    "name": "Robotic Hand",
    "year": 2024,
    "status": "finished",
    "desc": "computer vision controlled robotic hand",
    "lang": ["c++", "python"],
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
    "name": "3D Cellular Automata",
    "year": 2024,
    "status": "finished",
    "desc": "cellular automata + new dimension",
    "lang": ["p5js"],
    "links": ["https://longestcow.github.io/3DGameOfLife/"]
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
    "lang": ["Unity"],
    "links": ["https://long-cow.itch.io/subterranaut"]
  },
  {
    "name": "GravityGuys",
    "year": 2023,
    "status": "finished",
    "desc": "made in 48 hours for saskatoon game jam",
    "lang": ["Unity"],
    "links": ["https://aeonshaka.itch.io/gravity-bros"]
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
    "links": ["https://github.com/longestcow/portfolio"]
  },
  {
    "name": "connect4",
    "year": 2023,
    "status": "unfinished",
    "desc": "its connect4 but uh you can't win",
    "lang": ["java"],
    "links": ["https://github.com/longestcow/connect4"]
  },
  {
    "name": "MemesUploader",
    "year": 2023,
    "status": "unfinished",
    "desc": "automating creation and upload of meme compilations",
    "lang": ["java"],
    "links": ["https://github.com/longestcow/MemesUploader"]
  },
  {
    "name": "titato",
    "year": 2023,
    "status": "finished",
    "desc": "its tictactoe but uh you can't win",
    "lang": ["java", "unity"],
    "links": ["https://github.com/longestcow/titato"]
  },
  {
    "name": "platformer",
    "year": 2022,
    "status": "unfinished",
    "desc": "its a platformer",
    "lang": ["unity"],
    "links": ["https://github.com/longestcow/platformer"]
  },
  {
    "name": "platform fighter",
    "year": 2023,
    "status": "unfinished",
    "desc": "i made this for a school project",
    "lang": ["unity"],
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
    mainCard.appendChild(cardBody);

    var title = createELM("p", "card-title cardComp", "margin-bottom:15px", "");
    var titleLink = createELM("a", "pLink", "", projInfo["name"]);
    titleLink.href = projInfo["links"][0];
    titleLink.target = "_blank";
    title.appendChild(titleLink);
    cardBody.appendChild(title);

    var yearStatus = createELM("p", "card-subtitle mb-2 text-body-secondary cardComp", "font-size:0.85em;margin-bottom:5px", projInfo["year"] + " - " + projInfo["status"])
    cardBody.appendChild(yearStatus);

    var desc = createELM("p", "card-text cardComp", "font-size:0.8em;color:#999999;margin-bottom:8px", projInfo["desc"])
    cardBody.appendChild(desc);
    var curText = "";
    for (var j = 0; j < projInfo["lang"].length; j++) {
      if (j != 0) {
        curText += "<span style='color:white'>, </span>";
      }
      curText += projInfo["lang"][j];
    }

    var langs = createELM("p", "card-text cardComp", "font-size:0.8em;color:#FE4773;margin-bottom:5px", curText);

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
