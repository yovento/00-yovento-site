function InitializeTextAnimation() {
  $(".banner").animatedHeadline({
    animationType: "type",
  });
}

function InitializeCharts() {
  if ($(".chart").length > 0) {
    $(".chart").easyPieChart({
      class: "test",
      trackColor: "#0e0f10",
      scaleColor: false,
      scaleLength: 4,
      lineCap: "square",
      lineWidth: 5,
      size: 130,
      animate: false,
    });

    $("canvas").addClass("canvasChart");
  }
}

function InitializePortfolio() {
  if ($(".portfolio-items").length) {
    var $elements = $(".portfolio-items"),
      $filters = $(".portfolio-filter ul li");

    $filters.on("click", function () {
      $filters.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).data("filter");
      $(".portfolio-items").isotope({
        filter: selector,
        layoutMode: "fitRows",
        hiddenStyle: {
          transform: "scale(.2) skew(30deg)",
          opacity: 0,
        },
        visibleStyle: {
          transform: "scale(1) skew(0deg)",
          opacity: 1,
        },
        transitionDuration: ".5s",
      });
    });
  }

  $(".pt-portfolio .portfolio-items .item figure").tilt({
    maxTilt: 3,
    glare: true,
    maxGlare: 0.6,
    reverse: true,
  });
}
