
class BlackJack {
  constructor(playerNum) {
    this.playerNum = playerNum;
  }
  // 初始化玩家
  init() {
    // 初始化电脑玩家
    this.computerPlayers = new Array(this.playerNum - 1).fill(0).map((item, index) => {
      return {
        name: `玩家${index}`,
        chip: 1000, // 初始筹码每人1000
        openCard: [],
        pocket: []
      }
    });
  }
  renderPlayers() {
    this.computerPlayers.forEach(item => {
      let div = document.createElement('div');
      let openCard = '';
      item.openCard.map(card => { openCard += card.fullName });
      div.innerHTML = `【${item.name}】-剩余筹码：${item.chip}, 持有手牌：${item.openCard.length + item.pocket.length} 张, 明牌为：${openCard ? openCard : '-'}`;
      document.body.appendChild(div);
    })
  }
  // 开始玩牌
  start() {
    if(!this.computerPlayers) {
      this.init();
    }
    this.shuffle(); // 洗一次牌
    this.renderPlayers();
    console.log(this.computerPlayers, this.cards)
  }
  // 洗牌
  shuffle() {
    const TYPES = ['SPADE', 'HEART', 'CLUB', 'DIAMOND'];
    const POINTS = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    let CARDS = [];
    TYPES.map(type => {
      let arr = POINTS.map(point => {
        return { fullName: `${type}-${point}`, type, point };
      })
      CARDS = [...CARDS, ...arr];
    })
    // 洗牌
    let len = CARDS.length;
    let t, i;
    while (len) {
      i = Math.floor(Math.random() * len--);
      t = CARDS[len];
      CARDS[len] = CARDS[i];
      CARDS[i] = t;
    }
    this.cards = CARDS; // 获取洗好的牌
  }
  // 发牌， 给每一位玩家发两张牌， 一张为明牌， 一张为暗牌
  licensing() {
  }
}




