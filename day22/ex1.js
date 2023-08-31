const inputArray = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

// Tạo một đối tượng Map để lưu trữ thông tin về các mục con
const categoryMap = new Map();

// Xử lý dữ liệu ban đầu và điền vào categoryMap
inputArray.forEach(item => {
  const { id, name, parent } = item;
  if (!categoryMap.has(id)) {
    categoryMap.set(id, { id, name, children: [] });
  }
  
  if (parent !== 0) {
    if (!categoryMap.has(parent)) {
      categoryMap.set(parent, { children: [] });
    }
    categoryMap.get(parent).children.push(categoryMap.get(id));
  }
});

// Lấy danh sách các mục gốc (có parent là 0)
const rootCategories = Array.from(categoryMap.values()).filter(item => !item.hasOwnProperty('parent'));

console.log(rootCategories);

