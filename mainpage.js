const fade = document.querySelector(`#fade`);
const breach = document.querySelector(`#breach`);
const raze = document.querySelector(`#raze`);
const chamber = document.querySelector(`#chamber`);
const kayo = document.querySelector(`#kayo`);
const skye = document.querySelector(`#skye`);
const cypher = document.querySelector(`#cypher`);
const sova = document.querySelector(`#sova`);
const killjoy = document.querySelector(`#killjoy`);
const harbor = document.querySelector(`#harbor`);
const viper = document.querySelector(`#viper`);
const pheonix = document.querySelector(`#pheonix`);
const astra = document.querySelector(`#astra`);
const brimstone = document.querySelector(`#brimstone`);
const neon = document.querySelector(`#neon`);
const yoru = document.querySelector(`#yoru`);
const sage = document.querySelector(`#sage`);
const reyna = document.querySelector(`#reyna`);
const omen = document.querySelector(`#omen`);
const jett = document.querySelector(`#jett`);
const agentDivs = [fade, breach, raze, chamber, kayo, skye, cypher, sova, killjoy, harbor, viper, pheonix, astra, brimstone, neon, yoru, sage, reyna, omen, jett];

const section = document.querySelector(`section`);
const h1 = document.querySelector(`h1`);
const pIntro = document.querySelector(`#intro`);
const abilities = document.querySelector(`#abilities`);
const userPreferences = JSON.parse(sessionStorage.getItem(`userPreference`)) || [];
const logInContainer = document.querySelector(`.logInContainer`);
const favorite = document.querySelector(`#favorite`);
const favoritesArray = JSON.parse(sessionStorage.getItem(`favorites`)) || [];
const userProfile = document.querySelector(`#userProfile`);

const fadeAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltbec73caca7bf1045/62701777bae21939d5444b9e/Q-seize_video_NEW.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82a21218065dc472/625f2c47fd9afd4b1fe300ea/E-Haunt_video.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf4e7a6525fe6ec42/625f2c7cfd9afd4b1fe300ee/C-Prowler_video.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt75dfbdc2fbf6bfe1/625f2ba62777714c51b313be/X-Nightfall_Video.mp4`
};
const breachAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc2d5631f1babcaf0/5ec840e1bab1845d392dfc39/Breach_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltd09eb47222cc1152/5ec840e287617619e2be955e/Breach_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfff097ebc7da90e9/5ec840e1e2a559592eb0c0e2/Breach_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0a47675f8b973fda/5ec840e252c5395e0f2dd038/Breach_X_v001_web.mp4`
};
const razeAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf3581aedf43e1ce8/5ecad83cc846021917ecbb8d/Raze_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltfe61b821c26125b7/5ecad83be2a559592eb0c1ba/Raze_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195ecedca/5ecad83c52c5395e0f2dd0e4/Raze_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15aa9cb086aed1a/5ecad83c4a28e119db5622a2/Raze_X_v001_web.mp4`
};
const chamberAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1c12ab8f1c119bc/618d9fd2fb61e4021ad339f0/VAL_broll_EP03-3_Chamber_E.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318d4a246e29106a/618d9fdbf71a3113890e9632/VAL_broll_EP03-3_Chamber_C.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc97eeaeb138d2155/618d9fb7867d1817d95f3b2b/VAL_broll_EP03-3_Chamber_Q.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta111e90b3f2ce476/618d9fde3b08dd14d79a808f/VAL_broll_EP03-3_Chamber_X.mp4`
};
const kayoAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6372c1b58baf8ca2/60cce401ae0d50495b4f7e31/KAYO_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltab2fead35a9b412d/60cce5d49b520349ac9d080d/KAYO_C_v002_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt11ab79d777cba68e/60cce41a07060a4ae3f12ff1/KAYO_E_v002_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6cd3a6f6e99152f8/60cce43683f9fe49a6fee835/KAYO_X_v003_web.mp4`
};
const skyeAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt90a6f2733b96ce16/5f7faa7dd4fbb50ef307791e/Val_Skye_Q_Ability_Web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8ecea4a77a26c25b/5f7fab7adf178b0ea98495a5/Val_Skye_E_Ability_Web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0f5403509070a0a2/5f7fabc5879de80eb41b1f33/Val_Skye_C_Ability_Web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt966535853a54c58c/5f7fac19df178b0ea98495ad/Val_Skye_X_Ability_Web.mp4`
};
const cypherAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt019fa05d6b7fddef/5ecad7e597b46c1911ad186c/Cypher_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c03800823ce304/5ecad7e64a28e119db562296/Cypher_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9b7d004dc573791c/5ecad7e85e73766852c8ed8c/Cypher_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt29f3571576a3937f/5ecad7e5e2a559592eb0c1b0/Cypher_X_v001_web.mp4`
};
const sovaAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4`
};
const killjoyAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4aed833e1b0df155/5f2204694be7297d7e6c8449/Grenade_LowQuality.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9a8fa11ac887550e/5f2203522f812a7c016f5651/AlarmBot_LowQuality.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0fe3462ae9a025a4/5f220396074360086ccdd908/Turret_LowQuality.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf74d72b162a14692/5f2204ab8ff50d070ad2d192/Ultimate_LowQualityV02.mp4`
};
const harborAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt1a7cd79cbb632c3c/6349d6906a938c238802a820/Harbor_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8fb30bd82f7dcd97/6349d669b2dba3104a11dde4/Harbor_C_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6e80f8936913459/6349d682b0662c1e9a67222a/Harbor_E_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0536369c7a3b7986/6349d677c96b72418f47a8c4/Harbor_X_v001_web.mp4`
};
const viperAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte5200bab40679f96/5ecad8935e73766852c8ed94/Viper_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt66a45c1fe76ca647/5ecad893957e405e0990575d/Viper_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5e70987e8ac2f2d6/5ecad893722d20585b2f4a4c/Viper_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt41c75111b2eac6b5/5ecad8923a450a58554b7078/Viper_X_v001_web.mp4`
};
const pheonixAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4`
};
const astraAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt78e556d97ea93fc9/6036c92572c04c12c9563dff/RIFT21_Astra_Ability_Q.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3be9010588cba144/6036c924427f5d75042c3ae5/RIFT21_Astra_Ability_E_F.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltaba20d81cc601af4/6036c92599494e6c4f166b19/RIFT21_Astra_Ability_C.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltca94f8d6f8e4c91d/6036c92499494e6c4f166b15/RIFT21_Astra_Ability_ULT.mp4`
};
const brimstoneAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc34c3d692ea83f41/5ecad7d0177c51692beb1fe4/Brimstone_C_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte2b9eb1923ef64fa/5ecad7d0f5bd13348a6cac75/Brimstone_Q_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcf4359fed083686b/5ecad7d198f79d6925dbee07/Brimstone_E_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3d19d83ba51eb18f/5ecad7d297b46c1911ad1868/Brimstone_X_v001_web.mp4`
};
const neonAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt99e20f893b806cc8/61d8a9608aabbf6426b7523a/VAL_Neon_Ability-E_Preview_Sprint_noHUD_Web_h264.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf634e203f29987a5/61d8a91abf9cb8387cc1d9c8/VAL_Neon_Ability-Q_Preview_Stun_noHUD_Web_h264.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt023814e24e6cad2f/61d8a98914ef402247ceab3a/VAL_Neon_Ability-C_Preview_Walls_noHUD_Web_h264.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltcbe0e9c4b801f025/61d8a9dfef206c6c5e4941ba/VAL_Neon_Ability-X_Preview_Ult_noHUD_Web_h264.mp4`
};
const yoruAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt47c96a79f14605fc/62215aaed83ad851e8a9e09d/Website_Yoru_Rework_Fakeout_v2.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt9af4e1e3b962f7b4/5ff77b6fa703d10ab87ebb27/Yoru_Abilities_Blinding_1_1.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0945f456a2bcac77/62215a1f47e4d72e3e67ff1a/Website_Yoru_Rework_Gatecrash_v2.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt95a89496da772b65/62215bbd6f0333490a0e7bec/Website_Yoru_Rework_Dimensional_Drift_v2.mp4`
};
const sageAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5a0edb670c30fbdc/5ecad8732f5c725928765507/Sage_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4`
};
const reynaAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb216220f42c804e2/5ecad85d4a28e119db5622a8/Reyna_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt77e99ec99ef3a839/5ecad85e2f5c725928765503/Reyna_E_v002_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf6109b8be97e8d96/5ecad85db42d3333c95dd1b2/Reyna_C_v002_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltadf53a38e449cb4d/5ecad85cbab1845d392dfd0f/Reyna_X_v001_web.mp4`
};
const omenAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5babc7e7c6c24fa0/5ecad8154a28e119db56229e/Omen_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt70e2c9db1c0793df/5ecad815c846021917ecbb85/Omen_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54ea52945a/5ecad815bab1845d392dfd07/Omen_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt65aa85bf6ba5c0e8/5ecad814a4fe135d37f021a3/Omen_X_v001_web.mp4`

};
const jettAbilitiesArray = {
    videoOne: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4`,
    videoTwo: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4`,
    videoThree: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4`,
    videoFour: `https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4`
};

const abilityVideoArray = [fadeAbilitiesArray, breachAbilitiesArray, razeAbilitiesArray, chamberAbilitiesArray, kayoAbilitiesArray, skyeAbilitiesArray, cypherAbilitiesArray, sovaAbilitiesArray, killjoyAbilitiesArray, harborAbilitiesArray, viperAbilitiesArray, pheonixAbilitiesArray, astraAbilitiesArray, brimstoneAbilitiesArray, neonAbilitiesArray, yoruAbilitiesArray, sageAbilitiesArray, reynaAbilitiesArray, omenAbilitiesArray, jettAbilitiesArray];

