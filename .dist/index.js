"use strict";
var btnSubmit = document.getElementById('submitbtn');
var reviewerName = document.getElementById('reviewername');
var comment = document.getElementById('comment');
var rating = document.getElementById('rating');
var template = document.getElementById('template');
var resposepoint = document.getElementById('resposepoint');
var average = document.getElementById('average');
var sum = 0;
var totalReviews = 0;
btnSubmit.addEventListener('click', (event) => {
    var reviewerNameValue = reviewerName.value;
    var commentValue = comment.value;
    var ratingValue = rating.value;
    var template = getTemplateClone('template');
    template.content.getElementById('outputname').innerText = reviewerNameValue.toString();
    template.content.getElementById('outputrating').innerText = ratingValue.toString();
    template.content.getElementById('outputcomment').innerText = commentValue.toString();
    sum = sum + +ratingValue;
    totalReviews++;
    average.innerText = getAverage(sum, totalReviews).toString();
    resposepoint?.appendChild(template.content);
});
function getTemplateClone(TemplateID) {
    return document.getElementById('template')?.cloneNode(true);
}
function getAverage(sum, numTimes) {
    var average = sum / numTimes;
    return average;
}
//# sourceMappingURL=index.js.map