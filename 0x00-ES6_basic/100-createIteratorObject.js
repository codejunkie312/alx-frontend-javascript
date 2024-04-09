export default function createIteratorObject(report) {
  const tempArray = [];

  for (const departement of Object.values(report.allEmployees)) {
    departement.forEach((employee) => {
      tempArray.push(employee);
    });
  }

  return tempArray;
}
