Choose the best response for each of the questions below. Then select **Check your answers**.

## quiz title: Check your knowledge

## Multiple Choice
Which of the following statements is correct with regard to use of components and props?

()It is not possible to use a data element from your main application within a component, because components are limited to their own isolated scope.{{Incorrect. While components are isolated within their own scope, it is possible to transmit a data property from the main application down into a component through the use of props.}}
()When using a component you would create a separate Javascript file, then wrap a `<div>` around the content in your HTML file that will be rendered for that component.{{Incorrect. You create a component using a separate Javascript file that includes the HTML elements to be rendered in the application. The HTML content is included under the `template` property of the Javascript file, surrounded by back ticks.}}
(x)You create a component using a separate Javascript file that includes the HTML tags you wish to render, plus any other data properties, methods, computed properties, and props that are needed by your component. The component is then rendered in the HTML application interface within a set of opening and closing `tags` that use the name of the Vue component.{{Correct!.}}