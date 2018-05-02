"use strict";

var Noteulas = function () {
    LocalContractStorage.defineMapProperty(this, "notes");
};

Noteulas.prototype = {
    init: function () {
        LocalContractStorage.set("noteCount", 0);
    },
    getNoteCount: function () {
        return LocalContractStorage.get("noteCount");
    },
    create: function (title, text) {
        var from = Blockchain.transaction.from;
        var noteCount = LocalContractStorage.get("noteCount");

        var note = '{"title": "' + title + '","text": "' + text + '","owner": "' + from + '"}'
        this.notes.set(noteCount, note);

        LocalContractStorage.set("noteCount", noteCount + 1);

        return noteCount;
    },
    get: function (noteId) {
        return this.notes.get(noteId);
    }
};

module.exports = Noteulas;
