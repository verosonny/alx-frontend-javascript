export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* () {
      for (const department in report.allEmployees) {
        const employeesInDepartment = report.allEmployees[department];
        for (const employee of employeesInDepartment) {
          yield employee;
        }
      }
    },
  };
}
