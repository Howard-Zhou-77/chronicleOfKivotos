'use strict';
window.qhfl_import(function (lib, game, ui, get, ai, _status) {
    if (!lib.qhlypkg) {
        lib.qhlypkg = [];
    }
    if (!lib.qhly_groupimage) {
        lib.qhly_groupimage = {};
    }
    // lib.qhly_groupimage['qhfl_jia'] = 'extension/千幻范例/name_qhfl_jia.webp';
    // lib.qhly_groupimage['qhfl_yi'] = 'extension/千幻范例/name_qhfl_yi.webp';//设置势力图标。图标文件放在自己代码里。

    if (!lib.qhly_groupcolor) {
        lib.qhly_groupcolor = {};
    }
    if (game.isbaGroupChange()) {
        lib.qhly_groupcolor['ba_gehenna'] = "#FF6060";
        lib.qhly_groupcolor['ba_trinity'] = "#FFFF01";
        lib.qhly_groupcolor['ba_millennium'] = "#00EF00";
    }
    //在这里设置势力颜色。颜色代码可以参考：https://tool.oschina.net/commons?type=3

    var taici = {
        'mouMiyuKasumizawa':{
            'mouLaji':{
                order: 1,
                content: '1.<i>やっぱり私は何もできないゴミ物なんだ…</i> 果然我是什么都不会的小垃姬……<br>'+
                '2.<i>SRTに入らなければよかった…</i> 如果没进入SRT就好了……'
            },
            'mouJushe':{
                order:2,
                content: "1.<i>私はその辺の小石…</i> 我是路边的小石子……<br>"+
                '2.<i>え、援護します…</i> 嗯，进行援护。'
            },
            'die':{
                content: "<i>逃げたい、辛い、帰りたい…</i><br>好想逃走...…好痛苦，想回家了..."
            }
        },
        'ba_NonomiIzayoi': {
            'ba_jugu': {
                order: 1,
                content: "1.<i>今日もファイト！</i> 今天也要加油！<br>"+
                '2.<i>最善を尽くしますぅー。</i> 我会尽力做到做好。'
            },
            'ba_hengchong': {
                order: 2,
                content: "1.<i>ノノミー、いきまーす！</i> 野宫，要上啦！<br>"+
                '2.<i>お仕置きの時間ですよー？</i> 到惩罚的时间咯？<br>'+
                '3.<i>全弾はっしゃー！</i> 全部子弹发射！<br>'+
                '4.<i>覚悟してくださいねー？</i> 做好觉悟哦？'
            },
            'ba_haozhi': {
                order: 3,
                content: "1.<i>あら、私の番ですねー？</i> 呀，到我出场了呢——？<br>"+
                "2.<i>うんうん、みんなで頑張りましょうね。</i> 嗯嗯，大家一起努力呢。"
            },
            'die': {
                content: "<i>うーん……ちょっと無理みたい……</i><br>唔……好像有点勉强了……"
            }
        },
        'ba_AkariWanibuchi': {
            'ba_ekou': {
                order: 1,
                content: '<i>覚悟しなさーい？</i><br>做好觉悟了吗？',
            },
            'ba_liuzha': {
                order: 2,
                content: "1.<i>ほっかほかの榴弾、行きます！</i> 热腾腾的榴弹，来了！ 2.<i>熱いうちに召し上がれ～。 </i>" +
                    "趁热吃吧～<br>3.<i>装填完了！照準合わせます！</i> 装弹完毕！瞄准目标！ "+
                    "4.<i>ウェルダンでお願いします～！</i> 请给我全熟的~！",
            },
            'die': {
                content: '<i>次回は、ほんの少しだけ、グロテスクにやりましょう。</i><br>下次，再稍微采用猎奇一点的方法吧。',
            }
        },
        'ba_MoeKazekura': {
            'ba_lanzha': {
                order: 1,
                content: "1.<i>くひひ……全弾発射！</i> 诶嘿嘿……全弹发射！<br>"+
                '2.<i>くひひ……これだからやめられない…</i> 诶嘿嘿……正因如此才停不下来呢…'
            },
            'ba_shouxie': {
                order: 2,
                content: "1.<i>私の手伝いが必要って感じ。</i> 感觉我很重要呢。<br>"+
                '2.<i>なになに。どこかから危険な匂いがするね。</i> 什么什么。从哪里传来了危险的味道呢。'
            },
            'die': {
                content: "<i>先生と一緒なら、ド派手な破滅を迎えるのも…くひひ……</i><br>和老师在一起的话，即使迎来华丽的毁灭也…诶嘿嘿……"
            }
        },
        'ba_SakiSorai': {
            'ba_kuxun': {
                order: 1,
                content: "1.<i>強くなりたいなら、地道に教範を読むことだな。</i> 如果变强的话，就能更深刻地理解教科书了。<br>"+
                "2.<i>先輩たちに追いつくために、もっともっと強くならないと。</i> 青出于蓝而胜于蓝，必须要变得更强更强。"
            },
            'ba_chanzhan': {
                order: 3,
                content: "1.<i>RABBIT2、現場に到着した。</i> RABBIT2，到达现场。<br>"+
                "2.<i>RABBIT2、降下準備完了。</i> RABBIT2，准备降落。<br>"+
                "3.<i>SRTの力、あまくみるなよ！</i> 别小看SRT的力量！"
            },
            'ba_yanshe': {
                order: 2,
                content: "1.<i>援護射撃、開始。</i> 掩护射击，开始。<br>"+
                "2.<i>火力支援を始める。</i> 开始火力支援。"
            },
            'die':{
                content: "<i>今年は、SRTに戻れたら良いけど……</i><br>今年，能回到SRT就好了……"
            }
        }
    };
    
    lib.qhlypkg.push({
        isExt: true,//是否是扩展，一般填true
        filterCharacter: function (name) {
            return ['mouMiyuKasumizawa','mouMikaMisono','mouAzusaShirasu','mouHoshinoTakanashi'].contains(name)||name.indexOf('ba_') == 0;//判断此ID的武将是否属于此皮肤包
        },
        characterNameTranslate: function (name) {
            //这里根据武将ID返回其中文名字。
            return get.translation(name);
        },
        characterTaici: function (name) {
            //这里返回武将原皮台词。
            return taici[name];
        },
        originSkinInfo: function (name) {
            var info = {
                'ba_AkariWanibuchi': '尚未找到图片',
            };
            return info[name];
        },
        characterInfo: function (name) {
            //这里可以返回角色资料。如不返回则显示get.characterIntro(name)。
        },
        prefix: 'extension/乞国秘史/', //原皮前缀，标识原皮肤的位置。
        skin: {
            standard: 'extension/乞国秘史/skin/standard/',//可切换普通皮肤的前缀
        },
        audioOrigin: 'extension/乞国秘史/',//原技能配音位置
        audio: 'extension/乞国秘史/skin/audio/',//切换皮肤后的技能配音位置
        /* skininfo: {
            'zhangsan1': {
                level: "普通",
                translation: "普通皮肤",
                info: "张三皮肤1信息。",
                order: 1,//显示顺序，号越小越前面。
                skill: {
                    'qhfl_mopai': {
                        order: 1,
                        content: '台词1。<br>台词2。',
                    },
                    'die': {
                        content: '阵亡台词。',
                    }
                }
            },
            'zhangsan2': {
                level: "#level_qixi",
                translation: "七夕皮肤",
                info: "张三皮肤2信息。",
                order: 2,//显示顺序，号越小越前面。
                skill: {
                    'qhfl_mopai': {
                        order: 1,
                        content: '台词1。<br>台词2。',
                    },
                    'die': {
                        content: '阵亡台词。',
                    }
                }
            },
            'lisi1': {
                level: "精品",
                translation: "李四精品",
                info: "李四皮肤1信息。",
                order: 1,//显示顺序，号越小越前面。
                skill: {
                    'qhfl_qipai': {
                        order: 1,
                        content: '台词1。<br>台词2。',
                    },
                    'die': {
                        content: '阵亡台词。',
                    }
                }
            }
        } */
        skininfo:{}
    });
});