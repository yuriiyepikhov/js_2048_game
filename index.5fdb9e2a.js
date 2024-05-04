!function(){var t={};function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}var a=function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.initialState=t,this.state=JSON.parse(JSON.stringify(t)),this.status=e.STATUS_IDLE,this.score=0}return t=[{key:"moveLeft",value:function(){for(var t=this.getState(),e=0;e<4;e++){for(var r=[],a=0;a<4;a++){var n=t[e][a];n&&r.push(n)}for(var o=0;o<r.length;o++){var i=r[o],s=o+1<r.length?r[o+1]:null;if(!s)break;if(i===s){var l=this.getScore()+2*i;this.score=l,r.splice(o,2,2*i)}}if(4!==r.length){for(;r.length<4;)r.push(0);for(var c=0;c<4;c++)t[e][c]=r[c]}}}},{key:"moveRight",value:function(){this.reverseStateByRows(),this.moveLeft(),this.reverseStateByRows()}},{key:"moveUp",value:function(){this.rotateStateBackwardBy90Deg(),this.moveLeft(),this.rotateStateForwardBy90Deg()}},{key:"moveDown",value:function(){this.rotateStateForwardBy90Deg(),this.moveLeft(),this.rotateStateBackwardBy90Deg()}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.state=JSON.parse(JSON.stringify(this.initialState)),this.status=e.STATUS_PLAYING,this.score=0,this.addRandomDigitToEmptyCell(2)}},{key:"restart",value:function(){this.state=JSON.parse(JSON.stringify(this.initialState)),this.status=e.STATUS_IDLE,this.score=0}},{key:"rotateStateBackwardBy90Deg",value:function(){for(var t=this.getState(),e=JSON.parse(JSON.stringify(t)),r=3;r>=0;r--)for(var a=0;a<4;a++)t[3-r][a]=e[a][r]}},{key:"rotateStateForwardBy90Deg",value:function(){for(var t=this.getState(),e=JSON.parse(JSON.stringify(t)),r=3;r>=0;r--)for(var a=0;a<4;a++)t[a][3-r]=e[r][a]}},{key:"reverseStateByRows",value:function(){for(var t=this.getState(),e=0;e<4;e++)t[e].reverse()}},{key:"checkIsPlayerWin",value:function(){for(var t=this.getState(),e=!1,r=0;r<4;r++)t[r].includes(2048)&&(e=!0);return e}},{key:"checkIsPlayerLose",value:function(){for(var t=this.getState(),e=!1,r=!1,a=!1,n=0;n<4;n++)if(t[n].includes(0)){r=!0;break}for(var o=0;o<4;o++)for(var i=0;i<3;i++)if(t[o][i]===t[o][i+1]){a=!0;break}for(var s=0;s<4;s++)for(var l=0;l<3;l++)if(t[l][s]===t[l+1][s]){a=!0;break}return r||a||(e=!0),e}},{key:"addRandomDigitToEmptyCell",value:function(t){for(var e=this.getState(),a=0;a<t;){var n,o=function(t){if(Array.isArray(t))return t}(n=this.getRandomCoordinates())||function(t,e){var r,a,n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o=[],i=!0,s=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),2!==o.length);i=!0);}catch(t){s=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(s)throw a}}return o}}(n,2)||function(t,e){if(t){if("string"==typeof t)return r(t,2);var a=Object.prototype.toString.call(t).slice(8,-1);if("Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(t,2)}}(n,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),i=o[0],s=o[1],l=this.getRandomDigit();!e[i][s]&&(e[i][s]=l,a++)}}},{key:"getRandomCoordinates",value:function(){return[Math.floor(4*Math.random()),Math.floor(4*Math.random())]}},{key:"getRandomDigit",value:function(){return Math.floor(100*Math.random())+1>90?4:2}}],function(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(e.prototype,t),e}();e(a,"STATUS_IDLE","idle"),e(a,"STATUS_PLAYING","playing"),e(a,"STATUS_WIN","win"),e(a,"STATUS_LOSE","lose");var n=new(t=a),o=document.querySelector("table").tBodies[0],i=document.querySelector("button"),s=document.querySelector(".message-start"),l=document.querySelector(".message-lose"),c=document.querySelector(".message-win"),u=document.querySelector(".game-score");function f(){for(var t=n.getState(),e=0;e<4;e++)for(var r=0;r<4;r++){var a=t[e][r];if(!a){o.rows[e].cells[r].className="field-cell",o.rows[e].cells[r].innerText="";continue}o.rows[e].cells[r].className="field-cell field-cell--".concat(a),o.rows[e].cells[r].innerText="".concat(a)}}i.addEventListener("click",function(){if(i.classList.contains("restart")){n.restart(),i.classList.remove("restart"),i.classList.add("start"),i.textContent="Start",s.classList.remove("hidden"),l.classList.add("hidden"),c.classList.add("hidden"),u.innerText="0",f();return}n.start(),s.classList.add("hidden"),f()}),document.addEventListener("keydown",function(e){var r=e.key;if("ArrowRight"===r||"ArrowLeft"===r||"ArrowUp"===r||"ArrowDown"===r){var a=n.getState(),o=n.getStatus();if(o===t.STATUS_IDLE||o===t.STATUS_LOSE||o===t.STATUS_WIN)return;i.classList.contains("start")&&(i.classList.remove("start"),i.classList.add("restart"),i.textContent="Restart");var s=JSON.stringify(a);switch(r){case"ArrowRight":n.moveRight();break;case"ArrowLeft":n.moveLeft();break;case"ArrowUp":n.moveUp();break;case"ArrowDown":n.moveDown()}if(s===JSON.stringify(a))return;if(u.innerText="".concat(n.getScore()),n.addRandomDigitToEmptyCell(1),f(),n.checkIsPlayerWin()){n.status=t.STATUS_WIN,c.classList.remove("hidden");return}n.checkIsPlayerLose()&&(n.status=t.STATUS_LOSE,l.classList.remove("hidden"))}})}();
//# sourceMappingURL=index.5fdb9e2a.js.map