## Definitions

The following document makes a clear distinction between following concepts:

- A <dfn>function declaration</dfn> is stating that a function exists, without further ado. 
  For example, `function sum` is a <a>function declaration</a>.
- A <dfn>function description</dfn> describes the function, i.e., talks about the inputs and outputs of the function.
  For example, the function above can have the following description: `function int sum(int a, int b)`, namely,
  the function `sum` has two input parameters, `int a` and `int b`, and returns an integer.
- An <dfn>assignment</dfn> fills in the values of the parameters of a functions.
  For example, a possible assignment for the exemplary function could be `sum(2, 4)`, namely,
  assigning the values `2` to `a` and `4` to `b`.

Furthermore, we define following concepts:

- A <dfn>function</dfn> is a process that performs a specific task. 
  In essence, its identification is a <a>function declaration</a>.
  A function can associate one or more
  <a data-lt="parameter">parameters</a> to an <a>output</a>.
  A function can have input parameters, output, solve certain
  <a data-lt="problem">problems</a>,
  and can be implemented using certain <a data-lt="algorithm">algorithms</a>.
  It's execution can also be described in an
  implementation-independent manner, see https://fno.io/spec/#dfn-execution.
  _The ontology term is defined at [fno:Function](#fn-function)._
- A <dfn>problem</dfn> is a general issue. Some problems can be solved by executing a certain <a>function</a>.
  For example, the above function solves the `doing a sum` problem, however,
  "global warming" could also be perceived as a problem, with no single function to solve it.
  _The ontology term is defined at [fno:Problem](#fn-problem)._
- An <dfn>algorithm</dfn> is a specified set of instructions, independent of its <a>implementation</a> (e.g., Dijkstra's shortest path algorithm).
  A <a>function</a> can be implemented using a known algorithm, or use a combination of multiple algorithms to solve a certain <a>problem</a>.
  A function does not have to be implemented by any algorithm or have to be mapped one-on-one to an algorithm.
  It is not required to have a one-to-one mapping between an algorithm and a problem.
  _The ontology term is defined at [fno:Algorithm](#fn-algorithm)._
- A <dfn>parameter</dfn> is the description of the input value of a <a>function</a>.
  For example, the above function has two parameters, `a` and `b`.
  _The ontology term is defined at [fno:Parameter](#fn-parameter)._
- An <dfn>output</dfn> is the description of the output value of a <a>function</a>.
  For example, the above function has one output, an integer.
  A <a>function</a> can have multiple outputs (e.g., callbacks in JavaScript can return multiple results, or a function could throw multiple types of errors).
  A <a>function</a> with all parameters and outputs defined is a <a>function description</a>.
  _The ontology term is defined at [fno:Output](#fn-output)._
- An <dfn>execution</dfn> is the <a>assignment</a> of the values of the parameters of a function.
  An <a>execution</a> has as result the value of the <a>output</a> of the function.
  For example, `sum(2, 4)` is an execution of the example function.
  The value of the output is known after the function is executed, and should in this case be the integer `6`.
  _The ontology term is defined at [fno:Execution](#fn-execution)._
- An <dfn>implementation</dfn> defines the internal workings of one or more <a data-lt="function">functions</a>.
  This depends on the used development context, i.e., the used programming language and execution environment.
  An implementation could be, e.g., an NPM package.
  _The ontology term is defined at [fno:Implementation](#fno-implementation)._
- A <dfn>mapping</dfn> links (abstract) <a data-lt="function">functions</a> and (concrete) <a data-lt="implementation">implementations</a>.
  _The ontology term is defined at [fno:Mapping](#fno-Mapping)._
- A <dfn>composition</dfn> combines multiple functions by mapping <a data-lt="parameter">parameters</a> or <a data-lt="output">outputs</a>  
of <a data-lt="function">constituent functions</a> onto one another, defining a nesting or concatenation of functions.
  _The ontology term is defined at [fnoc:Composition](#fnoc-composition)._ The composition consists of a set of CompositionMappings.
- A <dfn>composition mapping</dfn> is a directed connection from either a constant term, a <a data-lt="parameter">parameter</a>, or 
an <a data-lt="output">output</a> to a <a data-lt="parameter">parameter</a> or an <a data-lt="output">output</a>.  
  
In this specification, a <a>problem</a> and <a>algorithm</a> are not described in further detail.
We mostly provide generic relations to point to other vocabularies or ontologies.
This way, problems and algorithms can be further specified in complementary vocabularies.
