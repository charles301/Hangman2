var prompt = require('cli-input');
var ps = prompt({infinite: true});
ps.on('value', function(value, options, ps) {
  // do something with value
  console.log(value)
})
ps.run();