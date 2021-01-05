Choose the best response for each of the questions below. Then select **Check your answers**.

## quiz title: Check your knowledge

## Multiple Choice
Which of the following statements is correct with regard to two-way binding in Vue.js?

()It is not possible to create two-way data binding in a Vue application. You can only create one-way binding from the template to a child component.{{Incorrect. `v-model` can be used to create reactive two-way data binding in a Vue application between Javascript variables and the DOM or vice versa.}}
()You can use `props` to bind data from a child component up to the parent template; then use `emit` to bind data from a parent template down to a child component.{{Incorrect. `Props` are a way for a child component to make use of a data value that exists in the parent template, whereas `$emit` can be used to send data up to another part of the Vue application from a component. Neither of these processes involves reactive data binding, since you must create a listener and execute a method. In contrast, `v-model` can be used to create reactive two-way data binding between Javascript variables and the DOM or vice versa.}}
(x)`v-model` can be used to create reactive two-way data binding in a Vue application between Javascript variables and the DOM or vice versa.{{Correct!.}}