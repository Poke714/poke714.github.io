function refresh() {
    var options = {
        valueNames: ["pp", "player", "map", "mods", "acc", "rank", "status", "date"],
        item: "<tr><td></td><td class='pp'></td><td class='player'></td><td class='map'></td><td class='mods'><td class='acc'></td><td class='rank'></td><td class='status'></td><td class='date'></td></tr>"
    };

    var list = new List("plays", options, values);
    
    list.sort("pp", { order: "desc" });
    
    // TODO rank alphabet = "SABCD"
    // TODO button to filter touchscreen plays (http://listjs.com/api/#filter)
}
