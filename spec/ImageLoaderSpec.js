describe('ImageLoaderAsyc', function() {
    var newImageLoaderAsyc,
        options,
        window = window;

    beforeEach(function() {
        options = {
            "window": window
        };
        newImageLoaderAsyc = new ImageLoaderAsyc(options);
    });

    it('should be defined', function() {
        expect(newImageLoaderAsyc).toBeDefined();
    });

    it('should set `this.options` to `options`', function() {
        expect(newImageLoaderAsyc.options).toBe(options);
    });

    describe('when `ImageLoaderAsyc` is called without the `new` keyword', function() {
        beforeEach(function() {
            newImageLoaderAsyc = ImageLoaderAsyc(options);
        });

        it('should initialize it\'s self with the `new` keyword', function() {
            expect(newImageLoaderAsyc).toEqual(new ImageLoaderAsyc(options));
        });
    });

    describe('`loadImage` prototype method', function() {
        it('should be defined', function() {
            expect(newImageLoaderAsyc.loadImage).toBeDefined();
        });

        describe('when invoked', function() {
            var mockLoadImage;

            beforeEach(function() {
                mockLoadImage = {
                    "url": '<img/>',
                    "success": function() {
                        return "Star Trek";
                    },
                    "error": function() {
                        return "Star Wars";
                    }
                };
                spyOn(newImageLoaderAsyc, 'createImage').and.returnValue('<img/>');
                newImageLoaderAsyc.loadImage(
                    mockLoadImage.url,
                    mockLoadImage.success(),
                    mockLoadImage.error()
                );
            });

            it('should invoke `createImage` method to generate a new `Image`', function() {
                expect(newImageLoaderAsyc.createImage).toHaveBeenCalled();
            });
        });
    });

    describe('`createImage` prototype method', function() {
        it('should be defined', function() {
            expect(newImageLoaderAsyc.createImage).toBeDefined();
        });

        describe('when invoked', function() {
            it('should return a value', function() {
                spyOn(newImageLoaderAsyc, 'createImage').and.returnValue(new Image());
                expect(newImageLoaderAsyc.createImage()).toEqual(new Image());
            });
        });
    });
});