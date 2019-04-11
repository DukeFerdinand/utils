
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
console.log('matchall test', stringToTest.matchAll(/<<.*?\[\[(.*?)\]\]>>/g))


// Template system

var templateContent = `
    <div>
        <p>{{ title }}</p>
        <div>{{ content }}</div>
    </div>
`

// template patterns
const pattern = /\{\{\s?(.*)\s?\}\}/g;

const templateMatches = templateContent.matchAll(pattern)

// Expect something like [[ '{{ title }}', 'templateVar', 'position', 'originalString' ] ...]
console.log('templates', templateMatches)
