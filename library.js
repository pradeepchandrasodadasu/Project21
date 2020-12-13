function collide (a,b){
    if(a.x - b.x < (a.width+b.width)/2){ 
      b.velocityX = 0;
      
      if (damage >= 10){
          a.shapeColor = color(255,0,0);
    } 
    
      if (damage < 10){
          a.shapeColor = color(0,255,0);
      }
    }
  }