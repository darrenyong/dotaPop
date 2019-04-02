(function(e) {
  app.init = function() {
    d3.csv("data/valveEvents.csv", convertColumns, function(data) {
      console.log(data);
    })
    console.log("This is working");
  }

  function convertColumns(data) {
    return {
      // Basic Hero Info
      event: data.event,
      hero: data.hero,
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