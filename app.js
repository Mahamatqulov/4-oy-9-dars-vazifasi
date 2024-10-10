const teams = [
  {
    name: "FC Barcelona",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1024px-FC_Barcelona.svg.png",
    stadium: {
      name: "Camp Nou 🏟️",
      capacity: 99354,
    },
    history:
      "Founded in 1899 🏆, FC Barcelona is one of the most successful clubs in European football history. Known for its attacking style of play and world-class players.",
    top_scorer: {
      name: "Lionel Messi 🐐",
      goals: "672 ⚽",
    },
    trophies: {
      LaLiga: "27 🏆",
      "UEFA Champions League": "5 🏆",
      "Copa del Rey": "31 🏆",
      "UEFA Super Cup": "5 🏆",
      "FIFA Club World Cup": "3 🏆",
    },
    manager: "Xavi Hernandez 👨‍⚖️",
    founded: "1899 🏅",
    city: "Barcelona, Spain 🌍",
    colors: ["Blue 🔵", "Red 🔴"],
    rivalries: ["Real Madrid ⚔️", "Espanyol ⚔️"],
    owner: "Club members (Socios) 🤝",
    kit: "https://www.soccerlord.se/wp-content/uploads/2018/09/Barcelona-Home-Long-Sleeve-Football-Shirt-24-25.jpg",
    id: 1,
  },
  {
    name: "Real Madrid CF",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/FC_Real_Madrid_Logo.svg/800px-FC_Real_Madrid_Logo.svg.png",
    stadium: {
      name: "Santiago Bernabéu 🏟️",
      capacity: 81044,
    },
    history:
      "Founded in 1902 🏆, Real Madrid is one of the most popular and successful football clubs in the world. The club is known for its strong European success.",
    top_scorer: {
      name: "Cristiano Ronaldo 🐐",
      goals: "450 ⚽",
    },
    trophies: {
      LaLiga: "36 🏆",
      "UEFA Champions League": "15 🏆",
      "Copa del Rey": "20 🏆",
      "UEFA Super Cup": "5 🏆",
      "FIFA Club World Cup": "4 🏆",
    },
    manager: "Carlo Ancelotti 👨‍⚖️",
    founded: "1902 🏅",
    city: "Madrid, Spain 🌍",
    colors: ["White ⚪️"],
    rivalries: ["FC Barcelona ⚔️", "Atlético Madrid ⚔️"],
    owner: "Club members (Socios) 🤝",
    kit: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0195-01-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=50",
    id: 2,
  },
  {
    name: "Manchester United FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/1024px-Manchester_United_FC_crest.svg.png",
    stadium: {
      name: "Old Trafford 🏟️",
      capacity: 74879,
    },
    history:
      "Founded in 1878 🏆, Manchester United is one of the most successful English clubs with a rich history. Known for their iconic 'Class of '92'.",
    top_scorer: {
      name: "Wayne Rooney 🐐",
      goals: "253 ⚽",
    },
    trophies: {
      "Premier League": "20 🏆",
      "UEFA Champions League": "3 🏆",
      "FA Cup": "12 🏆",
      "EFL Cup": "5 🏆",
      "FIFA Club World Cup": "1 🏆",
    },
    manager: "Erik ten Hag 👨‍⚖️",
    founded: "1878 🏅",
    city: "Manchester, England 🌍",
    colors: ["Red 🔴", "White ⚪️"],
    rivalries: ["Manchester City ⚔️", "Liverpool ⚔️"],
    owner: "Glazer Family 🤝",
    kit: "https://footballcentral.co.nz/cdn/shop/files/ManchesterUnitedAdultHomeJersey2425_f4291c4c-0af5-4df2-b0c2-3329ccda5461_700x700.jpg?v=1720014868",
    id: 3,
  },
  {
    name: "Liverpool FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/FC_Liverpool.svg/800px-FC_Liverpool.svg.png",
    stadium: {
      name: "Anfield 🏟️",
      capacity: 53394,
    },
    history:
      "Founded in 1892 🏆, Liverpool FC is one of the most decorated English clubs. The team is known for its passionate fans and 'You'll Never Walk Alone' anthem.",
    top_scorer: {
      name: "Ian Rush 🐐",
      goals: "346 ⚽",
    },
    trophies: {
      "Premier League": "19 🏆",
      "UEFA Champions League": "6 🏆",
      "FA Cup": "8 🏆",
      "EFL Cup": "9 🏆",
      "FIFA Club World Cup": "1 🏆",
    },
    manager: "Jürgen Klopp 👨‍⚖️",
    founded: "1892 🏅",
    city: "Liverpool, England 🌍",
    colors: ["Red 🔴"],
    rivalries: ["Manchester United ⚔️", "Everton ⚔️"],
    owner: "Fenway Sports Group 🤝",
    kit: "https://www.soccerlord.se/wp-content/uploads/2019/04/Liverpool-Home-Football-Shirt-24-25.jpg",
    id: 4,
  },
  {
    name: "Bayern Munich",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    stadium: {
      name: "Allianz Arena 🏟️",
      capacity: 75000,
    },
    history:
      "Founded in 1900 🏆, Bayern Munich is the most successful German club, known for its dominance in the Bundesliga and European success.",
    top_scorer: {
      name: "Gerd Müller 🐐",
      goals: "566 ⚽",
    },
    trophies: {
      Bundesliga: "33 🏆",
      "UEFA Champions League": "6 🏆",
      "DFB-Pokal": "20 🏆",
      "UEFA Super Cup": "2 🏆",
      "FIFA Club World Cup": "2 🏆",
    },
    manager: "Thomas Tuchel 👨‍⚖️",
    founded: "1900 🏅",
    city: "Munich, Germany 🌍",
    colors: ["Red 🔴", "White ⚪️"],
    rivalries: ["Borussia Dortmund ⚔️"],
    owner: "Club members (75%) and Audi, Adidas, Allianz (25%) 🤝",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPPdc08vo_BG3uAjNcfsi5IF1D4oJUu2EfRgcCxhGEc4RhUh_273PcrEhvjjuPhXqPRG1P0bXOGLJj98Lp4PdtKuC-pYuhugrmBabyuEWW8cMGCq-kSf4wwvPOIwwV0I0X3q0NZJS1atuInA79o4XTj9dRP3yCwH7-XNViUcmjzgXSdo_qrCxg7msUyLgz/s1000/bayern%2024-25%20home%20kit%20red%20white%20%283%29.jpg",
    id: 5,
  },
  {
    name: "Paris Saint-Germain",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1024px-Paris_Saint-Germain_F.C..svg.png",
    stadium: {
      name: "Parc des Princes 🏟️",
      capacity: 47929,
    },
    history:
      "Founded in 1970 🏆, Paris Saint-Germain (PSG) is one of the most successful French clubs, especially in the recent decade.",
    top_scorer: {
      name: "Edinson Cavani 🐐",
      goals: "200 ⚽",
    },
    trophies: {
      "Ligue 1": "11 🏆",
      "Coupe de France": "14 🏆",
      "Coupe de la Ligue": "9 🏆",
      "Trophée des Champions": "11 🏆",
    },
    manager: "Luis Enrique 👨‍⚖️",
    founded: "1970 🏅",
    city: "Paris, France 🌍",
    colors: ["Blue 🔵", "Red 🔴"],
    rivalries: ["Marseille ⚔️"],
    owner: "Qatar Sports Investments 🤝",
    kit: "https://images.footballfanatics.com/paris-saint-germain/psg-nike-home-stadium-shirt-2024-25_ss5_p-200827669+pv-2+u-zsehjrrtq4aszhqrqd0f+v-gfgancmusfnavrx7ghgz.jpg?_hv=2&w=900",
    id: 6,
  },
  {
    name: "Juventus FC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg/800px-Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg.png",
    stadium: {
      name: "Allianz Stadium 🏟️",
      capacity: 41507,
    },
    history:
      "Founded in 1897 🏆, Juventus is the most successful Italian club, known for its success in Serie A and notable players like Alessandro Del Piero.",
    top_scorer: {
      name: "Alessandro Del Piero 🐐",
      goals: "290 ⚽",
    },
    trophies: {
      "Serie A": "36 🏆",
      "Coppa Italia": "14 🏆",
      "UEFA Champions League": "2 🏆",
      "UEFA Europa League": "3 🏆",
      "Supercoppa Italiana": "9 🏆",
    },
    manager: "Massimiliano Allegri 👨‍⚖️",
    founded: "1897 🏅",
    city: "Turin, Italy 🌍",
    colors: ["Black ⚫", "White ⚪️"],
    rivalries: ["Inter Milan ⚔️", "AC Milan ⚔️"],
    owner: "Agnelli Family (Exor N.V.) 🤝",
    kit: "https://store.juventus.com/images/juventus/products/large/JU24E81_1.webp",
    id: 7,
  },
  {
    name: "Manchester City FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/96/Manchester_City_FC.svg/1024px-Manchester_City_FC.svg.png",
    stadium: {
      name: "Etihad Stadium 🏟️",
      capacity: 53400,
    },
    history:
      "Founded in 1880 🏆, Manchester City became a major force in English football in the 2010s with the backing of the Abu Dhabi United Group.",
    top_scorer: {
      name: "Sergio Agüero 🐐",
      goals: "260 ⚽",
    },
    trophies: {
      "Premier League": "9 🏆",
      "FA Cup": "6 🏆",
      "EFL Cup": "8 🏆",
      "UEFA Champions League": "1 🏆",
    },
    manager: "Pep Guardiola 👨‍⚖️",
    founded: "1880 🏅",
    city: "Manchester, England 🌍",
    colors: ["Sky Blue 🔵", "White ⚪️"],
    rivalries: ["Manchester United ⚔️"],
    owner: "City Football Group 🤝",
    kit: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw887b23ea/images/large/701230876001_pp_01_mcfc.png?sw=800&sh=800&sm=fit",
    id: 8,
  },
  {
    name: "Chelsea FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1024px-FC_Chelsea_Logo.svg.png",
    stadium: {
      name: "Stamford Bridge 🏟️",
      capacity: 41837,
    },
    history:
      "Founded in 1905 🏆, Chelsea became a major force in English football in the 2000s after being purchased by Roman Abramovich.",
    top_scorer: {
      name: "Frank Lampard 🐐",
      goals: "211 ⚽",
    },
    trophies: {
      "Premier League": "6 🏆",
      "UEFA Champions League": "2 🏆",
      "FA Cup": "8 🏆",
      "EFL Cup": "5 🏆",
      "UEFA Europa League": "2 🏆",
    },
    manager: "Mauricio Pochettino 👨‍⚖️",
    founded: "1905 🏅",
    city: "London, England 🌍",
    colors: ["Blue 🔵", "White ⚪️"],
    rivalries: ["Arsenal ⚔️", "Tottenham ⚔️"],
    owner: "Clearlake Capital (Todd Boehly consortium) 🤝",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixQ6nlTxrwxSOZvnsV404erKG0WnKXUGZCwrfuiyT_IDoCByIIGPQMksgiPIioaF-IqcRxMpnco6kiYYG5kwK2ZucMQ4_WZo-yg3XS62rPOjv3eXz-ubIgWa9UJ5LMdVQhECvGjWcPDFS2-BBDsELqbvce-c4D3hU0UOUwgBVhCaSmUmHcyA1phkHhAoXo/s1600/chelsea%2024%2025%20kit%20%288%29.jpg",
    id: 9,
  },
  {
    name: "AC Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/800px-Logo_of_AC_Milan.svg.png",
    stadium: {
      name: "San Siro 🏟️",
      capacity: 80018,
    },
    history:
      "Founded in 1899 🏆, AC Milan is one of the most successful Italian clubs, known for its European success in the 1990s.",
    top_scorer: {
      name: "Gunnar Nordahl 🐐",
      goals: "221 ⚽",
    },
    trophies: {
      "Serie A": "19 🏆",
      "UEFA Champions League": "7 🏆",
      "Coppa Italia": "5 🏆",
      "UEFA Super Cup": "5 🏆",
      "FIFA Club World Cup": "1 🏆",
    },
    manager: "Stefano Pioli 👨‍⚖️",
    founded: "1899 🏅",
    city: "Milan, Italy 🌍",
    colors: ["Red 🔴", "Black ⚫"],
    rivalries: ["Inter Milan ⚔️"],
    owner: "RedBird Capital Partners 🤝",
    kit: "https://store.acmilan.com/cdn/shop/files/774949-A81_01_2738c450-dc7c-49a3-a94f-92f287d6bd98_grande.jpg?v=1716443193",
    id: 10,
  },
  {
    name: "Atlético Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/0/01/FC_Atletico_Madrid_Logo.svg/800px-FC_Atletico_Madrid_Logo.svg.png",
    stadium: {
      name: "Wanda Metropolitano 🏟️",
      capacity: 68456,
    },
    history:
      "Founded in 1903 🏆, Atlético Madrid is known for its resilient defense and passionate supporters. One of the most successful Spanish clubs.",
    top_scorer: {
      name: "Luis Aragonés 🐐",
      goals: "172 ⚽",
    },
    trophies: {
      LaLiga: "11 🏆",
      "UEFA Europa League": "3 🏆",
      "Copa del Rey": "10 🏆",
      "UEFA Super Cup": "3 🏆",
      "Intercontinental Cup": "1 🏆",
    },
    manager: "Diego Simeone 👨‍⚖️",
    founded: "1903 🏅",
    city: "Madrid, Spain 🌍",
    colors: ["Red 🔴", "White ⚪️"],
    rivalries: ["Real Madrid ⚔️"],
    owner: "Miguel Ángel Gil Marín 🤝",
    kit: "https://shop.atleticodemadrid.com/on/demandware.static/-/Sites-atm-master-catalog/default/dw1b391709/FN8790-406.jpg",
    id: 11,
  },
  {
    name: "Inter Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1024px-FC_Internazionale_Milano_2021.svg.png",
    stadium: {
      name: "San Siro 🏟️",
      capacity: 80018,
    },
    history:
      "Founded in 1908 🏆, Inter Milan is one of the most successful Italian clubs, known for its rivalry with AC Milan and its European triumphs.",
    top_scorer: {
      name: "Giuseppe Meazza 🐐",
      goals: "284 ⚽",
    },
    trophies: {
      "Serie A": "19 🏆",
      "UEFA Champions League": "3 🏆",
      "Coppa Italia": "9 🏆",
      "Supercoppa Italiana": "7 🏆",
      "FIFA Club World Cup": "1 🏆",
    },
    manager: "Simone Inzaghi 👨‍⚖️",
    founded: "1908 🏅",
    city: "Milan, Italy 🌍",
    colors: ["Black ⚫", "Blue 🔵"],
    rivalries: ["AC Milan ⚔️"],
    owner: "Suning Holdings Group 🤝",
    kit: "https://shop.inter.it/on/demandware.static/-/Sites-inter-master-catalog/default/dwc4e254c1/images/large/2024-25_MH.jpg",
    id: 12,
  },
  {
    name: "Ajax Amsterdam",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/79/Ajax_Amsterdam.svg/1024px-Ajax_Amsterdam.svg.png",
    stadium: {
      name: "Johan Cruyff Arena 🏟️",
      capacity: 55000,
    },
    history:
      "Founded in 1900 🏆, Ajax is the most successful Dutch club, known for its youth academy and 'Total Football' philosophy.",
    top_scorer: {
      name: "Piet van Reenen 🐐",
      goals: "273 ⚽",
    },
    trophies: {
      Eredivisie: "36 🏆",
      "UEFA Champions League": "4 🏆",
      "KNVB Cup": "20 🏆",
      "UEFA Super Cup": "3 🏆",
      "Intercontinental Cup": "2 🏆",
    },
    manager: "Maurice Steijn 👨‍⚖️",
    founded: "1900 🏅",
    city: "Amsterdam, Netherlands 🌍",
    colors: ["Red 🔴", "White ⚪️"],
    rivalries: ["PSV Eindhoven ⚔️"],
    owner: "Publicly Traded (Euronext) 🤝",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLdzCSW2G0AKixHbFZMK52l42Ov8wzB7lD2aIvJ5BgZeU5ngzZXe07h6r5_GDRwjzFI3T-Ldp-gGEVcVaCK4GwmR9FzeVhc_BR8L1AmQQT0rDdcfIwlAznmuLgsS-gKUxQA2Jmb_79whhV_-CCWk9VFI0uI2sfvZLK4XszmE_yfB3XGUnyXBt7KisyRzY/s1600/ajax-24-25-home-kit%20%282%29.jpg",
    id: 13,
  },
  {
    name: "Borussia Dortmund",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    stadium: {
      name: "Signal Iduna Park 🏟️",
      capacity: 81365,
    },
    history:
      "Founded in 1909 🏆, Borussia Dortmund is known for its passionate fans and attacking football. The club has a rich history in German football.",
    top_scorer: {
      name: "Alfred Preissler 🐐",
      goals: "177 ⚽",
    },
    trophies: {
      Bundesliga: "8 🏆",
      "DFB-Pokal": "5 🏆",
      "UEFA Champions League": "1 🏆",
      "DFL-Supercup": "6 🏆",
      "UEFA Europa League": "1 🏆",
    },
    manager: "Edin Terzić 👨‍⚖️",
    founded: "1909 🏅",
    city: "Dortmund, Germany 🌍",
    colors: ["Yellow 🟡", "Black ⚫"],
    rivalries: ["Bayern Munich ⚔️"],
    owner: "Borussia Dortmund GmbH & Co. KGaA 🤝",
    kit: "https://www.bvbonlineshop.com/media/image/a6/26/2f/83912-1b73527656435_600x600.jpg",
    id: 14,
  },
  {
    name: "Tottenham Hotspur FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Tottenham_Hotspur.svg/800px-Tottenham_Hotspur.svg.png",
    stadium: {
      name: "Tottenham Hotspur Stadium 🏟️",
      capacity: 62850,
    },
    history:
      "Founded in 1882 🏆, Tottenham Hotspur is a prominent English club, known for its attacking football and fierce rivalry with Arsenal.",
    top_scorer: {
      name: "Harry Kane 🐐",
      goals: "280 ⚽",
    },
    trophies: {
      "Premier League": "2 🏆",
      "FA Cup": "8 🏆",
      "EFL Cup": "4 🏆",
      "UEFA Europa League": "2 🏆",
    },
    manager: "Ange Postecoglou 👨‍⚖️",
    founded: "1882 🏅",
    city: "London, England 🌍",
    colors: ["White ⚪️", "Blue 🔵"],
    rivalries: ["Arsenal ⚔️", "Chelsea ⚔️"],
    owner: "ENIC Group 🤝",
    kit: "https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/original/products/15481/31904/YHSS24_NK_STADIUM_SS_SHIRT_1__08677.1718195503.jpg?c=1",
    id: 15,
  },
  {
    name: "AS Roma",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/AS_Roma_logo_%282017%29.svg/800px-AS_Roma_logo_%282017%29.svg.png",
    stadium: {
      name: "Stadio Olimpico 🏟️",
      capacity: 72698,
    },
    history:
      "Founded in 1927 🏆, AS Roma is a historic club from Italy, known for its passionate fanbase and rivalry with Lazio.",
    top_scorer: {
      name: "Francesco Totti 🐐",
      goals: "307 ⚽",
    },
    trophies: {
      "Serie A": "3 🏆",
      "Coppa Italia": "9 🏆",
      "Supercoppa Italiana": "2 🏆",
      "UEFA Europa Conference League": "1 🏆",
    },
    manager: "José Mourinho 👨‍⚖️",
    founded: "1927 🏅",
    city: "Rome, Italy 🌍",
    colors: ["Red 🔴", "Yellow 🟡"],
    rivalries: ["Lazio ⚔️"],
    owner: "The Friedkin Group 🤝",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK6poyhh4YXS98ZibwYSiNalbQroD3tEvxI9dvK2UvKtuMRt9GH1xavt75Vp3H4uNUjBdNaclMbuSb7FHcfqaar4HuQJqd0cB62ZtAteY4At1GN43xMDLObf2eYt6hdCA5BYjE_xGJ__UCdSHBVJ6Lj3KCecD91KV7iHfJ5Bj1HSiqy5NGAt90XPzJ7gs/s1600/as-roma-24-25-home-kit%20%289%29.jpg",
    id: 16,
  },
  {
    name: "SL Benfica",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6a/SL_Benfica_Logo.svg/1024px-SL_Benfica_Logo.svg.png",
    stadium: {
      name: "Estádio da Luz 🏟️",
      capacity: 64642,
    },
    history:
      "Founded in 1904 🏆, SL Benfica is the most successful club in Portugal, known for its dominance in the Primeira Liga.",
    top_scorer: {
      name: "Eusébio 🐐",
      goals: "473 ⚽",
    },
    trophies: {
      "Primeira Liga": "38 🏆",
      "Taça de Portugal": "26 🏆",
      "UEFA Champions League": "2 🏆",
      "Taça da Liga": "7 🏆",
      "Supertaça Cândido de Oliveira": "8 🏆",
    },
    manager: "Roger Schmidt 👨‍⚖️",
    founded: "1904 🏅",
    city: "Lisbon, Portugal 🌍",
    colors: ["Red 🔴", "White ⚪️"],
    rivalries: ["Sporting CP ⚔️", "Porto ⚔️"],
    owner: "Club members (Socios) 🤝",
    id: 17,
  },
  {
    name: "Porto FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f1/FC_Porto.svg/800px-FC_Porto.svg.png",
    stadium: {
      name: "Estádio do Dragão 🏟️",
      capacity: 50033,
    },
    history:
      "Founded in 1893 🏆, Porto FC is one of Portugal’s 'Big Three' clubs and has achieved great success domestically and in European competitions.",
    top_scorer: {
      name: "Fernando Gomes 🐐",
      goals: "355 ⚽",
    },
    trophies: {
      "Primeira Liga": "30 🏆",
      "Taça de Portugal": "19 🏆",
      "UEFA Champions League": "2 🏆",
      "Taça da Liga": "2 🏆",
      "Supertaça Cândido de Oliveira": "23 🏆",
    },
    manager: "Sérgio Conceição 👨‍⚖️",
    founded: "1893 🏅",
    city: "Porto, Portugal 🌍",
    colors: ["Blue 🔵", "White ⚪️"],
    rivalries: ["Benfica ⚔️", "Sporting CP ⚔️"],
    owner: "Club members (Socios) 🤝",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhOXfrVqUm_wpfWFvvorYHog1IsrBNExPOjWY7BfQ-zqTK30mPIQy5EjNDZIct1oOcMHSajZRhiNkId5KUA7NMUzpohi0Axe7UjXw7SFK863oKuY0DtzLUuGMvMf9IRoZM7Y3Ur4E4U7ot-6l7brrEv1yuccuu7T2rtpn8IQlxAaLmHb1u71jo7VsllgQ/s1000/benfica-24-25-home-kit%20%282%29.jpg",
    id: 18,
  },
  {
    name: "Lazio",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/FC_Lazio_Logo.svg/1024px-FC_Lazio_Logo.svg.png",
    stadium: {
      name: "Stadio Olimpico 🏟️",
      capacity: 72698,
    },
    history:
      "Founded in 1900 🏆, Lazio is one of Italy’s oldest and most historic clubs, with a fierce rivalry with AS Roma.",
    top_scorer: {
      name: "Ciro Immobile 🐐",
      goals: "195 ⚽",
    },
    trophies: {
      "Serie A": "2 🏆",
      "Coppa Italia": "7 🏆",
      "Supercoppa Italiana": "5 🏆",
      "UEFA Super Cup": "1 🏆",
      "UEFA Europa League": "1 🏆",
    },
    manager: "Maurizio Sarri 👨‍⚖️",
    founded: "1900 🏅",
    city: "Rome, Italy 🌍",
    colors: ["Sky Blue 🔵", "White ⚪️"],
    rivalries: ["AS Roma ⚔️"],
    owner: "Claudio Lotito 🤝",
    kit: "https://www.laziostylestore.com/images/lazio/products/large/LZ24A01.webp",
    id: 19,
  },
  {
    name: "Napoli",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg/1200px-SSC_Napoli_2024_%28deep_blue_navy%29.svg.png",
    stadium: {
      name: "Stadio Diego Armando Maradona 🏟️",
      capacity: 54726,
    },
    history:
      "Founded in 1926 🏆, Napoli is one of Italy's most iconic clubs, known for its passionate fan base and historic success, particularly during the Maradona era.",
    top_scorer: {
      name: "Dries Mertens 🐐",
      goals: "148 ⚽",
    },
    trophies: {
      "Serie A": "3 🏆",
      "Coppa Italia": "6 🏆",
      "Supercoppa Italiana": "2 🏆",
      "UEFA Cup": "1 🏆",
    },
    manager: "Rudi Garcia 👨‍⚖️",
    founded: "1926 🏅",
    city: "Naples, Italy 🌍",
    colors: ["Sky Blue 🔵", "White ⚪️"],
    rivalries: ["Juventus ⚔️", "AS Roma ⚔️"],
    owner: "Aurelio De Laurentiis 🤝",
    kit: "https://sc01.alicdn.com/kf/H23133b5c82d244cd82653390b7f5a1b3s.jpg",
    id: 20,
  },
];