const guidesFade = {
    guidesAscent: [`Fade Ascent Lineups:`, `/GUIDES/FADE/ASCENT/fadeAscentLineups.mp4`, `Gameplay guide:`, `/GUIDES/FADE/ASCENT/fadeGuide.mp4`, `Ascent is arguably Fade’s worst map, so knowing lineups will make your time more bearable. We have the best Fade Ascent lineups in this guide!`, `Ascent is a very open map, and whilst that an work for some Initiators, Fade can struggle. If she is chasing a deafened and trailed enemy, she does not want to be out in the open, but instead sneaking around ready to jump out and assassinate her enemies!`, `Fade Guide for Ascent`],
    guidesSplit: [`Fade Split Lineups:`, `/GUIDES/FADE/SPLIT/fadeSplitLineups.mp4`, `Gameplay guide:`, `/GUIDES/FADE/SPLIT/fadeSplitGuide.mp4`, `Split is a great map for Fade due to the Verticality. Here you can find all the best Fade lineups for Split you will need to know!`, `On Split, Fade can take advantage of the verticality and being designed around controlling the middle of the map, the new Initiator can use this by learning lineups for Mid and controlling A and B Site subsequently from these! The spike sites are also quite small so getting vision with your Haunt and tethering enemies with her Seize is easy!`, `Fade Guide for Split`],
    guidesFracture: [`Fade Fracture Lineups:`, `/GUIDES/FADE/FRACTURE/fadeFractureLineups.mp4`, `Gameplay guide:`, `/GUIDES/FADE/FRACTURE/fadeFractureGuide.mp4`, `Fracture is a creative map, where enemies can be anywhere, so learning lineups to scout enemies is pivotal.`, `When the newest agent in Valorant meets the newest map in Valorant, there is bound to be chaos. You can control the map as the new Initiator by learning the lineups on Fracture and Fade can put Trails on enemies who could be coming from anywhere`, `Fade Guide for Fracture`],
    guidesBind: [`Fade Bind Lineups:`, `/GUIDES/FADE/BIND/fadeBindLineups.mp4`, `Gameplay Guide:`, `/GUIDES/FADE/BIND/fadeBindGameplay.mp4`, `Valorant’s newest Agent Fade will require a lot of lineup knowledge- especially on maps such as Bind. Find out all of the best Fade Bind lineups here!`, `Fade wants to efficiently hunt down enemies, so knowing lineups for popular spots will get you consistent kills. Bind is a great map for the new Intiatior and reliably being able to use Haunt or Seize on A Lamps or B Elbow is crucial!`, `Fade Guide for Bind`],
    guidesBreeze: [`Fade Breeze Lineups`, `/GUIDES/FADE/BREEZE/fadeBreezeLineups.mp4`, `Gameplay guide:`, `/GUIDES/FADE/BREEZE/fadeGameplayGuide.mp4`, `Being a very open map, Fade can reveal a lot of enemies, but also struggle with lineups. Find the best Fade Breeze lineups here!`, `Breeze has a lot of open spaces as well as some tight corners and hallways, neither of which Fade enjoys. Whilst she can use her Haunt in the open spaces, she really wants verticality, something Breeze severely lacks when compared to maps like Split. The Initiator somewhat struggles on Breeze so lineups have to be inch-perfect to help her out!`, `Fade Guide for Breeze`],
    guidesPearl: [`Fade Pearl Lineups:`, `/GUIDES/FADE/PEARL/fadePearlLineups.mp4`, `Gameplay Guide:`, `/GUIDES/FADE/PEARL/fadeGameplayGuide.mp4`, `Fade is exceptional on Pearl, due to the amount of roofs. Learn where to throw your abilities and all of the best Fade Pearl lineups here!`, `As an Intiatior ,the new agent Fade is built for scouting enemies, and on the new map in the map pool, Pearl she excels at doing that. Knowing lineups for A, B and Mid will take your Fade gameplay to another level! Although Sova’s Owl Drone and Skye’s Trailblazer are very good scouting abilities on the new map, Fade’s Haunt is so much better, and Fade can scout out enemy agents so easily!`, `Fade Guide for Pearl`],
    guidesIcebox: [`Fade Icebox Lineups:`, `/GUIDES/FADE/ICEBOX/fadeIceboxLineups.mp4`, `Gameplay Guide:`, `/GUIDES/FADE/ICEBOX/fadeGameplayGuide.mp4`, `Icebox is a dream for Fade, and knowing the lineups makes the map even easier. We have provided the best Fade Icebox lineups in this guide!`, `Due to all of the tight angles and small corners in the design of Icebox across the map, Fade can easily do her job as an Initiator from anywhere. If Fade can get the Trail debuff on enemies, it will be easy to locate them and tell when they’re rotating due to the small size of Icebox.`, `Fade Guide for Icebox`],
    guidesHeaven: [`Fade Heaven Lineups:`, `/GUIDES/FADE/HEAVEN/fadeHeavenLineups.mp4`, `Gameplay Guide:`, `/GUIDES/FADE/HEAVEN/fadeGameplayGuide.mp4`, `Fade’s lineups can gather a lot of intel and Haven is a map where you need to know enemy locations, so here is a guide to all of the best Fade Haven lineups!`, `Fade loves to locate enemies and follow them around the map, with her Trails and being able to tell when enemies are rotating or moving. The three sites on Haven means that the Initiator needs to be able to locate the enemy agents at all times and Fade excels at this with her Haunt and Seize.`, `Fade Guide for Heaven`]
}
const guidesBreach = {
    guidesAscent: [`Breach Ascent Combos:`, `/GUIDES/BREACH/ASCENT/breachAscentCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/ASCENT/breachGameplayGuide.mp4`, `Ascent is the best map for Breach. This is because of the narrow choke points- which are very good for Breach’s lineups- that focus around the spike sites. Whilst the middle of the map is very open, if Breach is sitting at the top of Catwalk, he can easily concuss enemies that are in Courtyard with his Fault Line (E).`, `Aftershock (C) and Flashpoint (Q) are both very good abilities at flushing enemies off of site, especially in the back of B site. Pushing through and holding B site is very easy as a Breach as the angles that enemies can hold are very narrow, so the fact that Breach can blind and apply crowd control from behind walls means enemies are forced to play at different angles each time to avoid getting pre-fired.`, `Breach Guide for Ascent`],
    guidesSplit: [`Breach Split Combos:`, `/GUIDES/BREACH/SPLIT/breachSplitCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/SPLIT/breachGameplayGuide.mp4`, `Split is not a small map by any means, but it is very compact throughout. The pathways that lead to each site are extremely tight.`, `This makes the Breach Fault Line inescapable. In such close quarters, players won’t be able to run as the Fault Line can cover nearly every lane on the map.`, `Breach Guide for Split`],
    guidesFracture: [`Breach Fracture Combos:`, `/GUIDES/BREACH/FRACTURE/breachFractureCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/FRACTURE/breachGameplayGuide.mp4`, `Fracture is one the latest additions to Valorant's competitive map pool. Located in New Mexico, USA, this map introduced several unique features into Valorant, and requires planned executions and fast reactions to potentially decide the winner.`, `Breach is one of the Valorant Agents designed to be effective on Fracture.Players can deploy Breach's Fault Line and Flashpoint similar to the way seen in the image above. While the Fault Line clears enemies on-site, Flashpoint helps locate enemies near B-Canteen or B-Generator.`, `Breach Guide for Fracture`],
    guidesBind: [`Breach Bind Combos:`, `/GUIDES/BREACH/BIND/breachBindCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/BIND/gameplayGuide.mp4`, `Everyone’s favorite Initiator, Breach, is a brute of an agent after receiving a multitude of adjustments from Riot Games. His Fault Line ability can single-handedly clear entire lanes, displacing other Valorant players or leaving them dazed. It can be charged so that it reaches an incredible stretch of the map.`, `Bind is a very straightforward map compared to the others in Valorant’s map pool. There is no Mid to control. It only has an A Site and a B Site, with teleporters that allows players to quickly rotate from one to another. Breach’s Fault Line can be used to take control of the small corridors and rooms found on Bind.`, `Breach Guide for Bind`],
    guidesBreeze: [`Breach Breeze Combos:`, `/GUIDES/BREACH/BREEZE/breachBreezeCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/BREEZE/breachGameplayGuide.mp4`, `Breach may not be the best Initiator pick on Breeze. However, a good Breach player can get value from his utilities on this map.`, `Although Breeze is a wide map, there are areas where Breach can use his abilities effectively.`, `Breach Guide for Breeze`],
    guidesPearl: [`Breach Pearl Combos:`, `/GUIDES/BREACH/PEARL/breachPearlCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/PEARL/breachGameplayGuide.mp4`, `Pearl is the eighth map in Valorant and this one is based around Lisbon, Portugal within the Omega Earth. Much like every other map released, Riot has done a fantastic job in making the map feel new and unique. This time around, the developers have decided to go with a plain map design.`, `Narrow paths of Pearl enables Breaches superb utility usage. If you play him properly, you can probably snag a few freebies with your aftershock and many corners make your flashes extremely useful.`, `Breach Guide for Pearl`],
    guidesIcebox: [`Breach Icebox Combos:`, `/GUIDES/BREACH/ICEBOX/breachIceboxCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/ICEBOX/breachGameplayGuide.mp4`, `Icebox has a variety of indoor and outdoor locations. It is a twists and turns galore, combined with big, open areas.`, `Breach can use this chokepoint very effectively, using the abilities he can faze and blind his opponents to gain an immense advantage. Breach can also stall the attackers with his ultimate, making enough time for his allies to rotate from the other site.`, `Breach Guide for Icebox`],
    guidesHeaven: [`Breach Haven Combos:`, `/GUIDES/BREACH/HEAVEN/breachHeavenCombos.mp4`, `Gameplay Guide:`, `/GUIDES/BREACH/HEAVEN/breachGameplayGuide.mp4`, `Valorant’s one and only map is Haven which contains 3 sites rather than 2 which is really amazing and challenging. `, `Breach has fault lines and flashpoints that can clear out chokepoints and rush through corners. His Ultimate ability grants him access to any site, and with the current meta, he’s terrifying if the team suits him.`, `Breach Guide for Haven`]
}
const guidesRaze = {
    guidesAscent: [`Raze Ascent Combos:`, `/GUIDES/RAZE/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/RAZE/ASCENT/razeGameplayGuide.mp4`, `Ascent is currently the most played map in the history of pro gaming in Valorant. It has a balanced defending and attacking side for any team composition, which is why an aspiring Raze player can spam boom bots, blast packs, munitions, and paint shells. `, `Here are the best lineups for Raze in Ascent for Valorant to all the duelist mains looking to win more games. `, `Raze Guide for Ascent`],
    guidesSplit: [`Raze Split Combos:`, `/GUIDES/RAZE/SPLIT/-`, `Gameplay Guide:`, `/GUIDES/RAZE/SPLIT/razeGameplayGuide.mp4`, `Regardless of the team composition, Raze is one of the most picked duelists in Split. She is often regarded as the best duelist in Split because her kit suits the map's tight corners.`, `Not only that, but she can blast pack her way into the site and clear many angles effortlessly. Here are the best Raze lineups in Split for Valorant to destroy anyone in your games!`, `Raze Guide for Split`],
    guidesFracture: [`Raze Fracture Combos:`, `/GUIDES/RAZE/FRACTURE/-`, `Gameplay Guide:`, `/GUIDES/RAZE/FRACTURE/razeGameplayGuide.mp4`, `Valorant’s one of the latest map, Fracture, has many tight spots and angles where Raze can use her utility. Learn all the best lineups for Raze in Fracture here!`, `Raze, the Brazilian duelist, thrives on maps with close spaces and angles because her utility focuses on killing enemies positioned in those areas. Since the release of Fracture, Raze has been a pick for any team composition because of her specialized kit that helps the best in the newest Riot Games map. If you find yourself winning some games in Fracture, here are the best Raze lineups for Fracture in Valorant. `, `Raze Guide for Fracture`],
    guidesBind: [`Raze Bind Combos:`, `/GUIDES/RAZE/BIND/-`, `Gameplay Guide:`, `/GUIDES/RAZE/BIND/razeGameplayGuide.mp4`, `Bind is one of the earliest Valorant maps that Riot Games released. It is a heaven for Raze players because of the tight spaces where they can do blast pack plays, paint shell clears, and boombot ability lineups. In fact, Raze is also considered one of the best valorant agents when it comes to this map. `, `If you are an aspiring main of the Brazilian duelist, here are the best raze lineups in Bind for Valorant to help you win more games!`, `Raze Guide for Bind`],
    guidesBreeze: [`Raze Breeze Combos:`, `/GUIDES/RAZE/BREEZE/-`, `Gameplay Guide:`, `/GUIDES/RAZE/BREEZE/razeGameplayGuide.mp4`, `Learn all the best Raze lineups to make the biggest map in Valorant manageable. Win more games by doing all the boombot and paint shells shown here!`, `There are a lot of duelists in Valorant that excel tremendously in a huge map like Breeze. Many might argue that Raze does not belong in the best Valorant agents list for Breeze. However, she has a great kit that can clear angles and tight spots. Raze is also a very mobile agent, which helps moving around a huge map. Here are the best lineups for Raze in Breeze in Valorant to make you win more competitive games!`, `Raze Guide for Breeze`],
    guidesPearl: [`Raze Pearl Combos:`, `/GUIDES/RAZE/PEARL/-`, `Gameplay Guide:`, `/GUIDES/RAZE/PEARL/razeGameplayGuide.mp4`, `With long alleyways, tight corridors and different elevation, the new Pearl map suits Raze perfectly. The new Valorant map Pearl, unlike the other maps in Valorant, this one doesn’t have a gimmick that’s unique to it.`, `In our Pearl map guide we explained the callouts for the new map, and in this one we are going to show you some early Raze lineups. With time the meta for the best Duelist agents on Pearl map might change, but we feel that Raze will always have a spot on this map.`, `Raze Guide for Pearl`],
    guidesIcebox: [`Raze Icebox Combos:`, `/GUIDES/RAZE/ICEBOX/-`, `Gameplay Guide:`, `/GUIDES/RAZE/ICEBOX/razeGameplayGuide.mp4`, `Icebox is a map that has a lot of vertical angles and tight spaces, which is why learning lineups, whether it is poison cloud, shock darts, or swamp grenades, has a huge benefit. `, `If you are an aspiring Raze main looking to kill enemies in a choke point or corner, here are the best Raze Icebox lineups that you can use on your next solo queue game!`, `Raze Guide for Icebox`],
    guidesHeaven: [`Raze Haven Combos:`, `/GUIDES/RAZE/HEAVEN/-`, `Gameplay Guide:`, `/GUIDES/RAZE/HEAVEN/razeGameplayGuide.mp4`, `Riot Games releases each map with different gimmicks, and many pro players use Raze in Haven because of her angle clearing kit that helps on both attacking and defending rounds. `, ` Not only that, but her double satchel entry is a huge advantage regardless of the team comp. If you are an aspiring Raze main who wants to play her in Haven, here are the best Raze lineups in Haven for Valorant to help you win more games in the three-site map layout. `, `Raze Guide for Haven`]
}
const guidesChamber = {
    guidesAscent: [`Chamber Ascent Combos:`, `/GUIDES/CHAMBER/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/CHAMBER/ASCENT/chamberGameplayGuide.mp4`, `Chamber's abilities are mostly based on gunplay, but one needs strategies to execute his Trademark (C) and Rendezvous (E) abilities in Valorant. Moreover, playing Chamber in Valorant's Ascent map requires a lot of experimentation with setups to defend the sites effectively.`, `Chamber might help the gamers play defensively, yet still get easy kills. However, Valorant players require a lot of strategies and tricks to play with the agent on this map.`, `Chamber Guide for Ascent`],
    guidesSplit: [`Chamber Split Combos:`, `/GUIDES/CHAMBER/SPLIT/Chamber`, `Gameplay Guide:`, `/GUIDES/CHAMBER/SPLIT/chamberGameplayGuide.mp4`, `The Split map has remained polarizing due to her design being composed of interconnected areas, a multitude of angles, playing around with verticality, etc. This maze-like design consists of two spike sites that each have three entrances. These entrances are actually choke points for multiple pathways which makes rotating fast but also dangerous.`, `Thats were Chamber thrives at, not only he can bypass those narrow pathways, to rotate even faster with his (E) Randezvous, but also cover flanks with his (C) Trademark.`, `Chamber Guide for Split`],
    guidesFracture: [`Chamber Fracture Combos:`, `/GUIDES/CHAMBER/FRACTURE/Chamber`, `Gameplay Guide:`, `/GUIDES/CHAMBER/FRACTURE/chamberGameplayGuide.mp4`, `After seeing a successful first run at Valorant Champions 2021, Fracture has been proven to offer a lot of potential for strategizing and planned executions.`, `Chamber's excellent gunplay can prove effective with respect to the structural conditions of Fracture. However, the highlight of his skillset is his Trademark and Rendezvous abilities that enable him to dominate opponents on various parts of the map. This article highlights the most suitable set-ups for Chamber's abilities that players can employ on Fracture.`, `Chamber Guide for Fracture`],
    guidesBind: [`Chamber Bind Combos:`, `/GUIDES/CHAMBER/BIND/Chamber`, `Gameplay Guide:`, `/GUIDES/CHAMBER/BIND/chamberGameplayGuide.mp4`, ``, ``, `Chamber Guide for Bind`],
    guidesBreeze: [`Chamber Breeze Combos:`, `/GUIDES/CHAMBER/BREEZE/Chamber`, `Gameplay Guide:`, `/GUIDES/CHAMBER/BREEZE/chamberGameplayGuide.mp4`, ``, ``, `Chamber Guide for Breeze`],
    guidesPearl: [`Chamber Pearl Combos:`, `/GUIDES/CHAMBER/PEARL/Chamber`, `Gameplay Guide:`, `/GUIDES/CHAMBER/PEARL/chamberGameplayGuide.mp4`, `Bind is one of the original maps that came out after the release of Valorant back in June 2, 2021 and has earned the hearts of many players as their favorite map. The map’s teleporters create many opportunities and creative approach each of the sites, making Bind interesting as a whole.`, `Chamber is equipped with multiple abilities to help himself and his team in an aggressive way. Sentinels in Valorant are usually known for their expertise with defense in any team they are a part of. However, for Chamber, the approach differs from that of other Sentinels in the game.`, `Chamber Guide for Pearl`],
    guidesIcebox: [`Chamber Icebox Combos:`, `/GUIDES/CHAMBER/ICEBOX/Chamber`, `Gameplay Guide:`, `/GUIDES/CHAMBER/ICEBOX/chamberGameplayGuide.mp4`, `Icebox has long and multiple lines of sight, which requires strong defenders to guard the site. Chamber is a fine pick for Valorant's Tundra-based map if his abilities are used well.`, `Chamber's abilities mostly rely on gunplay, especially his Headhunter (Q) and his ultimate Tour De Force (X). However, his Trademark (C) and Rendezvous (E) need a lot of strategies and planning to play the agent efficiently on Icebox.`, `Chamber Guide for Icebox`],
    guidesHeaven: [`Chamber Haven Combos:`, `/GUIDES/CHAMBER/HEAVEN/Chamber`, `Gameplay Guide:`, `/GUIDES/CHAMBER/HEAVEN/chamberGameplayGuide.mp4`, `Around Haven, Chamber should have no problems holding down an entire bombsite with his traps, and, when needed, Chamber can even play like a Duelist on defense by playing aggressive angles with his Headhunter and Tour de Force.`, `Unlike other Sentinel Agents that are mostly equipped with trap-based utility (Sage, Killjoy, and Cypher come into mind), Chamber has an excellent mix of offensive and defensive abilities that make him a versatile Agent for various situations.`, `Chamber Guide for Haven`]
}
const guidesKayo = {
    guidesAscent: [`Kayo Ascent Combos:`, `/GUIDES/KAYO/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/KAYO/ASCENT/kayoGameplayGuide.mp4`, `Ascent is very good map for KAY/O as his lineups can be used all over the map. Learn the best KAY/O Ascent lineups here!`, `Lineups for KAY/O on Ascent are very good and valuable to learn, whether it be fulfilling your role as an Initiator with your ZERO/POINT or using your FRAG/MENT and FLASH/DRIVE to clear out tight corners in and around the two spike sites, KAY/O is always a welcome addition to any team composition on Ascent. If you do not know any of the callouts we use in this guide, we have a guide on Ascent Callouts too!`, `Kayo Guide for Ascent`],
    guidesSplit: [`Kayo Split Combos:`, `/GUIDES/KAYO/SPLIT/Kayo`, `Gameplay Guide:`, `/GUIDES/KAYO/SPLIT/kayoGameplayGuide.mp4`, `KAY/O lineups can get very creative on Split. Find out all the best KAY/O Split lineups here!`, `Split will have you KAY/O mains loving life with all of the possible lineups you can execute on the map. KAY/O’s best map is actually Split and the high up walls are what makes him such an effective Initiator pick. These are greatly utilised by KAY/O’s ZERO/POINT. As well as the tight angles being effectively checked and monitored by his FRAG/MENT and FLASH/DRIVE.`, `Kayo Guide for Split`],
    guidesFracture: [`Kayo Fracture Combos:`, `/GUIDES/KAYO/FRACTURE/Kayo`, `Gameplay Guide:`, `/GUIDES/KAYO/FRACTURE/kayoGameplayGuide.mp4`, `With Fracture being one of the newest map in Valorant, there are even more creative ways to perform lineups as KAY/O.`, `This KAY/O Fracture lineup guide has all the best lineups you need to know for the Initiator, and it will provide everything you need to dominate when on Fracture. Whether it be using KAY/O’s  FRAG/MENT, ZERO/POINT or FLASH/DRIVE, these lineups are vital for taking your KAY/O game play to the next level!`, `Kayo Guide for Fracture`],
    guidesBind: [`Kayo Bind Combos:`, `/GUIDES/KAYO/BIND/Kayo`, `Gameplay Guide:`, `/GUIDES/KAYO/BIND/kayoGameplayGuide.mp4`, `This guide will show you all the lineups you need to know on Bind for KAY/O, both attacking and defending for both spike sites. As an Initiator, KAY/O will always be required to engage and start off fights, and the best way to do that is with his FRAG/MENT ability.`, ` The ability can be thrown from a fair distance away so lineups mean that KAY/O does not always have to be on the front line! KAY/O’s lore has him as a killer robot- follow this guide and channel your inner KAY/O!`, `Kayo Guide for Bind`],
    guidesBreeze: [`Kayo Breeze Combos:`, `/GUIDES/KAYO/BREEZE/Kayo`, `Gameplay Guide:`, `/GUIDES/KAYO/BREEZE/kayoGameplayGuide.mp4`, `KAY/O loves to be able to throw his ZERO/POINT across the map and across spike sites to suppress enemies from far away, and with Breeze being low in verticality, KAY/O can easily throw the dagger over buildings and into areas where it cannot be destroyed.`, `On the other hand, there are a few tight spaces, such as in A Hall and A Shop where KAY/O can excel with his FRAG/MENT and FLASH/DRIVE and block off enemies.`, `Kayo Guide for Breeze`],
    guidesPearl: [`Kayo Pearl Combos:`, `/GUIDES/KAYO/PEARL/Kayo`, `Gameplay Guide:`, `/GUIDES/KAYO/PEARL/kayoGameplayGuide.mp4`, `The new map Pearl has been available on live servers for quite a while and the Valorant community has already found lineups for all agents. `, `The Cybernetic Grenadier KAY/O is one of the most versatile members on the Valorant roster of agents. In our Pearl map guide, we discussed how important it is to grab control over the tight areas on this map, and it might be the only map where KAY/O is the first choice for the Initiator role. Even though he doesn’t offer as much information-gathering utility, he’s still one of the best Initiator agents Riot Games have released.`, `Kayo Guide for Pearl`],
    guidesIcebox: [`Kayo Icebox Combos:`, `/GUIDES/KAYO/ICEBOX/Kayo`, `Gameplay Guide:`, `/GUIDES/KAYO/ICEBOX/kayoGameplayGuide.mp4`, `Icebox is a very small map, this means that lineups are crucial- especially for KAY/O. Here we have all of the best KAY/O lineups for Icebox!`, `This lineup guide provides you with the best lineups for KAY/O on Icebox, as well as exactly how to perform them. The Initiator is very good at utilising his crowd control abilities in tight areas and Icebox is filled with them. Whether it be using FRAG/MENT to force enemy agents out of a corner, or ZERO/POINT to scout out enemies early on in the round- KAY/O can be a menace on Icebox with the right lineups!`, `Kayo Guide for Icebox`],
    guidesHeaven: [`Kayo Haven Combos:`, `/GUIDES/KAYO/HEAVEN/Kayo`, `Gameplay Guide:`, `/GUIDES/KAYO/HEAVEN/kayoGameplayGuide.mp4`, `KAY/O is an agent on which you need to learn lineups and Haven is one of the most lineup reliant maps in the Riot Games FPS`, `KAY/O is very reliant on lineups if you want to play him to his full potential, unlike other Initiators, such as Skye, he doesn't have to be near the action! Our lineups will drastically increase your KAY/O win rate and befitting of KAY/O’s lore, you will dominate! whether you be attacking or defending, you will find a lineup here that will help you out!`, `Kayo Guide for Haven`]
}
const guidesSkye = {
    guidesAscent: [`Skye Ascent Combos:`, `/GUIDES/SKYE/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/SKYE/ASCENT/skyeGameplayGuide.mp4`, `Skye comes with a stacked kit, packed to the brim with not just CC but damage, surveillance, and an AOE heal. Guiding Light (flash) is perhaps the most potent ability in her kit.`, `Thus, an Agent like Skye is designed to dominate in a close-quartered map structure, like Ascent. Adding her to the team composition allows teammates to go in for that quick peek around corners, which can be crucial for mid control on arenas like Ascent.`, `Skye Guide for Ascent`],
    guidesSplit: [`Skye Split Combos:`, `/GUIDES/SKYE/SPLIT/Skye`, `Gameplay Guide:`, `/GUIDES/SKYE/SPLIT/skyeGameplayGuide.mp4`, `Flashers are crucial on all maps, but they’re overpowered on Split. Skye is one of the best flashers to pick on Split, as her birds are tough to dodge around the map’s sharp corners. Enemies can barely react to a bird popping in their faces. `, `Paired with a duelist, Skye can help breeze into bombsites with minimal damage taken. Her tiger ensures that close angles are clear of mercenaries, and the team can quickly get the Spike planted. This agent can help her duelist pick fights against vulnerable and blind enemies on defense. `, `Skye Guide for Split`],
    guidesFracture: [`Skye Fracture Combos:`, `/GUIDES/SKYE/FRACTURE/Skye`, `Gameplay Guide:`, `/GUIDES/SKYE/FRACTURE/SkyeGameplayGuide.mp4`, `Skye is the perfect Agent to pick when entering sites on Fracture in Valorant. Her ability to recon a close-quarters area with the Tiger even puts Sova aside.`, `The ability to guide flashes to her will on the site when helping her teammates rush in is just one of the few reasons why players should pick Skye on Fracture.`, `Skye Guide for Fracture`],
    guidesBind: [`Skye Bind Combos:`, `/GUIDES/SKYE/BIND/Skye`, `Gameplay Guide:`, `/GUIDES/SKYE/BIND/skyeGameplayGuide.mp4`, `Although Skye performs decently on any map due to her design, she is one of the few that can effectively abuse the teleports on Bind.`, `While most of the flash agents struggle to execute properly on this map, Skye doesn't have that issue and can use her flashes as an information gathering tool. Because this map does not have any tall structures, she can also use her flashes to blind enemies that are behind coverage, by aiming the flash higher up in the sky.`, `Skye Guide for Bind`],
    guidesBreeze: [`Skye Breeze Combos:`, `/GUIDES/SKYE/BREEZE/Skye`, `Gameplay Guide:`, `/GUIDES/SKYE/BREEZE/skyeGameplayGuide.mp4`, `Somewhat surprisingly Skye takes the top spot as the best Initiator on Breeze. Even though she is a bit hard to use properly and a bit lackluster in the information gathering role, we think a lot of her potential gets unleashed on Breeze.`, `The agent meta on the map might be a direct result of how open this map is. This is not to say that agents like Sova and Breach are bad here, but with so many angles it's easy to dodge Sova darts. Using her birds on A and B main is a good tactic and they can help you rush mid as well.`, `Skye Guide for Breeze`],
    guidesPearl: [`Skye Pearl Combos:`, `/GUIDES/SKYE/PEARL/Skye`, `Gameplay Guide:`, `/GUIDES/SKYE/PEARL/skyeGameplayGuide.mp4`, `Flashes are crucial to winning a game of Valorant, but most agents are equipped with close-range pop flashes. Not Skye, though.`, `The wild initiator has a bird that explodes into a burst of light at will. This unique feature of Skye’s flash makes her the perfect initiator to blindside enemies on Pearl’s vast structure. Pearl is an extensive map but with abundant chokepoints. Gaining intel will become easier with Skye’s beasts sweeping around corners. `, `Skye Guide for Pearl`],
    guidesIcebox: [`Skye Icebox Combos:`, `/GUIDES/SKYE/ICEBOX/Skye`, `Gameplay Guide:`, `/GUIDES/SKYE/ICEBOX/skyeGameplayGuide.mp4`, `Icebox was the first Valorant map to include horizontal ziplines, which can be found at the A Site. The Icebox map is full of angles, has plenty of cover and enables the use of elevated positions, requiring your team to have aptitude in skirmishes and aiming.`, `Skye in Icebox is not a very common pick among pro gamers, but if you do find yourself in such a game, optimal and strategic use of Skye and her abilities are pivotal.`, `Skye Guide for Icebox`],
    guidesHeaven: [`Skye Haven Combos:`, `/GUIDES/SKYE/HEAVEN/Skye`, `Gameplay Guide:`, `/GUIDES/SKYE/HEAVEN/skyeGameplayGuide.mp4`, `Skye has been threatening to overtake Sova as the best Initiator in the game for quite some time now and she keeps making a case for herself on Haven.`, `Skye's win rate on this map seems to be explained by the fact that this is a very large and open map, thus giving her utility the opportunity to shine. Her Trailblazer is great at clearing out areas like Garage and Short, and her Flash is excellent at gathering info.`, `Skye Guide for Haven`]
}
const guidesCypher = {
    guidesAscent: [`Cypher Ascent Combos:`, `/GUIDES/CYPHER/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/CYPHER/ASCENT/cypherGameplayGuide.mp4`, `Cypher’s ability to break intel on the complex layout of Ascent makes him a must-have in all comps for the map.`, `Ascent is a relatively large map with extensive bombsites that can be tricky to defend. The map is a tall order without an efficient Sentinel who’s not only able to watch flanks, but also excels at pausing pushes. Luckily, Cypher is a jack of all trades. The Moroccan intel broker can be your wild card due to the unique schemes his kit is capable of creating. `, `Cypher Guide for Ascent`],
    guidesSplit: [`Cypher Split Combos:`, `/GUIDES/CYPHER/SPLIT/Cypher`, `Gameplay Guide:`, `/GUIDES/CYPHER/SPLIT/cypherGameplayGuide.mp4`, `Split is one of the most crowded maps in Valorant, with a lot of corners and chokepoints that players can use to ambush the enemy team.`, `Though the Split map in Valorant doesn’t have many open areas, there are certain vantage points that a Cypher player can use to get the necessary information for the team.`, `Cypher Guide for Split`],
    guidesFracture: [`Cypher Fracture Combos:`, `/GUIDES/CYPHER/FRACTURE/Cypher`, `Gameplay Guide:`, `/GUIDES/CYPHER/FRACTURE/cypherGameplayGuide.mp4`, `Fracture’s complex underground design calls for a reliable Sentinel who can watch the backlines, but Cypher has the added bonus of being able to completely lock down flanks. `, `While attackers on Fracture have an edge due to the double spawn, the underground area will have them watching their backs. This will likely see agents like Cypher and Killjoy able to do some big things on the map. `, `Cypher Guide for Fracture`],
    guidesBind: [`Cypher Bind Combos:`, `/GUIDES/CYPHER/BIND/Cypher`, `Gameplay Guide:`, `/GUIDES/CYPHER/BIND/cypherGameplayGuide.mp4`, `Bind is a relatively well-balanced map where Attackers win around 49% of the time while Defenders win closer to 50%. Despite the Defending side getting the upper hand, the advantage is so slight that both sides have equal chances of winning on Bind assuming everything else is equal.`, `Sentinel Agents will have a great time playing Defense on Bind, thanks to the relatively narrow and predictable entryways found at A-Short, A-Showers, B-Hooka, and B-Garden. With the right setups, Sentinel Agents such as Cypher can easily hold down entire bombsites alone.`, `Cypher Guide for Bind`],
    guidesBreeze: [`Cypher Breeze Combos:`, `/GUIDES/CYPHER/BREEZE/Cypher`, `Gameplay Guide:`, `/GUIDES/CYPHER/BREEZE/cypherGameplayGuide.mp4`, `Breeze is one of the biggest Valorant maps. With two-way doors, a one-way mid-chute, and multiple entrance paths on any site, it is very difficult to take care of all the areas at a time.`, `In this situation, players need the agents to gather information about the enemy locations. When it comes to gaining information, Cypher is by far one of the best agent in Valorant and he can surely be a top pick, with the right set up, on the map of Breeze as well.`, `Cypher Guide for Breeze`],
    guidesPearl: [`Cypher Pearl Combos:`, `/GUIDES/CYPHER/PEARL/Cypher`, `Gameplay Guide:`, `/GUIDES/CYPHER/PEARL/cypherGameplayGuide.mp4`, `Pearl is a pretty hard-to-defend map as there are various routes to enter the sites and the map has a ton of verticality. Ramps, towers, dugouts, and stairs can challenge players' aim and crosshair placement.`, `Cypher is an excellent Agent choice for this map as he can focus on detecting enemies, following their movements, and marking them, all without being physically present in the location.`, `Cypher Guide for Pearl`],
    guidesIcebox: [`Cypher Icebox Combos:`, `/GUIDES/CYPHER/ICEBOX/Cypher`, `Gameplay Guide:`, `/GUIDES/CYPHER/ICEBOX/cypherGameplayGuide.mp4`, `Cypher thrives on maps with tight corners and lanes, such as Icebox. Cypher players can get super creative with these maps’ Trip Wire, Cybercage, and Spycam setups.`, `Thanks to Cypher’s Spycam, defending either A-site or B-site and Middle should be very doable. For example, Cypher can hang out on A-site and use his Spycam to watch middle and A-site alternatively. The same can be done for B-site as well.`, `Cypher Guide for Icebox`],
    guidesHeaven: [`Cypher Haven Combos:`, `/GUIDES/CYPHER/HEAVEN/Cypher`, `Gameplay Guide:`, `/GUIDES/CYPHER/HEAVEN/cypherGameplayGuide.mp4`, `Picking the right Sentinel Agent on Haven can make or break your team’s effectiveness when playing Defense in VALORANT’s only triple bombsite map. You will need a Sentinel who can easily hold down any bombsite on Haven alone, so your teammates can guard the rest of the bomb sites on the map.`, `One Sentinel that fits the bill perfectly is Cypher. Not only are his traps very effective in maps with tight corners and lanes (which Haven is, by the way), but he also has one of the best surveillance abilities in the game with his Spycam.`, `Cypher Guide for Haven`]
}
const guidesSova = {
    guidesAscent: [`Sova Ascent Combos:`, `/GUIDES/SOVA/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/SOVA/ASCENT/sovaGameplayGuide.mp4`, `Design is the most important part of the creation of any Valorant agent, and Riot Games sure hit the nail on its head with Sova.`, `He has been one of the best Initiator agents in the game ever since his release, and continues to dominate the meta solely based on the utility in his abilities.`, `Sova Guide for Ascent`],
    guidesSplit: [`Sova Split Combos:`, `/GUIDES/SOVA/SPLIT/Sova`, `Gameplay Guide:`, `/GUIDES/SOVA/SPLIT/sovaGameplayGuide.mp4`, `Split is not a good map for Sova. While there are a ton of good areas where Sova can utilize his Hunter’s Fury, the rotation areas are very tight, which makes it hard for Sova to gain useful information.`, `Areas such as Mid Vents, Sewers, Mail, and even B Elbow are hard to scan with a Recon Bolt. However, there are a few lineups in Split where you can maximize Sova on Split.`, `Sova Guide for Split`],
    guidesFracture: [`Sova Fracture Combos:`, `/GUIDES/SOVA/FRACTURE/Sova`, `Gameplay Guide:`, `/GUIDES/SOVA/FRACTURE/sovaGameplayGuide.mp4`, `Pro players’ views on playing Sova on Fracture are mostly negative. With so many angles to watch and players potentially roaming the map, Sova finds it hard to provide easy support to the team. However, he is not all bad. An Initiator like Skye or Breach can outshine him easily on Fracture because of their kit.`, `When you are using Sova’s Recon Bolts, you have to be preemptive with your Recon Bolts. Enemies can enter a site extremely fast and you might need to provide support by shooting instead of using a Recon Bolt.`, `Sova Guide for Fracture`],
    guidesBind: [`Sova Bind Combos:`, `/GUIDES/SOVA/BIND/Sova`, `Gameplay Guide:`, `/GUIDES/SOVA/BIND/sovaGameplayGuide.mp4`, `Bind is one of Sova’s strongest maps because of the tight corners and long hallways for his Hunter’s Fury.`, `There are a ton of Recon Bolts you can angle without the need for mastering lineups, but there are some lineups that are still useful since Sova can support any site from anywhere with insane Recon Bolts.`, `Sova Guide for Bind`],
    guidesBreeze: [`Sova Breeze Combos:`, `/GUIDES/SOVA/BREEZE/Sova`, `Gameplay Guide:`, `/GUIDES/SOVA/BREEZE/sovaGameplayGuide.mp4`, `Breeze is another good Sova map. The vast spaces around power positions and the amount of space you have on each site make Recon Bolts and Owl Drones extremely useful. An initiator like Skye is still good but it lacks the information gathering that Sova brings.`, `However, this is probably one of the maps that dual-initiator team compositions shine the most. Sova’s Recon Bolt does not need to be exactly precise since there are a ton of good spots that do not need a lineup to execute.`, `Sova Guide for Breeze`],
    guidesPearl: [`Sova Pearl Combos:`, `/GUIDES/SOVA/PEARL/Sova`, `Gameplay Guide:`, `/GUIDES/SOVA/PEARL/sovaGameplayGuide.mp4`, `Pearl follows a three-lane map design with multiple pathways to the spike sites. It has a few open spaces and plenty of tight corners which are made to instigate multiple fights between attackers and the defenders.`, `Sova can be quite difficult to play on this map unless players can master the recon lineups shown in this guide.`, `Sova Guide for Pearl`],
    guidesIcebox: [`Sova Icebox Combos:`, `/GUIDES/SOVA/ICEBOX/Sova`, `Gameplay Guide:`, `/GUIDES/SOVA/ICEBOX/sovaGameplayGuide.mp4`, `Sova’s role on Icebox is more about using his information gathering skills because of the number of corners you need to clear on B Site and A Site.`, `There are only a few Shock Bolt lineups that are worth using in Icebox.`, `Sova Guide for Icebox`],
    guidesHeaven: [`Sova Haven Combos:`, `/GUIDES/SOVA/HEAVEN/Sova`, `Gameplay Guide:`, `/GUIDES/SOVA/HEAVEN/sovaGameplayGuide.mp4`, `Haven is an amazing map for Sova when it comes to Recon Bolt usage. He can support from basically anywhere on the map, and there are a total of three sites to defend or attack.`, `There are a lot of long alleys or hallways for a good Hunter’s Fury paired with a Recon Bolt scan as well.`, `Sova Guide for Haven`]
}
const guidesKilljoy = {
    guidesAscent: [`Killjoy Ascent Combos:`, `/GUIDES/KILLJOY/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/KILLJOY/ASCENT/killjoyGameplayGuide.mp4`, `Since her release, Killjoy has been a stable pick on Ascent because of her powerful defense. Attackers only have a few options routes to get on a site, so her traps can often get lots of value. Her influential ultimate can alter the outcome of rounds by making site takes and retakes much easier.`, `Killjoy’s specialty is in her defensive setups. She is very good at holding down A, but she is even better at B. Trying to push a Sova and Killjoy defending B can feel almost impossible.`, `Killjoy Guide for Ascent`],
    guidesSplit: [`Killjoy Split Combos:`, `/GUIDES/KILLJOY/SPLIT/Killjoy`, `Gameplay Guide:`, `/GUIDES/KILLJOY/SPLIT/killjoyGameplayGuide.mp4`, `Split is a map that requires heavy usage of utility. Defending on Split is a comparatively easy task. Holding onto some crucial chokepoints often does the job. However, playing post-plant scenarios in Split’s B site is exceptionally challenging.`, `Similarly, playing Killjoy on Split is not an easy task due to the complex characteristics of her abilities.`, `Killjoy Guide for Split`],
    guidesFracture: [`Killjoy Fracture Combos:`, `/GUIDES/KILLJOY/FRACTURE/Killjoy`, `Gameplay Guide:`, `/GUIDES/KILLJOY/FRACTURE/killjoyGameplayGuide.mp4`, `With the design of Fracture, Riot Games managed to create a really unique map. Usually all Sentinel agents are good on maps like this with tight entrances, so you should keep that in mind the next time you are in agent selection for Fracture.`, `Team composition is a major factor and all Valorant agents have unique abilities. This is something that makes Killjoy a very versatile and valuable agent.`, `Killjoy Guide for Fracture`],
    guidesBind: [`Killjoy Bind Combos:`, `/GUIDES/KILLJOY/BIND/Killjoy`, `Gameplay Guide:`, `/GUIDES/KILLJOY/BIND/killjoyGameplayGuide.mp4`, `Bind is one of the best maps in the game. It allows such quick rotations, always providing a tactical and technical game almost every time. Killjoy certainly has her best maps, and Bind is one of her strongest maps.`, `Her Ultimate, the Lockdown, is very situational and can be very useless if not played correctly. This is why it is important that you learn some Killjoy strategies, lineups, and Ult spots to help you win more rounds.`, `Killjoy Guide for Bind`],
    guidesBreeze: [`Killjoy Breeze Combos:`, `/GUIDES/KILLJOY/BREEZE/Killjoy`, `Gameplay Guide:`, `/GUIDES/KILLJOY/BREEZE/killjoyGameplayGuide.mp4`, `Breeze is the largest map Riot Games have released up to date, but Valorant players that play Sentinel agents will always find a way to make an impact.`, `Using Killjoy’s lineups and abilities, you can be a valuable piece to every team composition, if you know how to execute them.`, `Killjoy Guide for Breeze`],
    guidesPearl: [`Killjoy Pearl Combos:`, `/GUIDES/KILLJOY/PEARL/Killjoy`, `Gameplay Guide:`, `/GUIDES/KILLJOY/PEARL/killjoyGameplayGuide.mp4`, `Playing Killjoy on Pearl can secure map control. Killjoy has the ability to force enemies off bomb sites with her strong defensive abilities. On a map like Pearl, where there are multiple pathways and entrances, this will be a definite advantage.`, `Past stats have undoubtedly proven that Killjoy's utilities can contribute to a high winrate. Killjoy has a variety of defensive abilities, including her Turret, Alarm Bot and Nanoswarm Grenades, commonly referred to as mollies.`, `Killjoy Guide for Pearl`],
    guidesIcebox: [`Killjoy Icebox Combos:`, `/GUIDES/KILLJOY/ICEBOX/Killjoy`, `Gameplay Guide:`, `/GUIDES/KILLJOY/ICEBOX/killjoyGameplayGuide.mp4`, `The winter wonderland known to most Valorant players as the map Icebox, offers a great opportunity for all the dedicated Killjoy players.`, `She might not hold the title of the best Sentinel agent like she used too, but this map sure fits her kit and gameplay. To say that Killjoy’s abilities don't bring massive value on compact spike sites like these on Icebox, is a lie.`, `Killjoy Guide for Icebox`],
    guidesHeaven: [`Killjoy Haven Combos:`, `/GUIDES/KILLJOY/HEAVEN/Killjoy`, `Gameplay Guide:`, `/GUIDES/KILLJOY/HEAVEN/killjoyGameplayGuide.mp4`, ``, ``, `Killjoy Guide for Haven`]
}
const guidesHarbor = {
    guidesAscent: [`Harbor Ascent Combos:`, `/GUIDES/HARBOR/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/HARBOR/ASCENT/harborGameplayGuide.mp4`, `Ascent is a Valorant map where having a competent Controller Agent is paramount. The map is not a large one but has multiple access points for opponents to exploit.`, `Harbor can be a great asset to the team as some of his abilities can go through map structures, keeping the player safe behind cover.`, `Harbor Guide for Ascent`],
    guidesSplit: [`Harbor Split Combos:`, `/GUIDES/HARBOR/SPLIT/Harbor`, `Gameplay Guide:`, `/GUIDES/HARBOR/SPLIT/harborGameplayGuide.mp4`, `The maze-like design, of Split, consists of two spike sites that each have three entrances. These entrances are actually choke points for multiple pathways which makes rotating fast but also dangerous.`, `Harbor definitely needs to be better paired with a real initiators, but he is extremely strong at taking sites.`, `Harbor Guide for Split`],
    guidesFracture: [`Harbor Fracture Combos:`, `/GUIDES/HARBOR/FRACTURE/Harbor`, `Gameplay Guide:`, `/GUIDES/HARBOR/FRACTURE/harborGameplayGuide.mp4`, `Fracture is the most uniquely designed Valorant map that Riot Games has ever developed.`, `With a ton of access points through ropes around the map and a central spawn point for the defenders, Harbor can thrive with his abilities.`, `Harbor Guide for Fracture`],
    guidesBind: [`Harbor Bind Combos:`, `/GUIDES/HARBOR/BIND/Harbor`, `Gameplay Guide:`, `/GUIDES/HARBOR/BIND/harborGameplayGuide.mp4`, `With his versatile kit, Harbor immediately became the first choice for many Controller players. The only downside to his utilities is that they do not deal any damage, unlike Brimstone's Molly and Viper's Snake Bite. However, this will not stop him from making some aggressive plays in Valorant.`, `Harbor can particularly shine on maps like Bind that have much narrower spaces. The Indian Agent's kit carries a plethora of abilities to help the team execute both attack and defense on Valorant's Bind.`, `Harbor Guide for Bind`],
    guidesBreeze: [`Harbor Breeze Combos:`, `/GUIDES/HARBOR/BREEZE/Harbor`, `Gameplay Guide:`, `/GUIDES/HARBOR/BREEZE/harborGameplayGuide.mp4`, `The introduction of Harbor to Valorant is fascinating, especially for Breeze. His ability directly competes with Viper’s wall. Harbor has the added benefit of shaping and bending the wall as the situation calls for it, something Viper cannot do.`, `Harbor does not permanently place his wall, though. It has a long cooldown, but it can be reused completely differently next time if the player wishes to.`, `Harbor Guide for Breeze`],
    guidesPearl: [`Harbor Pearl Combos:`, `/GUIDES/HARBOR/PEARL/Harbor`, `Gameplay Guide:`, `/GUIDES/HARBOR/PEARL/harborGameplayGuide.mp4`, `Harbor is one of the strongest Controller Agents in Valorant for aggressive retakes. He is a great fit for Pearl, especially in a double-Controller setup.`, `That said, he has an annoying limit on his abilities, and players can quickly exhaust his kit without any notable outcome.`, `Harbor Guide for Pearl`],
    guidesIcebox: [`Harbor Icebox Combos:`, `/GUIDES/HARBOR/ICEBOX/Harbor`, `Gameplay Guide:`, `/GUIDES/HARBOR/ICEBOX/harborGameplayGuide.mp4`, `Harbor's water abilities are very similar to Viper and Phoenix walls and simultaneously share similarities with traditional smoke Agents such as Omen and Brimstone. That said, Harbor's kit does not include a utility that can damage enemies. This makes him an extremely passive Controller.`, `Harbor possesses two water wall abilities similar to Viper's. The High Tide wall can be bent in any direction according to the player's desire. The Cascade is a tall wall that can slow enemies in contact and keep advancing once deployed. Lastly, the Cove is a smoke bubble with a shield layering that can be broken with a few bullets or even a melee. All of these abilities work wondefully on a narrow map like Icebox.`, `Harbor Guide for Icebox`],
    guidesHeaven: [`Harbor Haven Combos:`, `/GUIDES/HARBOR/HEAVEN/Harbor`, `Gameplay Guide:`, `/GUIDES/HARBOR/HEAVEN/harborGameplayGuide.mp4`, `Haven is the most unique map in Valorant. It is the only one that consists of a total of three sites. `, `Utilizing long angles and tall viewpoints, players must employ Harbor's abilities effectively to obstruct enemies' lines of sight.`, `Harbor Guide for Haven`]
}
const guidesViper = {
    guidesAscent: [`Viper Ascent Combos:`, `/GUIDES/VIPER/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/VIPER/ASCENT/viperGameplayGuide.mp4`, `Contrary to other maps Viper is not the most picked controller on Ascent. Agents such as Brimstone, Astra, and even Omen see more playing time. Despite not being a must-pick Agent you can still find a lot of value with Viper on Ascent. `, `Her kit makes her very useful on the defensive side, helping a lot when it comes to closing down bombsites. She is also great at blocking the enemy's vision when executing into a bombsite, being an overall great Agent to take control of important parts of the map.`, `Viper Guide for Ascent`],
    guidesSplit: [`Viper Split Combos:`, `/GUIDES/VIPER/SPLIT/Viper`, `Gameplay Guide:`, `/GUIDES/VIPER/SPLIT/viperGameplayGuide.mp4`, `Split is a map coined for its polar opposite aesthetics from one side of the map to the other. Bombsite A has two entry points and Bombsite B has one entry point, not including the middle lane.`, `With Viper, you can block off entire areas with a well-placed Poison Cloud or Toxic Screen.`, `Viper Guide for Split`],
    guidesFracture: [`Viper Fracture Combos:`, `/GUIDES/VIPER/FRACTURE/Viper`, `Gameplay Guide:`, `/GUIDES/VIPER/FRACTURE/viperGameplayGuide.mp4`, `Fracture has two attacking sides with defenders in the middle. The map favors the attackers, mostly until the players can turn the tables with their tactics. A strong defense requires a good controller agent like Viper.`, `Players can dominate the map with Viper if they have adequate lineup knowledge. However, to learn and discover new lineups, they also need to have proper map awareness.`, `Viper Guide for Fracture`],
    guidesBind: [`Viper Bind Combos:`, `/GUIDES/VIPER/BIND/Viper`, `Gameplay Guide:`, `/GUIDES/VIPER/BIND/viperGameplayGuide.mp4`, `Viper is one of the best controllers on Bind, with her ability kit allowing her to have a big impact on the defensive and attacking side.`, `This means she is a very useful agent to have in any team composition. As a controller agent Viper's job is to make it easier for her team to take control of certain parts o the map, and she does that very well on Bind.`, `Viper Guide for Bind`],
    guidesBreeze: [`Viper Breeze Combos:`, `/GUIDES/VIPER/BREEZE/Viper`, `Gameplay Guide:`, `/GUIDES/VIPER/BREEZE/viperGameplayGuide.mp4`, `Viper is considered the best Valorant agent on Breeze.`, `Every team composition must have a Viper if you want to find success on this map. She provides a lot of value on the attacking and defensive side, facilitating the team entrance on the site, and preventing the enemy team from doing the same on defense. Viper ability kit makes her the best controller agent on Breeze.`, `Viper Guide for Breeze`],
    guidesPearl: [`Viper Pearl Combos:`, `/GUIDES/VIPER/PEARL/Viper`, `Gameplay Guide:`, `/GUIDES/VIPER/PEARL/viperGameplayGuide.mp4`, `New Valorant map Pearl is a maze, but not for Viper. The poisonous controller can take site control effectively with her skills. `, `Controllers may struggle a bit on Pearl due to the sheer number of site openings. Each smoker in Valorant has a typical spherical smoke that may not be enough on large sites. However, Viper works better than most in solo situations. Her Toxic Screen splits the area in two, making her viable on locations that are otherwise tricky for controllers.`, `Viper Guide for Pearl`],
    guidesIcebox: [`Viper Icebox Combos:`, `/GUIDES/VIPER/ICEBOX/Viper`, `Gameplay Guide:`, `/GUIDES/VIPER/ICEBOX/viperGameplayGuide.mp4`, `Viper is considered by far the best controller agent on Icebox. Without a Viper in your team comp, many players consider Icebox unplayable especially pro teams.`, `She provides a lot of value on the attacking and defensive side, her toxic screen is vital to finding success on both sides of the map. On Icebox Viper is a complete agent, fiding impact on defense by locking down the b site, and helping players from her team take control of different parts of the map with the toxic screen. Every valorant player should be able to play Viper on Icebox. Viper lineups are even stronger than Sova shock bolt lineups on this map since they are easier to execute.`, `Viper Guide for Icebox`],
    guidesHeaven: [`Viper Haven Combos:`, `/GUIDES/VIPER/HEAVEN/Viper`, `Gameplay Guide:`, `/GUIDES/VIPER/HEAVEN/viperGameplayGuide.mp4`, `Viper is not the best controller agent on haven, and other agents such as Omen, Brimstone, and Astra are more commonly picked. Despite that, she is still a useful agent to have on your team composition. `, `Her ability kit makes her very valuable on the defensive side. Viper is a controller but on the defensive side, she is also a sentinel agent, due to how good she is at locking down sites. In the post-plant, her lineups can also be a game-changer. Viper lineups might not be as strong as Sova shock bolt lineups on this map, but they are still very valuable.`, `Viper Guide for Haven`]
}
const guidesPheonix = {
    guidesAscent: [`Pheonix Ascent Combos:`, `/GUIDES/PHEONIX/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/PHEONIX/ASCENT/pheonixGameplayGuide.mp4`, `Phoenix might be a decent addition to your team composition on Ascent.`, `Even though he might not be the best Duelist out there, you can use his abilities in a way that can really spoil the plans of your enemies`, `Pheonix Guide for Ascent`],
    guidesSplit: [`Pheonix Split Combos:`, `/GUIDES/PHEONIX/SPLIT/Pheonix`, `Gameplay Guide:`, `/GUIDES/PHEONIX/SPLIT/pheonixGameplayGuide.mp4`, `Phoenix comes in the last tier among all agents in Valorant, especially for Split. `, `He might be able to do the job in lower-ranked lobbies, but he is not as efficient and effective in higher-ranked gameplay.`, `Pheonix Guide for Split`],
    guidesFracture: [`Pheonix Fracture Combos:`, `/GUIDES/PHEONIX/FRACTURE/Pheonix`, `Gameplay Guide:`, `/GUIDES/PHEONIX/FRACTURE/pheonixGameplayGuide.mp4`, `The layout of Fracture is mind-boggling. It traps defenders in its middle third (the middle third can be likened to the crossbar in the capital letter H).`, `Although Pheonix might not be the strongest duelist at the moment, he can still bring value to a team if used effectively. `, `Pheonix Guide for Fracture`],
    guidesBind: [`Pheonix Bind Combos:`, `/GUIDES/PHEONIX/BIND/Pheonix`, `Gameplay Guide:`, `/GUIDES/PHEONIX/BIND/pheonixGameplayGuide.mp4`, `While Phoenix may not be the best Agent to play on Bind, he is still quite useful, especially if the team composition is right.`, `Phoenix’s Curveball can be self-destructive if not utilized properly. Especially in low-Elo lobbies where communication is not really a high priority among players, playing Phoenix will require extra caution. However, this aspect is totally different in Professional matches or High-Elo lobbies. Based on the player, Phoenix can be really effective. `, `Pheonix Guide for Bind`],
    guidesBreeze: [`Pheonix Breeze Combos:`, `/GUIDES/PHEONIX/BREEZE/Pheonix`, `Gameplay Guide:`, `/GUIDES/PHEONIX/BREEZE/pheonixGameplayGuide.mp4`, `Yes, Phoenix is not the best pick for Breeze, and picking this Agent almost always involves a drop in win rate.`, `But is it necessary? No, especially if you decide to learn the lineups we are going to present to you today!`, `Pheonix Guide for Breeze`],
    guidesPearl: [`Pheonix Pearl Combos:`, `/GUIDES/PHEONIX/PEARL/Pheonix`, `Gameplay Guide:`, `/GUIDES/PHEONIX/PEARL/pheonixGameplayGuide.mp4`, `Pearl is the first map that is located on Omega Earth. It is also an underwater map situated in Lisbon, Portugal. Pearl has an interesting design with two sites and three lanes, following a traditional map layout.`, `Though Phoenix is not a popular Dualist among players, it is different for Pearl. There are a lot of angles and tight spaces on the map, which makes it necessary to have flashes that can blind enemies for easy escape. Phoenix’s Wall can also come in handy in many open spaces such as the A Site. Not to mention his healing abilities are instrumental in clutch situations.`, `Pheonix Guide for Pearl`],
    guidesIcebox: [`Pheonix Icebox Combos:`, `/GUIDES/PHEONIX/ICEBOX/Pheonix`, `Gameplay Guide:`, `/GUIDES/PHEONIX/ICEBOX/pheonixGameplayGuide.mp4`, `Icebox is the only snow map in Valorant, and it provides a lot of verticality and a ton of angles that players need to check and clear to take control of the sites.`, `Phoenix is a great agent when defending on Icebox. His abilities to create a wall of fire, molly spike sites, and blind opponents help delay the entry of attackers into either site. His ultimate is always a game-changer, but it must be used judiciously and timed well.`, `Pheonix Guide for Icebox`],
    guidesHeaven: [`Pheonix Haven Combos:`, `/GUIDES/PHEONIX/HEAVEN/Pheonix`, `Gameplay Guide:`, `/GUIDES/PHEONIX/HEAVEN/pheonixGameplayGuide.mp4`, `Phoenix has a high pick-rate in Professional matches. Many teams have Phoenix in their agent compositions for Haven.`, `The key factor behind such a high pick rate is Phoenix’s Ultimate “Run It Back “ability. Other than that, his Curveball & Hot Hands also make him self-sufficient.`, `Pheonix Guide for Haven`]
}
const guidesAstra = {
    guidesAscent: [`Astra Ascent Combos:`, `/GUIDES/ASTRA/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/ASTRA/ASCENT/astraGameplayGuide.mp4`, `Ascent is one of those maps on which drafting is crucial. Having a good team comp is necessary for success on any map but especially on this one, depending on your elo that is`, `Ever since Astra was released, she has been one of the premier smoke agents in the game. And where better to capitalize on that ability than on a small map like Ascent.`, `Astra Guide for Ascent`],
    guidesSplit: [`Astra Split Combos:`, `/GUIDES/ASTRA/SPLIT/Astra`, `Gameplay Guide:`, `/GUIDES/ASTRA/SPLIT/astraGameplayGuide.mp4`, `Set in Tokyo, Split is a map that has been part Valorant since its beta release. The narrow entry points and elevated surfaces at both bomb sites can be troubling for attackers, making it a defender-sided map.`, `Astra's win rate might not tell the whole story and it might be because she is a difficult agent to master, but in the right hands, Astra can be an oppressive pick.`, `Astra Guide for Split`],
    guidesFracture: [`Astra Fracture Combos:`, `/GUIDES/ASTRA/FRACTURE/Astra`, `Gameplay Guide:`, `/GUIDES/ASTRA/FRACTURE/astraGameplayGuide.mp4`, `Fracture features an H-shaped layout where the defenders spawn in the center, which is a stark difference from other maps in rotation. Attackers can also push both sites from two directions by default, requiring defenders to always prepare for a push from two directions. `, `Astra can smoke entrances to impede an enemy push or provide cover for her team. She can use this to prevent enemies from pushing in simultaneously or at the very least make it harder for them. She can also stun enemies with her Nova Pulse, making them easy targets.`, `Astra Guide for Fracture`],
    guidesBind: [`Astra Bind Combos:`, `/GUIDES/ASTRA/BIND/Astra`, `Gameplay Guide:`, `/GUIDES/ASTRA/BIND/astraGameplayGuide.mp4`, `Astra has the second-highest win percentage on the Bind map right after Viper in Valorant. Players can now employ Gravity to draw players out of hiding spots. Bind turns Astra into a different beast altogether.`, `Her abilities can help teams retake any site in a quick manner. Astra has the ability to control the entire map from a static location, and this makes her one of the best Controllers on this map.`, `Astra Guide for Bind`],
    guidesBreeze: [`Astra Breeze Combos:`, `/GUIDES/ASTRA/BREEZE/Astra`, `Gameplay Guide:`, `/GUIDES/ASTRA/BREEZE/astraGameplayGuide.mp4`, `The main reason you should pick Astra as your smoke agent on Breeze is because of the range of her Astral Form. She can basically drop her Astral Stars anywhere on the map, regardless of how far she is from them.`, `On defense, she can delay pushes that could buy time for her teammates to rotate to where the attackers are. And, on offense, she can help clear corners for her team with her Gravity Well or Nova Pulse.`, `Astra Guide for Breeze`],
    guidesPearl: [`Astra Pearl Combos:`, `/GUIDES/ASTRA/PEARL/Astra`, `Gameplay Guide:`, `/GUIDES/ASTRA/PEARL/astraGameplayGuide.mp4`, ` Pearl features narrow passages, multiple entryways onto the site, some tight corners, and a lot of verticalities.`, `Astra is not recommended on this map due to her slow playstyle.`, `Astra Guide for Pearl`],
    guidesIcebox: [`Astra Icebox Combos:`, `/GUIDES/ASTRA/ICEBOX/Astra`, `Gameplay Guide:`, `/GUIDES/ASTRA/ICEBOX/astraGameplayGuide.mp4`, `Icebox is still one of the more vertical maps in VALORANT features many elevation changes for various spots around the map. With a ton of horizontal and vertical angles, to check upon site entry and Defense, you have to know the Best Smoke Spots on Icebox to reduce the number of angles your team is exposed to.`, `In the VCT Berlin Masters Astra held over an 80% pick rate for all maps except Icebox and Breeze. This doesn't mean you can't reach a great results on those maps, if you know what your doing..`, `Astra Guide for Icebox`],
    guidesHeaven: [`Astra Haven Combos:`, `/GUIDES/ASTRA/HEAVEN/Astra`, `Gameplay Guide:`, `/GUIDES/ASTRA/HEAVEN/astraGameplayGuide.mp4`, `Haven is the only one with three sites: A, B, and C. A lot of players love its design and layout, making it the least-dodged map in the current meta.`, `Astra can simply use her stars to smoke, stun, or pull enemies on opposite sites, regardless of her location. Since the map is linear, Astra’s ultimate can be maximized best.`, `Astra Guide for Haven`]
}
const guidesBrimstone = {
    guidesAscent: [`Brimstone Ascent Combos:`, `/GUIDES/BRIMSTONE/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/ASCENT/brimstoneGameplayGuide.mp4`, `Ascent is a map with angles that can easily be covered by your handy smokes. That being said, it is essential that you place them in the best possible locations for your team to take advantage of your abilities.`, `Brimstone’s Sky Smoke ability allows him to deploy 1-3 smokes onto the map each round, within a certain area of where he is currently standing. These smokes, when used in coordination with the rest of the team, can be very useful on both, defense and attack.`, `Brimstone Guide for Ascent`],
    guidesSplit: [`Brimstone Split Combos:`, `/GUIDES/BRIMSTONE/SPLIT/Brimstone`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/SPLIT/brimstoneGameplayGuide.mp4`, `As the name suggests, Split is a map on which the attacking side will often attempt to attack bomb-sites from more than one area. The B-site is a fairly typical bombsite in Valorant, with one small choke-point leading into it. However, this site can be accessed through Middle and attacking teams will often try to split the B-site through Heaven and B-Main.`, `Brimstone can put the team at an advantage by smoking in the right areas. Smoke is an integral part of Valorant as it blocks chokepoints, obstructing enemy sight.`, `Brimstone Guide for Split`],
    guidesFracture: [`Brimstone Fracture Combos:`, `/GUIDES/BRIMSTONE/FRACTURE/Brimstone`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/FRACTURE/brimstoneGameplayGuide.mp4`, `Fracture is unlike any other map before it in VALORANT. Fracture is a slight departure from the classic long and short lanes toward either bombsite on the map. Instead, Fracture’s Dynamic Elements, the long zipline that Splits both A-site and B-site, allows the Attacking team to flank their chosen bombsite instantly.`, `Brimstone is the best controller to play on the map because his triple smoke is perfect for calculated executes.`, `Brimstone Guide for Fracture`],
    guidesBind: [`Brimstone Bind Combos:`, `/GUIDES/BRIMSTONE/BIND/Brimstone`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/BIND/brimstoneGameplayGuide.mp4`, `The layout of Bind is slightly different from the other maps, in that there is no real middle area. Instead, each bombsite can be accessed through two routes, all with quite narrow choke-points. For the attacking side – spreading out at the beginning of the round and taking map control is always a good idea.`, `The full power of Brimstone on Bind is revealed in the attack. His smokes are helping the team to enter any site, and Ult with moly is helping to not allow enemies to retake the site.`, `Brimstone Guide for Bind`],
    guidesBreeze: [`Brimstone Breeze Combos:`, `/GUIDES/BRIMSTONE/BREEZE/Brimstone`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/BREEZE/brimstoneGameplayGuide.mp4`, `Breeze is one of the biggest Valorant maps. With two-way doors, a one-way mid-chute, and multiple entrance paths on all sides, players need a great controller agent on this map.`, `With his combat stim, molly and smokes, Brimstone can be quite dynamic in this map for his team. His molly line-ups are very influential in post-plant scenarios for the attacking side.`, `Brimstone Guide for Breeze`],
    guidesPearl: [`Brimstone Pearl Combos:`, `/GUIDES/BRIMSTONE/PEARL/Brimstone`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/PEARL/brimstoneGameplayGuide.mp4`, `Unlike some of the previous maps in the game, Pearl will not feature any dynamic elements such as teleporters, ziplines or ropes. `, `Brimstone is one who players can effectively use as a Controller on any map. He is available for the entire Valorant community and has a utility kit that can serve the team in any scenario.`, `Brimstone Guide for Pearl`],
    guidesIcebox: [`Brimstone Icebox Combos:`, `/GUIDES/BRIMSTONE/ICEBOX/Brimstone`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/ICEBOX/brimstoneGameplayGuide.mp4`, `Icebox is a secret Kingdom excavation site that has been covered in snow. There are tons of boxes and machines on the map that add a ton of vertical layers to it. It also has a general theme of shipping containers, especially towards the middle part and the B site area.`, `Playing post plant situations on any site as Brimstone is really easy if you have your Orbital Strike and your Incendiary available. There are a few molly lineups for the default plant spot on the A Site and this is one of them.`, `Brimstone Guide for Icebox`],
    guidesHeaven: [`Brimstone Haven Combos:`, `/GUIDES/BRIMSTONE/HEAVEN/Brimstone`, `Gameplay Guide:`, `/GUIDES/BRIMSTONE/HEAVEN/brimstoneGameplayGuide.mp4`, `The map Haven is unique in Valorant, as it has three bomb-sites. This allows the attacking side another option for planting the spike. The middle bomb-site (B-site) is the easiest to access, however, it often proves the most difficult to hold.`, `There are many abilities that can be used to effectively retake the B-site and block off vision for the attacking-side, allowing the retaking side to defuse the spike. Spike plants on the B-site are more likely to be successful when the attacking side has their ultimate abilities ready, most notably Sova or Brimstone’s ultimates.`, `Brimstone Guide for Haven`]
}
const guidesNeon = {
    guidesAscent: [`Neon Ascent Combos:`, `/GUIDES/NEON/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/NEON/ASCENT/neonGameplayGuide.mp4`, `Valorant's Ascent map has a long Mid area which often becomes difficult for the defenders to control. However, with Neon, you can take all the opponent players down within a moment, if played efficiently.`, `Neon can be a difficult agent to track due to her fast movement. Thus, the Valorant duelist can easily entry-frag or go ahead for a speedy lurk and kill all the enemies before they get to react. This will make defending rounds easier to win on Ascent.`, `Neon Guide for Ascent`],
    guidesSplit: [`Neon Split Combos:`, `/GUIDES/NEON/SPLIT/Neon`, `Gameplay Guide:`, `/GUIDES/NEON/SPLIT/neonGameplayGuide.mp4`, `Players can easily play aggressive with Neon, as she is a suitable pick for entry-frag, especially in a map like Split. But she can be aggressively good in defense as well, who can combat enemies, even before they can track her.`, `Neon's ability toolkit supports her to play aggressively and knockdown enemies within a moment. She can make an entry frag super fast, which might become difficult for the enemies to resist. One can also play the defending rounds aggressively by killing the enemies instantly.`, `Neon Guide for Split`],
    guidesFracture: [`Neon Fracture Combos:`, `/GUIDES/NEON/FRACTURE/Neon`, `Gameplay Guide:`, `/GUIDES/NEON/FRACTURE/neonGameplayGuide.mp4`, `Fracture specializes in fast rotations and decisive aim-duels, and Neon’s ability toolkit allows her to excel in both.`, `Neon has a set of abilities that promote aggressive gameplay. Matching the role of a Duelist, her abilities facilitate players with solo-fragging capabilities which help them gain access to bomb sites.`, `Neon Guide for Fracture`],
    guidesBind: [`Neon Bind Combos:`, `/GUIDES/NEON/BIND/Neon`, `Gameplay Guide:`, `/GUIDES/NEON/BIND/neonGameplayGuide.mp4`, `Bind is a Valorant map renowned for its exclusive features, such as the two one-way teleporters at the bomb sites and the absence of a middle region. In addition, the narrow pathways can easily be used to hinder enemy approaches.`, `The map structure and presence of teleporters facilitate quick rotations. Neon is equipped with a set of abilities that can help gamers deal with opponents proficiently on Bind.`, `Neon Guide for Bind`],
    guidesBreeze: [`Neon Breeze Combos:`, `/GUIDES/NEON/BREEZE/Neon`, `Gameplay Guide:`, `/GUIDES/NEON/BREEZE/neonGameplayGuide.mp4`, `Neon can make defending in Breeze easier with her aggressive plays. The map has a wide Mid and multiple openings to the sites. Thus, Neon can easily lurk fast and push the opponents attacking the sites.`, `Pushing from B Tunnel in Valorant's Breeze can make it easier to lurk fast and push the enemies present in B Main. With Neon's super fast speed, enemies won't have time to react.`, `Neon Guide for Breeze`],
    guidesPearl: [`Neon Pearl Combos:`, `/GUIDES/NEON/PEARL/Neon`, `Gameplay Guide:`, `/GUIDES/NEON/PEARL/neonGameplayGuide.mp4`, `Pearl adopts a traditional three-lane layout with none of the usual “gimmicks” like ropes or teleporters found on most Valorant maps. With long, narrow passageways, tight corners, and a winding Mid area, it is reminiscent of Counter-Strike maps like Inferno and Season.`, `It’s hard to keep up with Neon’s speed. The Valorant agent can rush into the sites with ease using her High Gear (E) ability and instantly stun the enemies hiding in the corners of the site with Relay Bolt (Q). This helps in clearing those spots effortlessly.`, `Neon Guide for Pearl`],
    guidesIcebox: [`Neon Icebox Combos:`, `/GUIDES/NEON/ICEBOX/Neon`, `Gameplay Guide:`, `/GUIDES/NEON/ICEBOX/neonGameplayGuide.mp4`, `Neon is a quick-footed, offensive Agent equipped with a set of abilities that enhance her mobility and allow her to deal generous amounts of damage to her opponents.`, `Neon is the latest addition to Valorant's roster of Duelists, featuring alongside Jett, Reyna, Raze, Yoru, and Phoenix. As a Duelist, her abilities are well suited towards gaining access to bomb sites.`, `Neon Guide for Icebox`],
    guidesHeaven: [`Neon Haven Combos:`, `/GUIDES/NEON/HEAVEN/Neon`, `Gameplay Guide:`, `/GUIDES/NEON/HEAVEN/neonGameplayGuide.mp4`, `Unlike other maps in Valorant, Haven has 3 bomb sites which require the utmost attention from the defending Agents. Attackers, on the other hand, have a variety of entry points that they can capitalize on in order to claim rounds.`, `Neon's utilities are a balance of defensive and offensive abilities. Being a self-reliant fragger, the Agent can utilize her utilities to slow down the enemy and catch them off-guard.`, `Neon Guide for Haven`]
}
const guidesYoru = {
    guidesAscent: [`Yoru Ascent Combos:`, `/GUIDES/YORU/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/YORU/ASCENT/yoruGameplayGuide.mp4`, `Yoru’s teleport ability in Valorant can be overpowered on some maps, including Ascent. `, `Valorant with all maps has different tactics regarding the agents’ abilities. And Valorant Yoru is an excellent Duelist with lots of tricky abilities which you can use with lineups. Your Valorant aim may beat ability usage, but lineups sometimes are just better.`, `Yoru Guide for Ascent`],
    guidesSplit: [`Yoru Split Combos:`, `/GUIDES/YORU/SPLIT/Yoru`, `Gameplay Guide:`, `/GUIDES/YORU/SPLIT/yoruGameplayGuide.mp4`, `Yoru teleport lineup on Split is powerful as you can defeat enemies hiding at the planting spot, clear A-Heaven and even head towards Defender spawn.`, `Yoru is one of the hardest agents to master because of the tricks a player must learn to fool the enemies. With some Yoru lineups though, that task becomes easier.`, `Yoru Guide for Split`],
    guidesFracture: [`Yoru Fracture Combos:`, `/GUIDES/YORU/FRACTURE/Yoru`, `Gameplay Guide:`, `/GUIDES/YORU/FRACTURE/yoruGameplayGuide.mp4`, `Yoru has big potential with his abilities using lineups to trick and win fights against enemies for all maps, including Fracture.`, `You can cross the entire map with a Yoru teleport lineup from the spawn right into A-site’s planting spot.`, `Yoru Guide for Fracture`],
    guidesBind: [`Yoru Bind Combos:`, `/GUIDES/YORU/BIND/Yoru`, `Gameplay Guide:`, `/GUIDES/YORU/BIND/yoruGameplayGuide.mp4`, `Bind is the only map in Valorant with the teleports. Yoru's entire kit is formed around abillity to teleport and trick the enemies. It's only natural, that Yoru on Bind does great.`, `Yoru has good teleport lineups, and special flash uses for a lot of maps, including Bind.`, `Yoru Guide for Bind`],
    guidesBreeze: [`Yoru Breeze Combos:`, `/GUIDES/YORU/BREEZE/Yoru`, `Gameplay Guide:`, `/GUIDES/YORU/BREEZE/yoruGameplayGuide.mp4`, `Some of the most popular agents may fall flat on Breeze, due to the complexity of the map.`, `Yoru has been one of the trickiest Duelist agents to understand and master. But with Yoru lineups, you can start winning on whatever map you’re playing.`, `Yoru Guide for Breeze`],
    guidesPearl: [`Yoru Pearl Combos:`, `/GUIDES/YORU/PEARL/Yoru`, `Gameplay Guide:`, `/GUIDES/YORU/PEARL/yoruGameplayGuide.mp4`, `Riot Games split Pearl into two sides of the map, A and B, as well as a Mid area. This is standard with all maps in Valorant except Haven, so this is no surprise. `, `Our Japanese Stealthboi has been seeing an increase in popularity ever since his rework, and this new map that replaced Split might be the best one for him yet. `, `Yoru Guide for Pearl`],
    guidesIcebox: [`Yoru Icebox Combos:`, `/GUIDES/YORU/ICEBOX/Yoru`, `Gameplay Guide:`, `/GUIDES/YORU/ICEBOX/yoruGameplayGuide.mp4`, `Icebox is another map with long-distance areas and two relatively small Spike Sites. However, it is pretty hard to control the map for Defenders because of the many convenient ways to get to the bomb site for Attackers.`, `While players can experiment with the different possibilities posed by each Duelist, there is no one better than Yoru on Icebox.`, `Yoru Guide for Icebox`],
    guidesHeaven: [`Yoru Haven Combos:`, `/GUIDES/YORU/HEAVEN/Yoru`, `Gameplay Guide:`, `/GUIDES/YORU/HEAVEN/yoruGameplayGuide.mp4`, `Haven was the first map in VALORANT to include three sites. This changes how the map is played drastically since players will need to be aware of what is happening around the entire map.`, `That's where Yoru with his kit steps forward to trick the opponent into abyss.`, `Yoru Guide for Haven`]
}
const guidesSage = {
    guidesAscent: [`Sage Ascent Combos:`, `/GUIDES/SAGE/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/SAGE/ASCENT/sageGameplayGuide.mp4`, `Ascent in Valorant is based on the standard 3-lane map design. It consists of two sites to plant a spike and several nooks and crannies to shoot an enemy from. The two sites have multiple points to enter or hold the enemy off.`, `Sage is a Sentinel agent in Valorant; she can heal allies, slow down opponents, create walls to block enemies, and even revive her teammates. She is a very versatile and useful agent in Valorant.`, `Sage Guide for Ascent`],
    guidesSplit: [`Sage Split Combos:`, `/GUIDES/SAGE/SPLIT/Sage`, `Gameplay Guide:`, `/GUIDES/SAGE/SPLIT/sageGameplayGuide.mp4`, `On Split, Sage is very useful, especially because of her wall, which allows her to close entrances to the bombsites, or make it safer for her allies to plant the spike. `, `You have multiple walls on Split that can help you slow the enemy's rushes, gain control of the map, or just make it easier for your teammates to plant without being exposed.`, `Sage Guide for Split`],
    guidesFracture: [`Sage Fracture Combos:`, `/GUIDES/SAGE/FRACTURE/Sage`, `Gameplay Guide:`, `/GUIDES/SAGE/FRACTURE/sageGameplayGuide.mp4`, `As Fracture is such an intimidating map, even for experienced players, having a Sage on your team that can block entryways could dissuade and delay attackers from overhwleming sites.`, `Sage's Barrier Orb is highly useful for slowing down enemies for a while. Players can also use this Sage utility as an aggressive approach to the game as well. However, players need to have great game sense and map knowledge to use Sage's wall for attacking purposes.`, `Sage Guide for Fracture`],
    guidesBind: [`Sage Bind Combos:`, `/GUIDES/SAGE/BIND/Sage`, `Gameplay Guide:`, `/GUIDES/SAGE/BIND/sageGameplayGuide.mp4`, `On Bind, Sage is very useful, especially because of her wall, which allows her to close entrances to the bombsites, or make it safer for her allies to plant the spike. `, `You have multiple walls on Bind that can help you slow the enemy's rushes, gain control of the map, or just make it easier for your teammates to plant without being exposed.`, `Sage Guide for Bind`],
    guidesBreeze: [`Sage Breeze Combos:`, `/GUIDES/SAGE/BREEZE/Sage`, `Gameplay Guide:`, `/GUIDES/SAGE/BREEZE/sageGameplayGuide.mp4`, `Sage is the only Sentinel you should be picking on a large map like Breeze. Killjoy and Cypher’s utility come short on extensive areas as they can’t effectively watch flanks.`, `In contrast, Sage can scout the backlines and contribute to the team’s overall health, making her excellent support on Breeze. By utilizing her walls creatively, good aimers can actually use Sage like a passive duelist to create space for teammates. `, `Sage Guide for Breeze`],
    guidesPearl: [`Sage Pearl Combos:`, `/GUIDES/SAGE/PEARL/Sage`, `Gameplay Guide:`, `/GUIDES/SAGE/PEARL/sageGameplayGuide.mp4`, `The new Pearl map in Valorant features a sprawling mid-area, tight corners, and multiple corridors. Sage is one of the best Sentinel Agents on this map due to her abilities.`, `Pearl has multiple entryways onto the sites, and defenders can block off routes forcing the attackers into a choke point by using Sage’s Barrier Orb, which they can use to delay the push or hold off enemies from going through said route.`, `Sage Guide for Pearl`],
    guidesIcebox: [`Sage Icebox Combos:`, `/GUIDES/SAGE/ICEBOX/Sage`, `Gameplay Guide:`, `/GUIDES/SAGE/ICEBOX/sageGameplayGuide.mp4`, `On Icebox, Sage is a must-pick Agent, especially because of her wall, which allows her to make it safer for her allies to plant the spike, and also gain control of some areas of the map by closing some entrances. `, `You have multiple walls on Icebox that can help you slow the enemy's rushes, gain control of the map, or just make it easier for your teammates to plant without being exposed.`, `Sage Guide for Icebox`],
    guidesHeaven: [`Sage Haven Combos:`, `/GUIDES/SAGE/HEAVEN/Sage`, `Gameplay Guide:`, `/GUIDES/SAGE/HEAVEN/sageGameplayGuide.mp4`, `On Haven, Sage is a very useful Agent, especially because of her wall, which allows her to make it safer for her allies to plant the spike, and also gain control of some areas of the map by closing some entrances. `, `You have multiple walls on Haven that can help you slow the enemy's rushes, gain control of the map, or just make it easier for your teammates to plant without being exposed.`, `Sage Guide for Haven`]
}
const guidesReyna = {
    guidesAscent: [`Reyna Ascent Combos:`, `/GUIDES/REYNA/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/REYNA/ASCENT/reynaGameplayGuide.mp4`, `Ascent is pegged as Valorant’s best map so far. The cut-throat site has a classic FPS map design that sets it apart from other locations. Ascent’s pleasant visuals don’t make it any easier for the players. Thanks to its large size and vast middle area, it’s one of the most challenging maps to play.`, `Since Ascent has multiple angles to take care of, agents like Reyna, Jett and Omen can benefit from their vision hindering ability sets.`, `Reyna Guide for Ascent`],
    guidesSplit: [`Reyna Split Combos:`, `/GUIDES/REYNA/SPLIT/Reyna`, `Gameplay Guide:`, `/GUIDES/REYNA/SPLIT/reynaGameplayGuide.mp4`, `Split might not be a community favorite map, but the map itself has many unique characteristics. Many professional teams have taken advantage of the map’s special attributes in the past. Teams like Team Liquid & Sentinels have decimated their opponents in Split in multiple VCT events through uncommon agent compositions and highly thought-out strategies. `, `Although Reyna and Phoenix have many things in common, her inability to support and lead a team through her utilities is painful in Split. Reyna can go all out and frag on her own, but when it comes to teamwork, Reyna offers very little in terms of abilities or utilities. `, `Reyna Guide for Split`],
    guidesFracture: [`Reyna Fracture Combos:`, `/GUIDES/REYNA/FRACTURE/Reyna`, `Gameplay Guide:`, `/GUIDES/REYNA/FRACTURE/reynaGameplayGuide.mp4`, `The H-shaped map makes it easy for attackers to pinch a spike site from opposite angles, but every team needs a proper Duelist to create an entry.`, `Reyna is exceedingly useful on this map. Fracture is a map designed for intense close-range combat, and this is where Reyna's flashes become most impactful.`, `Reyna Guide for Fracture`],
    guidesBind: [`Reyna Bind Combos:`, `/GUIDES/REYNA/BIND/Reyna`, `Gameplay Guide:`, `/GUIDES/REYNA/BIND/reynaGameplayGuide.mp4`, `Bind is quite a versatile map in Valorant, and many agents can be used effectively on this map. However, some agents are bound to enjoy a slight advantage on the map.`, `Reyna is one of the best duelists for the Bind map. Reyna is picked most often by professional players in Valorant. She can basically cause a rampage if she’s in the right hands. She is well-suited for this map as there are plenty of tight spots on it to peek in and out of while using her ability after getting a kill.`, `Reyna Guide for Bind`],
    guidesBreeze: [`Reyna Breeze Combos:`, `/GUIDES/REYNA/BREEZE/Reyna`, `Gameplay Guide:`, `/GUIDES/REYNA/BREEZE/reynaGameplayGuide.mp4`, `Breeze has mechanics that can appeal to Rope ascenders, Mechanical doors, One-way chutes. Get in the sights of historic ruins or seaside caves in this tropical paradise.`, `Reyna is a highly effective Duelist in Breeze. Her Leer, Dismiss, and Devour are ideally well suited for this vast map. Due to her abilities being so agile, she can fight, escape or evade. Even for entry fragging, her Leer does the job better than Phoenix’s Curveball.`, `Reyna Guide for Breeze`],
    guidesPearl: [`Reyna Pearl Combos:`, `/GUIDES/REYNA/PEARL/Reyna`, `Gameplay Guide:`, `/GUIDES/REYNA/PEARL/reynaGameplayGuide.mp4`, `Pearl is the first map that is located on Omega Earth. It is also an underwater map situated in Lisbon, Portugal. Pearl has an interesting design with two sites and three lanes, following a traditional map layout.`, `For aggressive playstyle, Reyna is the most gruesome Agent there can be in Pearl. She can get ahead of everyone, get a kill, and instantly get back safely with her dismiss ability. Or, she can use her Devour and heal herself to full HP in seconds. Her Ultimate ability also comes second to none. Reyna can show her prowess to the utmost limit, where most of the fights take place scattered throughout the map.`, `Reyna Guide for Pearl`],
    guidesIcebox: [`Reyna Icebox Combos:`, `/GUIDES/REYNA/ICEBOX/Reyna`, `Gameplay Guide:`, `/GUIDES/REYNA/ICEBOX/reynaGameplayGuide.mp4`, `The only viable option is to adapt like the pros, and that process starts from choosing the right agent. Playing in Icebox will be more challenging if your agent of choice does not match your playstyle.`, `Reyna is a great agent to pick in Icebox. She can perform all the basic tasks of a Duelist. Her abilities like Leer and Dismiss allow her to secure entry kills and get away from trouble whenever necessary. Additionally, her Devour ability makes her self-reliant.  `, `Reyna Guide for Icebox`],
    guidesHeaven: [`Reyna Haven Combos:`, `/GUIDES/REYNA/HEAVEN/Reyna`, `Gameplay Guide:`, `/GUIDES/REYNA/HEAVEN/reynaGameplayGuide.mp4`, `Riot’s never-ending experiments with map designs started with Haven as they have managed to pack three bomb sites in one map. Needless to say, such unique features come with some particular challenges.`, `Reyna’s Leer gives crucial advantages for the attackers. Additionally, Reyna can rely on herself for health regains, and her Dismiss is quite as effective as Jett’s Tailwind in some cases.`, `Reyna Guide for Haven`]
}
const guidesOmen = {
    guidesAscent: [`Omen Ascent Combos:`, `/GUIDES/OMEN/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/OMEN/ASCENT/omenGameplayGuide.mp4`, `Ascent is a map which is essentially dependent on Mid control. The team which controls areas like Catwalk, Courtyard, Market usually has the advantage.`, `On larger locations like Ascent and Haven, Omen is generally a top pick among players. Unlike other agents, his smokes can pierce through objects, allowing him to lock down large areas.`, `Omen Guide for Ascent`],
    guidesSplit: [`Omen Split Combos:`, `/GUIDES/OMEN/SPLIT/Omen`, `Gameplay Guide:`, `/GUIDES/OMEN/SPLIT/omenGameplayGuide.mp4`, `Split is an excellent map for the mysterious VALORANT agent. Lots of edges, tight corners, and caveats, bring Omen players the perfect playground.`, `With the right mindset and knowleadge of oneway smokes, Omen can become the best controller for split in the right hands.`, `Omen Guide for Split`],
    guidesFracture: [`Omen Fracture Combos:`, `/GUIDES/OMEN/FRACTURE/Omen`, `Gameplay Guide:`, `/GUIDES/OMEN/FRACTURE/omenGameplayGuide.mp4`, `Fracture is one of the most unique maps in Valorant yet so far. It features an H-shaped layout where the attackers start on both sides while the defenders begin from the middle.`, `Omen is one of the most valuable agents in Valorant, equipped with multiple abilities that support his role as a Controller. The agent can make swift escapes by simply teleporting or hindering enemy vision with his smokes and stuns. All of these things make Omen a great agent to use on Fracture.`, `Omen Guide for Fracture`],
    guidesBind: [`Omen Bind Combos:`, `/GUIDES/OMEN/BIND/Omen`, `Gameplay Guide:`, `/GUIDES/OMEN/BIND/omenGameplayGuide.mp4`, `Bind is one of the most interesting maps featured in Valorant's competitive match pool. The one-way teleporters present at both bomb sites in Bind are unique to the map, and is a feature that captivates much of the Valorant community.`, `Omen is efficient when it comes to gaining control of bomb sites in defense and attack. His smoke (E) stretches across bomb sites, while his blinding orb (Q) can be deployed from a distance as well. And don't forget the ability to fake teleport. All in all this makes Omen great pick on Bind.`, `Omen Guide for Bind`],
    guidesBreeze: [`Omen Breeze Combos:`, `/GUIDES/OMEN/BREEZE/Omen`, `Gameplay Guide:`, `/GUIDES/OMEN/BREEZE/omenGameplayGuide.mp4`, `Like most of the maps in Valorant, Breeze will also have two planting sites: site A and B. It features wide-open spaces that favor long-range encounters over close-quarter skirmishes.`, `The versatility in the agent’s ability makes Omen a perfect fit for the map. His Dark cover and Shrouded step allow him to enter any site or teleport behind enemies. Omen can switch from one point of the map to another, which will make it difficult for opponents to guess his position, especially in a large map like Breeze.`, `Omen Guide for Breeze`],
    guidesPearl: [`Omen Pearl Combos:`, `/GUIDES/OMEN/PEARL/Omen`, `Gameplay Guide:`, `/GUIDES/OMEN/PEARL/omenGameplayGuide.mp4`, `The newest addition to the growing Valorant map pool, Pearl, has several angles that need clearing on either bomb site, with the middle being split into two entrances.`, `This favors Omen as he can provide an edge when peeking contested angles using his "Dark Cover," which is a smoke.`, `Omen Guide for Pearl`],
    guidesIcebox: [`Omen Icebox Combos:`, `/GUIDES/OMEN/ICEBOX/Omen`, `Gameplay Guide:`, `/GUIDES/OMEN/ICEBOX/omenGameplayGuide.mp4`, `Icebox is a Valorant map that heavily plays with verticality, making it a playground for Omen.`, `The mysterious Controller agent thrives in this frigid facility, with his potential for easily creating one-way smokes to take advantage of the varying battlefield height.`, `Omen Guide for Icebox`],
    guidesHeaven: [`Omen Haven Combos:`, `/GUIDES/OMEN/HEAVEN/Omen`, `Gameplay Guide:`, `/GUIDES/OMEN/HEAVEN/omenGameplayGuide.mp4`, `Haven has a unique gimmick to it. Haven is currently the only map with three different sites. This gives it a unique and creative twist that increases the number of plays that you can make and enhances the overall gameplay experience.`, `If you’re looking to play a controller agent and be the one providing cover for your team, Omen is a great choice in Haven. Omen has an insane range on his smokes. You can be causing a distraction in mid and still be able to provide cover for your team. That’s what makes him such an amazing and valuable pick in Haven.`, `Omen Guide for Haven`]
}
const guidesJett = {
    guidesAscent: [`Jett Ascent Combos:`, `/GUIDES/JETT/ASCENT/-`, `Gameplay Guide:`, `/GUIDES/JETT/ASCENT/jettGameplayGuide.mp4`, `Ascent is by far the most aesthetic map to exist in the VALORANT realm. Developers at Riot invested years of effort to develop Ascent. Most players would agree to the fact that Ascent offers a balanced experience with decent rooms for strategical gameplay.`, `Jett’s potential in this map maxes out when playing with competent teammates. Accompanied by a Breach or Omen, Jett can deliver crippling damage to any opponent. Jett can move around with Operator and keep the enemies at bay even on her own.`, `Jett Guide for Ascent`],
    guidesSplit: [`Jett Split Combos:`, `/GUIDES/JETT/SPLIT/Jett`, `Gameplay Guide:`, `/GUIDES/JETT/SPLIT/jettGameplayGuide.mp4`, `Split is one of the smallest Valorant maps, and a few agents can particularly excel at tackling its tight choke points.`, `The wind ranger is in unstoppable force on all Valorant maps, but her viability increases tenfold on Split. Jett can perch herself on elevated areas, taking clueless enemies by surprise. `, `Jett Guide for Split`],
    guidesFracture: [`Jett Fracture Combos:`, `/GUIDES/JETT/FRACTURE/Jett`, `Gameplay Guide:`, `/GUIDES/JETT/FRACTURE/jettGameplayGuide.mp4`, ``, ``, `Jett Guide for Fracture`],
    guidesBind: [`Jett Bind Combos:`, `/GUIDES/JETT/BIND/Jett`, `Gameplay Guide:`, `/GUIDES/JETT/BIND/jettGameplayGuide.mp4`, `Fracture a unique H-shaped design that helps attackers pinch the defenders. With 18 Agents to choose from, this article will explore the ideal attacking and defending lineups needed when playing Fracture in Valorant.`, ` Jett proves to be very valuable on Fracture. Her ability to dash in-site and quickly smoke the lines of sight of enemies gives her the edge users need when entering big sites such as those on Fracture.`, `Jett Guide for Bind`],
    guidesBreeze: [`Jett Breeze Combos:`, `/GUIDES/JETT/BREEZE/Jett`, `Gameplay Guide:`, `/GUIDES/JETT/BREEZE/jettGameplayGuide.mp4`, `Bind, the Middle-Eastern map with the teleporters, is one of the most famous maps in Valorant.`, `Bind has multiple vertical vantage points, and Jett is one of the most effective agents to counter that verticality. She can also dash into a site and attack unaware opponents, or quickly fall back in case of a failed attack.`, `Jett Guide for Breeze`],
    guidesPearl: [`Jett Pearl Combos:`, `/GUIDES/JETT/PEARL/Jett`, `Gameplay Guide:`, `/GUIDES/JETT/PEARL/jettGameplayGuide.mp4`, `Pearl features narrow passages, multiple entryways onto the site, some tight corners, and a lot of verticalities.`, `Jett has been quite effective on almost every map, and playing on the new map isn’t very different.`, `Jett Guide for Pearl`],
    guidesIcebox: [`Jett Icebox Combos:`, `/GUIDES/JETT/ICEBOX/Jett`, `Gameplay Guide:`, `/GUIDES/JETT/ICEBOX/jettGameplayGuide.mp4`, `Icebox is a small map with tight choke points, which is why fast agents with damaging abilities shine on this unique map. The snow-covered map features a giant battleship being pulled into a dockyard with large shipping containers.`, `Attack compositions on Icebox are incomplete without Jett or Reyna. While both duelists are excellent, Jett prevails over Reyna due to Icebox’s layout. The vertical boxes, tight corners, and ample double-story spots allow Jett to gain better map control. Her dashes and updrafts are game-changing on defense, where she becomes invincible on full-buy Operator rounds. `, `Jett Guide for Icebox`],
    guidesHeaven: [`Jett Haven Combos:`, `/GUIDES/JETT/HEAVEN/Jett`, `Gameplay Guide:`, `/GUIDES/JETT/HEAVEN/jettGameplayGuide.mp4`, `Haven is the only Valorant map that features three different sites on one map. Each of these sites follows a three-way entry format, thus giving multiple ways to approach one site. The most challenging part of this map is defending all three sites at once, for which proper agent selection is critical.`, `Jett is one of the highest-picked Duelists in the entire Valorant, all because of her fragging potential. Jett can easily make her escape from sticky situations, and repositioning herself to bring the fight right back to her enemies is helpful for her.`, `Jett Guide for Haven`]
}

