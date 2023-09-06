var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
]

var select = document.querySelector('#categorySelect');

function OptionAdded(category, prefix) {
    var optionCreate = document.createElement("option");
    optionCreate.value = category.id;
    optionCreate.innerText = prefix + category.name;
    select.appendChild(optionCreate);
    if (category.children) {
        for (var i = 0; i < category.children.length; i++) {
            OptionAdded(category.children[i], prefix + ' --| ');
        }
    }
}

for(var i = 0; i < categories.length; i++) {
    OptionAdded(categories[i], "");
}
