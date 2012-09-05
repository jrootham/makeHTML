//  Test hm.js

describe("Jasmine is present", function() {
  it("true is true", function() {
    expect(true).toBe(true);
  });
});

describe("Simple functions to build HTML strings", function(){
  it("single without options", function(){
    expect(mh.single("br", [])).toEqual("<br />");
  });
  
  it("nv == make name value pair", function() {
    expect(mh.nv("type", "text")).toEqual({name:"type", value:"text"});
  });

  it("single with 1 option", function() {
    expect(mh.single("input", [mh.nv("type", "text")]))
      .toEqual('<input type="text" />');
  });

  it("single with 2 options", function() {
    expect(mh.single("input", [mh.nv("type", "text"), mh.nv("name","foo")]))
      .toEqual('<input type="text" name="foo" />');
  });

  it("paired without options", function(){
    expect(mh.paired("div", "contents", [])).toEqual('<div>contents</div>');
  });

  it("paired with 2 options", function(){
    expect(mh.paired("div", "contents", [mh.nv("class","foo"),mh.nv("id","thing")]))
      .toEqual('<div class="foo" id="thing">contents</div>');
  });

  it("paired with class and id options", function(){
    expect(mh.paired("div", "contents", [mh.cl("foo"),mh.id("thing")]))
      .toEqual('<div class="foo" id="thing">contents</div>');
  });
});
