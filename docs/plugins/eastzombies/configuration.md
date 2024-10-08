# 🧟 EastZombies

## Configuration

```yml title="EastZombies/config.yml"
# EastZombies by EastRane

# Language for the plugin.
# Available options are located in the 'languages' folder within the plugin directory.
language: en_US

# If true, a title will be displayed to all players when a new day begins
broadcast_day: true

player:
  # If true, players' skins will change to zombie skins when they become zombies.
  # You need SkinsRestorer plugin for this feature to work.
  # Changing this option requires a server restart.
  change_skin: true
  # If true, all players (both human and zombie players) will drop their heads upon death.
  drop_head: true
  # If true, players will respawn at their death location when they first die and become a zombie.
  # Also, their bed respawn location (set as a human) will be reset.
  reset_respawn_on_first_death: true
  flesh:
    # If true, zombie players will drop rotten flesh upon death.
    drop_flesh: true
    # The amount of rotten flesh dropped.
    amount: 4
  # Effects applied to zombie players.
  effects:
    enabled: true
    list:
      # List of available effects: https://jd.papermc.io/paper/1.20.4/org/bukkit/potion/PotionEffectType.html
      # Duration in ticks (-1 is infinite).
      - effect: NIGHT_VISION
        amplifier: 0
        duration: -1
      - effect: SLOW_DIGGING
        amplifier: 0
        duration: -1
  # These commands won't be available to zombie players.
  restricted_commands:
    - skinsrestorer
    - sr
    - skin
    - skins

features:
  target:
    # If true, hostile mobs will not target zombie players.
    enabled: true
    # The day on which this feature activates.
    start_day: 2
    # If true, the feature activates at 19:00 on start_day; if false, it activates at 06:00.
    at_night: false
  flesh:
    # If true, the hunger effect from eating rotten flesh will be removed.
    enabled: true
    # The day on which this feature activates.
    start_day: 4
    # If true, the feature activates at 19:00 on start_day; if false, it activates at 06:00.
    at_night: false
  sun_burn:
    # If true, zombie players will take damage from sunlight.
    enabled: true
    # The day on which this feature activates.
    start_day: 6
    # If true, the feature activates at 19:00 on start_day; if false, it activates at 06:00.
    at_night: true
    # Damage in half-hearts that zombie players take from sunlight.
    damage: 4
  hunger:
    # If true, zombie players' attacks will give hunger effect to human players.
    enabled: true
    # The day on which this feature activates.
    start_day: 8
    # If true, the feature activates at 19:00 on start_day; if false, it activates at 06:00.
    at_night: false
    # Duration of the hunger effect in ticks.
    duration: 300
  golems:
    # If true, iron golems will attack zombie players.
    enabled: true
    # The day on which this feature activates.
    start_day: 12
    # If true, the feature activates at 19:00 on start_day; if false, it activates at 06:00.
    at_night: false
  zombie_compass:
    # If true, zombie compass recipe will be available.
    enabled: true
    # The day on which this feature activates.
    start_day: 13
    # If true, the feature activates at 19:00 on start_day; if false, it activates at 06:00.
    at_night: false
    # Cooldown time in ticks for zombie compass use. Set to 0 to allow unrestricted use.
    # Changing this option requires a server restart.
    cooldown: 300
    # Crafting recipe for the zombie compass.
    # List of available materials: https://jd.papermc.io/paper/1.20.4/org/bukkit/Material.html
    recipe:
      first_row: 'DIAMOND SPIDER_EYE DIAMOND'
      second_row: 'ROTTEN_FLESH COMPASS ROTTEN_FLESH'
      third_row: 'DIAMOND SPIDER_EYE DIAMOND'

debug:
  # If true, debug messages will be logged to the console.
  console: false
  # If true, debug messages will be written to the debug.yml file.
  file: false
```