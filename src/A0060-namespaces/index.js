/* eslint-disable @typescript-eslint/no-namespace */
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.name = 'Batman';
    var NamespacePerson = /** @class */ (function () {
        function NamespacePerson(name) {
            this.name = name;
        }
        return NamespacePerson;
    }());
    MyNamespace.NamespacePerson = NamespacePerson;
    var person = new NamespacePerson('Batman');
    console.log(person);
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.name = 'Batman';
    })(OtherNamespace = MyNamespace.OtherNamespace || (MyNamespace.OtherNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
var person = new MyNamespace.NamespacePerson('Batman');
console.log(person);
console.log(MyNamespace.name);
console.log(MyNamespace.OtherNamespace.name);
var namespaceConst = 'namespaceConst value';
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />
console.log(MyNamespace.name);
console.log(namespaceConst);