const guides = [guidesFade, guidesBreach, guidesRaze, guidesChamber, guidesKayo, guidesSkye, guidesCypher, guidesSova, guidesKilljoy, guidesHarbor, guidesViper, guidesPheonix, guidesAstra, guidesBrimstone, guidesNeon, guidesYoru, guidesSage, guidesReyna, guidesOmen, guidesJett];

fetch(`https://valorant-api.com/v1/agents`, {
    method: `GET`,
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((result) => {
        agents = result.data;
        agents.splice(7, 1);
        return agents
    })
    .then((agents) => {
        agentDivs.forEach((agent, index) => {
            agent.addEventListener(`click`, () => {
                h1.innerHTML = ``;
                console.log(agent.textContent);
                agents[index].guides = guides[index];
                h1.textContent = agent.textContent;
                agents[index].favorite = false;
                backgroundColor(agents, index);
                pageImage(agents[index].fullPortrait, agents[index].displayIcon);
                description(agents[index].description);
                abilities.textContent = ``;
                drawAbillitieDiv(agents[index].abilities, abilityVideoArray[index]);
                console.log();
                section.style.width = `50vw`;
                section.style.marginLeft = `60px`;
                favorite.innerHTML = ``;
                addFavorite(agents[index], userPreferences, favoritesArray);
                window.scrollBy(0, -5000);
            });
        })
        console.log(`agents`, agents);
    })
    .catch((err) => {
        console.warn(err);
    })

const main = document.querySelector(`main`);

function backgroundColor(agents, index) {
    let colorOne = `#${agents[index].backgroundGradientColors[0]}`;
    let colorTwo = `#${agents[index].backgroundGradientColors[1]}`;
    let colorThree = `#${agents[index].backgroundGradientColors[2]}`;
    let colorFour = `#${agents[index].backgroundGradientColors[3]}`;
    document.body.style.background = `linear-gradient(90deg, ${colorOne} 0%, ${colorTwo} 33%, ${colorThree} 64%, ${colorFour} 100%)`;
};

function pageImage(image) {
    const imgPic = document.querySelector(`#agentPic`);
    imgPic.setAttribute(`class`, `agentPicture`);
    imgPic.src = image;
};

function description(description) {
    pIntro.textContent = description;
};

function drawAbillitieDiv(abilityArray, abilityVideoArray) {
    let pic1 = abilityArray[0].displayIcon;
    let pic2 = abilityArray[1].displayIcon;
    let pic3 = abilityArray[2].displayIcon;
    let pic4 = abilityArray[3].displayIcon;

    let description1 = abilityArray[0].description;
    let description2 = abilityArray[1].description;
    let description3 = abilityArray[2].description;
    let description4 = abilityArray[3].description;

    let name1 = abilityArray[0].displayName;
    let name2 = abilityArray[1].displayName;
    let name3 = abilityArray[2].displayName;
    let name4 = abilityArray[3].displayName;

    let abilityVideoOne = abilityVideoArray.videoOne;
    let abilityVideoTwo = abilityVideoArray.videoTwo;
    let abilityVideoThree = abilityVideoArray.videoThree;
    let abilityVideoFour = abilityVideoArray.videoFour;

    const container = document.createElement(`div`);
    const abilityOne = document.createElement(`div`);
    const abilityTwo = document.createElement(`div`);
    const abilityThree = document.createElement(`div`);
    const abilityFour = document.createElement(`div`);
    const abilityPicDiv = document.createElement(`div`);

    const picOne = document.createElement(`img`);
    const picTwo = document.createElement(`img`);
    const picThree = document.createElement(`img`);
    const picFour = document.createElement(`img`);

    picOne.src = pic1;
    picTwo.src = pic2;
    picThree.src = pic3;
    picFour.src = pic4;

    container.style.display = `flex`;
    container.style.zIndex = `100`;
    container.style.flexDirection = `column`
    abilityPicDiv.style.display = `flex`;

    abilityOne.style.display = `flex`;
    abilityTwo.style.display = `flex`;
    abilityThree.style.display = `flex`;
    abilityFour.style.display = `flex`;

    abilityOne.style.boxShadow = `2px 2px 20px`;
    abilityTwo.style.boxShadow = `2px 2px 20px`;
    abilityThree.style.boxShadow = `2px 2px 20px`;
    abilityFour.style.boxShadow = `2px 2px 20px`;

    picOne.style.width = `5vw`;
    picTwo.style.width = `5vw`;
    picThree.style.width = `5vw`;
    picFour.style.width = `5vw`;

    picOne.style.zIndex = `0`;
    picTwo.style.zIndex = `0`;
    picThree.style.zIndex = `0`;
    picFour.style.zIndex = `0`;

    abilityOne.style.margin = `20px`;
    abilityTwo.style.margin = `20px`;
    abilityThree.style.margin = `20px`;
    abilityFour.style.margin = `20px`;

    abilityOne.style.padding = `10px`;
    abilityTwo.style.padding = `10px`;
    abilityThree.style.padding = `10px`;
    abilityFour.style.padding = `10px`;

    abilityOne.style.cursor = `pointer`;
    abilityTwo.style.cursor = `pointer`;
    abilityThree.style.cursor = `pointer`;
    abilityFour.style.cursor = `pointer`;

    abilityOne.style.zIndex = `1`;
    abilityTwo.style.zIndex = `1`;
    abilityThree.style.zIndex = `1`;
    abilityFour.style.zIndex = `1`;

    abilityOne.appendChild(picOne);
    abilityTwo.appendChild(picTwo);
    abilityThree.appendChild(picThree);
    abilityFour.appendChild(picFour);
    abilityPicDiv.appendChild(abilityOne);
    abilityPicDiv.appendChild(abilityTwo);
    abilityPicDiv.appendChild(abilityThree);
    abilityPicDiv.appendChild(abilityFour);
    container.appendChild(abilityPicDiv);
    abilities.appendChild(container);

    const pAbility = document.createElement(`p`);
    const abilityName = document.createElement(`h2`);
    const ability = document.createElement(`video`);
    ability.setAttribute(`class`, `abilityVid`)
    pAbility.innerHTML = ``;
    abilityName.innerHTML = ``;
    ability.innerHTML = ``;

    console.log(abilityVideoArray);

    abilityClick(abilityOne, description1, container, pAbility, abilityName, name1, abilityVideoOne, ability);
    abilityClick(abilityTwo, description2, container, pAbility, abilityName, name2, abilityVideoTwo, ability);
    abilityClick(abilityThree, description3, container, pAbility, abilityName, name3, abilityVideoThree, ability);
    abilityClick(abilityFour, description4, container, pAbility, abilityName, name4, abilityVideoFour, ability);

};

function abilityClick(elem, abilityDescription, container, pAbility, abilityName, name, abilityVideo, ability) {
    elem.addEventListener(`click`, () => {
        abilityName.textContent = name;
        pAbility.textContent = abilityDescription;
        ability.style.marginTop = `20px`;
        ability.src = abilityVideo;
        ability.controls = false;
        ability.muted = true;
        ability.autoplay = true;
        ability.loop = true;
        container.appendChild(abilityName);
        container.appendChild(pAbility);
        container.append(ability);
    })
};

window.addEventListener(`load`, () => {
    checkLogIn(userPreferences);

})

function checkLogIn(userPreferences) {
    if ("userPreference" in sessionStorage) {
        const userFavorites = JSON.parse(userPreferences[0].favorites);
        let user = userPreferences[0].nickname;
        logInContainer.textContent = ``;
        const p = document.createElement(`p`);
        p.textContent = `${user}`;
        const logOutBtn = document.createElement(`button`);
        logOutBtn.setAttribute(`class`, `logOut`);
        logOutBtn.textContent = `Log Out`;
        logOutBtn.style.height = `25px`;
        logOutBtn.style.cursor = `pointer`;
        logOutBtn.style.whiteSpace = `nowrap`;
        logOutBtn.style.backgroundColor = `crimson`;
        logOutBtn.style.border = `2px solid white`;
        logOutBtn.style.color = `white`;
        logOutBtn.style.borderRadius = `15px`;
        p.style.margin = `0px`;

        logInContainer.appendChild(p);
        logInContainer.appendChild(logOutBtn);

        logOutBtn.addEventListener(`click`, () => {
            sessionStorage.clear();
            location.reload();
        });

        sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));
        favoritesArray.length = 0;
        sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));
        console.log(`favArray`, favoritesArray);
        favoritesArray.push(...userFavorites);
        console.log(`favArray`, favoritesArray);
        sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));

        drawUserProfile(userPreferences, userFavorites);
    }
}

