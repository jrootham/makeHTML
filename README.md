makeHTML
========

Small and simple library to make HTML strings in javascript

========

File list

testmh.html   driver for jasmine testing
spec/Spec.js  tests for jasmine testing
src/mh.js     code

=========

Functions

single(tag,options)
   return a self terminated html tag
   tag - the tag name
   options - an array of javascript objects with name and value elements
   
paired(tag,contents,options)
   return an html tag
   tag - the tag name
   contents - contents of the tag
   options - an array of javascript objects with name and value elements
   
   
See spec/Spec.js for examples
