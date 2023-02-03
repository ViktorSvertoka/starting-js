// приватные данные и функции - скрытие реализации, интерфейс

const salaryManagerFactory = function (employeeName, baseSalary) {
  let salary = baseSalary;

  const changeBy = function (amount) {
    salary += amount;
  };

  return {
    raise(amount) {
      changeBy(amount);
    },
    lower(amount) {
      changeBy(amount);
    },
    current() {
      return `Текущая зарплата ${employeeName} - ${salary}`;
    },
  };
};
