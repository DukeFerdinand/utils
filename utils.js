String.prototype.matchAll = String.prototype.matchAll || function (pattern) {
  var matches = []
  this.replace(pattern, function() {
    // arguments[0] is the entire match
    // args 1 - 2 before end of array are the capture groups
    var subMatches = [...arguments]
    matches.push(subMatches)
  })
  return matches
}
var stringToTest = '<<INVALID FIELD [[Test]]>> test <<INVALID FIELD [[test]]>> <<INVALID FIELD [[test]]>>'
console.log(stringToTest.matchAll(/<<.*?\[\[(.*?)(\]\])>>/g))


export default utils
