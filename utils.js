
String.prototype.matchAll = String.prototype.matchAll || function (pattern) {
    const matches = []
    this.replace(pattern, function() {
      // arguments[0] is the entire match
      // args 1 - 2 before end of array are the capture groups
      const subMatches = [...arguments]
      matches.push(subMatches)
    })
    return matches
}
const stringToTest = '<<INVALID FIELD [[Test]]>> test <<INVALID FIELD [[test]]>> <<INVALID FIELD [[test]]>>'
console.log(stringToTest.matchAll(/<<.*?\[\[(.*?)\]\]>>/g))


// Template system

const templateContent = `
    <div>
        <p>{{ title }}</p>
        <div>{{ content }}</div>
    </div>
`

// template patterns
const pattern = /\{\{\s?(.*)\s?\}\}/g;

const templateMatches = templateContent.matchAll(pattern)

// Expect something like [[ '{{ title }}', 'templateVar', 'position', 'originalString' ] ...]
console.log(templateMatches)
