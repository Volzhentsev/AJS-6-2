export default function destructing(obj) {
  const res = [];

  obj.special.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    res.push({
      id, name, icon, description,
    });
  });
  return res;
}
