## Relation to other types of descriptions

### Web services

There exist many specifications that define Web services,
both non-semantically (e.g., WSDL [[wsdl]] and WADL [[wadl]])
and semantically (e.g., OWL-S [[owls]] and Hydra [[hydra]])
These specifications target different facets
(e.g., HTTP-based vs SOAP-based access, defining RESTful APIs, etc.),
but have in common that they <em>define Web services</em>.
Thus, they clearly specify, e.g.,
which HTTP method to invoke with which parameter to correctly call the Web service.
The big drawback of these specifications is thus
that they are very coupled with the technology stack.
However, not all actions can be executed using Web APIs,
either because of performance or practicality reasons.
