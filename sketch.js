var db
var value= 255
var value2= 5
var ribbon 
var textBox
var drawing= []
var currentPath = []
var db_drawing= []
var value3 =  0
var gameState= 0
var i,n, m

//i = createInput("")
//n= createElement("h2")
//i.position(displayWidth-100,50) 
function setup(){
  createCanvas(displayWidth,displayHeight)
  db= firebase.database()
  //background(0)
 
 
display()

}

function draw(){
  background(0)
 
  text(mouseX+","+mouseY,mouseX,mouseY)
stroke(value)
strokeWeight(value2)
//noFill()
fill(value3)
readData()
beginShape()
for(var i=0; i<db_drawing.length; i++)
{
vertex(db_drawing[i].x,db_drawing[i].y)
endShape()

}

drawSprites()


textSize(40)
//fill("pink")
text("Skrible",displayWidth/2-50,50)




  
}
function mouseDragged(){
  // json 
  var point= {
    x: mouseX, y: mouseY
  }
  // push helps us in adding values in an array 
  drawing.push(point)
  db.ref("drawing").update({d:drawing})
  db_drawing=[]
}
function readData(){
  db.ref("drawing/").on("value",(data)=>{
    db_drawing=data.val().d
  })
}




  




