(function(app) {
  app.init = function() {
    d3.csv("data/valveEvents.csv", convertColumns, function(data) {
      processData(data);
    })
    console.log("This is working");
  }

  function processData(data) {
    app.data = sortData(data);
  }

  function sortData(data) {
     const nestedData = (
      d3.nest()
        .sortValues(function(a, b) {
          if (a.attribute === b.attribute) {
          return a.heroName < b.heroName ? -1 : a.heroName > b.heroName ? 1 : 0;
        } else {
          return a.attriute < b.attriute ? -1 : 1;
        }})
        .key(function(d) { return d.event })
        .entries(data));

    nestedData.forEach(function(event) {
      let totalNumHeroes = 113;
      let countPB = 113;
      let rate = 0;
      
      event.values.forEach(function(hero) {
        if (hero.pick_ban_rate === null) {
          total -= 1;
          count -= 1;
        }
        if (hero.pick_ban_rate === 0) count -= 1;
        if (hero.pick_ban_rate !== null) rate += hero.pick_ban_rate;
      });

      event.total_heroes = total;
      event.picked_banned_heroes = count;
      event.ave_pick_ban_rate = rate/total;
      event.total_games = Math.round(event.values[0].no_picks_ban/event.values[0].pick_ban_rate*100);
    })
  }

  function convertColumns(data) {
    return {
      // Basic Hero Info
      event: data.event,
      heroName: data.heroName,
      attribute: data.attribute,
      
      // Pick and Ban Info
      pick_rate: data.pick_rate === '' ? null : parseFloat(data.pick_rate),
      ban_rate: data.ban_rate === '' ? null : parseFloat(data.ban_rate),
      pick_ban_rate: data.pick_ban_rate === '' ? null : parseFloat(data.pick_ban_rate),
      no_picks_bans: +data.no_picks_bans,
      no_bans: +data.no_bans,
      no_picks: +data.no_picks,
      
      // Win Rate Info
      win_rate: parseFloat(data.win_rate)
    };
  }

}(window.app = window.app || {}));