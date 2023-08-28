var customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];
  
  function createCustomers(customers) {
    var sortedCustomers = customers.slice();
    sortedCustomers.sort((a, b) => a.age - b.age);
    sortedCustomers.forEach(customer => {
      const nameParts = customer.name.split(" ");
      const firstName = nameParts[nameParts.length - 1];
      customer.shortName = firstName;
    });
  
    return sortedCustomers;
  }
  
  var result = createCustomers(customers);
  console.log(result);
  