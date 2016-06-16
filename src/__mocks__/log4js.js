const logger = {
    debug: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
};

module.exports.getLogger = jest.fn().mockReturnValue(logger);
module.exports.connectLogger = jest.fn();
module.exports.mockLogger = logger;
