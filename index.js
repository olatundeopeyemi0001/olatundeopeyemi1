<!DOCTYPE html>
<html>
<body>

<p>JavaScript task1.</p>

<p id="demo"></p>

<script>
var person = {
  firstName : "opeyemi",
  lastName  : "Olatunde",
};

var courses = [a='HTML','CSS', 'JavaScript'];

document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName +  " courses= " + courses;

</script>

<script>
function jsTask(){
 
    let i;
    

        for (i=0; i < 200; i+=2){
            if (courses.length % 2 === 0){
                document.write(i + " ");
                    } 
                    for (i=1; i < 200; i+=2){
                        if(courses.length % 2 !== 0){

                         document.write(i + " ");
                        }
                    }
}

}

jsTask();
</script>


</body>
</html>
