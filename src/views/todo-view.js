import { LitElement, html } from "@polymer/lit-element";

import "@vaadin/vaadin-text-field";
import "@vaadin/vaadin-button";
import "@vaadin/vaadin-checkbox";
import "@vaadin/vaadin-radio-button/vaadin-radio-button";
import "@vaadin/vaadin-radio-button/vaadin-radio-group";

import { VisibilityFilters } from "./../constants/visibility-filters.js";


/**
 * `<todo-view>` Custom component of the todo app.
 */
class TodoView extends LitElement {
  /**
   * Static getter properties.
   * 
   * @returns {Object}
   */
  static get properties() {
    return {
      /**
       * Function to return new todo for adding in any array.
       * Passed in as props from parent.
       * 
       * @type {{onAdd: Function}}
       */
      onAdd: { type: Function },
      /**
       * Function to return updated todo for updating todo status.
       * Passed in as props from parent.
       * 
       * @type {{onToggle: Function}}
       */
      onToggle: { type: Function },
      /**
       * Array of todo items.
       */
      todos: { type: Array },
      /**
       * Holds the filter value for filtering todos.
       */
      filter: { type: String },
    };
  }

  /**
   * Initializes the default value to the props.
   */
  constructor() {
    super();
    this.todos = [
      { task: "one", complete: true },
      { task: "two", complete: false },
      { task: "three", complete: true }
    ];
    this.filter = VisibilityFilters.SHOW_ALL;
  }

  /**
   * Render method.
   * 
   * @returns {customElements}
   */
  render() {
    return html`
      <div class="input-layout">
        
        <!-- Add Todo Component -->
        <add-todo .onAdd="${(task) => this.addTodo(task)}"></add-todo>
        
        <!-- Start of Todo List  -->
        <div class="todo-list">
          ${this.applyFilter(this.todos).map(todo =>
        html`
                <div class="todo-item">
                
                <!-- Todo Item Component -->
                  <todo-item 
                    .todo="${todo}" 
                    .onToggle="${(todo) => this.updateTodoStatus(todo)}">
                  </todo-item>
                </div>
              `
      )}
        </div>
        <!-- End of Todo List -->
      </div>

      <!-- Start of filter radio buttons -->
      <vaadin-radio-group
        value="${this.filter}"
        @value-changed="${this.onFilterChange}"
      >
        ${Object.values(VisibilityFilters).map(
        filter => html`
            <vaadin-radio-button value="${filter}"
              >${filter}</vaadin-radio-button
            >
          `
      )}
      </vaadin-radio-group>
      <!-- End of filter radio buttons -->
    `;
  }

  /**
   * Executes on selection of filter radio buttons.
   * 
   * @param {*} e 
   */
  onFilterChange(e) {
    this.filter = e.detail.value;
  }

  /**
   * Returns the todo list by selected filter.
   * 
   * @param {*} todos 
   */
  applyFilter(todos) {
    switch (this.filter) {
      case VisibilityFilters.SHOW_ACTIVE:
        return this.todos.filter(todo => !todo.complete);
      case VisibilityFilters.SHOW_COMPLETED:
        return this.todos.filter(todo => todo.complete);
      default:
        return todos;
    }
  }

  /**
   * Updates the modified TODO in an array.
   * 
   * @param {*} e 
   */
  updateTodoStatus(todoToUpdate) {
    todoToUpdate.complete = !todoToUpdate.complete;
  }

  /**
   * Adds new TODO to an array.
   * 
   * @param {*} e 
   */
  addTodo(task) {
    if (task) {
      this.todos = [
        ...this.todos,
        {
          task: task,
          complete: false
        }
      ];
    }
  }
}

customElements.define("todo-view", TodoView);
