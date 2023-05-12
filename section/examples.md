## Examples {#examples}

The following sections are a set of FAQs and How-to's regarding the Function Ontology.

### Array of parameters

The model allows for arrays of parameters. For example, the following
function `function findInString(str, [searchValues...]): boolean`
could be described as follows:

```turtle "example": " "
# Function description
ex:findInString a fno:Function ; 
    fno:name "Finding multiple values in a string function"^^xsd:string ; 
    dcterms:description "This function returns true if any of the input values is found in the string."^^xsd:string ;
    fno:expects (
        [ fno:predicate ex:body; fno:required "true"^^xsd:boolean ]
        [ fno:predicate ex:searchValues; fno:required "true"^^xsd:boolean ]
    ) ;
    fno:returns (
        [ fno:predicate ex:found; fno:required "true"^^xsd:boolean ]
    ) .

# Execution description
ex:findExecution a fno:Execution ;
    fno:executes ex:findInString ;
    ex:body "Try and find some values in this string."^^xsd:string ;
    ex:searchValues ("Paris" "Brussels" "Tokyo" "Los Angeles") .

# After execution, following triple is created
ex:findExecution ex:found "false" .
```

### Required output

Output can be assigned required or not. For example, thrown errors are an example of optional output.
