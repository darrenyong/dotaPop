(function(app) {
  app.data = {};

  // List heroes by main attribute
  app.HERO_LIST = [
    {
      "attribute" : "Strength",
      "heroes": [
                  "Abaddon",
                  "Alchemist",
                  "Axe",
                  "Beastmaster",
                  "Brewmaster",
                  "BristleBack",
                  "Centaur Warrunner",
                  "Chaos Knight",
                  "Clockwerk",
                  "Doom",
                  "Dragon Knight",
                  "Earth Spirit",
                  "Earthshaker",
                  "Elder Titan",
                  "Huskar",
                  "Io",
                  "Kunkka",
                  "Legion Commander",
                  "Lifestealer",
                  "Lycan",
                  "Magnus",
                  "Mars",
                  "Night Stalker",
                  "Omniknight",
                  "Phoenix",
                  "Pudge",
                  "Sand King",
                  "Slardar",
                  "Spirit Breaker",
                  "Sven",
                  "TideHunter",
                  "Timbersaw",
                  "Tiny",
                  "Treant Protector",
                  "Tusk",
                  "Underlord",
                  "Undying",
                  "Wraith King"
                ]
    },
    {
      "attribute": "Agility",
      "heroes": [
                  "Anti-Mage",
                  "Arc Warden",
                  "Bloodseeker",
                  "Bounty Hunter",
                  "Broodmother",
                  "Clinkz",
                  "Drow Ranger",
                  "Ember Spirit",
                  "Faceless Void",
                  "Gyrocopter",
                  "Juggernaut",
                  "Lone Druid",
                  "Luna",
                  "Medusa",
                  "Meepo",
                  "Mirana",
                  "Monkey King",
                  "Morphling",
                  "Naga Siren",
                  "Nyx Assassin",
                  "Pangolier",
                  "Phantom Assassin",
                  "Phantom Lancer",
                  "Razor",
                  "Riki",
                  "Shadow Fiend",
                  "Slark",
                  "Sniper",
                  "Spectre",
                  "Templar Assassin",
                  "Terrorblade",
                  "Troll Warlord",
                  "Ursa",
                  "Vengeful Spirit",
                  "Venomancer",
                  "Viper",
                  "Weaver"
                ]
    },
    {
      "attribute": "Intelligence",
      "heroes": [
                  "Ancient Apparition",
                  "Bane",
                  "Batrider",
                  "Chen",
                  "Crystal Maiden",
                  "Dark Seer",
                  "Dark Willow",
                  "Dazzle",
                  "Death Prophet",
                  "Disruptor",
                  "Enchantress",
                  "Enigma",
                  "Grimstroke",
                  "Invoker",
                  "Jakiro",
                  "Keeper of the Light",
                  "Leshrac",
                  "Lich",
                  "Lina",
                  "Lion",
                  "Nature's Prophet",
                  "Necrophos",
                  "Ogre Magi",
                  "Oracle",
                  "Outworld Devourer",
                  "Puck",
                  "Pugna",
                  "Queen of Pain",
                  "Rubick",
                  "Shadow Demon",
                  "Shadow Shaman",
                  "Silencer",
                  "Skywrath Mage",
                  "Storm Spirit",
                  "Techies",
                  "Tinker",
                  "Visage",
                  "Warlock",
                  "Windranger",
                  "Winter Wyvern",
                  "Witch Doctor",
                  "Zeus"
                ]
    }
  ];

  // List events
  app.VALVE_EVENTS = [
                      {event: "The International 2013", date: "2013-08-02"},
                      {event: "The International 2014", date: "2014-07-08"},
                      {event: "The International 2015", date: "2015-07-27"},
                      {event: "The Frankfurt Major 2015", date: "2015-11-13"},
                      {event: "The Shanghai Major 2016", date: "2016-02-25"},
                      {event: "The Manila Major 2016", date: "2016-06-03"},
                      {event: "The International 2016", date: "2016-08-02"},
                      {event: "The Boston Major 2016", date: "2016-12-03"},
                      {event: "The Kiev Major 2017", date: "2017-04-27"},
                      {event: "The International 2017", date: "2017-08-02"},
                      {event: "The Bucharest Major 2018", date: "2018-03-04"},
                      {event: "The International 2018", date: "2018-08-15"}
                     ];
  
  app.EVENTS = app.VALVE_EVENTS.map( (data) => { return data.event });
}(window.app = window.app || {}));