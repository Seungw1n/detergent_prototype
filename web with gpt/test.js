$(document).ready(function() {
    // 스크롤 속도를 조절합니다.
    var scrollSpeed = 700;
  
    // 화면을 자동 스크롤하는 함수입니다.
    function autoScroll() {
      // 현재 보이는 카드의 마지막 요소를 찾습니다.
      var currentCard = $(".card:visible").last();
      // 다음 카드를 찾습니다.
      var nextCard = currentCard.next(".card");
  
      // 만약 다음 카드가 없다면 첫 번째 카드로 돌아갑니다.
      if (nextCard.length === 0) {
        nextCard = $(".card:first");
      }
  
      // 다음 카드가 화면에 보이도록 스크롤합니다.
      $("html, body").animate({
        scrollTop: nextCard.offset().top
      }, scrollSpeed);
  
      // 5초 후에 자동 스크롤을 실행합니다.
      setTimeout(autoScroll, 1000);
    }
  
    // 자동 스크롤을 시작합니다.
    setTimeout(autoScroll, 1000);
  });
  