function addFavorite(agent, userPreferences) {
    if (`userPreference` in sessionStorage) {
        const userFavorites = JSON.parse(userPreferences[0].favorites);
        const fav = document.createElement(`i`);
        fav.setAttribute(`class`, `fa-regular fa-star`);
        userProfile.style.display = `none`;
        favoritesArray.length = 0;
        sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));
        console.log(`favArray`, favoritesArray);
        favoritesArray.push(...userFavorites);
        console.log(`favArray`, favoritesArray);
        sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));

        const { abilities, backgroundGradientColors, displayIcon, displayName, role, guides } = agent;
        favAgent = { abilities, backgroundGradientColors, displayIcon, displayName, role, guides };

        fav.style.cursor = `pointer`;
        fav.style.fontSize = `2rem`;
        fav.style.color = `gold`;
        fav.style.width = `fit-content`;

        const delFromFav = document.createElement(`i`);
        delFromFav.setAttribute(`class`, `fa-solid fa-star`)
        delFromFav.style.cursor = `pointer`;
        delFromFav.style.fontSize = `2rem`;
        delFromFav.style.color = `#DC143C`;
        fav.style.display = `block`;
        delFromFav.style.display = `none`;
        delFromFav.style.width = `fit-content`;

        fav.addEventListener(`click`, favoriteTrue);

        favoritesArray.forEach((favorite) => {
            if (agent.displayName === favorite.displayName) {
                fav.removeEventListener(`click`, favoriteTrue);
                fav.style.display = `none`;
                delFromFav.style.display = `block`;
            }
        })

        delFromFav.addEventListener(`click`, () => {
            favoriteFalse(favAgent, favoritesArray);
            delFromFav.style.display = `none`;
            fav.style.display = `block`;
        });

        function favoriteFalse(favAgent, favoritesArray) {
            favoritesArray.forEach((favorite, index) => {
                if (favorite.displayName === favAgent.displayName) {
                    console.log(`fav`, favorite.displayName);
                    console.log(`favA`, favAgent.displayName);
                    favoritesArray.splice(index, 1);
                    sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));
                }
            })

            agent.favorite = false;

            fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase/${userPreferences[0].id}`, {
                method: `PUT`,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userPreferences[0].email,
                    password: userPreferences[0].password,
                    nickname: userPreferences[0].nickname,
                    favorites: JSON.stringify(favoritesArray)
                })
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                }).then(() => {
                    console.log(`false`);
                    fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase `, {
                        method: `GET`,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                        .then((result) => {
                            let users = result.data;
                            users.forEach((user) => {
                                if (user.id === userPreferences[0].id) {
                                    userPreferences.splice(0, 1);
                                    sessionStorage.setItem(`userPreference`, JSON.stringify(userPreferences));
                                    userPreferences.push(user);
                                    sessionStorage.setItem(`userPreference`, JSON.stringify(userPreferences));
                                }
                            })
                        })
                        .then(() => {
                            location.reload();
                        })
                        .catch((err) => {
                            console.warn(err);
                        })
                })
                .catch((err) => {
                    console.warn(err);
                });
        }

        function favoriteTrue() {
            agent.favorite = true;

            setTimeout(() => {
                fav.style.display = `none`;
                delFromFav.style.display = `block`;
            }, 1000);

            favoritesArray.push(favAgent);
            sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));

            fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase/${userPreferences[0].id}`, {
                method: `PUT`,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userPreferences[0].email,
                    password: userPreferences[0].password,
                    nickname: userPreferences[0].nickname,
                    favorites: JSON.stringify(favoritesArray)
                })
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                }).then(() => {
                    console.log(`true`);
                    fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase`, {
                        method: `GET`,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                    }).then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                        .then((result) => {
                            let users = result.data;
                            users.forEach((user) => {
                                if (user.id === userPreferences[0].id) {
                                    userPreferences.splice(0, 1);
                                    sessionStorage.setItem(`userPreference`, JSON.stringify(userPreferences));
                                    userPreferences.push(user);
                                    sessionStorage.setItem(`userPreference`, JSON.stringify(userPreferences));
                                }
                            })
                        })
                        .catch((err) => {
                            console.warn(err);
                        })
                })
                .catch((err) => {
                    console.warn(err);
                });
        }
        h1.prepend(fav);
        h1.prepend(delFromFav);
    }
};

