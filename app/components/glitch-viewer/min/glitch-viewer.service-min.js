angular.module("sandglitch").service("GlitchViewerService",function(e,t){function n(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),s=o.length,a=new Uint8Array(s);s--;)a[s]=o.charCodeAt(s);return new Blob([a],{type:n})}this.effects=[],this.updateImage=function(e){this.imageToGlitch=e},this.sendImage=function(o,s){var a=t.defer();o=this.imageToGlitch;var r=new FormData,i=n(o);return console.log(s),r.append("image",i,"temp.jpg"),r.append("effects",angular.toJson(s)),console.log(r),e.post("/api/sand",r,{headers:{"Content-Type":void 0},transformRequest:angular.identity}).success(function(e){var t=e||[];console.log("post success",e),a.resolve(t)}).error(function(e){console.log(e),a.reject(e)}),a.promise}});