function ImageLoaderAsyc(options) {
    if (!(this instanceof ImageLoaderAsyc)) {
        return new ImageLoaderAsyc(options);
    }

    this.options = options;

    this.init();
}

ImageLoaderAsyc.prototype.loadImage = function(url, success, error) {
    this.image = this.createImage(300, 300);

    this.image.src = url;

    this.image.onLoad = function() {
        success(this.image);
    };

    this.image.onerror = function(e) {
        error(e);
    };
};

ImageLoaderAsyc.prototype.createImage = function() {
    return new Image();
};

ImageLoaderAsyc.prototype.init = function() {
    console.log('app started');
    this.loadImage(
        'foo.png',
        function () {
            console.log('loaded');
        },
        function () {
            console.log('error');
        }
    );
};

new ImageLoaderAsyc({
    "image": new Image()
});
