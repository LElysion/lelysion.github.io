let app = document.getElementById('app'); // 主体

let role = {
  name: '主角',
  hp: 50,
  mp: 20,
  atk: 15,
  def: 10,
  skill: [
    { name: '强化攻击', desc: '临时提高5点攻击力', action: [
      { attr: 'atk', target: 'SELF', value: 5, followUp: { action: ['ATTACK'] } }
    ]},
    {
      name: '治疗', desc: '回复10点生命值', action: [
      { attr: 'hp', target: 'SELF', vlaue: 10, followUp: { action: [] } }
    ]}
  ]
}

let enemy = {
  name: '怪物',
  hp: 50,
  mp: 20,
  atk: 15,
  def: 10
}
let globalIds = [];
function createRole(role) {
  let dom = document.createElement('div');
  let id = 'role_' + globalIds.length;
  dom.setAttribute('id', id);
  globalIds.push(id);
  dom.innerHTML = role.name;
  app.appendChild(dom);
}
createRole(role);
createRole(enemy);
function changeRole(id) {
  let dom = document;
}




