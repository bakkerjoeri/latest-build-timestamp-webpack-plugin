var CompilationTimestampPlugin = function() {}

CompilationTimestampPlugin.prototype.apply = function(compiler) {
    compiler.plugin('after-emit', function(compilation, callback) {
        callback();
        
        if (compilation.errors.length === 0) {
            console.log(`\nLatest build finished on ${new Date()}`);
        }
        
        if (compilation.errors.length > 0) {
            console.log(`\nBuild failed on ${new Date()}`);
        }
    });
};

module.exports = CompilationTimestampPlugin;
