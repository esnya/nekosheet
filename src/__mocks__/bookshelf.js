const Bookshelf = module.exports = jest.fn();

const Model = jest.genMockFromModule('bookshelf/lib/base/model');
Bookshelf.mockReturnValue({
    Model,
});
