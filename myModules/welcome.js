info = {
    prefix: "mr.",
    fullName: "Ali Osama",
    welcomeMsg: function() {
        return this.prefix + " " + this.fullName;
    }
}

module.exports = {
    info
}