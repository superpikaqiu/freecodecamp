!function(n){function e(e){for(var r,a,l=e[0],p=e[1],u=e[2],f=0,d=[];f<l.length;f++)a=l[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(n[r]=p[r]);for(c&&c(e);d.length;)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,l=1;l<t.length;l++){var p=t[l];0!==o[p]&&(r=!1)}r&&(i.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},o={0:0},i=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=p;i.push([4,1]),t()}({21:function(n,e,t){var r=t(22);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,o);r.locals&&(n.exports=r.locals)},22:function(n,e,t){(n.exports=t(0)(!1)).push([n.i,"body {\n  background-color: #00b3ee; }\n\n.box {\n  width: 300px;\n  height: 400px;\n  margin: 100px auto;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: #dfdfdf; }\n  .box h2 {\n    text-align: center;\n    font-size: 24px;\n    font-style: italic;\n    margin-top: 5px; }\n  .box input {\n    display: block;\n    width: 98%;\n    height: 40px;\n    line-height: 40px;\n    font-size: 24px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: right;\n    padding: 0 4px; }\n\n.button-field {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  margin-top: 10px; }\n  .button-field button {\n    display: inline-block;\n    padding: 0;\n    border: 0;\n    width: 60px;\n    height: 50px;\n    margin: 3px 5px;\n    background-color: #efefef; }\n    .button-field button:hover {\n      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.4);\n      /*background-color: #d9d9d9 !important;*/ }\n\n.number {\n  background-color: #fff !important; }\n\n#btnAdd {\n  height: 106px; }\n\n.row-left {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 210px;\n  height: 103px;\n  margin: 0 0; }\n",""])},4:function(module,exports,__webpack_require__){"use strict";(function($){__webpack_require__(6),__webpack_require__(13),__webpack_require__(21),__webpack_require__(23),$(document).ready(function(){var newFlag=!0;$(".button-field button").on("click",function(){var value=$(this).val(),input=$("#result"),exp=input.val();switch(value){case"AC":exp="";break;case"Del":newFlag||(exp=exp.slice(0,exp.length-1));break;case"=":try{exp=eval(exp),newFlag=!0}catch(n){console.log(n)}break;default:newFlag?exp=value:exp+=value,newFlag=!1}input.val(exp)}),console.log("test3")})}).call(this,__webpack_require__(5))}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9jYWxjdWxhdG9yL2luZGV4LnNjc3M/Y2I3NiIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2NhbGN1bGF0b3IvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2NhbGN1bGF0b3IvaW5kZXguanMiXSwibmFtZXMiOlsid2VicGFja0pzb25wQ2FsbGJhY2siLCJkYXRhIiwibW9kdWxlSWQiLCJjaHVua0lkIiwiY2h1bmtJZHMiLCJtb3JlTW9kdWxlcyIsImV4ZWN1dGVNb2R1bGVzIiwiaSIsInJlc29sdmVzIiwibGVuZ3RoIiwiaW5zdGFsbGVkQ2h1bmtzIiwicHVzaCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIm1vZHVsZXMiLCJwYXJlbnRKc29ucEZ1bmN0aW9uIiwic2hpZnQiLCJkZWZlcnJlZE1vZHVsZXMiLCJhcHBseSIsImNoZWNrRGVmZXJyZWRNb2R1bGVzIiwicmVzdWx0IiwiZGVmZXJyZWRNb2R1bGUiLCJmdWxmaWxsZWQiLCJqIiwiZGVwSWQiLCJzcGxpY2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwicyIsImluc3RhbGxlZE1vZHVsZXMiLCIwIiwiZXhwb3J0cyIsIm1vZHVsZSIsImwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicCIsImpzb25wQXJyYXkiLCJ3aW5kb3ciLCJvbGRKc29ucEZ1bmN0aW9uIiwic2xpY2UiLCJjb250ZW50Iiwib3B0aW9ucyIsImhtciIsInRyYW5zZm9ybSIsImluc2VydEludG8iLCJ1bmRlZmluZWQiLCJsb2NhbHMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIm5ld0ZsYWciLCJvbiIsInRoaXMiLCJ2YWwiLCJpbnB1dCIsImV4cCIsImV2YWwiLCJlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6ImFBQ0EsU0FBQUEsRUFBQUMsR0FRQSxJQVBBLElBTUFDLEVBQUFDLEVBTkFDLEVBQUFILEVBQUEsR0FDQUksRUFBQUosRUFBQSxHQUNBSyxFQUFBTCxFQUFBLEdBSUFNLEVBQUEsRUFBQUMsS0FDUUQsRUFBQUgsRUFBQUssT0FBb0JGLElBQzVCSixFQUFBQyxFQUFBRyxHQUNBRyxFQUFBUCxJQUNBSyxFQUFBRyxLQUFBRCxFQUFBUCxHQUFBLElBRUFPLEVBQUFQLEdBQUEsRUFFQSxJQUFBRCxLQUFBRyxFQUNBTyxPQUFBQyxVQUFBQyxlQUFBQyxLQUFBVixFQUFBSCxLQUNBYyxFQUFBZCxHQUFBRyxFQUFBSCxJQUtBLElBRkFlLEtBQUFoQixHQUVBTyxFQUFBQyxRQUNBRCxFQUFBVSxPQUFBVixHQU9BLE9BSEFXLEVBQUFSLEtBQUFTLE1BQUFELEVBQUFiLE9BR0FlLElBRUEsU0FBQUEsSUFFQSxJQURBLElBQUFDLEVBQ0FmLEVBQUEsRUFBaUJBLEVBQUFZLEVBQUFWLE9BQTRCRixJQUFBLENBRzdDLElBRkEsSUFBQWdCLEVBQUFKLEVBQUFaLEdBQ0FpQixHQUFBLEVBQ0FDLEVBQUEsRUFBa0JBLEVBQUFGLEVBQUFkLE9BQTJCZ0IsSUFBQSxDQUM3QyxJQUFBQyxFQUFBSCxFQUFBRSxHQUNBLElBQUFmLEVBQUFnQixLQUFBRixHQUFBLEdBRUFBLElBQ0FMLEVBQUFRLE9BQUFwQixJQUFBLEdBQ0FlLEVBQUFNLElBQUFDLEVBQUFOLEVBQUEsS0FHQSxPQUFBRCxFQUlBLElBQUFRLEtBS0FwQixHQUNBcUIsRUFBQSxHQUdBWixLQUdBLFNBQUFTLEVBQUExQixHQUdBLEdBQUE0QixFQUFBNUIsR0FDQSxPQUFBNEIsRUFBQTVCLEdBQUE4QixRQUdBLElBQUFDLEVBQUFILEVBQUE1QixJQUNBSyxF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Q0osUUFDUVAsUUFDQUssSUFBTS9CLE1BR04rQixLQUFPL0IsTUFHWDBCLFNBQVUsRUFPbEJJLE1BQU1ELElBQUlFLE9BR2RHLFFBQVFDLElBQUkiLCJmaWxlIjoiY2FsY3VsYXRvci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFs0LDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIzZWU7IH1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDAwcHg7XFxuICBtYXJnaW46IDEwMHB4IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjsgfVxcbiAgLmJveCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbi10b3A6IDVweDsgfVxcbiAgLmJveCBpbnB1dCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTglO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBwYWRkaW5nOiAwIDRweDsgfVxcblxcbi5idXR0b24tZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgLmJ1dHRvbi1maWVsZCBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiAzcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmOyB9XFxuICAgIC5idXR0b24tZmllbGQgYnV0dG9uOmhvdmVyIHtcXG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOSAhaW1wb3J0YW50OyovIH1cXG5cXG4ubnVtYmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxcblxcbiNidG5BZGQge1xcbiAgaGVpZ2h0OiAxMDZweDsgfVxcblxcbi5yb3ctbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDEwM3B4O1xcbiAgbWFyZ2luOiAwIDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyc7XHJcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcclxuXHJcbmltcG9ydCAnanF1ZXJ5L2Rpc3QvanF1ZXJ5Lm1pbic7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbmV3RmxhZyA9IHRydWU7XHJcblxyXG4gICAgJCgnLmJ1dHRvbi1maWVsZCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICB2YXIgaW5wdXQgPSAkKCcjcmVzdWx0Jyk7XHJcbiAgICAgICAgdmFyIGV4cCA9IGlucHV0LnZhbCgpO1xyXG4gICAgICAgIC8vdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlICdBQyc6XHJcbiAgICAgICAgICAgICAgICBleHAgPSAnJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdEZWwnOlxyXG4gICAgICAgICAgICAgICAgaWYoIW5ld0ZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cCA9IGV4cC5zbGljZSgwLCBleHAubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz0nOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBleHAgPSBldmFsKGV4cCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3RmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBpZiAobmV3RmxhZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwICs9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5ld0ZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaW5wdXQudmFsKGV4cCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRlc3QzXCIpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9