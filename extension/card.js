import { game } from "./noname.js";
game.import('card', function (lib, game, ui, get, ai, _status) {
	var ba_cards = {
		name: 'ba_cards',
		connect: true, //是否允许联机,true表示允许，false表示不允许
		card: {
			//卡牌
			"ba_HikarinoKen": {
				fullskin: true,
				// derivation: "ba_AliceTendo",
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -2,
				},
				ai: {
					equipValue: (card, player) => {
						return 2.5 + Math.max((player.hasSkillTag('natureDamage')) ? 4 : 0, player.countCards('h', card => get.tag(card, 'natureDamage')) * 3)
					},
				},
				basic: {
					equipValue: 3.5,
					order: function (card, player) {
						if (player && player.hasSkillTag('reverseEquip')) {
							return 8.5 - get.equipValue(card, player) / 20;
						}
						else {
							return 8 + get.equipValue(card, player) / 20;
						}
					},
					useful: 2,
					value: function (card, player, index, method) {
						if (player.isDisabled(get.subtype(card))) return 0.01;
						var value = 0;
						var info = get.info(card);
						var current = player.getEquip(info.subtype);
						if (current && card != current) {
							value = get.value(current, player);
						}
						var equipValue = info.ai.equipValue;
						if (equipValue == undefined) {
							equipValue = info.ai.basic.equipValue;
						}
						if (typeof equipValue == 'function') {
							if (method == 'raw') return equipValue(card, player);
							if (method == 'raw2') return equipValue(card, player) - value;
							return Math.max(0.1, equipValue(card, player) - value);
						}
						if (typeof equipValue != 'number') equipValue = 0;
						if (method == 'raw') return equipValue;
						if (method == 'raw2') return equipValue - value;
						return Math.max(0.1, equipValue - value);
					},
				},
				skills: ["ba_HikarinoKen_skill", "ba_HikarinoKen_skill_2"],
				enable: true,
				selectTarget: -1,
				filterTarget: function (card, player, target) {
					return target == player;
				},
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
			},
			ba_ruishijuan: {
				enable: true,
				type: "basic",
				// usable: 1,
				filterTarget: (card, player, target) => {
					if (player == target) return false;
					return !(target.hp == target.maxHp && target.hasSkill('ba_g_ruishijuan'))
				},
				// cardimage: "ext:乞国秘史:ba_ruishijuan.png",
				fullskin: true,
				selectTarget: 1,
				content: () => {
					'step 0'
					if (target.hp == target.maxHp) event._result = { control: "下回合只能对自己用牌" };
					else player.chooseControl('下回合只能对自己用牌', '回复1点体力').set('prompt', '【瑞士卷】：令' + get.translation(target) + '……').set('ai', () => {
						var target = _status.event.target;
						var player = _status.event.player;
						return (get.recoverEffect(target, player, player) > 0) ? '回复1点体力' : '下回合只能对自己用牌'
					}).set('target', target)
					'step 1'
					if (result.control == '下回合只能对自己用牌') {
						target.addTempSkill('ba_g_ruishijuan', { player: 'phaseEnd' });
					} else {
						target.recover();
					}
				},
				ai: {
					tag: {
						recover: 1,
					},
					order: 5,
					result: {
						// player:(player,target)=>{
						//     if (get.recoverEffect(target,player,player)>0) return get.recoverEffect(target,player,player);
						//     else return target.countCards('h')/2;
						// },
						target: (player, target, card) => {
							if (get.recoverEffect(target, player, player) > 0) return get.recoverEffect(target, player, target);
							else return target.hasSkill('ba_g_ruishijuan') ? 0 : -target.countCards('h') / 2;
						}
					},
					usable: [8.5, 7, 5.5, 4],
					value: [8.5, 7, 5.5, 4],
				}
			},
			ba_yuyunhao: {
				fullskin: true,
				type: "equip",
				subtype: "equip1",
				distance: {
					attackFrom: -8,
				},
				skills: ['ba_yuyunhao_skill'],
				enable: true,
				selectTarget: -1,
				filterTarget: (card, player, target) => player == target && target.canEquip(card, true),
				modTarget: true,
				allowMultiple: false,
				content: function () {
					if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
				},
				toself: true,
				ai: {
					basic: {
						order: (card, player) => {
							const equipValue = get.equipValue(card, player) / 20;
							return player && player.hasSkillTag('reverseEquip') ? 8.5 - equipValue : 8 + equipValue;
						},
						useful: 2,
						equipValue: 4,
						value: (card, player, index, method) => {
							if (!player.getCards('e').includes(card) && !player.canEquip(card, true)) return 0.01;
							const info = get.info(card), current = player.getEquip(info.subtype), value = current && card != current && get.value(current, player);
							let equipValue = info.ai.equipValue || info.ai.basic.equipValue;
							if (typeof equipValue == 'function') {
								if (method == 'raw') return equipValue(card, player);
								if (method == 'raw2') return equipValue(card, player) - value;
								return Math.max(0.1, equipValue(card, player) - value);
							}
							if (typeof equipValue != 'number') equipValue = 0;
							if (method == 'raw') return equipValue;
							if (method == 'raw2') return equipValue - value;
							return Math.max(0.1, equipValue - value);
						},
					},
					result: {
						target: (player, target, card) => get.equipResult(player, target, card.name),
					},
				},
			},
		},

		skill: {
			//卡牌技能
			"ba_g_ruishijuan": {
				mod: {
					playerEnabled: function (card, player, target) {
						if (player != target && get.type2(card) == 'trick' && player == _status.currentPhase) return false;
					},
				},
				charlotte: true,
				mark: true,
				intro: {
					content: "本轮不能使用锦囊牌指定其他角色为目标"
				}
			},
			"ba_HikarinoKen_skill": {
				equipSkill: true,
				usable: 1,
				trigger: {
					source: "damageBegin1",
				},
				filter: (event, player) => !event.nature,
				check: (event, player) => {
					return get.damageEffect(event.player, player, player, 'fire') > get.damageEffect(event.player, player, player)
				},
				content: () => {
					trigger.nature = 'fire';
					game.log(player, '对', trigger.player, '造成的伤害被改为火属性')
				},
				"prompt2": (event, player) => '将对' + get.translation(event.player) + '造成的伤害被改为火属性',
			},
			"ba_HikarinoKen_skill_2": {
				equipSkill: true,
				forced: true,
				locked: true,
				trigger: {
					source: "damageBegin2",
				},
				filter: (event, player) => event.nature && event.player.countCards('e', card => get.subtype(card) == 'equip1') == 0,
				content: () => {
					trigger.num++;
				},
				ai: {
					effect: {
						player: function (card, player, target) {
							if ((get.tag(card, 'natureDamage') || get.tag(card, 'fireDamage') || get.tag(card, 'thunderDamage') || (!player.storage.counttrigger || player.storage.counttrigger.ba_HikarinoKen == 0))
								&& (target && target.countCards('e', card => get.subtype(card) == 'equip1') == 0)) {
								if (get.attitude(player, target) > 0) return [1, -0.5];
								return [1, 0.8];
							}
						},
					},
				},
			},
			'ba_yuyunhao_skill': {
				trigger: { player: "useCardToPlayered" },
				mod: {
					selectTarget: (card, player, num) => {
						if (player.countUsed('sha', true) == 0 && card.name == 'sha' && num[1] != -1) num[1]++
					}
				},
				check: function (event, player) {
					return get.attitude(player, event.target) < 0;
				},
				filter: function (event, player) {
					return event.card.name == 'sha';
				},
				logTarget: "target",
				shaRelated: true,
				content: () => { trigger.target.addTempSkill("fengyin") },
				ai: {
					ignoreSkill: true,
					skillTagFilter: (player, tag, arg) => {
						if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
						if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
						if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false
					}
				}
			},
		},

		translate: {
			//各种翻译
			ba_g_ruishijuan: "瑞士卷",
			"ba_HikarinoKen": "光之剑",
			"ba_HikarinoKen_info": "每回合限一次，当你造成无属性伤害时，你可以将其改为火属性。锁定技，当你造成属性伤害时，若目标的装备区没有武器牌，此伤害+1。",
			"ba_HikarinoKen_skill": "光之剑",
			"ba_HikarinoKen_skill_info": "每回合限一次，当你造成无属性伤害时，你可以将其改为火属性。锁定技，当你造成属性伤害时，若目标的装备区没有武器牌，此伤害+1。",
			'ba_ruishijuan': "瑞士卷",
			'ba_ruishijuan_info': "出牌阶段，对一名其他角色使用，你选择令其回复1点体力或令其下一回合前使用锦囊牌只能指定自己为目标。",
			'ba_yuyunhao': "雨云号",
			'ba_yuyunhao_info': "锁定技，出牌阶段你使用的第一张【杀】目标数+1；你使用【杀】指定目标时可以令目标所有技能本回合内失效",
			'ba_yuyunhao_skill': "雨云号",
			'ba_yuyunhao_skill_info': "锁定技，出牌阶段你使用的第一张【杀】目标数+1；你使用【杀】指定目标时可以令目标所有技能本回合内失效"
		}, list: [
			['diamond', 5, 'ba_ruishijuan'],
			['club', 4, 'ba_ruishijuan'],
			['diamond', 7, 'ba_ruishijuan'],
			['club', 13, 'ba_ruishijuan'],
			['diamond', 11, 'ba_ruishijuan'],
			['club', 1, 'ba_ruishijuan'],
			['diamond', 6, 'ba_ruishijuan'],
			['club', 9, 'ba_ruishijuan'],
			['diamond', 10, 'ba_ruishijuan'],
		],
	};
	lib.translate['ba_cards'] = '蓝档卡牌';
	lib.translate['ba_cards_card_config'] = '蓝档卡牌';
	lib.config.all.cards.push('ba_cards');
	if (!lib.config.cards.includes('ba_cards')) lib.config.cards.push('ba_cards');
	return ba_cards;
});
