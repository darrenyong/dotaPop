(function(app) {
  app.init = function() {
    d3.csv("data/valveEvents.csv", convertColumns, (data) => {
      processData(data);
    })
    console.log("This is working");
  }

  function processData(data) {
    app.data = sortData(data);
  }

  function sortData(data) {
    console.log(data);
     const nestedData = (
      d3.nest()
        .sortValues( (a, b) => {
          if (a.attribute === b.attribute) {
          return a.heroName < b.heroName ? -1 : a.heroName > b.heroName ? 1 : 0;
        } else {
          return a.attriute < b.attriute ? -1 : 1;
        }})
        .key( (d) => { return d.event })
        .entries(data));

    nestedData.forEach( (event) => {
      let totalNumHeroes = 113;
      let countPB = 113;
      let rate = 0;
      
      event.values.forEach( (hero) => {
        if (hero.pick_ban_rate === null) {
          totalNumHeroes -= 1;
          countPB -= 1;
        }
        if (hero.pick_ban_rate === 0) countPB -= 1;
        if (hero.pick_ban_rate !== null) rate += hero.pick_ban_rate;
      });

      event.total_heroes = totalNumHeroes;
      event.picked_banned_heroes = countPB;
      event.ave_pick_ban_rate = rate/totalNumHeroes;
      event.total_games = Math.round(event.values[0].no_picks_ban/event.values[0].pick_ban_rate*100);
    })
  }

  function convertColumns(data) {
    return {
      // Basic Hero Info
      eventName: data.event,
      heroName: data.hero,
      mainAttribute: data.attribute,
      
      // Pick and Ban Info
      numPicked: +data.no_picks,
      numBanned: +data.no_bans,
      numPickedBanned: +data.no_picks_bans,
      pickRate: data.pick_rate === '' ? null : parseFloat(data.pick_rate),
      banRate: data.ban_rate === '' ? null : parseFloat(data.ban_rate),
      pickBanRate: data.pick_ban_rate === '' ? null : parseFloat(data.pick_ban_rate),
      
      // Win Rate Info
      win_rate: parseFloat(data.win_rate)
    };
  }

}(window.app = window.app || {}));