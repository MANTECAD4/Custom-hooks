export type PokeAPI = {
    abilities?:                Ability[] | null;
    base_experience?:          number | null;
    cries?:                    Cries | null;
    forms?:                    Species[] | null;
    game_indices?:             GameIndex[] | null;
    height?:                   number | null;
    held_items?:               HeldItem[] | null;
    id:                       number;
    is_default?:               boolean | null;
    location_area_encounters?: string | null;
    moves?:                    Move[] | null;
    name:                     string;
    order?:                    number | null;
    past_abilities?:           PastAbility[] | null;
    past_types?:               any[] | null;
    species?:                  Species | null;
    sprites:                  {front_default:string};
    stats?:                    Stat[] | null;
    types?:                    Type[] | null;
    weight?:                   number | null;
}

export type Ability = {
    ability:   Species | null;
    is_hidden: boolean;
    slot:      number;
}

export type Species = {
    name: string;
    url:  string;
}

export type Cries = {
    latest: string;
    legacy: string;
}

export type GameIndex = {
    game_index: number;
    version:    Species;
}

export type HeldItem = {
    item:            Species;
    version_details: VersionDetail[];
}

export type VersionDetail = {
    rarity:  number;
    version: Species;
}

export type Move = {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

export type VersionGroupDetail = {
    level_learned_at:  number;
    move_learn_method: Species;
    order:             null;
    version_group:     Species;
}

export type PastAbility = {
    abilities:  Ability[];
    generation: Species;
}

export type GenerationV = {
    "black-white": Sprites;
}

export type GenerationIv = {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export type Versions = {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: Home };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export type Other = {
    dream_world:        DreamWorld;
    home:               Home;
    "official-artwork": OfficialArtwork;
    showdown:           Sprites;
}

export type Sprites = {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export type GenerationI = {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export type RedBlue = {
    back_default:      string;
    back_gray:         string;
    back_transparent:  string;
    front_default:     string;
    front_gray:        string;
    front_transparent: string;
}

export type GenerationIi = {
    crystal: Crystal;
    gold:    Gold;
    silver:  Gold;
}

export type Crystal = {
    back_default:            string;
    back_shiny:              string;
    back_shiny_transparent:  string;
    back_transparent:        string;
    front_default:           string;
    front_shiny:             string;
    front_shiny_transparent: string;
    front_transparent:       string;
}

export type Gold = {
    back_default:       string;
    back_shiny:         string;
    front_default:      string;
    front_shiny:        string;
    front_transparent?: string;
}

export type GenerationIii = {
    emerald:             OfficialArtwork;
    "firered-leafgreen": Gold;
    "ruby-sapphire":     Gold;
}

export type OfficialArtwork = {
    front_default: string;
    front_shiny:   string;
}

export type Home = {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
}

export type GenerationVii = {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

export type DreamWorld = {
    front_default: string;
    front_female:  null;
}

export type GenerationViii = {
    icons: DreamWorld;
}

export type Stat = {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export type Type = {
    slot: number;
    type: Species;
}
