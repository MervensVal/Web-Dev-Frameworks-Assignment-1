var btnSubmit = document.getElementById('submitbtn') as HTMLButtonElement;

var reviewerName = document.getElementById('reviewername')as HTMLInputElement;
var reviewerNameValue = reviewerName.value;

var comment = document.getElementById('comment') as HTMLTextAreaElement;
var commentValue = comment.value;

var rating = document.getElementById('rating') as HTMLInputElement;
var ratingValue = rating.value;

var template = document.getElementById('template') as HTMLTemplateElement;
var resposepoint = document.getElementById('resposepoint');

btnSubmit.addEventListener('click',(event)=> {
    var template = getTemplateClone('template');
    template.content.getElementById('outputname')!.innerText=reviewerNameValue.toString();
    template.content.getElementById('outputrating')!.innerText=ratingValue;
    template.content.getElementById('outputcomment')!.innerText=commentValue.toString();

    resposepoint?.appendChild(template.content);
});

function getTemplateClone(TemplateID:string) :HTMLTemplateElement{
    return document.getElementById('template')?.cloneNode(true) as HTMLTemplateElement;
}