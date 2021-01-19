var btnSubmit = document.getElementById('submitbtn') as HTMLButtonElement;
var reviewerName = document.getElementById('reviewername')as HTMLInputElement;
var comment = document.getElementById('comment') as HTMLInputElement;
var rating = document.getElementById('rating') as HTMLInputElement;
var template = document.getElementById('template') as HTMLTemplateElement;
var resposepoint = document.getElementById('resposepoint');

var average = document.getElementById('average') as HTMLInputElement;
var sum = 0;
var totalReviews = 0;

btnSubmit.addEventListener('click',(event)=> {

    var reviewerNameValue = reviewerName.value;
    var commentValue = comment.value;
    var ratingValue = rating.value;

    var template = getTemplateClone('template');
    template.content.getElementById('outputname')!.innerText=reviewerNameValue.toString();
    template.content.getElementById('outputrating')!.innerText=ratingValue.toString();
    template.content.getElementById('outputcomment')!.innerText=commentValue.toString();

    sum = sum + +ratingValue;
    totalReviews++;
    average.innerText = getAverage(sum,totalReviews).toString();

    resposepoint?.appendChild(template.content);
});

function getTemplateClone(TemplateID:string) :HTMLTemplateElement{
    return document.getElementById('template')?.cloneNode(true) as HTMLTemplateElement;
}


function getAverage(sum:number, numTimes:number):number{
    var average = sum/numTimes;
    return average;
}