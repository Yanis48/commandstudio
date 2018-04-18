define( [ "codemirror", "codemirror/addon/mode/simple" ], function( CodeMirror ) {

  CodeMirror.defineSimpleMode( "commander", {
    start: [
      // Escaped characters
      { regex: /`.?/, token: "hr" },

      // Commander specific
      { regex: /(?:chain|include)\b/, token: "header", sol: true },
      { regex: /(\s*)(default|def|invert|marker|var|void)\b/, token: [ "quote", "header" ], sol: true },
      { regex: /(\s+)([01irc\?!]+)(:)/, token: [ null, "quote", "operator" ], sol: true },

      // Commander specific
      { regex: /\$\w+/, token: "variable" },
      { regex: /\^\w+/, token: "variable-2" },
      { regex: /\=\>.*/, token: "tag"},
      { regex: /\/\/.*/, token: "comment" },
      { regex: /\/\*/, token: "comment", next: "comment" },

      // Minecraft Specific
        // Selectors
      { regex: /@[aeprs]\b/, token: "string" },
        // Entities
      { regex: /(?:area_effect_cloud|armor_stand|arrow|bat|blaze|boat|cave_spider|chest_minecart|chicken|commandblock_minecart|cow|creeper|donkey|dragon_fireball|egg|elder_guardian|ender_crystal|ender_dragon|ender_pearl|enderman|endermite|evocation_fangs|evocation_illager|eye_of_ender_signal|falling_block|fireball|fireworks_rocket|furnace_minecart|ghast|giant|guardian|hopper_minecart|horse|husk|illusion_illager|item|item_frame|leash_knot|lightning_bolt|llama|llama_spit|magma_cube|minecart|mooshroom|mule|ocelot|painting|parrot|pig|polar_bear|potion|rabbit|sheep|shulker|shulker_bullet|silverfish|skeleton|skeleton_horse|slime|small_fireball|snowball|snowman|spawner_minecart|spectral_arrow|spider|squid|stray|tnt|tnt_minecart|vex|villager|villager_golem|vindication_illager|witch|wither|wither_skeleton|wither_skull|wolf|xp_bottle|xp_orb|zombie|zombie_horse|zombie_pigman|zombie_villager)\b/,
        token: "property" },
        // Blocks
      { regex: /(?:acacia_door|acacia_fence|acacia_fence_gate|acacia_stairs|activator_rail|air|anvil|barrier|beacon|bed|bedrock|beetroots|birch_door|birch_fence|birch_fence_gate|birch_stairs|black_glazed_terracotta|black_shulker_box|blue_glazed_terracotta|blue_shulker_box|bone_block|bookshelf|brewing_stand|brick_block|brick_stairs|brown_glazed_terracotta|brown_mushroom|brown_mushroom_block|brown_shulker_box|cactus|cake|carpet|carrots|cauldron|chain_command_block|chest|chorus_flower|chorus_plant|clay|coal_block|coal_ore|cobblestone|cobblestone_wall|cocoa|command_block|concrete|concrete_powder|crafting_table|cyan_glazed_terracotta|cyan_shulker_box|dark_oak_door|dark_oak_fence|dark_oak_fence_gate|dark_oak_stairs|daylight_detector|daylight_detector_inverted|deadbush|detector_rail|diamond_block|diamond_ore|dirt|dispenser|double_plant|double_stone_slab|double_stone_slab2|double_wooden_slab|dragon_egg|dropper|emerald_block|emerald_ore|enchanting_table|end_bricks|end_gateway|end_portal|end_portal_frame|end_rod|end_stone|ender_chest|farmland|fence|fence_gate|fire|flower_pot|flowing_lava|flowing_water|frosted_ice|furnace|glass|glass_pane|glowstone|gold_block|gold_ore|golden_rail|grass|grass_path|gravel|gray_glazed_terracotta|gray_shulker_box|green_glazed_terracotta|green_shulker_box|hardened_clay|hay_block|heavy_weighted_pressure_plate|hopper|ice|iron_bars|iron_block|iron_door|iron_ore|iron_trapdoor|jukebox|jungle_door|jungle_fence|jungle_fence_gate|jungle_stairs|ladder|lapis_block|lapis_ore|lava|leaves|leaves2|lever|light_blue_glazed_terracotta|light_blue_shulker_box|light_weighted_pressure_plate|lime_glazed_terracotta|lime_shulker_box|lit_furnace|lit_pumpkin|lit_redstone_lamp|lit_redstone_ore|log|log2|magenta_glazed_terracotta|magenta_shulker_box|magma|melon_block|melon_stem|mob_spawner|monster_egg|mossy_cobblestone|mycelium|nether_brick|nether_brick_fence|nether_brick_stairs|nether_wart|nether_wart_block|netherrack|noteblock|oak_stairs|observer|obsidian|orange_glazed_terracotta|orange_shulker_box|packed_ice|pink_glazed_terracotta|pink_shulker_box|piston|piston_extension|piston_head|planks|portal|potatoes|powered_comparator|powered_repeater|prismarine|pumpkin|pumpkin_stem|purple_glazed_terracotta|purple_shulker_box|purpur_block|purpur_double_slab|purpur_pillar|purpur_slab|purpur_stairs|quartz_block|quartz_ore|quartz_stairs|rail|red_flower|red_glazed_terracotta|red_mushroom|red_mushroom_block|red_nether_brick|red_sandstone|red_sandstone_stairs|red_shulker_box|redstone_block|redstone_lamp|redstone_ore|redstone_torch|redstone_wire|reeds|repeating_command_block|sand|sandstone|sandstone_stairs|sapling|sea_lantern|silver_glazed_terracotta|silver_shulker_box|skull|slime|snow|snow_layer|soul_sand|sponge|spruce_door|spruce_fence|spruce_fence_gate|spruce_stairs|stained_glass|stained_glass_pane|stained_hardened_clay|standing_banner|standing_sign|sticky_piston|stone|stone_brick_stairs|stone_button|stone_pressure_plate|stone_slab|stone_slab2|stone_stairs|stonebrick|structure_block|structure_void|tallgrass|tnt|torch|trapdoor|trapped_chest|tripwire|tripwire_hook|unlit_redstone_torch|unpowered_comparator|unpowered_repeater|vine|wall_banner|wall_sign|water|waterlily|web|wheat|white_glazed_terracotta|white_shulker_box|wooden_button|wooden_door|wooden_pressure_plate|wooden_slab|wool|yellow_flower|yellow_glazed_terracotta|yellow_shulker_box)\b/,
        token: "property" },
        // Items
      { regex: /(?:acacia_boat|acacia_door|acacia_fence|acacia_fence_gate|acacia_stairs|activator_rail|air|anvil|apple|armor_stand|arrow|baked_potato|banner|barrier|beacon|bed|bedrock|beef|beetroot|beetroot_seeds|beetroot_soup|birch_boat|birch_door|birch_fence|birch_fence_gate|birch_stairs|black_glazed_terracotta|black_shulker_box|blaze_powder|blaze_rod|blue_glazed_terracotta|blue_shulker_box|boat|bone|bone_block|book|bookshelf|bow|bowl|bread|brewing_stand|brick|brick_block|brick_stairs|brown_glazed_terracotta|brown_mushroom|brown_mushroom_block|brown_shulker_box|bucket|cactus|cake|carpet|carrot|carrot_on_a_stick|cauldron|chain_command_block|chainmail_boots|chainmail_chestplate|chainmail_helmet|chainmail_leggings|chest|chest_minecart|chicken|chorus_flower|chorus_fruit|chorus_fruit_popped|chorus_plant|clay|clay_ball|clock|coal|coal_block|coal_ore|cobblestone|cobblestone_wall|command_block|command_block_minecart|comparator|compass|concrete|concrete_powder|cooked_beef|cooked_chicken|cooked_fish|cooked_mutton|cooked_porkchop|cooked_rabbit|cookie|crafting_table|cyan_glazed_terracotta|cyan_shulker_box|dark_oak_boat|dark_oak_door|dark_oak_fence|dark_oak_fence_gate|dark_oak_stairs|daylight_detector|deadbush|detector_rail|diamond|diamond_axe|diamond_block|diamond_boots|diamond_chestplate|diamond_helmet|diamond_hoe|diamond_horse_armor|diamond_leggings|diamond_ore|diamond_pickaxe|diamond_shovel|diamond_sword|dirt|dispenser|double_plant|dragon_breath|dragon_egg|dropper|dye|egg|elytra|emerald|emerald_block|emerald_ore|enchanted_book|enchanting_table|end_bricks|end_crystal|end_portal_frame|end_rod|end_stone|ender_chest|ender_eye|ender_pearl|experience_bottle|farmland|feather|fence|fence_gate|fermented_spider_eye|filled_map|fire_charge|firework_charge|fireworks|fish|fishing_rod|flint|flint_and_steel|flower_pot|furnace|furnace_minecart|ghast_tear|glass|glass_bottle|glass_pane|glowstone|glowstone_dust|gold_block|gold_ingot|gold_nugget|gold_ore|golden_apple|golden_axe|golden_boots|golden_carrot|golden_chestplate|golden_helmet|golden_hoe|golden_horse_armor|golden_leggings|golden_pickaxe|golden_rail|golden_shovel|golden_sword|grass|grass_path|gravel|gray_glazed_terracotta|gray_shulker_box|green_glazed_terracotta|green_shulker_box|gunpowder|hardened_clay|hay_block|heavy_weighted_pressure_plate|hopper|hopper_minecart|ice|iron_axe|iron_bars|iron_block|iron_boots|iron_chestplate|iron_door|iron_helmet|iron_hoe|iron_horse_armor|iron_ingot|iron_leggings|iron_nugget|iron_ore|iron_pickaxe|iron_shovel|iron_sword|iron_trapdoor|item_frame|jukebox|jungle_boat|jungle_door|jungle_fence|jungle_fence_gate|jungle_stairs|knowledge_book|ladder|lapis_block|lapis_ore|lava_bucket|lead|leather|leather_boots|leather_chestplate|leather_helmet|leather_leggings|leaves|leaves2|lever|light_blue_glazed_terracotta|light_blue_shulker_box|light_weighted_pressure_plate|lime_glazed_terracotta|lime_shulker_box|lingering_potion|lit_pumpkin|log|log2|magenta_glazed_terracotta|magenta_shulker_box|magma|magma_cream|map|melon|melon_block|melon_seeds|milk_bucket|minecart|mob_spawner|monster_egg|mossy_cobblestone|mushroom_stew|mutton|mycelium|name_tag|nether_brick|nether_brick_fence|nether_brick_stairs|nether_star|nether_wart|nether_wart_block|netherbrick|netherrack|noteblock|oak_stairs|observer|obsidian|orange_glazed_terracotta|orange_shulker_box|packed_ice|painting|paper|pink_glazed_terracotta|pink_shulker_box|piston|planks|poisonous_potato|porkchop|potato|potion|prismarine|prismarine_crystals|prismarine_shard|pumpkin|pumpkin_pie|pumpkin_seeds|purple_glazed_terracotta|purple_shulker_box|purpur_block|purpur_pillar|purpur_slab|purpur_stairs|quartz|quartz_block|quartz_ore|quartz_stairs|rabbit|rabbit_foot|rabbit_hide|rabbit_stew|rail|record_11|record_13|record_blocks|record_cat|record_chirp|record_far|record_mall|record_mellohi|record_stal|record_strad|record_wait|record_ward|red_flower|red_glazed_terracotta|red_mushroom|red_mushroom_block|red_nether_brick|red_sandstone|red_sandstone_stairs|red_shulker_box|redstone|redstone_block|redstone_lamp|redstone_ore|redstone_torch|reeds|repeater|repeating_command_block|rotten_flesh|saddle|sand|sandstone|sandstone_stairs|sapling|sea_lantern|shears|shield|shulker_shell|sign|silver_glazed_terracotta|silver_shulker_box|skull|slime|slime_ball|snow|snow_layer|snowball|soul_sand|spawn_egg|speckled_melon|spectral_arrow|spider_eye|splash_potion|sponge|spruce_boat|spruce_door|spruce_fence|spruce_fence_gate|spruce_stairs|stained_glass|stained_glass_pane|stained_hardened_clay|stick|sticky_piston|stone|stone_axe|stone_brick_stairs|stone_button|stone_hoe|stone_pickaxe|stone_pressure_plate|stone_shovel|stone_slab|stone_slab2|stone_stairs|stone_sword|stonebrick|string|structure_block|structure_void|sugar|tallgrass|tipped_arrow|tnt|tnt_minecart|torch|totem_of_undying|trapdoor|trapped_chest|tripwire_hook|vine|water_bucket|waterlily|web|wheat|wheat_seeds|white_glazed_terracotta|white_shulker_box|wooden_axe|wooden_button|wooden_door|wooden_hoe|wooden_pickaxe|wooden_pressure_plate|wooden_shovel|wooden_slab|wooden_sword|wool|writable_book|written_book|yellow_flower|yellow_glazed_terracotta|yellow_shulker_box)\b/,
        token: "property" },
        // Commands
      { regex: /\/?(?:achievement|advancement|ban|ban-ip|banlist|blockdata|clear|clone|debug|defaultgamemode|deop|difficulty|effect|enchant|entitydata|execute|fill|function|gamemode|gamerule|give|help|kick|kill|list|locate|me|msg|op|pardon|pardon-ip|particle|playsound|recipe|reload|replaceitem|save-all|save-off|save-on|say|scoreboard|seed|setblock|setidletimeout|setworldspawn|spawnpoint|spreadplayers|stats|stop|stopsound|summon|teleport|tell|tellraw|testfor|testforblock|testforblocks|time|title|toggledownfall|tp|trigger|w|weather|whitelist|worldborder|xp)\b/i,
        token: "keyword" },
      
      // Minecraft Variables
      { regex: /(?:address|amount|amplifier|criterion|custom|dataValue|dataTag|duration|enchantmentLevel|maxCount|message|minutes|name|reason|seconds|value)\b/,
        token: "em" },
      { regex: /(?:displayName|objectiveName|tagName|teamName|triggerName)\b/,
        token: "em" },

      // Numbers
      { regex: /(?:~?-?(?:\.\d+|\d+\.?\d*)[bfs]?|~)/, token: "number" },

      // Ponctuation
      { regex: /[\[\]{}\(\)]/, token: "bracket" },
      { regex: /[\+-/*=%;:]/, token: "operator" },
      // { regex: /:$/, token: "operator", indent: true },

      // Pass
      { regex: /(?:\w+)/ }
    ],
    comment: [
    { regex: /.*?\*\//, token: "comment", next: "start" },
    { regex: /.*/, token: "comment" }
    ],
    meta: {
      dontIndentStates: [ "comment" ],
      lineComment: "//"
    }
  } );

} );
