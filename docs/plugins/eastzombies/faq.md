# 🧟 EastZombies

## FAQ (Frequently Asked Questions)

:::question How do I start the event?
Use the command /ez start. The following will happen:
- The game day will be set to zero.
- Players won't be able to skip the night using beds.
- The day and night cycle will resume (if you had disabled it).
- A world border will be set (if you specified a radius in the config).
- All zombies (if there were any) will become human again.
- All players will join their voice chat groups (if you're using Simple Voice Chat).
:::

:::question How do you turn a player into a zombie? 
When a human player dies, they automatically join the zombie team. This transformation is permanent for the duration of the game.
:::

:::question Does the plugin support The Nether and The End?
At the moment, no. The plugin is designed to work only in the Overworld. Players are expected to have access only to the Overworld during the event.
:::

:::question What can I customize in the plugin?
Almost everything. The plugin offers extensive customization options:

- Enable or disable specific features
- Change the activation day for different features
- Toggle player head drops
- Enable rotten flesh drops from zombies
- Modify effects given to zombies
- Restrict certain commands for zombies
- And much more, see [Configuration](configuration)
:::

:::question I'm having issues with SkinsRestorer. What should I do?
This problem can occur if you're working in an environment with a proxy server. 

You need to disable SkinsRestorer on the proxy-server side (Velocity etc) and create a file "disableProxyMode.txt" in the SkinsRestorer folder on the Paper-server side.
:::