angular.module("sandglitch").factory("GlitchViewerFactory",function(t,e){var n=function(){this.compressFile=function(t){e.compress({sourceFile:t,maxWidth:500,maxHeight:500,outputFormat:"jpeg"}).then(function(t){return t})}};return n});