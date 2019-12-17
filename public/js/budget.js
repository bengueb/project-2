/**
 * function to render the user's income
 * @param {object} userData an object that contains the user data from the response
 */
const renderIncomeRow = userData => {
  const tr = $("<tr>");
  const tdIncomeHeader = $("<th>").text("Income");
  const tdIncome = $("<td>").text("$" + userData.income);
  const editButton = $("<div>", {
    class: "btn btn-white text-white mx-1 mt-2 edit-income-button",
    userId: userData.id,
    userIncome: userData.income
  }).text("Edit");

  $("#income").append(tr);
  tr.append(tdIncomeHeader, tdIncome, editButton);
};

/**
 * function to render category rows
 * @param {object} categoryData an object that contains the category data from the response
 * @param {integer} totalExpenseCat the total expense for the category
 */
const renderCategoryRow = (categoryData, totalExpenseCat) => {
  const overUnder = categoryData.goal - totalExpenseCat;
  const tr = $("<tr>");
  const tdCategoryName = $("<td>").text(categoryData.name);
  const tdCategoryGoal = $("<td>").text("$" + categoryData.goal);
  const tdCategoryTotal = $("<td>").text("$" + totalExpenseCat);
  const tdOverUnder = $("<td>").text("$" + parseFloat(overUnder).toFixed(2));
  const editButton = $("<div>", {
    class: "btn btn-white mx-1 mt-2 edit-category-button",
    editId: categoryData.id,
    categoryId: categoryData.id,
    categoryValue: categoryData.name,
    goalValue: categoryData.goal
  }).text("Edit");

  $("#main").append(tr);
  tr.append(tdCategoryName, tdCategoryGoal, tdCategoryTotal, tdOverUnder, editButton);
};

/**
 * function to render a row containing the remainder
 * @param {object} remainderData the response from the API containing the remainder
 */
const renderRemainderRow = remainderData => {
  const tr = $("<tr>");
  const tdIncomeLeft = $("<td>").text("Income Left");
  const blank0 = $("<td>").text("");
  const blank1 = $("<td>").text("");
  const blank2 = $("<td>").text("");
  const tdRemainder = $("<td>").text(
    "$" + (parseFloat(remainderData.income) - parseFloat(remainderData.remainder)).toFixed(2)
  );

  $("#main").append(tr);
  tr.append(tdIncomeLeft, blank0, tdRemainder, blank1, blank2);
};

$(document).ready(() => {
  getBudgetCategories();
  getIncome();
  getRemainder();
});
