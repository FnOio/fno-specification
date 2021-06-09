## The Function Ontology {#ontology}

The Function Ontology distinguishes between the (_abstract_) function and the (_concrete_) implementation. The two can
be used together, but are complementary.

### Function (abstract) {#ontology-abstract}

<figure>
    <img src="./resources/images/function_ontology_2.png" alt="The Function Ontology"/>
    <figcaption>The Function Ontology</figcaption>
</figure>

The Function Ontology follows
the [Content Ontology Design Pattern](http://ontologydesignpatterns.org/wiki/Category:ContentOP)
and consists of a couple of base classes that need to be instantiated for real world use cases.
Input <a data-lt="parameter">parameters</a> and <a>output</a> values are connected to <a data-lt="function">
functions</a> via
<a data-lt="execution">executions</a>, using a reification paradigm [[rdf-primer]].

It uses SKOS to define relations between <a data-lt="function">functions</a>,
<a data-lt="problem">problems</a>, and <a data-lt="algorithm">algorithms</a> [[skos-primer]].

To be consistent with the paradigms used in SKOS, axioms need to be made instead of subclassing the base classes of the
Function Ontology. The reification paradigm allows to define the connection between an <a>execution</a> and the input
<a data-lt="parameter">parameters</a> and <a>output</a> values. This allows for reusing these connection definitions,
and more meaningful connections between input
<a data-lt="parameter">parameters</a> and <a>execution</a>.

No cardinalities are defined in the Function Ontology, as there are no hard limits on cardinality to be defined. A <a>
function</a> can implement multiple <a data-lt="algorithm">algorithms</a>, solve multiple
<a data-lt="problem">problems</a>, and have multiple <a data-lt="execution">executions</a>. All executions can have
multiple input <a data-lt="parameter">parameters</a> and <a>output</a> values. Vice versa, input parameters and output
values can be linked to multiple executions, and an execution (i.e., a set of input values and output values) can be
linked to multiple functions.

#### `fno:Function` {#fn-function}

```turtle "example": " "
ex:sumFunction
    a                   fno:Function ;
    fno:name            "The sum function"^^xsd:string ;
    dcterms:description "This function can do the sum of two integers."^^xsd:string .
```

This is a <a>function declaration</a>: a sum function is defined and described.

#### `fno:Problem` {#fn-problem}

```turtle "example": " "
ex:sumFunction
    a          fno:Function ;
    fno:solves ex:sumProblem .

ex:sumProblem
    a                   fno:Problem ;
    fno:name            "The sum problem"^^xsd:string ;
    dcterms:description "This handles the problem of adding two integers to each other."^^xsd:string ;
    skos:broader        ex:mathProblem .
```

Functions can be linked to Problems, which are more general descriptions than functions, e.g., the “Euclidean
distance”-function is related to the “Distance”-problem. To create a more specific organization, problems can be further
interlinked with each other using the SKOS standard [[skos-primer]].

<div class="note">

`skos` terms can be used to relate problems with each other. This can also be done for algorithms and functions.

</div>

##### `fno:solves` {#fn-solves}

**Domain** <a href="#fn-function">fno:Function</a>

**Range** <a href="#fn-problem">fno:Problem</a>

#### `fno:Algorithm` {#fn-algorithm}

```turtle "example": " "
ex:sumFunction
    a              fno:Function ;
    fno:implements ex:sumAlgorithm .

ex:sumAlgorithm
    a                   fno:Algorithm ;
    fno:name            "The sum algorithm"^^xsd:string ;
    dcterms:description "About how to add two integers to each other."^^xsd:string ;
```

##### `fno:implements` {#fn-implements}

**Domain** <a href="#fn-function">fno:Function</a>

**Range** <a href="#fn-algorithm">fno:Algorithm</a>

#### `fno:Parameter` {#fn-parameter}

```turtle "example": " "
ex:sumFunction
    a           fno:Function ;
    fno:expects ( ex:intParameterA ex:intParameterB ) .

ex:intParameterA
    a             fno:Parameter ;
    fno:predicate ex:startValue ;
    fno:type      xsd:integer ;
    fno:required  "true"^^xsd:
        boolean .

ex:intParameterB
    a             fno:Parameter ;
    fno:predicate ex:sumValue ;
    fno:type      xsd:integer ;
    fno:required  "true"^^xsd:boolean .
```

A Function expects a list of Parameters and returns a list of Outputs. This description actually defines which
predicates to use when binding the values to the execution of the function. The parameters are ordered in a list, and
each parameter defines the relationship that is used for the execution. For this, the `fno:predicate` predicate MUST be
used. All predicates are allowed, except for `rdf:type` and `fno:executes`. A Parameter can have a specific type or
other metadata (e.g., required or not, having a default value or not).

To specify the datatype of the parameter, the `fno:type` predicate SHOULD be used.

To specify whether a parameter is required, the `fno:required` predicate SHOULD be used.

In the example `ex:intParameterA` and `ex:intParameterB` can be reused across function descriptions. As they only
describe the parameters, and not the actual values, they can be reused. For example, the
function `function match(str, regex)` and `function split(str, regex)` could reuse the same parameter instantiations.

The `fno:expects` predicate has as range `rdf:List`. This could be used to hint applications how many parameters are
used, and in what order, however, this is not enforced. This to accommodate technologies where the order of parameters
is not important.

##### `fno:expects` {#fn-expects}

**Domain** <a href="#fn-function">fno:Function</a>

**Range** <a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#List">rdf:List</a> of
<a href="#fn-parameter">fno:Parameter</a>

##### `fno:predicate` {#fn-predicate}

**Domain** <a href="#fn-function">fno:Function</a>

**Range** <a href="http://www.w3.org/1999/02/22-rdf-syntax-ns#Property">rdf:Property</a>

##### `fno:type` {#fn-type}

**Domain** <a href="#fn-parameter">fno:Parameter</a>

##### `fno:required` {#fn-required}

**Domain** <a href="#fn-parameter">fno:Parameter</a>

**Range** <a href="http://www.w3.org/2001/XMLSchema#boolean">xsd:boolean</a>

#### `fno:Execution` {#fn-execution}

```turtle "example": " "
ex:sumExecution
    a             fno:Execution ;
    fno:executes  ex:sumFunction ;
    ex:startValue "2"^^xsd:integer ;
    ex:sumValue   "4"^^xsd:integer.
```

The Execution shows how the predicates are used as described as Parameters of the Function.
`rdf:type` and `fno:executes` cannot be used as parameter predicates, as this would conflict with the description of the
execution.

##### `fno:executes` {#fn-executes}

**Domain** <a href="#fn-execution">fno:Execution</a>

**Range** <a href="#fn-function">fno:Function</a>

#### `fno:Output` {#fn-output}

```turtle "example": " "
ex:sumFunction
    a           fno:Function ;
    fno:returns ( ex:sumOutput ) .

ex:sumOutput
    a             fno:Output ;
    fno:predicate ex:sumResult ;
    fno:type      xsd:integer ;
    fno:required  "true"^^xsd:boolean .
```

A function's output is also a list, as multiple values can be returned
(e.g., a Web API can return a body and a status code, a local implementation can return a value or throw an error).
Similar as with `fno:Parameter`, the connecting predicate is described for `fno:Output`. To specify the datatype of the
output, similarly, the `fno:type` predicate SHOULD be used.

After the execution of the function with the correct parameter values, we could return the following turtle:

```turtle "example": " "
ex:sumExecution
    a            fno:Execution ;
    ex:sumResult "6"^^xsd:integer.
```

Similarly as with the parameter descriptions, the output descriptions can be reused across functions.

##### `fno:returns` {#fn-returns}

**Domain** <a href="#fn-execution">fno:Execution</a>

**Range** <a href="#fn-output">fno:Output</a>

#### Complete example

Declaration and description of the function and one execution:

```turtle "example": " "
ex:sumFunction
    a                   fno:Function ;
    fno:name            "The sum function"^^xsd:string ;
    dcterms:description "This function can do the sum of two integers."^^xsd:string ;
    fno:solves          ex:sumProblem ;
    fno:implements      ex:sumAlgorithm ;
    fno:expects         ( ex: intParameterA ex:intParameterB ) ;
        fno:returns ( ex:sumOutput ) .

ex:intParameterA
    a             fno:Parameter ;
    fno:predicate ex:startValue ;
    fno:type      xsd:integer ;
    fno:required  "true"^^xsd:boolean .

ex:intParameterB
    a             fno:Parameter ;
    fno:predicate ex:sumValue ;
    fno:type      xsd:integer ;
    fno:required  "true"^^xsd:boolean .

ex:sumOutput
    a             fno:Output ;
    fno:predicate ex:sumResult ;
    fno:type      xsd:integer ;
    fno:required  "true"^^xsd:boolean .

ex:sumProblem
    a                   fno:Problem ;
    fno:name            "The sum problem"^^xsd:string ;
    dcterms:description "This handles the problem of adding two integers to each other."^^xsd:string ;
    skos:broader        ex:mathProblem .

ex:sumAlgorithm
    a                   fno:Algorithm ;
    fno:name            "The sum algorithm"^^xsd:string ;
    dcterms:description "About how to add two integers to each other."^^xsd:string .

ex:sumExecution
    a             fno:Execution ;
    fno:executes  ex:sumFunction ;
    ex:startValue "2"^^xsd:integer ;
    ex:sumValue   "4"^^xsd:integer .
```

Resulting output triples:

```turtle "example": " "
ex:sumExecution
    a            fno:Execution ;
    ex:sumResult "6"^^xsd:integer .
```

### Implementation (concrete) {#ontology-concrete}

<figure>
    <img src="./resources/images/fno-full_0.6.1.png" alt="The Function Ontology"/>
    <figcaption>The Function Ontology, linked to implementations</figcaption>
</figure>

#### `fno:Implementation` {#fno-implementation}

```turtle "example": " "
ex:leftPadImplementation
    a         fnoi:NpmPackage ;
    doap:name "left-pad" .
```

##### Example: Hydra {#hydra}

Link with the <a href="http://www.hydra-cg.com/spec/latest/core/">Hydra specification</a>.

The Hydra specification <a data-lt="implementation">defines</a> Web services semantically. A `hydra:ApiDocumentation`
can thus be seen as a specific `fno:Implementation`.

#### `fno:Mapping` {#fno-Mapping}

A `fno:Mapping` maps a `fno:Function` to a (part) of an `fno:Implementation`. For example: a left-pad function is mapped
to a specific method in an NPM package. This requires the combination of 3 types of mappings:

- the mapping of the method name
  (so that, e.g., a `ex:leftPad` function is mapped to method `doLeftPadding()`),
- the mapping of the parameters
  (so that, e.g., the argument with predicate
  `ex:inputString` of the function is mapped to the second parameter of the `doLeftPadding()` method), and
- the mapping of the outputs
  (so that, e.g., both the return value and the thrown exception of the method are mapping to the outputs of the
  function).

To link to the function and implementation, predicates `fno:function` and `fno:implementation` are used, respectively.

Note that the actual implementations and mappings are not part of the Function Ontology. Specific development contexts
can be further catered to.

```turtle "example": " "
ex:leftPadMapping
    a                  fno:Mapping ;
    fno:function       ex:leftPad ;
    fno:implementation ex:leftPadImplementation .
```

##### `fno:MethodMapping` {#fno-MethodMapping}

Maps the method name. For source code, this can be done using a `fnom:StringMethodMapping`. The method name is an
attribute of a `fnom:StringMethodMapping`, linked using the `fnom:method-name` predicate.

```turtle "example": " "
ex:leftPadMapping
    a                 fno:Mapping ;
    fno:methodMapping [ a                fnom:StringMethodMapping ;
                        fnom:method-name "doLeftPadding" ] .

```

##### `fno:ParameterMapping` {#fno-ParameterMapping}

Maps the different parameters. For source code, this is typically specified by the position,
using `fnom:PositionParameterMapping`:
each `fno:ParameterMapping` gets linked to a parameter using the `fnom:functionParameter` predicate, and to a position
using the `fnom:implementationParameterPosition` predicate.

```turtle "example": " "
ex:leftPadMapping
    a                    fno:Mapping ;
    fno:parameterMapping [ a                                    fnom:PositionParameterMapping ;
                           fnom:functionParameter               ex:inputStringParameter ;
                           fnom:implementationParameterPosition "2"^^xsd:int ] .

```

For a Web service, this is typically specified by a name, e.g., a POST using property "password" in the form body.
A `fnom:PropertyParameterMapping` is used. Each `fno:ParameterMapping` gets linked to a parameter using
the `fnom:functionParameter` predicate, and to a property using the `fnom:implementationProperty` predicate.

##### `fno:ReturnMapping` {#fno-ReturnMapping}

Maps the different outputs. For source code, this is typically specified by the return value, and (optionally) thrown
exceptions, using `fnom:DefaultReturnMapping` and `fnom:ExceptionReturnMapping`, respectively:
each `fno:ReturnMapping` gets linked to an output using the `fnom:functionOutput` predicate.

```turtle "example": " "
ex:leftPadMapping
    a                 fno:Mapping ;
    fno:returnMapping [ a                   fnom:DefaultReturnMapping ;
                        fnom:functionOutput ex:outputStringOutput ] .

```

#### Execution with a Mapping

##### `fno:uses` {#fno-uses}

The metadata of the mapping can be linked to the execution using the `fno:uses` predicate

```turtle "example": " "
ex:leftPadExecution
    fno:uses ex:leftPadMapping
```

### Full example

```turtle "example": " "
ex:leftPad
    a           fno:Function ;
    fno:expects ( ex:inputStringParameter ex:paddingParameter ) ;
    fno:returns ( ex:outputStringOutput ) .

ex:inputStringParameter
    a             fno:Parameter ;
    fno:predicate ex:inputString ;
    fno:type      xsd:string ;
    fno:required  "true"^^xsd:boolean .

ex:paddingParameter
    a             fno:Parameter ;
    fno:predicate ex:padding ;
    fno:type      xsd:int ;
    fno:required  "false"^^xsd:boolean .

ex:leftPadImplementation
    a         fnoi:NpmPackage ;
    doap:name "left-pad" .

ex:leftPadMapping
    a                    fno:Mapping ;
    fno:function         ex:leftPad ;
    fno:implementation   ex:leftPadImplementation ;
    fno:methodMapping    [ a                fnom:StringMethodMapping ;
                           fnom:method-name "doLeftPadding" ] ;
    fno:parameterMapping [ a                                    fnom:PositionParameterMapping ;
                           fnom:functionParameter               ex:inputStringParameter ;
                           fnom:implementationParameterPosition "2"^^xsd:int ] ;
    fno:parameterMapping [ a                                    fnom:PositionParameterMapping ;
                           fnom:functionParameter               ex:paddingParameter ;
                           fnom:implementationParameterPosition "1"^^xsd:int ] ;
    fno:returnMapping    [ a                   fnom:DefaultReturnMapping ;
                           fnom:functionOutput ex:outputStringOutput ] .
```
