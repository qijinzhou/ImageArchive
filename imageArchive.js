(function (ImageArchive) {
    "use strict";
    ImageArchive.viewModel = function () {
        this.data = ko.observableArray();
    };
    ImageArchive.bindToUrl = function (imageListUrl) {
        var self = this;
        $.getJSON(imageListUrl).done(function (data) {
            self.bindToImages(data);
        });
    };
    ImageArchive.bindToImages = function (images) {
        var viewModel = new ImageArchive.viewModel();
        viewModel.data(images);
        ko.applyBindings(viewModel);
    };
})(window.ImageArchive = window.ImageArchive || {});
