import { check_player_name, check_tournament_name } from "./index";

export const get_player_info = async (page_num:number, player_name:string, tournament:string, game:string) => {
  const get_player_name = async () => {
    const tournament_player_list = Array(page_num).fill(undefined);
    const get_tournament_player_list = tournament_player_list.map(async (url, i) => {
      const target_url = `https://cors-anywhere.herokuapp.com/https://api.smash.gg/tournament/${tournament.split(" ").join("-")}`;
      const tail_end_url = `/event/${check_tournament_name(game)}/standings?entityType=event&expand[]=entrants&mutations[]=playerData&mutations[]=standingLosses&page=${i}&per_page=100`;      
      const get_url = await fetch(target_url + tail_end_url);
      const get_json = await get_url.json();
      const gamer_tag = get_json.items.entities.entrants.map((name:{mutations:{participants:any[]}}) => {
        return Object.values(name.mutations.participants)[0].gamerTag;
      }) 
      .filter((obj:string) => check_player_name(obj) === check_player_name(player_name));
      return gamer_tag.length === 0 ? "Player Not Found!" : gamer_tag[0];
    });
    return get_tournament_player_list[0];
  }
  return get_player_name();
}
  