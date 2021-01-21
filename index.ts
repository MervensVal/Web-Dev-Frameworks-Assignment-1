var btnSubmit = document.getElementById('submitbtn') as HTMLButtonElement;
var reviewerName = document.getElementById('reviewername')as HTMLInputElement;
var comment = document.getElementById('comment') as HTMLInputElement;
var rating = document.getElementById('rating') as HTMLInputElement;
var template = document.getElementById('template') as HTMLTemplateElement;
var resposepoint = document.getElementById('resposepoint');
var currentdate = document.getElementById('currentdate');

var average = document.getElementById('average') as HTMLInputElement;
var sum = 0;
var totalReviews = 0;

var numberOfReviews = document.getElementById('numberOfReviews');

btnSubmit.addEventListener('click',(event)=> {

    var reviewerNameValue = reviewerName.value;
    var commentValue = comment.value;
    var ratingValue = rating.value;
    var currentdate = new Date();
    
    var error = document.getElementById('ratingerror');
    var nameRequired = document.getElementById('nameRequired');

    if (reviewerNameValue == ""){
        nameRequired!.innerText = "Name is required"
    }
    else{

        if(+ratingValue > 5 || +ratingValue < 1){
                error!.innerText = "*Rating will be applied only if value is 1 - 5";
            }
        else {

                var template = getTemplateClone('template');
                template.content.getElementById('outputname')!.innerText=reviewerNameValue.toString();
                template.content.getElementById('outputrating')!.innerText=ratingValue.toString();
                template.content.getElementById('outputcomment')!.innerText=commentValue.toString();
                template.content.getElementById('currentdate')!.innerText=currentdate.toString();

                sum = sum + +ratingValue;
                totalReviews++;
                average.innerText = getAverage(sum,totalReviews).toFixed(1);
                resposepoint?.appendChild(template.content);
            }
        }
});

function getTemplateClone(TemplateID:string) :HTMLTemplateElement{
    return document.getElementById('template')?.cloneNode(true) as HTMLTemplateElement;
}


function getAverage(sum:number, numTimes:number):number{
    var average = sum/numTimes;
    return average;
}


