function Destroy(object1,object2){

    if(object1.x - (object2.x + dis) < object2.width/2 + object1.width/2 &&
       (object2.x + dis) - object1.x < object2.width/2 + object1.width/2 &&
       object1.y - object2.y < object2.height/2 + object1.height/2 &&
       object2.y - object1.y < object2.height/2 + object1.height/2 ){
        object1.remove();
       //obj2.shapeColor = "red";
      }
      else{
      //obj2.shapeColor = "blue";
      }
  
  }