(function (ImageArchive) {
    "use strict";
    ImageArchive.viewModel = function () {
        this.data = ko.observableArray();
    };
    ImageArchive.bindToUrl = function (imageListUrl) {
        $.getJSON(imageListUrl).done(function (data) {
            bindToImages(data);
        });
    };
    ImageArchive.bindToImages = function (images) {
        var viewModel = new ImageArchive.viewModel();
        viewModel.data(images);
        ko.applyBindings(viewModel);
    };
    ImageArchive.showImage = function (data) {
        $("#test").text(data.uri);
    };
})(window.ImageArchive = window.ImageArchive || {});
