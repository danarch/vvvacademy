$(function() {
  var exampleQuestions = [
  "Helpers are needed to prepare for the fete. Each helper can make either 2 large cakes per hour, or 35 small cakes per hour. The kitchen is available for 3 hours and 20 large cakes and 700 small cakes are needed. How many helpers are required?",

  "Jo's collection contains US, Indian and British stamps. If the ratio of US to Indian stamps is 5 to 2 and the ratio of Indian to British stamps is 5 to 1, what is the ratio of US to British stamps?",

  "A 3 by 4 rectangle is inscribed in circle. What is the circumference of the circle?",

  "Two sets of 4 consecutive positive integers have exactly one integer in common. The sum of the integers in the set with greater numbers is how much greater than the sum of the integers in the other set?",

  "If f(x) = (x + 2) / (x-2) for all integers except x=2, which of the following has the greatest value?",

  "After being dropped a certain ball always bounces back to 2/5 of the height of its previous bounce. After the first bounce it reaches a height of 125 inches. How high (in inches) will it reach after its fourth bounce?",

  "n and p are integers greater than 1. 5n is the square of a number. 75np is the cube of a number. The smallest value for n + p is",

  "The total weight of a tin and the cookies it contains is 2 pounds. After ¾ of the cookies are eaten, the tin and the remaining cookies weigh 0.8 pounds. What is the weight of the empty tin in pounds?",

  "The price of a cycle is reduced by 25 per cent. The new price is reduced by a further 20 per cent. The two reductions together are equal to a single reduction of",

  "In a certain village, m litres of water are required per household per month. At this rate, if there are n households in the village, how long (in months) will p litres of water last?"
  ];


  $(".quiz-tabs li").click(function() {
    var number = $(this).data("num");

    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $(".quiz-problem").fadeToggle().fadeToggle();
    setTimeout(function() {
      $(".problem-text").html(exampleQuestions[number]);
      $(".problem-number").html(number)
    }, 400);
  });
});