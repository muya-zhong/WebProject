const shows = [
  { play: 'tianxianpei', playLabel: '天仙配', session: 'afternoon', sessionLabel: '下午', price: 80, student: true },
  { play: 'nvfuma', playLabel: '女驸马', session: 'evening', sessionLabel: '晚上', price: 160, student: false },
  { play: 'tianxianpei', playLabel: '天仙配', session: 'evening', sessionLabel: '晚上', price: 120, student: true },
  { play: 'nvfuma', playLabel: '女驸马', session: 'afternoon', sessionLabel: '下午', price: 60, student: true }
];
const form = document.getElementById('filters');
const result = document.getElementById('result');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  if (!data.has('play') || !data.has('budget') || !data.has('session')) {
    result.textContent = '请先完成筛选控件，并检查name属性。';
    return;
  }
  const matched = shows.filter((show) =>
    (data.get('play') === 'all' || show.play === data.get('play')) &&
    show.price <= Number(data.get('budget')) &&
    (data.get('session') === 'all' || show.session === data.get('session')) &&
    (!data.has('student') || show.student)
  );
  result.textContent = matched.length ? matched.map((show) =>
    `${show.playLabel} / ${show.sessionLabel} / ${show.price}元`).join('；') : '没有符合条件的演出';
});
form.addEventListener('reset', () => { result.textContent = '已恢复默认条件，请重新应用筛选。'; });