function drawUserProfile(userPreferences) {
    const userFavorites = JSON.parse(userPreferences[0].favorites);
    console.log(`userFavorites`, userFavorites);
    h1.textContent = `Hello, ${userPreferences[0].nickname}..`;

    const p1 = document.createElement(`p`);
    p1.textContent = `Click on your Favorite Agent, to see the best guides there is...`;

    const favoritesDiv = document.createElement(`div`);

    const mainPic = document.querySelector(`#agentPic`);
    mainPic.src = ``;

    const mapsDiv = document.createElement(`div`);
    mapsDiv.textContent = ``;

    if (userFavorites.length === 0) {
        pIntro.textContent = `Choose agent from the sidebar, and press Favorite, to add that agent to favorites..`;
    }
    if (userFavorites.length > 0) {
        pIntro.textContent = `Your Favorite Agents:`;
    }

    favoritesDiv.style.display = `flex`;
    favoritesDiv.style.flexWrap = `wrap`;

    const videos = document.createElement(`div`);
    const videoContainerOne = document.createElement(`div`);
    const videoContainerTwo = document.createElement(`div`);
    const heading = document.createElement(`div`);
    const text = document.createElement(`div`);

    videos.innerHTML = ``;
    videoContainerOne.textContent = ``;
    videoContainerTwo.textContent = ``;
    heading.textContent = ``;
    text.textContent = ``;

    userFavorites.forEach((favorite, index) => {
        const favAgentDiv = document.createElement(`div`);
        const portrait = document.createElement(`img`);
        const p2 = document.createElement(`p`);
        favAgentDiv.setAttribute(`class`, `agentPortrait`);

        portrait.style.width = `100%`;

        favAgentDiv.style.display = `flex`;
        favAgentDiv.style.flexDirection = `column`;
        favAgentDiv.style.alignItems = `center`;
        favAgentDiv.style.width = `3vw`;
        favAgentDiv.style.margin = `50px`;
        favAgentDiv.style.cursor = `pointer`;

        if (window.matchMedia("(max-width: 768px)").matches === true) {
            favAgentDiv.style.width = `35px`;
            favAgentDiv.style.margin = `35px`;
        }

        p2.textContent = favorite.displayName;
        portrait.src = favorite.displayIcon;
        favAgentDiv.setAttribute = `id`, `${favorite.displayName}`

        const buttonDiv = document.createElement(`div`);
        const removeFromFavBtn = document.createElement(`button`);
        removeFromFavBtn.textContent = `Unfavorite`;

        buttonDiv.style.marginTop = `1vh`;
        buttonDiv.style.display = `flex`;
        removeFromFavBtn.style.backgroundColor = `crimson`;
        removeFromFavBtn.style.cursor = `pointer`;
        removeFromFavBtn.style.color = `white`;
        removeFromFavBtn.style.borderRadius = `15px`;
        removeFromFavBtn.style.border = `1px solid white`;

        favAgentDiv.appendChild(p2);
        favAgentDiv.appendChild(portrait);
        favoritesDiv.appendChild(favAgentDiv);
        favAgentDiv.appendChild(buttonDiv);


        favAgentDiv.addEventListener(`click`, () => {
            buttonDiv.textContent = ``;
            buttonDiv.appendChild(removeFromFavBtn);
            const portraitClass = document.querySelectorAll(`.agentPortrait`);

            removeFromFavBtn.addEventListener(`click`, () => {
                removeFromFav(favorite, favoritesArray);
            })

            portraitClass.forEach((portraitC) => {
                console.log(portraitC.style.width);
                if (portraitC.style.width === `5vw`) {
                    portraitC.style.width = `3vw`;
                }
                if (portraitC.style.width === `50px`) {
                    portraitC.style.width = `35px`;
                }
            })
            videos.innerHTML = ``;
            videoContainerOne.textContent = ``;
            videoContainerTwo.textContent = ``;
            heading.textContent = ``;
            text.textContent = ``;

            userProfileBackground(favorite, index);
            userProfile.appendChild(mapsDiv);
            mapsDiv.textContent = ``;

            drawMapIcons(mapsDiv, favorite, videos, videoContainerOne, videoContainerTwo, heading, text);
            console.log(favAgentDiv);
            favAgentDiv.style.position = `relative`;
            favAgentDiv.style.width = `5vw`;
            favAgentDiv.style.height = `10vh`;
            pIntro.textContent = ``;
            favoritesDiv.style.top = `-5vh`;
            favoritesDiv.style.position = `relative`;
            favoritesDiv.style.width = `75vw`;

            if (window.matchMedia("(max-width: 768px)").matches === true) {
                favAgentDiv.style.width = `50px`;
            }

        })
    })

    favorite.append(p1);
    userProfile.appendChild(favoritesDiv);
}

