module.exports = function(controller) {
  controller.hears(['q me','queue me'], 'direct_message,direct_mention', function(bot, message) {
      bot.reply(message, 'I\'m your new TA, who promises to never joke about leaving you in the middle of a cohort!')
  });

}
