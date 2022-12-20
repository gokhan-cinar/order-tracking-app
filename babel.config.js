module.exports = {
    testEnvironment: "jsdom",
    plugins: [
        function () {
            return {
                visitor: {
                    MetaProperty(path) {
                        path.replaceWithSourceString('process');
                    },
                },
            };
        },
    ],
};
