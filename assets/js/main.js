(function(app) {
  app.init = function() {
    d3.csv("data/valveEvents.csv", convertColumns, (data) => {
      processData(data);
    })
  }

  // Set defaults on selected event and hero display
  app.selectedEvent = "The International 2013";
  app.toggleSort = false;
  app.selectedHero = "Anti-Mage";

  app.onEventChange = function () {
    let filteredData = app.filterByEvent(app.data, app.selectedEvent);
    app.updateEventInfo(filteredData)
    app.updateChart(filteredData);
  };

  app.formatName = function (heroName) {
    let formattedName = heroName.toLowerCase().replace(/ /g, "-");
    return formattedName;
  }

  app.filterByEvent = function (data, eventName) {
    return data.filter((data) => {
      return data.key === eventName
    })[0];
  }

  function processData(data) {
    app.data = sortData(data);
    app.renderUI();
    app.renderDetails();
    app.renderChart();
    app.onEventChange();
  }

  function sortData(data) {
     const nestedData = (
      d3.nest()
        .sortValues( (a, b) => {
          if (a.mainAttribute === b.mainAttribute) {
            return a.heroName < b.heroName ? -1 : a.heroName > b.heroName ? 1 : 0;
          } else {
            return a.mainAttriute < b.mainAttriute ? -1 : 1;
          }})
        .key( (data) => { return data.eventName })
        .entries(data));

    nestedData.forEach( (event) => {
      let totalNumHeroes = 113;
      let countPB = 113;
      let rate = 0;
      
      event.values.forEach( (hero) => {
        if (hero.pickBanRate === null) {
          totalNumHeroes -= 1;
          countPB -= 1;
        }
        if (hero.pickBanRate === 0) countPB -= 1;
        if (hero.pickBanRate !== null) rate += hero.pickBanRate;
      });

      event.total_heroes = totalNumHeroes;
      event.picked_banned_heroes = countPB;
      event.avg_pick_ban_rate = rate/totalNumHeroes;
      event.total_games = Math.round(event.values[0].numPickedBanned/event.values[0].pickBanRate*100);
    })

    let sortedData = nestedData.sort( (a,b) => {
      return app.EVENTS.indexOf(a.key) - app.EVENTS.indexOf(b.key);
    })

    return sortedData;
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
      winRate: parseFloat(data.win_rate)
    };
  }
}(window.app = window.app || {}));