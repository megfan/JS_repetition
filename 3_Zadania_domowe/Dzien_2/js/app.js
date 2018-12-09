function  Tree(type) {
    this.type = type;
}

var lipa = new Tree(lipa);
var kasztan = new Tree(kasztan);
var brzoza = new Tree(brzoza);


Tree.prototype.bloom = function () {
    console.log(type + "I'm blooming");
};

