const Discord = require("discord.js");


module.exports = {
 name: ["dare"],
 aliases: ['d'],
 run: async(client, message, args) => {

const user = message.mentions.users.first() || message.author

const dare = [
'Be blindfolded and then tickled for a minute.',
'Turn out the lights and try to turn the other person on only using sounds.',
'You get to dress your partner up, using your clothes. Then draw a picture.',
'You have to call one of your partner’s parents and tell them how much you love your partner.',
'Sing "The Star-Spangled Banner" in a British accent while hula hooping.',
'Do a sexy dance for your partner, but you can only use one leg.',
'Make out with them.',
'Beg them to make out with you. They have to refuse. Keep trying to convince them in different ways for two minutes.',
'Put on sexy music and vacuum with no pants on.',
'You have to do whatever they tell you for one minute.',
'Shave your arms and send me a pic.',
'Record yourself singing a song and post it on YouTube.',
'I dare you to order me $10 worth of food for delivery.',
'Try to lick your own foot and send me pic.',
'Message someone you haven’t talked to in at least 1 year on Facebook or Instagram and take a screenshot.',
'Text your crush and ask them out on a date.',
'Fill up the bath and get in with your current outfit still on. and dont forget to send pics.',
'Open up all your windows and sing an entire song as loud as you can.',
'Put ice cubes down your pants and try to shake them out and send me a video.',
'Ask a neighbor if they have fifty cents.',
'Drink or eat a teaspoon of soap.',
'Send me a screenshot of your selfies gallery.',
'Text a random number and write “I see dead people”.',
'Text a random number a selfie.',
'Pretend to be a cat for five minutes and send me a video.',
'Make a video of yourself doing your weirdest habit!',
'Put on clothes of the opposite s*x and take a video of yourself trying to act like a guy/girl.',
'Wait until a dog walks past your house and bark at it!',
'Knock on someone’s door and try to run away before they answer!',
]


const randomdare = dare[Math.floor(Math.random() * dare.length)]

  message.channel.send(
    new Discord.MessageEmbed()
      .setTitle("**Amakano || Dare**")
      .setDescription(`${user} Here is the random dare for you:\n\n\n**${randomdare}**`)
      .setColor('#53fa43')
      .setThumbnail('https://media.tenor.com/images/3408860a5f846d39283b01e5d6b5712d/tenor.gif')
      .setFooter(message.author.username)
  )

 }
}