angular.module("sandglitch").service("GlitchViewerService",function(e,t){function n(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),s=o.length,i=new Uint8Array(s);s--;)i[s]=o.charCodeAt(s);return new Blob([i],{type:n})}this.effects=[],this.updateImage=function(e){this.imageToGlitch=e},this.sendImage=function(o,s){var i=t.defer();o=this.imageToGlitch;var r=new FormData,a=n(o);return r.append("image",a,"temp.jpg"),r.append("effects",s),console.log(r),e.post("/api/sand",r,{headers:{"Content-Type":!1}}).success(function(e){var t=e||[];console.log("post success",e),i.resolve(t)}).error(function(e){console.log(e),i.reject(e)}),i.promise}});