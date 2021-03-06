/****************************************
 *
 *   Nuke: Command for Suzu
 *   Copyright (C) 2019 Designed and Programed by Ree and ServerLion
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * *************************************/
module.exports.run = async (client, msg) => {
    if (!msg.member.hasPermission("BAN_MEMBERS")){
        msg.reply("Hold up! You aren't allowed to nuke messages!");
        return;
      }
      msg.channel.send(":radioactive: incoming!");
      msg.channel.bulkDelete(99, true);
      msg.channel.send(":radioactive: Nuked Channel.");
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};
exports.help = {
  name: 'nuke',
  description: 'The nuke command',
  usage: 'nuke',
  category: '- Moderation Commands',
};
