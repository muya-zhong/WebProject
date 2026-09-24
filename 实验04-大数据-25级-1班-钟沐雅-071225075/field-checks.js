// 教师提供的独立字段检查；不修改学生输入，不依赖其他字段。
(() => {
  const form = document.getElementById('filters');
  const same = (a, b) => JSON.stringify([...a].sort()) === JSON.stringify([...b].sort());
  function inspect(name) {
    const controls = [...form.elements].filter(e => e.name === name);
    const issues = [];
    const fail = (condition, message) => { if (!condition) issues.push(message); };
    fail(controls.length > 0, `未找到 name="${name}" 的控件，请检查名称及其是否位于表单内。`);
    if (controls.length) {
      if (name === 'play') {
        const e = controls[0];
        fail(controls.length === 1 && e.tagName === 'SELECT' && !e.multiple, '剧目应能从列表中选择一项。');
        if (e.options) {
          fail(same([...e.options].map(o => o.value), ['all', 'tianxianpei', 'nvfuma']), '剧目选项的值与约定不一致，或存在遗漏、重复。');
          const defaults = [...e.options].filter(o => o.defaultSelected);
          fail((defaults.length ? defaults[defaults.length - 1] : e.options[0])?.value === 'all', '初始剧目应为全部。');
        }
      }
      if (name === 'budget') {
        const e = controls[0];
        fail(controls.length === 1 && e.type === 'number', '票价应为一个数字输入控件。');
        fail(e.min === '0' && e.max === '500' && e.step === '10' && e.required, '检查票价范围0—500、步长10及必填要求。');
        fail(e.defaultValue === '200', '初始票价应为200。');
      }
      if (name === 'session') {
        fail(controls.length === 3 && controls.every(e => e.type === 'radio'), '场次应由三个同名单选控件组成。');
        fail(same(controls.map(e => e.value), ['all', 'afternoon', 'evening']), '场次取值应与字段约定一致。');
        fail(same(controls.filter(e => e.defaultChecked).map(e => e.value), ['all']), '初始场次应仅选中不限。');
      }
      if (name === 'student') {
        fail(controls.length === 1 && controls[0].type === 'checkbox', '优惠应为一个可独立勾选的控件。');
        fail(controls[0].value === 'yes', '优惠选中时的值应为yes。');
        fail(!controls[0].defaultChecked, '优惠初始应不勾选。');
      }
      fail(controls.every(e => !e.matches(':disabled')), '字段被禁用，无法提供数据。');
    }
    const values = new FormData(form).getAll(name);
    const current = values.length ? values.join(' / ') : '无字段值（未勾选的优惠正常不产生字段）';
    document.getElementById('check-' + name).textContent =
      (issues.length ? '待修改：' + issues.join('；') : '字段结构与初始设置通过。') +
      ' 当前读取：' + name + ' = ' + current + '。请按任务书切换状态再次检查；此结果不代表整页验收通过。';
  }
  document.querySelectorAll('[data-check]').forEach(button => {
    button.addEventListener('click', () => inspect(button.dataset.check));
  });
})();