function drawMapIcons(mapsDiv, agent, videos, videoContainerOne, videoContainerTwo, heading, text) {
    fetch(`https://valorant-api.com/v1/maps
    `, {
        method: `GET`,
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((result) => {
            result.data.splice(7, 1);
            const maps = result.data;
            console.log(`maps`, maps)
            maps.forEach((map, index) => {
                const mapImgCont = document.createElement(`div`);
                mapImgCont.setAttribute(`id`, `${map.displayName}`);
                const mapImg = document.createElement(`img`);
                const p = document.createElement(`p`);

                mapImg.setAttribute(`class`, `map`);
                mapsDiv.setAttribute(`class`, `mapsDiv`);

                mapImg.src = map.splash;
                mapImg.style.marginBottom = `10px`;
                mapImg.style.borderRadius = `15px`;
                mapImg.style.cursor = `pointer`;
                mapImg.style.zIndex = `1`;
                mapsDiv.style.gap = `1vw`;
                mapsDiv.style.marginLeft = `7vw`;
                mapsDiv.style.marginTop = `3vh`;

                mapImgCont.style.position = `relative`;

                p.style.position = `absolute`;
                p.style.top = `1vh`;
                p.style.left = `8vw`;
                p.style.margin = `0`;
                p.style.fontWeight = `bold`;
                p.style.zIndex = `0`;
                p.textContent = map.displayName;

                mapImgCont.appendChild(mapImg);
                mapImgCont.appendChild(p);
                mapsDiv.append(mapImgCont);

                const { guidesAscent, guidesSplit, guidesFracture, guidesBind, guidesBreeze, guidesPearl, guidesIcebox, guidesHeaven } = agent.guides;
                let mapGuides = [guidesAscent, guidesSplit, guidesFracture, guidesBind, guidesBreeze, guidesPearl, guidesIcebox, guidesHeaven];
                userProfile.appendChild(heading);
                userProfile.appendChild(text);
                userProfile.appendChild(videos);
                mapClick(mapGuides[index], mapImg, videos, videoContainerOne, videoContainerTwo, heading, text);
            })
        })
        .catch((err) => {
            console.warn(err);
        });
}

function userProfileBackground(favorite) {
    let colorOne = `#${favorite.backgroundGradientColors[0]}`;
    let colorTwo = `#${favorite.backgroundGradientColors[1]}`;
    let colorThree = `#${favorite.backgroundGradientColors[2]}`;
    let colorFour = `#${favorite.backgroundGradientColors[3]}`;
    console.log(colorOne, colorTwo, colorThree, colorFour);
    document.body.style.background = `linear-gradient(90deg, ${colorOne} 0%, ${colorTwo} 33%, ${colorThree} 64%, ${colorFour} 100%)`;
}

function mapClick(mapGuides, img, videos, videoContainerOne, videoContainerTwo, heading, text) {
    img.addEventListener(`click`, () => {
        videoContainerOne.textContent = ``;
        videoContainerTwo.textContent = ``;
        videos.innerHTML = ``;
        heading.textContent = ``;
        text.textContent = ``;
        const mapClass = document.querySelectorAll(`.map`);
        mapClass.forEach((mapC) => {
            if (mapC.style.border = `2px solid white`) {
                mapC.style.border = `hidden`;
            }
        })
        img.style.border = `3px solid white`;

        console.log(`guide`, mapGuides);
        drawGuide(mapGuides, videos, videoContainerOne, videoContainerTwo, heading, text);
    })
}

function drawGuide(mapGuides, videos, videoContainerOne, videoContainerTwo, heading, text) {
    console.log(mapGuides);
    const firstVideoGuide = document.createElement(`video`);
    firstVideoGuide.src = mapGuides[1];
    firstVideoGuide.style.marginTop = `20px`;
    firstVideoGuide.controls = true;
    firstVideoGuide.muted = false;
    firstVideoGuide.autoplay = false;
    firstVideoGuide.loop = false;

    const secondVideoGuide = document.createElement(`video`);
    secondVideoGuide.src = mapGuides[3];
    secondVideoGuide.style.marginTop = `20px`;
    secondVideoGuide.controls = true;
    secondVideoGuide.muted = false;
    secondVideoGuide.autoplay = false;
    secondVideoGuide.loop = false;

    const p1 = document.createElement(`p`);
    const p2 = document.createElement(`p`);
    const h2 = document.createElement(`h2`);
    const pGuideIntro = document.createElement(`p`);
    const pGuideText = document.createElement(`p`);

    videos.setAttribute(`class`, `videos`);
    firstVideoGuide.setAttribute(`class`, `firstGuide`);
    secondVideoGuide.setAttribute(`class`, `secondGuide`);
    heading.setAttribute(`class`, `heading`);

    p1.textContent = mapGuides[0];
    p2.textContent = mapGuides[2];
    h2.textContent = mapGuides[6];
    pGuideIntro.textContent = mapGuides[4];
    pGuideText.textContent = mapGuides[5];

    h2.style.width = `fit-content`;

    text.style.padding = `1vw`;
    text.style.width = `75vw`;
    videos.style.padding = `2vw`;
    heading.style.margin = `5vh`;

    heading.appendChild(h2);
    videoContainerOne.appendChild(p1);
    videoContainerOne.appendChild(firstVideoGuide);
    videoContainerTwo.appendChild(p2);
    videoContainerTwo.appendChild(secondVideoGuide);
    videos.appendChild(videoContainerOne);
    videos.appendChild(videoContainerTwo);
    text.appendChild(pGuideIntro);
    text.appendChild(pGuideText);
}

function removeFromFav(favAgent, favoritesArray) {
    favoritesArray.forEach((favorite, index) => {
        if (favorite.displayName === favAgent.displayName) {
            console.log(`fav`, favorite.displayName);
            console.log(`favA`, favAgent.displayName);
            favoritesArray.splice(index, 1);
            sessionStorage.setItem(`favorites`, JSON.stringify(favoritesArray));
        }
    })

    fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase/${userPreferences[0].id}`, {
        method: `PUT`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: userPreferences[0].email,
            password: userPreferences[0].password,
            nickname: userPreferences[0].nickname,
            favorites: JSON.stringify(favoritesArray)
        })
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then(() => {
            console.log(`false`);
            fetch(`https://testapi.io/api/tomisss1/resource/UserDatabase `, {
                method: `GET`,
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
                .then((result) => {
                    let users = result.data;
                    users.forEach((user) => {
                        if (user.id === userPreferences[0].id) {
                            userPreferences.splice(0, 1);
                            sessionStorage.setItem(`userPreference`, JSON.stringify(userPreferences));
                            userPreferences.push(user);
                            sessionStorage.setItem(`userPreference`, JSON.stringify(userPreferences));
                        }
                    })
                })
                .then(() => {
                    location.reload();
                })
                .catch((err) => {
                    console.warn(err);
                })
        })
        .catch((err) => {
            console.warn(err);
        });
}

const burger = document.querySelector(`#burger`);
const sidebar = document.querySelector(`#side`);

window.addEventListener(`resize`, () => {
    sidebarCheck(burger, sidebar);
})

burger.addEventListener(`click`, () => {
    if (sidebar.style.transform === `translateX(0%)`) {
        sidebar.style.transform = `translateX(-150%)`
        sidebar.style.transition = `1s`;
    } else {
        sidebar.style.transform = `translateX(0%)`
        sidebar.style.transition = `1s`;
    }
})

function sidebarCheck(burger, sidebar) {
    if (burger.style.display === `flex`) {
        sidebar.style.transform = `translateX(-150%)`;
    } else {
        sidebar.style.transform = `translateX(0%)`;
    }
}

