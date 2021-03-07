Cypress.Commands.add('createTodo', (todoContent) => {
    cy.get('[data-cy="input-new-task"]').type(todoContent)
    cy.get('[data-cy="submit-new-task"]').click()
})

function getTodoSelectorByIndex(index){
    return `[data-cy="todos"] [data-cy="todo"]:nth-child(${index + 1})`
}

Cypress.Commands.add('editTodo', (index, newContent) => {
    const todoSelector = getTodoSelectorByIndex(index)

    cy.get(`${todoSelector} textarea`).focus().type('{selectall} {backspace} ' + newContent).blur()
})

Cypress.Commands.add('deleteTodo', (index) => {
    const todoSelector = getTodoSelectorByIndex(index)

    cy.get(`${todoSelector} [data-cy="todo-delete-button"]`).click()
})