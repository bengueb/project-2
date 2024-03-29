/**
 * function to render a confirmation modal when delete is clicked
 * @param {string} title the title to go in the modal
 * @param {function} callback the function to be executed when submit is clicked
 */
const renderConfirmationModal = (title, callback) => {
  console.log("render confirmation modal called");
  // create the elements
  const modalFade = $("<div>", { id: "modal" }).css("z-index", 50);
  const modalDiaglogue = $("<div>", { class: "modal-dialog" });
  const modalContent = $("<div>", { class: "modal-content" });
  const modalHeader = $("<div>", { class: "modal-header" });
  const modalTitle = $("<h5>", { class: "modal-title text-primary" }).text(title);
  const modalprefooter = $("<div>", { class: "modal-footer" });
  const button = $("<button>", {
    class: "btn btn-primary",
    id: "modal-button"
  }).text("Cancel");
  const submit = $("<button>", {
    class: "btn btn-primary",
    id: "modal-submit"
  }).text("Confirm");

  // append and render the elements
  $("#main").prepend(modalFade);
  modalFade.append(modalDiaglogue);
  modalDiaglogue.append(modalContent);
  modalContent.append(modalHeader, modalprefooter);
  modalHeader.append(modalTitle);
  modalprefooter.append(button, submit);

  // listen when to close the modal
  listenForModalClick();

  // listen for form submission
  $("#modal-submit").click(() => {
    callback();
  });
};

// function to create a cateogry
const createCategory = () => {
  const userId = parseInt(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );

  renderModal("Create Category", userId);
};

// function to create an expense
const createExpense = () => {
  const userId = parseInt(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );

  renderModal("Create Expense", userId);
};

/**
 * function to render list of categories
 * @param {string} text the name of each category
 * @param {object} elementId the dom element containing the category
 */
const renderDropdownCategories = (text, elementId) => {
  // create the element
  return $("<option>", {
    class: `text-dark bg-light`,
    categoryId: elementId,
    value: text
  }).text(text);
};

/**
 * function to render the drop down filter
 * @param {string} elementId the id of this element
 * @return {object} the category dropdown
 */
const renderDropdown = elementId => {
  // create the element
  return $("<select>", {
    class: "form-control w-100 mt-3 bg-primary text-white",
    id: elementId
  });
};

/**
 * function to render form input with prefilled text
 * @param {string} type the label for the input
 * @param {string} elementId the id of the input field
 * @param {string} text the text to be displayed in the input
 * @return {object} the form
 */
const renderModalFormFields = (type, elementId, text) => {
  // create the elements
  const div = $("<div>");
  const inputGroup = $("<div>", { class: "input-group" });
  const label = $("<label>", { for: type }).text(type);
  const input = $("<input>", {
    type: "text",
    class: "input-group-text text-left",
    id: elementId
  }).val(text);
  div.append(inputGroup);
  inputGroup.append(label, input);

  return div;
};

/**
 * function to render the modal
 * @param {string} title the title to go in the modal
 * @param {string} userId the id of the the user
 * @param {object} obj the object containing required fields for preforming crud operations on the table
 */
const renderModal = (title, userId, obj) => {
  // create the elements
  const modalFade = $("<div>", { id: "modal" }).css("z-index", 5);
  const modalDiaglogue = $("<div>", { class: "modal-dialog" });
  const modalContent = $("<div>", { class: "modal-content" });
  const modalHeader = $("<div>", { class: "modal-header" });
  const modalBody = $("<div>", { class: "modal-body" });
  const modalTitle = $("<h5>", { class: "modal-title text-primary" }).text(title);
  const modalprefooter = $("<div>", { class: "modal-footer" });
  const button = $("<button>", {
    class: "btn btn-primary",
    id: "modal-button"
  }).text("Cancel");
  const submit = $("<button>", {
    class: "btn btn-primary",
    id: "modal-submit"
  }).text("Submit");

  // append and render the elements
  $("#main").prepend(modalFade);
  modalFade.append(modalDiaglogue);
  modalDiaglogue.append(modalContent);
  modalContent.append(modalHeader, modalBody, modalprefooter);
  modalHeader.append(modalTitle);
  modalprefooter.append(button, submit);

  renderModalContent(title, userId, obj, modalBody);

  // listen when to close the modal
  listenForModalClick();

  // listen for form submission
  $("#modal-submit").click(() => {
    listenForModalSubmission(title, userId, obj);
  });
};

/**
 * function to render the modal form and append it to the modal
 * @param {string} title the title to go in the modal
 * @param {string} userId the id of the the user
 * @param {object} obj the object containing required fields for preforming crud operations on the table
 * @param {object} modalBody the object to append this to
 */
