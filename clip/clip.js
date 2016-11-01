var clipPath = function (t) {
    if (!t) {
        return false;
    }
    t.removeAttribute("id");
    var r = {
        height: t.clientHeight,
        width: t.clientWidth,
        distance: 120,
        html: t.outerHTML //img节点的html字符串
    };
    if (window.getComputedStyle(document.body).webkitClipPath) {
        var a = r.distance,
            n = r.width,
            e = r.height;
        var o = "";
        for (var i = 0; i < n; i += a) {
            for (var h = 0; h < e; h += a) {
                var d = [i, h],
                    u = [i, h + a],
                    l = [i + a, h + a],
                    v = [i + a, h];
                var c = [i + a / 2, h + a / 2];
                var m = [[d, c, v], [d, u, c], [c, u, l], [v, c, l]]; //一个以a为边长的正方形分为四个等腰直角三角形
                m.forEach(function (t, a) {
                    var n = t.map(function (t) {
                        return t.map(function (t) {
                            return t + "px";
                        }).join(" ");
                    }).join();
                    var e = "-webkit-clip-path: polygon(" + n + ");";
                    var i = Math.random();
                    var h = i < .5 ? -1 : 1;
                    var u = [600 * (.5 - Math.random()), 600 * (.5 - Math.random())];
                    var l = "translate(" + u.map(function (t) {
                            return t + "px";
                        }).join() + ") rotate(" + Math.round(h * 360 * Math.random()) + "deg)"; //生成偏移和旋转
                    var v = "-webkit-transform:" + l + ";transform:" + l + ";";
                    o = o + r.html.replace('">', '" style="' + e + v + '">');
                });
            }
        }
        t.parentNode.innerHTML = r.html + o;
        return true;
    } else {
        t.className += " no-clipath";
        return false;
    }
};