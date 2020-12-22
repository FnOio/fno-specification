## The Problem {#problem}

Functions are processes that perform a specific task by associating one or more inputs to an output. They are essential
building blocks of information retrieval and information management, and of computer science in general. For example,
during extraction of birthdates from a semi-structured dataset, normalization of these dates improves further analysis.

However, the development, maintenance, and support efforts of
_implementing_ these functions are fragmented. Efforts are fragmented across different _development contexts_
(i.e., a combination of, among others, programming language, programming paradigm, and architecture), and it is not
feasible to consolidate these efforts by limiting all developers to the same development context. On the one hand
because implementations are tuned to meet different requirements, on the other hand due to prior investment. Thus, the
same function can have multiple implementations, each within a specific development context. For example, a function to
normalize dates may have implementations available as a piece of JavaScript source code, as part of a JAVA software
package, and within a RESTful Web service.

This specification (and accompanying [ontology](https://w3id.org/function/ontology))
explains how to semantically declare and describe functions, their input parameters, and possible outputs. Instead
of <em>defining</em> technology-specifics, the functions are <em>described</em> independent of the technology that
implements them. By semantically defining these functions using an ontology, we provide a uniform and unambiguous
solution, and thus, we can close the gap between semantic data and any real-world action, and enable semantic
applications to be used in real-world scenarios.

We furthermore provide links to other &ndash; not further specified &ndash; concepts such as problems and algorithms,
and specify the additional mappings of these abstract functions to (existing) concrete implementations.