const renderModalContent = (title, userId, obj, modalBody) => {
  // determine the form to render in the modal body
  switch (title) {
    case "Edit Expense":
      // render categories and append it to .modal-body
      getCategories(userId, ".modal-body", obj.categoryValue);

      // render form fields with prefilled text
      modalBody.append(
        renderModalFormFields("Description", "modal-description", obj.description),
        renderModalFormFields("Amount", "modal-amount", obj.amount)
      );
      break;

    case "Edit Category":
      // render form fields with prefilled text
      modalBody.append(
        renderModalFormFields("Category Name", "modal-name", obj.categoryValue),
        renderModalFormFields("Goal", "modal-goal", obj.goalValue)
      );
      break;

    case "Create Category":
      // render form fields with prefilled text
      modalBody.append(
        renderModalFormFields("Category Name", "modal-category", ""),
        renderModalFormFields("Goal", "modal-goal", "")
      );
      break;

    case "Create Expense":
      getCategories(userId, ".modal-body");

      // render form fields with prefilled text
      modalBody.append(
        renderModalFormFields("Description", "modal-description", ""),
        renderModalFormFields("Amount", "modal-amount", "")
      );
      break;

    case "Edit Income":
      // render form fields with prefilled text
      console.log("obj.userIncome :", obj.userIncome);
      modalBody.append(renderModalFormFields("Income", "modal-income", obj.userIncome));
      break;

    default:
      break;
  }
};

// function to close the modal
const listenForModalClick = () => {
  // Get the modal
  const modal = document.getElementById("modal");

  // when the user clicks the close button in the modal, close modal
  $("#modal-button").click(() => {
    $("#modal").remove();
  });
};

/**
 * function to determine what the submit button does base on the option passed in
 * @param {string} option determines which case and what submit does
 * @param {string} userId the id of the the user
 * @param {object} obj the object containing required fields for expense/category
 */
const listenForModalSubmission = (option, userId, obj) => {
  // determine what to the submit button does
  switch (option) {
    case "Edit Expense":
      // grab the form fields from the modal
      const description = $("#modal-description").val();
      const amount = parseFloat($("#modal-amount").val());
      const category = $("#categories option:selected").attr("categoryId");
      updateExpense(obj.editId, description, amount, category);
      break;

    case "Edit Category":
      // grab the form fields from the modal
      const name = $("#modal-name").val();
      const goal = parseFloat($("#modal-goal").val());
      updateCategory(obj.editId, name, goal);
      break;

    case "Create Category":
      const categoryName = $("#modal-category").val();
      const categoryGoal = parseFloat($("#modal-goal").val());
      postCategory(userId, categoryName, categoryGoal);
      break;

    case "Create Expense":
      // grab the form fields from the modal
      const expenseDescription = $("#modal-description").val();
      const expenseAmount = parseFloat($("#modal-amount").val());
      const expenseCategory = $("#categories option:selected").attr("categoryId");
      postExpense(expenseAmount, expenseDescription, expenseCategory);
      break;

    case "Edit Income":
      // grab the form fields from the modal
      const income = parseFloat($("#modal-income").val());
      updateUserIncome(userId, income);

    default:
      break;
  }
};

// function to pass current data to a modal
function editExpenseClicked() {
  const editId = parseInt($(this).attr("editId")); // get the edit button id
  const description = $(`.description-${editId}`).text(); // get the description
  const amount = parseFloat($(`.amount-${editId}`).text()); // get the amount
  const userId = parseInt(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );
  const categoryValue = $(this).attr("categoryValue"); // get the category text

  renderModal("Edit Expense", userId, { description, amount, categoryValue, editId });
}

// function to pass current data to a modal
function deleteExpenseClicked() {
  const deleteId = parseInt($(this).attr("deleteId"));
  renderConfirmationModal("Are you sure you want to delete the Expense?", () => {
    deleteExpense(deleteId);
  });

  // deleteExpense(deleteId);
}

// function to pass current data to a modal
function editCategoryClicked() {
  const editId = parseInt($(this).attr("editId")); // get the edit button id
  const categoryValue = $(this).attr("categoryValue"); // get the category text
  const goalValue = parseFloat($(this).attr("goalValue")); // get the goal value
  const userId = parseInt(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );

  renderModal("Edit Category", userId, { categoryValue, goalValue, editId });
}

// function to pass current data to a modal
function deleteCategoryClicked() {
  const deleteId = parseInt($(this).attr("deleteId"));
  renderConfirmationModal("Are you sure you want to delete the category?", () => {
    deleteCategory(deleteId);
  });
}

// function to pass current data to a modal
function editIncomeClicked() {
  const userIncome = parseFloat($(this).attr("userIncome"));
  const userId = parseInt(
    window.location.href.split("/")[window.location.href.split("/").length - 1]
  );

  renderModal("Edit Income", userId, { userId, userIncome });
}

$(document).ready(() => {
  $(document).on("click", ".edit-income-button", editIncomeClicked);
  $(document).on("click", ".edit-category-button", editCategoryClicked);
  $(document).on("click", ".delete-category-button", deleteCategoryClicked);
  $(document).on("click", ".edit-button", editExpenseClicked);
  $(document).on("click", ".delete-button", deleteExpenseClicked);
  $(document).on("click", ".create-category", createCategory);
  $(document).on("click", ".create-expense", createExpense);
});
