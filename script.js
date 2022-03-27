class Item{
    constructor(name, statName, statInt){
        this.name = name;
        this.statName = statName;
        this.statInt = statInt;
    } 
    getItemInfo(){
        return `${this.name} --- ${this.statInt} increase in ${this.statName}.`;
    }
}
//items data
const pGloves = new Item("power gloves", "strength", 3);
const runningShoes = new Item("running shoes", "agility", 4);
const smokingPipe = new Item("smoking pipe", "resilience", 1);
const scholarsBook = new Item("scholars book", "wisdom", 2);
const deadCat = new Item("dead cat", "luck", 5);

new Vue({
    el: "#app",
    data: {
        //data of indexes stored in heroInfo plz check corresponding data
        heroInfo:{
            name: "",
            race: 0,
            gender: 0,
            item: 0,
        },
        heroStats: {
            strength : 10,
            agility : 10,
            resilience : 10,
            wisdom : 10,
            luck : 10,
        },
        profileUrl: [['https://images.uesp.net/a/a1/SR-race-M-Nord.jpg', 'https://images.uesp.net/e/eb/SR-race-M-Khajiit.jpg',  'https://images.uesp.net/f/fa/SR-race-M-Argonian.jpg'], ['https://images.uesp.net/b/b5/SR-race-F-Breton.jpg', 'https://images.uesp.net/c/ca/SR-race-F-Khajiit.jpg', 'https://images.uesp.net/6/6e/SR-race-F-Argonian.jpg']],
        item: [pGloves, runningShoes, smokingPipe, scholarsBook, deadCat]
    },computed:{
        updateStats: function(){
            this.heroStats = {
                strength : 10,
                agility : 10,
                resilience : 10,
                wisdom : 10,
                luck : 10,
            };
            switch(this.heroInfo.item.name){
                case "power gloves":
                    this.heroStats.strength += 3;
                    break;
                case "running shoes":
                    this.heroStats.agility += 4;
                    break;
                case "smoking pipe":
                    this.heroStats.resilience += 1;
                    break;
                case "scholars book":
                    this.heroStats.wisdom += 2;
                    break;
                case "dead cat":
                    this.heroStats.luck += 5;
                    break;
            }
        }
    }
})

