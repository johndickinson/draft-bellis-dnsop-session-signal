module.exports = function(grunt) {
  // Load Grunt tasks declared in the package.json file
  require('jit-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "localhost",
          bases: ['output'],
          livereload: true,
          open: 'http://localhost:<%= express.all.options.port%>/draft-bellis-dnsop-session-signal.html'
        }
      }
    },
    watch: {
      all: {
        files: ['draft-bellis-dnsop-session-signal.md'],
        tasks: ['kramdown_rfc2629'],
        options: {
          livereload: true
        }
      }
    },
    kramdown_rfc2629: {
      all: {
        src: ['draft-bellis-dnsop-session-signal.md']
      }
    }
  });

  grunt.registerTask('default', ['kramdown_rfc2629']);
  grunt.registerTask('server', ['kramdown_rfc2629', 'express', 'watch'])
};
