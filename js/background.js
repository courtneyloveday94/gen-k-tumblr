Caman("#background-img", "https://upload.wikimedia.org/wikipedia/en/b/b7/Super_Junior_Mamacita_%28A_Ver.%29.jpg", function () {
  // We can call any filter before the layer
  this.exposure(-10);

  // Create the layer
  this.newLayer(function () {
    // Change the blending mode
    this.setBlendingMode("multiply");

    // Change the opacity of this layer
    this.opacity(80);

    // Now we can *either* fill this layer with a
    // solid color...
    this.fillColor('#6899ba');

    // ... or we can copy the contents of the parent
    // layer to this one.
    this.copyParent();

    // Now, we can call any filter function though the
    // filter object.
    this.filter.brightness(10);
    this.filter.contrast(20);
  });
   // And we can call more filters after the layer
  this.clip(10);
  this.render();
});








// void 0 === window.centovacast && (window.centovacast = {});
// void 0 === window.centovacast.options && (window.centovacast.options = {});
// void 0 === window.centovacast.loader && (window.centovacast.loader = {
//     attempts: 0,
//     external_jquery: !1,
//     loaded: !1,
//     ready: !1,
//     widget_definitions: {},
//     url: "",
//     load_script: function(b) {
//         var a = document.createElement("script");
//         void 0 !== a && (a.setAttribute("type", "text/javascript"), a.setAttribute("src", b), void 0 !== a && document.getElementsByTagName("head")[0].appendChild(a))
//     },
//     load_widget: function(b) {
//         b = this.widget_definitions[b];
//         null === b.ref && (b.ref = b.define(jQuery))
//     },
//     jq_get_jsonp: function(b, a, c) {
//         return jQuery.ajax({
//             type: "GET",
//             url: b,
//             data: a,
//             success: c,
//             dataType: "jsonp"
//         })
//     },
//     jq_ready: function() {
//         this.ready = !0;
//         for (var b in this.widget_definitions) "function" == typeof this.widget_definitions[b].init && this.widget_definitions[b].init(jQuery)
//     },
//     jq_loaded: function() {
//         this.external_jquery || jQuery.noConflict();
//         jQuery.getJSONP = this.jq_get_jsonp;
//         for (var b in this.widget_definitions) this.load_widget(b);
//         this.loaded = !0;
//         var a = this;
//         jQuery(document).ready(function() {
//             a.jq_ready()
//         })
//     },
//     wait: function() {
//         setTimeout(function() {
//                 window.centovacast.loader.check()
//             },
//             100)
//     },
//     check: function() {
//         "undefined" === typeof jQuery ? (this.wait(), this.attempts++) : this.jq_loaded()
//     },
//     get_script_data: function(b, a, c) {
//         var d = jQuery(b),
//             e = !1;
//         b = {};
//         var f, g, h;
//         for (h in a) a.hasOwnProperty(h) && (f = a[h], (g = d.data(f)) ? (b[f] = g, e = !0) : b[f] = "");
//         g = d.attr("id");
//         if (e) "string" != typeof g && (window.centovacast.next_unique_id = window.centovacast.next_unique_id ? window.centovacast.next_unique_id + 1 : 1, g = c + "_" + window.centovacast.next_unique_id, d.attr("id", g));
//         else {
//             if ("string" != typeof g || g.substr(0, c.length + 1) !=
//                 c + "_") return null;
//             c = g.substr(c.length + 1);
//             e = null;
//             for (h in a)
//                 if (a.hasOwnProperty(h)) {
//                     f = a[h];
//                     null === e && (e = f);
//                     var d = new RegExp("_" + h + "-([^_]+)"),
//                         k = d.exec(c);
//                     k && (b[f] = k[1], c = c.replace(d, ""))
//                 }
//             b[e] = c
//         }
//         b.id = g;
//         return b
//     },
//     init: function() {
//         var b = document.getElementsByTagName("script"),
//             b = b[b.length - 1],
//             b = void 0 !== b.getAttribute.length ? b.getAttribute("src") : b.getAttribute("src", 2);
//         b.match(/^https?:\/\//i) || (b = window.location.href);
//         this.url = b.replace(/(\.(?:[a-z]{2,}|[0-9]+)(:[0-9]+)?\/).*$/i, "$1");
//         (this.external_jquery =
//             "undefined" !== typeof jQuery) || this.load_script(this.url + "system/jquery.min.js");
//         this.check()
//     },
//     add: function(b, a, c) {
//         this.widget_definitions[b] || (this.widget_definitions[b] = {
//             define: c,
//             init: a,
//             ref: null
//         });
//         this.loaded && this.load_widget(b);
//         this.ready && a(jQuery)
//     }
// }, window.centovacast.loader.init());
// window.centovacast.loader.add("recenttracks", function(b) {
//     b.extend(window.centovacast.recenttracks.settings, window.centovacast.options.recenttracks);
//     b(".cc_recenttracks_list").each(window.centovacast.recenttracks.load);
//     window.centovacast.recenttracks.poll_all()
// }, function(b) {
//     window.centovacast.options.recenttracks = b.extend({}, window.centovacast.options.recenttracks, window.centovacast.recenttracks ? window.centovacast.recenttracks.config : null);
//     b("<link/>", {
//         rel: "stylesheet",
//         type: "text/css",
//         href: window.centovacast.loader.url +
//             "theme/widget_recenttracks.css"
//     }).appendTo(b("body"));
//     return window.centovacast.recenttracks = {
//         pollcount: 0,
//         settings: {
//             poll_limit: 60,
//             poll_frequency: 6E4,
//             track_limit: 0,
//             show_covers: 1,
//             scale_covers: 1,
//             buy_target: "_blank"
//         },
//         registry: {},
//         show_loading: function(a) {
//             var c = this.get_container(a);
//             a = b("<div/>", {
//                 id: "cc_recenttracks_throbber_" + a,
//                 css: {
//                     textAlign: "center",
//                     display: "none"
//                 },
//                 html: '<img src="' + window.centovacast.loader.url + 'system/images/ajax-loading.gif" align="absmiddle" />'
//             });
//             a.addClass("cctrack");
//             a.appendTo(c);
//             a.fadeIn("fast")
//         },
//         clear_loading: function(a) {
//             b("#cc_recenttracks_throbber_" + a).remove()
//         },
//         get_container: function(a) {
//             return b("#" + this.registry[a].id)
//         },
//         demote_first: function(a) {
//             a = this.get_container(a);
//             a = b(".cctrack:first", a);
//             a.find(".cctitle").removeClass("ccnowplaying");
//             a = a.find(".cctime");
//             a.removeClass("ccnowplaying");
//             a.html(a.data("timestr"))
//         },
//         create_new: function(a, c, d) {
//             var e = b("<div/>");
//             e.addClass("cctrack");
//             var f = b("<div/>");
//             f.addClass("ccdetails");
//             if (window.centovacast.recenttracks.settings.show_covers) {
//                 var g =
//                     b("<div/>");
//                 g.addClass("cccover");
//                 var h = b("<img/>", {
//                     src: a.image
//                 });
//                 d.w && h.attr("width", d.w);
//                 d.h && h.attr("height", d.h);
//                 h.appendTo(g);
//                 g.appendTo(e);
//                 f.addClass("ccdetails_withcover")
//             }
//             d = b("<div/>", {
//                 html: a.title
//             });
//             d.addClass("cctitle");
//             c && d.addClass("ccnowplaying");
//             d.appendTo(f);
//             d = b("<div/>", {
//                 html: a.artist
//             });
//             d.addClass("ccartist");
//             d.appendTo(f);
//             a.album && (d = b("<div/>", {
//                 html: a.album
//             }), d.addClass("ccalbum"), d.appendTo(f));
//             a.url && b("<div/>", {
//                 html: "<a class='ccbuy' " + ("" != window.centovacast.recenttracks.settings.buy_target ?
//                     'target="' + window.centovacast.recenttracks.settings.buy_target + '" ' : "") + "href='" + a.url + "'>" + window.lang.buyalbum + "</a>"
//             }).appendTo(f);
//             d = !1;
//             c && window.centovacast.streaminfo && window.centovacast.streaminfo.state && (d = window.centovacast.streaminfo.state.serverstate && window.centovacast.streaminfo.state.sourceconn);
//             d = b("<div/>", {
//                 html: d ? window.lang.nowplaying : a.localtime
//             });
//             d.addClass("cctime");
//             c && (d.data("timestr", a.localtime), d.addClass("ccnowplaying"));
//             d.appendTo(e);
//             f.appendTo(e);
//             window.centovacast.recenttracks.settings.show_covers &&
//                 b("<div/>", {
//                     css: {
//                         clear: "both",
//                         fontSize: "0px",
//                         height: "0"
//                     }
//                 }).appendTo(e);
//             return e
//         },
//         slide_to_next: function(a, b) {
//             a.slideDown("slow", function() {
//                 window.centovacast.recenttracks.next(b)
//             })
//         },
//         _animate_next: function(a) {
//             var b = this.registry[a].pending_tracks.pop();
//             if (b) {
//                 b.time > this.registry[a].since && (this.registry[a].since = b.time);
//                 var d = this.get_container(a);
//                 this.demote_first(a);
//                 b = this.create_new(b, !0, this.registry[a].options);
//                 b.hide();
//                 b.prependTo(d);
//                 this.slide_to_next(b, a)
//             }
//         },
//         animate_next: function() {
//             var a = b(this).data("ccusername");
//             "string" == typeof a && (b(this).remove(), window.centovacast.recenttracks._animate_next(a))
//         },
//         next: function(a) {
//             if (this.registry[a].pending_tracks.length) {
//                 var c = this.get_container(a);
//                 b(".cctrack", c).length >= this.registry[a].tracklimit ? b(".cctrack:last", c).data("ccusername", a).fadeOut("slow", this.animate_next) : this._animate_next(a)
//             }
//         },
//         check_username: function(a) {
//             a += "";
//             if (!this.registry[a]) {
//                 if (1 == this.registry.length) {
//                     for (var b in this.registry) a = b;
//                     return a
//                 }
//                 return ""
//             }
//             return a
//         },
//         _handle_json: function(a) {
//             if (a) {
//                 var c =
//                     this.check_username(a.rid);
//                 if (c.length) {
//                     var d = this.get_container(c),
//                         e;
//                     if ("error" == a.type || a.data && a.data.length && 1 == a.data.length) e = a ? a.error ? a.error : a.data[0] : "No JSON object", d.empty(), e = b("<div />", {
//                         html: '<span title="' + e + '">Unavailable</span>'
//                     }), e.addClass("cctrack"), e.appendTo(d), this.clear_loading(c);
//                     else {
//                         e = a.data[0];
//                         var f = a.data[1],
//                             g = a.data[2],
//                             h = this.settings.track_limit ? this.settings.track_limit : a.data[3];
//                         a = a.data[4];
//                         f && d.html("");
//                         if (f) {
//                             window.lang || (window.lang = {});
//                             window.lang.buyalbum = g[0];
//                             window.lang.nowplaying = g[1];
//                             window.lang.notracks = g[2];
//                             this.registry[c].tracklimit = h;
//                             this.registry[c].options = a;
//                             d.hide();
//                             for (f = 0; f < e.length; f++) d.append(this.create_new(e[f], 0 === f, this.registry[c].options)), e[f].time > this.registry[c].since && (this.registry[c].since = e[f].time);
//                             e.length || (e = b("<div/>"), e.addClass("cctrack"), e.append(window.lang.notracks).appendTo(d));
//                             d.fadeIn("def")
//                         } else this.registry[c].pending_tracks = e, this.next(c)
//                     }
//                 }
//             }
//         },
//         handle_json: function(a) {
//             if (a) return window.centovacast.recenttracks._handle_json(a)
//         },
//         poll: function(a) {
//             var c = window.centovacast.loader.url + "external/rpc.php";
//             a = {
//                 m: "recenttracks.get",
//                 username: a,
//                 charset: this.registry[a].charset,
//                 since: this.registry[a].since,
//                 mountpoint: this.registry[a].mountpoint,
//                 rid: a
//             };
//             this.settings.track_limit && (a.limit = this.settings.track_limit);
//             b.getJSONP(c, a, this.handle_json)
//         },
//         _poll_all: function() {
//             for (var a in this.registry) "string" == typeof a && this.poll(a);
//             (0 === this.settings.poll_limit || this.pollcount++ < this.settings.poll_limit) && setTimeout(this.poll_all, this.settings.poll_frequency)
//         },
//         poll_all: function() {
//             window.centovacast.recenttracks._poll_all()
//         },
//         register: function(a, b, d, e) {
//             this.registry[b] = {
//                 id: a,
//                 charset: d,
//                 mountpoint: e,
//                 since: 0,
//                 tracklimit: 0
//             }
//         },
//         load: function() {
//             var a = b(this).attr("id");
//             if ("string" == typeof a) {
//                 var c = a.replace(/^cc_recenttracks_/, ""),
//                     d = "",
//                     e = "",
//                     f = /_cs-([A-Za-z0-9\-]+)$/,
//                     g = f.exec(c);
//                 g && (d = g[1], c = c.replace(f, ""));
//                 f = /_mp-([A-Za-z0-9\-]+)$/;
//                 if (g = f.exec(c)) e = g[1], c = c.replace(f, "");
//                 window.centovacast.recenttracks.register(a, c, d, e);
//                 window.centovacast.recenttracks.show_loading(c)
//             }
//         }
//     }
// });