//Real Madrid jamoasi haqida
// function askAboutClub(question, teamName) {
//   const team = teams.find((t) => t.name === teamName);
//   if (!team) return `Team ${teamName} not found.`;

//   return team[question] || "Question not recognized.";
// }

// const managerResult = askAboutClub("manager", "Real Madrid CF");
// console.log(managerResult);

// const topScorerResult = askAboutClub("top_scorer", "Real Madrid CF");
// console.log(topScorerResult);

// const stadiumResult = askAboutClub("stadium", "Real Madrid CF");
// console.log(stadiumResult);

// const trophiesResult = askAboutClub("trophies", "Real Madrid CF");
// console.log(trophiesResult);

// const foundedResult = askAboutClub("founded", "Real Madrid CF");
// console.log(foundedResult);

// const cityResult = askAboutClub("city", "Real Madrid CF");
// console.log(cityResult);

// const result = teams.map((team) => {
//   const change =
//     !team.name.includes("FC") &&
//     !team.name.includes("CF") &&
//     !team.name.includes("AC") &&
//     !team.name.includes("AS") &&
//     !team.name.includes("SL");
//   return change ? (team.name += " FC") : team.name;
// });
// console.log(result);

// const result = teams.map((team) => {
//   const change =
//     !team.name.includes("FC") &&
//     !team.name.includes("CF") &&
//     !team.name.includes("AC") &&
//     !team.name.includes("AS") &&
//     !team.name.includes("SL");
//   return change ? { ...team, name: (team.name += " FC") } : team;
// });
// console.log(result);
//   o'z jamoasi tarixida eng ko'p gol urgan futbolchilar
// const result = teams.map((team) => {
//   return {
//     teamName: team.name,
//     beatScorer: team.top_scorer.name,
//     goals: team.top_scorer.goals,
//   };
// });
// console.log(result);

function askAboutClub(teamName) {
  const team = teams.find(
    (teams) => teams.name.toLowerCase() === teamName.toLowerCase()
  );

  if (!team) return `Jamoa "${teamName}" topilmadi.`;

  const {
    name,
    image,
    stadium: { name: stadiumName, capacity },
    history,
    top_scorer: { name: scorerName, goals },
    trophies,
    manager,
    founded,
    city,
    colors,
  } = team;

  return `
      Jamoa Nomi: ${name}
      Jamoa Logosi: ${image}
      Stadion: ${stadiumName}
      Muxlislar sig'imi: ${capacity}
      Jamoa Tarix: ${history}
      Eng yaxshi to'purari: ${scorerName} (${goals})
      Yutuqlar: ${JSON.stringify(trophies, null, 2)}
      Murabbiyi: ${manager}
      Tashlik topgan yil: ${founded}
      Qaysi shaharda: ${city}
      Jamoaning an-anaviy Rangi: ${colors.join(", ")}
    `.trim();
}

let teamName = prompt("Jamoa nomini kiriting (masalan, Real Madrid CF):");
let natija = askAboutClub(teamName);
console.log(natija);
