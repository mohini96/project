/*!
   Copyright 2015 SpryMedia Ltd.

 License      MIT - http://datatables.net/license/mit

 This feature plug-in for DataTables will automatically change the DataTables
 page length in order to fit inside its container. This can be particularly
 useful for control panels and other interfaces which resize dynamically with
 the user's browser window instead of scrolling.

 Page resizing in DataTables can be enabled by using any one of the following
 options:

 * Setting the `scrollResize` parameter in the DataTables initialisation to
   be true - i.e. `scrollResize: true`
 * Setting the `scrollResize` parameter to be true in the DataTables
   defaults (thus causing all tables to have this feature) - i.e.
   `$.fn.dataTable.defaults.scrollResize = true`.
 * Creating a new instance: `new $.fn.dataTable.ScrollResize( table );` where
   `table` is a DataTable's API instance.
 ScrollResize for DataTables v1.0.0
 2015 SpryMedia Ltd - datatables.net/license
*/
(function(a){var e=function(d){var c=this,b=d.table();this.s={dt:d,host:a(b.container()).parent(),header:a(b.header()),footer:a(b.footer()),body:a(b.body()),container:a(b.container()),table:a(b.node())};b=this.s.host;"static"===b.css("position")&&b.css("position","relative");d.on("draw",function(){c._size()});this._attach();this._size()};e.prototype={_size:function(){var d=this.s,c=d.dt,b=c.table(),h=a(d.table).offset().top,g=d.host.height(),f=a("div.dataTables_scrollBody",b.container()),g=g-h-(d.container.height()-
    (h+f.height()));a("div.dataTables_scrollBody",b.container()).css({maxHeight:g,height:g});c.fixedColumns&&c.fixedColumns().relayout()},_attach:function(){var d=this,c=a("<iframe/>").css({position:"absolute",top:0,left:0,height:"100%",width:"100%",zIndex:-1,border:0}).attr("frameBorder","0").attr("src","about:blank");c[0].onload=function(){var b=this.contentDocument.body,a=b.offsetHeight,c=this.contentDocument;(c.defaultView||c.parentWindow).onresize=function(){var f=b.clientHeight||b.offsetHeight,
    e=c.documentElement.clientHeight;!f&&e&&(f=e);f!==a&&(a=f,d._size())}};c.appendTo(this.s.host).attr("data","about:blank")}};a.fn.dataTable.ScrollResize=e;a.fn.DataTable.ScrollResize=e;a(document).on("init.dt",function(d,c){"dt"===d.namespace&&(d=new a.fn.dataTable.Api(c),(c.oInit.scrollResize||a.fn.dataTable.defaults.scrollResize)&&new e(d))})})(jQuery);