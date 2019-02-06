$(function() {
  $.scrollify({
		section:".section",
    scrollbars:true,
    before:function(i,sections) {

      var ref = sections[i].attr("data-section-name");
		
	 $("body").removeClass();
     $("body").addClass(ref);
		
		/*if (ref === "statemment") {
        $(".pagination")
          .find('a[href="#' + ref + '"]')
          .addClass("inverse");
      }*/ 

      $(".pagination .active").removeClass("active");

      $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
      var pagination = "<ul class=\"pagination\">";
      var activeClass = "";
      $(".section").each(function(i) {
        activeClass = "";	
        if(i===0) {
          activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
      });

      pagination += "</ul>";

      $(".intro").append(pagination);
      /*

      Tip: The two click events below are the same:

      $(".pagination a").on("click",function() {
        $.scrollify.move($(this).attr("href"));
      });

      */
      $(".pagination a").on("click",$.scrollify.move);
		
    }
  });
});