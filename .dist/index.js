"use strict";
var btnSubmit = document.getElementById('submitbtn');
var reviewerName = document.getElementById('reviewername');
var reviewerNameValue = reviewerName.value;
var comment = document.getElementById('comment');
var commentValue = comment.value;
var rating = document.getElementById('rating');
var ratingValue = rating.value;
var template = document.getElementById('template');
var resposepoint = document.getElementById('resposepoint');
btnSubmit.addEventListener('click', (event) => {
    var template = getTemplateClone('template');
    template.content.getElementById('outputname').innerText = reviewerNameValue.toString();
    template.content.getElementById('outputrating').innerText = ratingValue;
    template.content.getElementById('outputcomment').innerText = commentValue.toString();
    resposepoint?.appendChild(template.content);
});
function getTemplateClone(TemplateID) {
    return document.getElementById('template')?.cloneNode(true);
}
//# sourceMappingURL=index.js.map